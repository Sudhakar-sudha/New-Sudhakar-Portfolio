import { useState, useEffect, useCallback } from "react";
import { Heart, Sparkles, Star, Music, Flame } from "lucide-react";

// ─── Romantic quotes cycling on every kiss ───────────────────────────────────
const QUOTES = [
  "A kiss is a promise written on the lips.",
  "Every kiss from you feels like pure magic.",
  "Your love is my favorite place to be.",
  "One kiss can say a thousand words.",
  "With you, every moment tastes sweet.",
  "In your arms, time forgets to move.",
];

// ─── Random position helper ───────────────────────────────────────────────────
const rand = (min, max) => Math.random() * (max - min) + min;

// ─── Single floating heart particle ──────────────────────────────────────────
function FloatingHeart({ id, onDone }) {
  const left = rand(10, 90);
  const size = rand(16, 36);
  const duration = rand(2.2, 3.8);
  const delay = rand(0, 0.4);
  const colors = ["#ff6b9d", "#ff4d6d", "#ff85a1", "#c9184a", "#ff9ebb"];
  const color = colors[Math.floor(Math.random() * colors.length)];

  useEffect(() => {
    const t = setTimeout(onDone, (duration + delay) * 1000 + 300);
    return () => clearTimeout(t);
  }, []);

  return (
    <span
      style={{
        position: "fixed",
        left: `${left}%`,
        bottom: "10%",
        fontSize: `${size}px`,
        color,
        pointerEvents: "none",
        zIndex: 9999,
        animation: `floatUp ${duration}s ease-out ${delay}s forwards`,
        display: "inline-block",
        filter: "drop-shadow(0 0 6px currentColor)",
        userSelect: "none",
      }}
    >
      ❤️
    </span>
  );
}

// ─── Blurred background decorative hearts ────────────────────────────────────
const BG_HEARTS = [
  { top: "8%", left: "5%", size: 80, opacity: 0.07, dur: 6 },
  { top: "20%", left: "88%", size: 60, opacity: 0.09, dur: 8 },
  { top: "55%", left: "3%", size: 100, opacity: 0.06, dur: 7 },
  { top: "70%", left: "80%", size: 90, opacity: 0.08, dur: 9 },
  { top: "85%", left: "40%", size: 50, opacity: 0.07, dur: 5.5 },
  { top: "40%", left: "92%", size: 70, opacity: 0.05, dur: 10 },
];

// ─── Modal popup ──────────────────────────────────────────────────────────────
function LoveModal({ onClose }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{ background: "rgba(30,10,25,0.65)", backdropFilter: "blur(8px)" }}
      onClick={onClose}
    >
      <div
        className="relative max-w-sm w-full mx-4 rounded-3xl p-8 text-center"
        style={{
          background:
            "linear-gradient(135deg, rgba(255,100,130,0.25) 0%, rgba(180,50,100,0.35) 100%)",
          border: "1px solid rgba(255,150,180,0.4)",
          boxShadow: "0 30px 80px rgba(200,30,80,0.4), 0 0 0 1px rgba(255,120,160,0.2)",
          backdropFilter: "blur(24px)",
          animation: "popIn 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Glow ring */}
        <div
          className="absolute inset-0 rounded-3xl"
          style={{
            background: "radial-gradient(ellipse at 50% 0%, rgba(255,100,150,0.3), transparent 70%)",
          }}
        />

        <div className="relative z-10">
          <div className="text-5xl mb-4" style={{ animation: "heartbeat 1.2s ease-in-out infinite" }}>
            💋
          </div>
          <h3
            className="text-2xl font-bold mb-3"
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              background: "linear-gradient(135deg, #ffb3c6, #ff4d6d, #c9184a)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Sending You My Love
          </h3>
          <p className="text-pink-200 leading-relaxed mb-6" style={{ fontFamily: "Georgia, serif", fontSize: "1rem" }}>
            Every heartbeat, every breath, every quiet moment — they all whisper your name. This Kiss Day, I give you all of me. 💕
          </p>
          <button
            onClick={onClose}
            className="px-8 py-3 rounded-full text-sm font-semibold transition-all duration-200 hover:scale-105 active:scale-95"
            style={{
              background: "linear-gradient(135deg, #ff4d6d, #c9184a)",
              color: "#fff",
              boxShadow: "0 4px 20px rgba(201,24,74,0.5)",
              letterSpacing: "0.05em",
            }}
          >
            Close with Love ❤️
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function KissDayCard() {
  const [quoteIdx, setQuoteIdx] = useState(0);
  const [quoteFade, setQuoteFade] = useState(true);
  const [hearts, setHearts] = useState([]);
  const [kissCount, setKissCount] = useState(0);
  const [btnAnim, setBtnAnim] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [heartId, setHeartId] = useState(0);

  // Fade in on mount
  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  // Remove a floating heart by id
  const removeHeart = useCallback((id) => {
    setHearts((prev) => prev.filter((h) => h !== id));
  }, []);

  // Handle "Send a Kiss" button
  const handleKiss = () => {
    // Cycle quote with fade
    setQuoteFade(false);
    setTimeout(() => {
      setQuoteIdx((prev) => (prev + 1) % QUOTES.length);
      setQuoteFade(true);
    }, 300);

    // Spawn burst of hearts
    const newIds = Array.from({ length: 10 }, () => {
      const id = heartId + Math.random();
      setHeartId((p) => p + 1);
      return id;
    });
    setHearts((prev) => [...prev, ...newIds]);

    // Button animation
    setBtnAnim(true);
    setTimeout(() => setBtnAnim(false), 600);

    // Increment kiss count
    setKissCount((c) => c + 1);

    // Show modal on every 3rd kiss
    if ((kissCount + 1) % 3 === 0) {
      setTimeout(() => setShowModal(true), 400);
    }
  };

  return (
    <>
      {/* ── Global keyframe styles ── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Lora:ital,wght@0,400;0,500;1,400&display=swap');

        @keyframes floatUp {
          0%   { transform: translateY(0) scale(1) rotate(0deg); opacity: 1; }
          60%  { opacity: 0.9; }
          100% { transform: translateY(-80vh) scale(0.4) rotate(20deg); opacity: 0; }
        }
        @keyframes heartbeat {
          0%, 100% { transform: scale(1); }
          14%       { transform: scale(1.18); }
          28%       { transform: scale(1); }
          42%       { transform: scale(1.12); }
          56%       { transform: scale(1); }
        }
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(255,77,109,0.4), 0 0 60px rgba(255,77,109,0.15); }
          50%       { box-shadow: 0 0 40px rgba(255,77,109,0.7), 0 0 100px rgba(255,77,109,0.3); }
        }
        @keyframes driftFloat {
          0%, 100% { transform: translateY(0px) rotate(-3deg); }
          50%       { transform: translateY(-18px) rotate(3deg); }
        }
        @keyframes titleShimmer {
          0%   { background-position: 0% 50%; }
          50%  { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes popIn {
          from { opacity: 0; transform: scale(0.7); }
          to   { opacity: 1; transform: scale(1); }
        }
        @keyframes bgPulse {
          0%, 100% { opacity: 0.6; }
          50%       { opacity: 1; }
        }
        @keyframes btnKiss {
          0%   { transform: scale(1); }
          30%  { transform: scale(0.92); }
          60%  { transform: scale(1.08); }
          100% { transform: scale(1); }
        }
        @keyframes sparkSpin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes ripple {
          0%   { transform: scale(0.8); opacity: 0.8; }
          100% { transform: scale(2.4); opacity: 0; }
        }

        .btn-kiss-anim { animation: btnKiss 0.5s ease forwards; }

        .quote-fade-in  { animation: fadeIn 0.4s ease forwards; }
        .quote-fade-out { opacity: 0; transform: translateY(-8px); transition: all 0.3s ease; }

        /* subtle grain overlay */
        .grain::after {
          content: '';
          position: absolute; inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");
          border-radius: inherit; pointer-events: none; z-index: 0;
        }
      `}</style>

      {/* ── Floating hearts layer ── */}
      {hearts.map((id) => (
        <FloatingHeart key={id} id={id} onDone={() => removeHeart(id)} />
      ))}

      {/* ── Modal ── */}
      {showModal && <LoveModal onClose={() => setShowModal(false)} />}

      {/* ── Full-screen background ── */}
      <div
        className="min-h-screen w-full relative overflow-hidden flex items-center justify-center px-4 py-10"
        style={{
          background:
            "radial-gradient(ellipse at 30% 20%, #4a0030 0%, #1a0020 40%, #0d0015 100%)",
        }}
      >
        {/* Background gradient orbs */}
        <div
          className="absolute"
          style={{
            top: "-10%", left: "-10%", width: "55%", height: "55%",
            background: "radial-gradient(circle, rgba(180,20,80,0.35), transparent 70%)",
            animation: "bgPulse 5s ease-in-out infinite",
            filter: "blur(40px)",
          }}
        />
        <div
          className="absolute"
          style={{
            bottom: "-5%", right: "-5%", width: "50%", height: "50%",
            background: "radial-gradient(circle, rgba(120,10,60,0.3), transparent 70%)",
            animation: "bgPulse 7s ease-in-out infinite reverse",
            filter: "blur(50px)",
          }}
        />

        {/* Decorative blurred background hearts */}
        {BG_HEARTS.map((h, i) => (
          <div
            key={i}
            className="absolute pointer-events-none select-none"
            style={{
              top: h.top, left: h.left,
              fontSize: `${h.size}px`,
              opacity: h.opacity,
              filter: "blur(4px)",
              animation: `driftFloat ${h.dur}s ease-in-out infinite`,
              animationDelay: `${i * 0.9}s`,
              color: "#ff6b9d",
            }}
          >
            ❤️
          </div>
        ))}

        {/* ── Card ── */}
        <div
          className="grain relative w-full max-w-lg rounded-3xl overflow-hidden"
          style={{
            background:
              "linear-gradient(160deg, rgba(255,255,255,0.07) 0%, rgba(180,40,80,0.1) 50%, rgba(80,10,40,0.15) 100%)",
            border: "1px solid rgba(255,130,160,0.2)",
            boxShadow:
              "0 40px 120px rgba(180,20,80,0.4), 0 0 0 1px rgba(255,100,150,0.1), inset 0 1px 0 rgba(255,200,220,0.1)",
            backdropFilter: "blur(30px)",
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateY(0)" : "translateY(30px)",
            transition: "opacity 0.9s ease, transform 0.9s ease",
          }}
        >
          {/* Top glow strip */}
          <div
            className="absolute top-0 left-0 right-0 h-px"
            style={{ background: "linear-gradient(90deg, transparent, rgba(255,150,180,0.6), transparent)" }}
          />

          <div className="relative z-10 px-6 pt-10 pb-8 sm:px-10">

            {/* ── Hero: Title ── */}
            <div className="text-center mb-6">
              {/* Decorative icon row */}
              <div className="flex justify-center items-center gap-3 mb-4">
                <Heart
                  size={18}
                  style={{ color: "#ff6b9d", animation: "heartbeat 2s ease-in-out infinite", fill: "#ff6b9d" }}
                />
                <Sparkles size={16} style={{ color: "#ffb3c6", animation: "sparkSpin 4s linear infinite" }} />
                <Heart
                  size={22}
                  style={{ color: "#ff4d6d", animation: "heartbeat 1.6s ease-in-out infinite 0.4s", fill: "#ff4d6d" }}
                />
                <Sparkles size={16} style={{ color: "#ffb3c6", animation: "sparkSpin 4s linear infinite reverse" }} />
                <Heart
                  size={18}
                  style={{ color: "#ff6b9d", animation: "heartbeat 2s ease-in-out infinite 0.8s", fill: "#ff6b9d" }}
                />
              </div>

              {/* Animated gradient title */}
              <h1
                className="text-4xl sm:text-5xl font-bold leading-tight mb-2"
                style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  background: "linear-gradient(90deg, #ffb3c6, #ff4d6d, #c9184a, #ff85a1, #ffb3c6)",
                  backgroundSize: "300% 100%",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  animation: "titleShimmer 4s ease infinite",
                }}
              >
                Happy Kiss Day
              </h1>
              <p
                className="text-lg sm:text-xl"
                style={{
                  fontFamily: "'Lora', Georgia, serif",
                  fontStyle: "italic",
                  color: "rgba(255,180,200,0.85)",
                  letterSpacing: "0.02em",
                }}
              >
                A day to share love, warmth &amp; tenderness 💋
              </p>
            </div>

            {/* ── Romantic image ── */}
            <div
              className="relative mx-auto mb-8 overflow-hidden group"
              style={{
                width: "100%",
                maxWidth: "380px",
                borderRadius: "20px",
                boxShadow: "0 20px 60px rgba(180,20,80,0.5), 0 0 0 1px rgba(255,100,140,0.25)",
                animation: "pulse-glow 3s ease-in-out infinite",
              }}
            >
              {/* Overlay gradient on image */}
              <div
                className="absolute inset-0 z-10 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(180deg, transparent 50%, rgba(30,5,20,0.6) 100%)",
                  borderRadius: "20px",
                }}
              />
              <img
                src="./kiss.jpg"
                alt="Romantic couple"
                className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                style={{ height: "240px", display: "block", borderRadius: "20px" }}
                loading="lazy"
              />

              {/* Kiss count badge */}
              {kissCount > 0 && (
                <div
                  className="absolute bottom-3 right-3 z-20 flex items-center gap-1 px-3 py-1 rounded-full text-sm font-semibold"
                  style={{
                    background: "rgba(180,20,80,0.85)",
                    backdropFilter: "blur(8px)",
                    color: "#ffe0ea",
                    border: "1px solid rgba(255,120,160,0.4)",
                    fontFamily: "'Lora', Georgia, serif",
                  }}
                >
                  💋 {kissCount} {kissCount === 1 ? "kiss" : "kisses"} sent
                </div>
              )}
            </div>

            {/* ── Quote section ── */}
            <div
              className="text-center mb-8 min-h-16 flex items-center justify-center"
              style={{ minHeight: "72px" }}
            >
              <div
                className={quoteFade ? "quote-fade-in" : "quote-fade-out"}
                style={{ animation: quoteFade ? "fadeIn 0.4s ease forwards" : undefined }}
              >
                <p
                  className="text-base sm:text-lg leading-relaxed px-4"
                  style={{
                    fontFamily: "'Lora', Georgia, serif",
                    fontStyle: "italic",
                    color: "rgba(255,200,215,0.9)",
                    textShadow: "0 0 20px rgba(255,100,140,0.3)",
                    letterSpacing: "0.015em",
                  }}
                >
                  &ldquo;{QUOTES[quoteIdx]}&rdquo;
                </p>

                {/* Quote dots */}
                <div className="flex justify-center gap-1.5 mt-3">
                  {QUOTES.map((_, i) => (
                    <span
                      key={i}
                      style={{
                        display: "inline-block",
                        width: i === quoteIdx ? "20px" : "6px",
                        height: "6px",
                        borderRadius: "3px",
                        background: i === quoteIdx ? "#ff4d6d" : "rgba(255,150,170,0.3)",
                        transition: "all 0.4s ease",
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* ── Send a Kiss button ── */}
            <div className="flex justify-center mb-6">
              <div className="relative">
                {/* Ripple ring */}
                <div
                  className="absolute inset-0 rounded-full pointer-events-none"
                  style={{
                    border: "2px solid rgba(255,77,109,0.5)",
                    animation: "ripple 2s ease-out infinite",
                  }}
                />

                <button
                  onClick={handleKiss}
                  className={`relative flex items-center gap-2 px-8 py-4 rounded-full font-bold text-base sm:text-lg cursor-pointer select-none transition-all duration-200 hover:scale-105 active:scale-95 ${btnAnim ? "btn-kiss-anim" : ""}`}
                  style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    background: "linear-gradient(135deg, #ff4d6d 0%, #c9184a 50%, #a4133c 100%)",
                    color: "#fff",
                    letterSpacing: "0.04em",
                    boxShadow:
                      "0 8px 32px rgba(201,24,74,0.6), 0 2px 8px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,200,210,0.2)",
                    border: "1px solid rgba(255,150,170,0.3)",
                  }}
                >
                  <Sparkles size={18} style={{ color: "#ffb3c6" }} />
                  Send a Kiss 💋
                  <Sparkles size={18} style={{ color: "#ffb3c6" }} />
                </button>
              </div>
            </div>

            {/* ── Bottom decorative row ── */}
            <div className="flex justify-center items-center gap-4 mt-2">
              <div className="flex items-center gap-1.5 text-xs" style={{ color: "rgba(255,160,180,0.55)", fontFamily: "'Lora', serif" }}>
                <Star size={11} fill="rgba(255,150,170,0.55)" style={{ color: "transparent" }} />
                Made with love
                <Heart size={11} fill="rgba(255,100,130,0.55)" style={{ color: "transparent" }} />
              </div>
            </div>

          </div>

          {/* Bottom glow strip */}
          <div
            className="absolute bottom-0 left-0 right-0 h-px"
            style={{ background: "linear-gradient(90deg, transparent, rgba(255,100,140,0.4), transparent)" }}
          />
        </div>

      </div>
    </>
  );
}