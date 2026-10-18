import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";


const RINGS = [
  {
    size: 140,
    duration: 14,
    dir: 1,
    nodes: [
      { label: "JS", name: "JavaScript", angle: 0 },
      { label: "Py", name: "Python", angle: 120 },
      { label: "Git", name: "Git workflows", angle: 240 },
    ],
  },
  {
    size: 220,
    duration: 20,
    dir: -1,
    nodes: [
      { label: "React", name: "React", angle: 20 },
      { label: "Next", name: "Next.js", angle: 110 },
      { label: "RN", name: "React Native", angle: 200 },
      { label: "Node", name: "Node.js", angle: 290 },
    ],
  },
  {
    size: 300,
    duration: 28,
    dir: 1,
    nodes: [
      { label: "Laravel", name: "Laravel", angle: 40 },
      { label: "Flask", name: "Flask", angle: 130 },
      { label: "MySQL", name: "MySQL", angle: 220 },
      { label: "Mongo", name: "MongoDB", angle: 310 },
    ],
  },
];

const MESSAGES = [
  { at: 0, text: "Opening a fresh branch…" },
  { at: 25, text: "Pulling in new ideas…" },
  { at: 55, text: "Refactoring yesterday's code…" },
  { at: 85, text: "Almost there. Shipping soon." },
];

const CORE_RADIUS = 46;
const CIRCUMFERENCE = 2 * Math.PI * CORE_RADIUS;

const Loader = ({ onComplete, duration = 3.2 }) => {
  const rootRef = useRef(null);
  const sceneRef = useRef(null);
  const glowRef = useRef(null);
  const percentRef = useRef(null);
  const arcRef = useRef(null);
  const statusRef = useRef(null);

  const onCompleteRef = useRef(onComplete);
  const progressRef = useRef(null);
  const spinnersRef = useRef([]);
  const exitedRef = useRef(false);

  const [message, setMessage] = useState(MESSAGES[0].text);
  const [hovered, setHovered] = useState(null);

  // Always call the latest onComplete without restarting the animation
  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  // Soft text swap whenever the status line changes
  useEffect(() => {
    if (!statusRef.current) return;
    gsap.fromTo(
      statusRef.current,
      { opacity: 0, y: 8 },
      { opacity: 1, y: 0, duration: 0.35, ease: "power2.out" }
    );
  }, [message, hovered]);

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const ctx = gsap.context(() => {
      const scene = sceneRef.current;
      const glow = glowRef.current;

      // ---------- Exit sequence (runs once) ----------
      const exit = () => {
        if (exitedRef.current) return;
        exitedRef.current = true;
        setHovered(null);
        setMessage("Ready. Let's build.");
        rootRef.current.style.pointerEvents = "none";

        gsap
          .timeline({ delay: 0.35, onComplete: () => onCompleteRef.current?.() })
          .to(scene, {
            scale: 1.3,
            opacity: 0,
            duration: 0.6,
            ease: "power2.in",
          })
          .to(rootRef.current, { opacity: 0, duration: 0.5 }, "-=0.25");
      };

      // ---------- Progress ----------
      const state = { v: 0 };
      let messageIndex = 0;

      progressRef.current = gsap.to(state, {
        v: 100,
        duration: reduceMotion ? 1 : duration,
        ease: "power1.inOut",
        onUpdate: () => {
          const v = state.v;
          if (percentRef.current)
            percentRef.current.textContent = Math.round(v);
          if (arcRef.current)
            arcRef.current.style.strokeDashoffset = CIRCUMFERENCE * (1 - v / 100);

          let idx = 0;
          MESSAGES.forEach((m, i) => {
            if (v >= m.at) idx = i;
          });
          if (idx !== messageIndex) {
            messageIndex = idx;
            setMessage(MESSAGES[idx].text);
          }
        },
        onComplete: exit,
      });

      // ---------- Entrance ----------
      gsap.from(".ring", {
        scale: 0.6,
        opacity: 0,
        duration: reduceMotion ? 0 : 0.9,
        stagger: 0.12,
        ease: "back.out(1.4)",
      });
      gsap.from(".core", {
        scale: 0.6,
        opacity: 0,
        duration: reduceMotion ? 0 : 0.7,
        ease: "back.out(1.6)",
      });

      if (reduceMotion) return;

      // ---------- Orbits (rings spin, badges counter-spin to stay upright) ----------
      const spinners = [];
      gsap.utils.toArray(".ring").forEach((ring) => {
        const dir = Number(ring.dataset.dir);
        const dur = Number(ring.dataset.duration);
        spinners.push(
          gsap.to(ring, {
            rotation: dir * 360,
            duration: dur,
            repeat: -1,
            ease: "none",
          })
        );
        spinners.push(
          gsap.to(ring.querySelectorAll(".node-inner"), {
            rotation: -dir * 360,
            duration: dur,
            repeat: -1,
            ease: "none",
          })
        );
      });
      spinnersRef.current = spinners;

      // ---------- Core halo pulse ----------
      gsap.to(".core-halo", {
        scale: 1.35,
        opacity: 0.15,
        duration: 1.4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // ---------- Cursor reactivity ----------
      gsap.set(glow, { xPercent: -50, yPercent: -50 });
      gsap.set(scene, { transformPerspective: 900 });

      const glowX = gsap.quickTo(glow, "x", { duration: 0.9, ease: "power3" });
      const glowY = gsap.quickTo(glow, "y", { duration: 0.9, ease: "power3" });
      const tiltX = gsap.quickTo(scene, "rotationX", {
        duration: 1,
        ease: "power3",
      });
      const tiltY = gsap.quickTo(scene, "rotationY", {
        duration: 1,
        ease: "power3",
      });

      const onMove = (e) => {
        const nx = e.clientX / window.innerWidth - 0.5;
        const ny = e.clientY / window.innerHeight - 0.5;
        glowX(e.clientX - window.innerWidth / 2);
        glowY(e.clientY - window.innerHeight / 2);
        tiltY(nx * 18);
        tiltX(-ny * 18);
      };
      window.addEventListener("pointermove", onMove);

      return () => window.removeEventListener("pointermove", onMove);
    }, rootRef);

    // ---------- Skip with keyboard ----------
    const onKey = (e) => {
      if (["Escape", "Enter", " "].includes(e.key)) {
        e.preventDefault();
        progressRef.current?.timeScale(6);
      }
    };
    window.addEventListener("keydown", onKey);

    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
      ctx.revert();
    };
  }, [duration]);

  const slowOrbit = (slow) => {
    gsap.to(spinnersRef.current, {
      timeScale: slow ? 0.1 : 1,
      duration: 0.4,
      overwrite: true,
    });
  };

  const handleEnter = (name) => {
    setHovered(name);
    slowOrbit(true);
  };
  const handleLeave = () => {
    setHovered(null);
    slowOrbit(false);
  };

  return (
    <div
      ref={rootRef}
      role="status"
      aria-live="polite"
      aria-label="Loading"
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden bg-white text-darkblue-800"
      style={{
        backgroundImage:
          "radial-gradient(rgba(125,211,252,0.35) 1px, transparent 1px)",
        backgroundSize: "28px 28px",
      }}
    >
      {/* Cursor-following glow */}
      <div
        ref={glowRef}
        className="pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[520px] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(14,165,233,0.25), rgba(255,255,255,0) 65%)",
        }}
      />

      {/* Orbit scene */}
      <div ref={sceneRef} className="relative h-[320px] w-[320px]">
        {RINGS.map((ring) => (
          <div
            key={ring.size}
            className="ring absolute left-1/2 top-1/2 rounded-full border border-lightblue-300/60"
            data-dir={ring.dir}
            data-duration={ring.duration}
            style={{
              width: ring.size,
              height: ring.size,
              marginLeft: -ring.size / 2,
              marginTop: -ring.size / 2,
            }}
          >
            {ring.nodes.map((node) => {
              const rad = (node.angle * Math.PI) / 180;
              return (
                <div
                  key={node.name}
                  className="absolute"
                  style={{
                    left: `${50 + 50 * Math.cos(rad)}%`,
                    top: `${50 + 50 * Math.sin(rad)}%`,
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  <div className="node-inner">
                    <button
                      type="button"
                      aria-label={node.name}
                      onPointerEnter={() => handleEnter(node.name)}
                      onPointerLeave={handleLeave}
                      onFocus={() => handleEnter(node.name)}
                      onBlur={handleLeave}
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-lightblue-300 bg-white text-[11px] font-semibold text-darkblue-700 shadow-[0_0_14px_rgba(14,165,233,0.35)] transition-transform duration-200 hover:scale-125 focus-visible:scale-125 focus-visible:outline focus-visible:outline-2 focus-visible:outline-lightblue-400"
                    >
                      {node.label}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        ))}

        {/* Core: progress ring + percentage, click to skip */}
        <button
          type="button"
          aria-label="Skip intro"
          onClick={() => progressRef.current?.timeScale(6)}
          className="core absolute left-1/2 top-1/2 -ml-[52px] -mt-[52px] flex h-[104px] w-[104px] items-center justify-center rounded-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lightblue-400"
        >
          <span
            className="core-halo absolute inset-0 rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(56,189,248,0.45), rgba(56,189,248,0) 70%)",
            }}
          />
          <svg
            className="absolute inset-0 -rotate-90"
            viewBox="0 0 104 104"
            aria-hidden="true"
          >
            <circle
              cx="52"
              cy="52"
              r={CORE_RADIUS}
              fill="#ffffff"
              stroke="rgba(186,230,253,0.9)"
              strokeWidth="4"
            />
            <circle
              ref={arcRef}
              cx="52"
              cy="52"
              r={CORE_RADIUS}
              fill="none"
              stroke="#1d4ed8"
              strokeWidth="4"
              strokeLinecap="round"
              strokeDasharray={CIRCUMFERENCE}
              strokeDashoffset={CIRCUMFERENCE}
              style={{ filter: "drop-shadow(0 0 6px rgba(29,78,216,0.5))" }}
            />
          </svg>
          <span className="relative flex items-baseline text-darkblue-800">
            <span
              ref={percentRef}
              className="text-3xl font-semibold tabular-nums"
            >
              0
            </span>
            <span className="ml-0.5 text-sm text-lightblue-500">%</span>
          </span>
        </button>
      </div>

      {/* Copy */}
      <div className="relative mt-6 flex flex-col items-center gap-2 px-6 text-center">
        <h1 className="text-xl font-semibold tracking-tight text-darkblue-800 sm:text-2xl">
          Still learning. Always building.
        </h1>
        <p ref={statusRef} className="h-6 text-sm text-gray-600">
          {hovered ? `Exploring ${hovered}` : message}
        </p>
      </div>
    </div>
  );
};

export default Loader;