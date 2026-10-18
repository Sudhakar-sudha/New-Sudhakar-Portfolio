import React, { useEffect, useRef, useState } from 'react';

const TOTAL_FRAMES = 64;
const LERP_FACTOR = 0.26;

// Source frame geometry (video coordinates)
const IMG_W = 1920;
const IMG_H = 1080;
const BG_COLOR = '#EFEFEF';

// Deadzone radii in SOURCE pixels. Enter < Exit = hysteresis (no flicker).
const DEADZONE_ENTER = 230;
const DEADZONE_EXIT = 280;

const DESKTOP_BREAKPOINT = 1280; // Tailwind `xl`

const COMPASS_DIRS = [
  'N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE',
  'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW',
];

/**
 * Fills its positioned parent (no 100vw -> no horizontal scroll).
 *
 * Props
 *  - desktopFocus : 0..1, horizontal position of the face on desktop
 *  - faceX/faceY  : face centre in source pixels
 *  - topOffset    : px, the image starts this far from the top (navbar height + gap)
 *  - debug        : draws the deadzone circle + face point
 */
export default function CharacterCanvas({
  onTrackingUpdate,
  onLoaded,
  desktopFocus = 0.68,
  faceX = 960,
  faceY = 380,
  topOffset = 0,
  debug = false,
  className = '',
}) {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);

  const [loadedPercent, setLoadedPercent] = useState(0);
  const [isReady, setIsReady] = useState(false);

  const mouse = useRef({ x: null, y: null });
  const smoothedAngle = useRef(-Math.PI / 2);
  const isInteracting = useRef(false);
  const inDeadzone = useRef(true);
  const isVisible = useRef(true);
  const size = useRef({ w: 0, h: 0 });

  const framesRef = useRef([]);
  const centerFrameRef = useRef(null);
  const rafId = useRef(null);

  const trackingCb = useRef(onTrackingUpdate);
  const loadedCb = useRef(onLoaded);
  const cfg = useRef({ desktopFocus, faceX, faceY, topOffset, debug });
  useEffect(() => { trackingCb.current = onTrackingUpdate; }, [onTrackingUpdate]);
  useEffect(() => { loadedCb.current = onLoaded; }, [onLoaded]);
  useEffect(() => {
    cfg.current = { desktopFocus, faceX, faceY, topOffset, debug };
  }, [desktopFocus, faceX, faceY, topOffset, debug]);

  /* ---------- Preload frames ---------- */
  useEffect(() => {
    let cancelled = false;
    let done = 0;
    const total = TOTAL_FRAMES + 1;
    const frames = new Array(TOTAL_FRAMES);

    const markDone = () => {
      if (cancelled) return;
      done += 1;
      setLoadedPercent(Math.round((done / total) * 100));
      if (done === total) {
        framesRef.current = frames;
        setIsReady(true);
        loadedCb.current?.();
      }
    };

    const load = (src, onOk) => {
      const img = new Image();
      img.onload = () => { onOk?.(img); markDone(); };
      img.onerror = () => { console.warn(`Failed to load ${src}`); markDone(); };
      img.src = src;
      return img;
    };

    for (let i = 0; i < TOTAL_FRAMES; i++) {
      frames[i] = load(`/frames/frame_${String(i).padStart(2, '0')}.webp`);
    }
    load('/center.webp', (img) => { centerFrameRef.current = img; });

    return () => { cancelled = true; };
  }, []);

  /* ---------- Track container size ---------- */
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const update = () => { size.current = { w: el.clientWidth, h: el.clientHeight }; };
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  /* ---------- Pause when off-screen ---------- */
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => { isVisible.current = entry.isIntersecting; },
      { threshold: 0 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  /* ---------- Pointer tracking ---------- */
  useEffect(() => {
    const setPos = (x, y) => {
      mouse.current.x = x;
      mouse.current.y = y;
      isInteracting.current = true;
    };
    const onMouse = (e) => setPos(e.clientX, e.clientY);
    const onTouch = (e) => {
      const t = e.touches?.[0];
      if (t) setPos(t.clientX, t.clientY);
    };

    window.addEventListener('mousemove', onMouse, { passive: true });
    window.addEventListener('touchstart', onTouch, { passive: true });
    window.addEventListener('touchmove', onTouch, { passive: true });
    return () => {
      window.removeEventListener('mousemove', onMouse);
      window.removeEventListener('touchstart', onTouch);
      window.removeEventListener('touchmove', onTouch);
    };
  }, []);

  /* ---------- Render loop ---------- */
  useEffect(() => {
    if (!isReady || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d', { alpha: false });

    let prevFrameIndex = -1;
    let prevDeadzone = null;

    const render = () => {
      rafId.current = requestAnimationFrame(render);
      if (!isVisible.current) return;

      const { w: width, h: height } = size.current;
      if (!width || !height) return;
      const {
        desktopFocus: focus,
        faceX: fx,
        faceY: fy,
        topOffset: top,
        debug: dbg,
      } = cfg.current;

      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const bw = Math.round(width * dpr);
      const bh = Math.round(height * dpr);
      if (canvas.width !== bw || canvas.height !== bh) {
        canvas.width = bw;
        canvas.height = bh;
      }

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.fillStyle = BG_COLOR;
      ctx.fillRect(0, 0, width, height);

      // object-fit: cover inside the area BELOW topOffset.
      // The image TOP is anchored at topOffset, so the head is never under the navbar
      // (any extra height is cropped from the bottom / shoulders).
      const availH = Math.max(1, height - top);
      const scale = Math.max(width / IMG_W, availH / IMG_H);
      const renderW = IMG_W * scale;
      const renderH = IMG_H * scale;
      const focusX = window.innerWidth >= DESKTOP_BREAKPOINT ? width * focus : width / 2;
      const offsetX = focusX - fx * scale;
      const offsetY = top;

      // Face centre in canvas + viewport coordinates
      const faceCanvasX = offsetX + fx * scale;
      const faceCanvasY = offsetY + fy * scale;
      const rect = canvas.getBoundingClientRect();
      const faceVX = rect.left + faceCanvasX;
      const faceVY = rect.top + faceCanvasY;

      const mx = mouse.current.x ?? faceVX;
      const my = mouse.current.y ?? faceVY;
      const dx = mx - faceVX;
      const dy = my - faceVY;
      const dist = Math.hypot(dx, dy);

      // Deadzone with hysteresis
      const enterR = DEADZONE_ENTER * scale;
      const exitR = DEADZONE_EXIT * scale;
      const isDeadzone =
        !isInteracting.current ||
        (inDeadzone.current ? dist < exitR : dist < enterR);
      inDeadzone.current = isDeadzone;

      // Shortest-path angular lerp
      const targetAngle = Math.atan2(dy, dx);
      let diff = targetAngle - smoothedAngle.current;
      while (diff < -Math.PI) diff += 2 * Math.PI;
      while (diff > Math.PI) diff -= 2 * Math.PI;
      smoothedAngle.current += diff * LERP_FACTOR;

      // Compass angle (UP = frame 0)
      let compass = smoothedAngle.current + Math.PI / 2;
      compass = ((compass % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);
      const frameIndex =
        Math.round((compass / (2 * Math.PI)) * TOTAL_FRAMES) % TOTAL_FRAMES;

      // Exactly one frame per draw (no ghosting)
      const active =
        isDeadzone && centerFrameRef.current
          ? centerFrameRef.current
          : framesRef.current[frameIndex];

      if (active && active.complete && active.naturalWidth > 0) {
        ctx.drawImage(active, offsetX, offsetY, renderW, renderH);
      }

      if (dbg) {
        ctx.strokeStyle = isDeadzone ? 'lime' : 'red';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(faceCanvasX, faceCanvasY, enterR, 0, Math.PI * 2);
        ctx.stroke();
        ctx.fillStyle = 'red';
        ctx.fillRect(faceCanvasX - 3, faceCanvasY - 3, 6, 6);
      }

      if (
        trackingCb.current &&
        (frameIndex !== prevFrameIndex || isDeadzone !== prevDeadzone)
      ) {
        prevFrameIndex = frameIndex;
        prevDeadzone = isDeadzone;
        const deg = Math.round((compass * 180) / Math.PI);
        trackingCb.current({
          frameIndex: isDeadzone ? 'CENTER' : frameIndex,
          isDeadzone,
          angleDeg: deg,
          compassDir: isDeadzone
            ? 'CENTER'
            : COMPASS_DIRS[Math.floor(((deg + 11.25) % 360) / 22.5)],
          dist: Math.round(dist),
        });
      }
    };

    rafId.current = requestAnimationFrame(render);
    return () => cancelAnimationFrame(rafId.current);
  }, [isReady]);

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 overflow-hidden ${className}`}
      style={{ backgroundColor: BG_COLOR }}
      aria-hidden="true"
    >
      {!isReady && (
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-[#EFEFEF]">
          <div className="relative mb-5 flex h-14 w-14 items-center justify-center">
            <div className="absolute inset-0 rounded-full border-2 border-neutral-300/60" />
            <div
              className="absolute inset-0 animate-spin rounded-full border-2 border-neutral-900 border-t-transparent"
              style={{ animationDuration: '0.8s' }}
            />
            <span className="text-xs font-semibold text-neutral-800">{loadedPercent}%</span>
          </div>
          <p className="text-[10px] uppercase tracking-[0.25em] text-neutral-500">Loading</p>
          <div className="mt-3 h-1 w-40 overflow-hidden rounded-full bg-neutral-200">
            <div
              className="h-full rounded-full bg-neutral-900 transition-all duration-150 ease-out"
              style={{ width: `${loadedPercent}%` }}
            />
          </div>
        </div>
      )}

      <canvas ref={canvasRef} className="block h-full w-full" />
    </div>
  );
}