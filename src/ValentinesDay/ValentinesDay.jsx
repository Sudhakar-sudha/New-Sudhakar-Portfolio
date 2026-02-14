import { useState, useEffect, useRef } from "react";
import { Heart, Sparkles, Star, Gift, Smile, Music, ArrowRight, X } from "lucide-react";

// ─────────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────────

const QUOTES = [
  "You are not my choice… you are my destiny.",
  "With you, forever doesn't feel long enough.",
  "Your smile is my daily peace.",
  "I found my home in your heart.",
  "Every heartbeat of mine whispers your name.",
  "If loving you is a dream, I never want to wake up.",
  "You are my beginning, my middle, and my forever.",
  "Distance means nothing when someone means everything.",
];

const LOVE_LINES = [
  { text: "Love you diii Chellamaeee ❤️",                               delay: 0,   big: true },
  { text: "En Ammu Kuttyy…",                                             delay: 0.4 },
  { text: "En Chella Kuttyy…",                                           delay: 0.8 },
  { text: "My Wife…",                                                     delay: 1.2, accent: true },
  { text: "My Pondatii…",                                                 delay: 1.6, accent: true },
  { text: "Ellamae nee than ❤️",                                          delay: 2.0, big: true },
  { text: "My whole world is you…",                                       delay: 2.4 },
  { text: "My happiness starts with you and ends with you…",              delay: 2.8 },
  { text: "Un kooda irukum pothu dhan life complete ah feel aagudhu…",    delay: 3.2 },
  { text: "Nee illana naan illa…",                                        delay: 3.6, accent: true },
  { text: "I love you more than words can ever explain 💖",               delay: 4.0, big: true },
];

const HEART_EMOJIS = ["❤️", "💕", "💗", "💓", "💖", "💝", "💘"];

const BG_BLOBS = [
  { top: "-5%",  left: "-10%", w: 500, h: 500, color: "rgba(180,20,80,0.22)",  dur: 8  },
  { top: "40%",  left: "60%",  w: 400, h: 400, color: "rgba(120,10,60,0.18)",  dur: 11 },
  { bottom:"-8%",left: "20%",  w: 450, h: 350, color: "rgba(200,30,90,0.15)",  dur: 9  },
  { top: "25%",  left: "30%",  w: 300, h: 300, color: "rgba(150,0,80,0.12)",   dur: 13 },
];

const BG_HEARTS = [
  { top:"10%", left:"8%",  size:55, op:0.06, dur:7   },
  { top:"30%", left:"90%", size:40, op:0.07, dur:9   },
  { top:"60%", left:"5%",  size:70, op:0.05, dur:6.5 },
  { top:"75%", left:"85%", size:60, op:0.08, dur:8   },
  { top:"88%", left:"45%", size:35, op:0.06, dur:10  },
  { top:"15%", left:"75%", size:45, op:0.05, dur:7.5 },
];

// ─────────────────────────────────────────────────
// FLOATING HEART PARTICLE
// ─────────────────────────────────────────────────
function FloatingHeart({ id, onDone, origin }) {
  const left    = origin ? origin.x + (Math.random() - 0.5) * 30 : Math.random() * 88 + 6;
  const size    = Math.random() * 22 + 12;
  const dur     = Math.random() * 2  + 2.5;
  const delay   = Math.random() * 0.5;
  const emoji   = HEART_EMOJIS[Math.floor(Math.random() * HEART_EMOJIS.length)];
  const drift   = (Math.random() - 0.5) * 90;

  useEffect(() => {
    const t = setTimeout(onDone, (dur + delay) * 1000 + 200);
    return () => clearTimeout(t);
  }, []);

  return (
    <span
      style={{
        position: "fixed",
        left: `${left}%`,
        bottom: origin ? `${origin.y}%` : "8%",
        fontSize: `${size}px`,
        pointerEvents: "none",
        zIndex: 9999,
        animation: `floatHeart ${dur}s ease-out ${delay}s forwards`,
        "--drift": `${drift}px`,
        display: "inline-block",
        filter: "drop-shadow(0 0 8px rgba(255,100,150,0.8))",
        userSelect: "none",
      }}
    >
      {emoji}
    </span>
  );
}

// ─────────────────────────────────────────────────
// CELEBRATION BURST
// ─────────────────────────────────────────────────
function CelebrationBurst() {
  return (
    <div
      className="fixed inset-0 pointer-events-none z-50 overflow-hidden"
      style={{ animation: "fadeOutBurst 3.5s ease forwards 0.5s" }}
    >
      {Array.from({ length: 35 }).map((_, i) => (
        <span
          key={i}
          style={{
            position: "absolute",
            left: `${Math.random() * 100}%`,
            top:  `${Math.random() * 100}%`,
            fontSize: `${Math.random() * 26 + 10}px`,
            animation: `burstPop ${Math.random() * 1 + 0.5}s ease forwards`,
            animationDelay: `${Math.random() * 0.9}s`,
            opacity: 0,
          }}
        >
          {HEART_EMOJIS[Math.floor(Math.random() * HEART_EMOJIS.length)]}
        </span>
      ))}
    </div>
  );
}

// ─────────────────────────────────────────────────
// PROPOSAL MODAL
// ─────────────────────────────────────────────────
function ProposalModal({ onClose, onYes }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: "rgba(10,0,20,0.78)", backdropFilter: "blur(14px)" }}
    >
      <div
        className="relative w-full max-w-md rounded-3xl overflow-hidden text-center"
        style={{
          background: "linear-gradient(160deg, rgba(255,255,255,0.06) 0%, rgba(200,30,80,0.12) 60%, rgba(100,10,50,0.2) 100%)",
          border: "1px solid rgba(255,140,170,0.3)",
          boxShadow: "0 40px 100px rgba(180,20,80,0.55), inset 0 1px 0 rgba(255,210,225,0.1)",
          backdropFilter: "blur(28px)",
          animation: "modalPop 0.5s cubic-bezier(0.175,0.885,0.32,1.275) forwards",
        }}
      >
        {/* Top shimmer strip */}
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{
            background: "linear-gradient(90deg, transparent, #ff4d6d, #ffd1dc, #ff4d6d, transparent)",
            backgroundSize: "200% 100%",
            animation: "shimmerBorder 2.5s linear infinite",
          }}
        />

        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-1.5 rounded-full transition-all duration-200 hover:scale-110"
          style={{ color: "rgba(255,160,185,0.6)", background: "rgba(255,100,140,0.1)", border: "1px solid rgba(255,120,150,0.15)" }}
        >
          <X size={16} />
        </button>

        <div className="px-8 pt-10 pb-8">
          <div className="text-6xl mb-4 inline-block" style={{ animation: "ringWobble 1.5s ease-in-out infinite" }}>
            💍
          </div>

          <h2
            className="text-2xl sm:text-3xl font-bold mb-4"
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              background: "linear-gradient(135deg, #ffd1dc, #ff4d6d, #c9184a, #ff85a1)",
              backgroundSize: "200% 100%",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              animation: "shimmerText 3s ease infinite",
            }}
          >
            My Dearest Love…
          </h2>

          <div
            className="text-base sm:text-lg leading-relaxed mb-4 space-y-2"
            style={{ fontFamily: "'Lora', Georgia, serif", color: "rgba(255,210,220,0.9)", fontStyle: "italic" }}
          >
            <p>I don't need a perfect life…</p>
            <p>I just need <span style={{ color: "#ff6b9d", fontWeight: 600, fontStyle: "normal" }}>you</span> beside me forever ❤️</p>
            <p className="text-sm mt-3" style={{ color: "rgba(255,180,200,0.7)" }}>
              Un kuda oru lifetime kazhikanum…<br />
              That's all I want in this world.
            </p>
          </div>

          <p
            className="text-lg sm:text-xl font-bold mb-8"
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              color: "#ffd1dc",
              textShadow: "0 0 20px rgba(255,100,140,0.5)",
            }}
          >
            Will you stay with me for a lifetime? 💕
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={onYes}
              className="flex-1 flex items-center justify-center gap-2 py-3.5 px-6 rounded-2xl font-bold text-white transition-all duration-200 hover:scale-105 active:scale-95"
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                background: "linear-gradient(135deg, #ff4d6d, #c9184a)",
                boxShadow: "0 8px 28px rgba(201,24,74,0.55)",
                border: "1px solid rgba(255,150,170,0.3)",
                fontSize: "1.05rem",
              }}
            >
              <Heart size={16} fill="white" style={{ color: "white" }} />
              Yes ❤️
            </button>
            <button
              onClick={onYes}
              className="flex-1 flex items-center justify-center gap-2 py-3.5 px-6 rounded-2xl font-bold transition-all duration-200 hover:scale-105 active:scale-95"
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                background: "linear-gradient(135deg, rgba(255,100,140,0.18), rgba(180,30,80,0.28))",
                color: "#ffd1dc",
                border: "1px solid rgba(255,130,160,0.35)",
                fontSize: "1.05rem",
              }}
            >
              <Smile size={16} />
              Of course Yes 😍
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────
// MAIN COMPONENT
// ─────────────────────────────────────────────────
export default function ValentineProposal() {
  const [quoteIdx,       setQuoteIdx]       = useState(0);
  const [quoteFade,      setQuoteFade]      = useState(true);
  const [hearts,         setHearts]         = useState([]);
  const [showModal,      setShowModal]      = useState(false);
  const [showCelebrate,  setShowCelebrate]  = useState(false);
  const [answered,       setAnswered]       = useState(false);
  const [loaded,         setLoaded]         = useState(false);
  const [linesVisible,   setLinesVisible]   = useState(false);
  const [musicOn,        setMusicOn]        = useState(false);
  const btnRef = useRef(null);

  // Entrance fade-in
  useEffect(() => {
    const t1 = setTimeout(() => setLoaded(true), 120);
    const t2 = setTimeout(() => setLinesVisible(true), 700);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  // Auto-rotate quotes every 4.5s
  useEffect(() => {
    const id = setInterval(() => {
      setQuoteFade(false);
      setTimeout(() => { setQuoteIdx(p => (p + 1) % QUOTES.length); setQuoteFade(true); }, 350);
    }, 4500);
    return () => clearInterval(id);
  }, []);

  // Spawn floating hearts
  const spawnHearts = (count = 12, origin = null) => {
    const batch = Array.from({ length: count }, (_, i) => ({
      id: `${Date.now()}-${i}-${Math.random()}`,
      origin,
    }));
    setHearts(prev => [...prev, ...batch]);
  };

  const removeHeart = id => setHearts(prev => prev.filter(h => h.id !== id));

  // Proposal button click
  const handlePropose = () => {
    const rect   = btnRef.current?.getBoundingClientRect();
    const origin = rect
      ? { x: ((rect.left + rect.width / 2) / window.innerWidth) * 100, y: 18 }
      : null;
    spawnHearts(18, origin);
    setTimeout(() => setShowModal(true), 320);
  };

  // Yes clicked
  const handleYes = () => {
    setShowModal(false);
    setAnswered(true);
    setShowCelebrate(true);
    spawnHearts(30);
    setTimeout(() => setShowCelebrate(false), 4500);
  };

  // Manual quote cycle
  const nextQuote = () => {
    setQuoteFade(false);
    setTimeout(() => { setQuoteIdx(p => (p + 1) % QUOTES.length); setQuoteFade(true); }, 300);
    spawnHearts(5);
  };

  return (
    <>
      {/* ────── Global Keyframes & Fonts ────── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400;1,600&family=Lora:ital,wght@0,400;0,500;1,400;1,500&display=swap');

        *, *::before, *::after { box-sizing: border-box; }

        @keyframes floatHeart {
          0%   { transform: translateY(0) translateX(0) scale(1) rotate(0deg); opacity: 1; }
          40%  { opacity: 0.85; }
          100% { transform: translateY(-78vh) translateX(var(--drift,0px)) scale(0.25) rotate(30deg); opacity: 0; }
        }
        @keyframes heartbeat {
          0%,100% { transform: scale(1); }
          15%     { transform: scale(1.24); }
          30%     { transform: scale(1); }
          45%     { transform: scale(1.14); }
          60%     { transform: scale(1); }
        }
        @keyframes driftFloat {
          0%,100% { transform: translateY(0) rotate(-4deg); }
          50%     { transform: translateY(-22px) rotate(5deg); }
        }
        @keyframes shimmerText {
          0%   { background-position: 0% 50%; }
          50%  { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes shimmerBorder {
          0%   { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        @keyframes pulseGlow {
          0%,100% { box-shadow: 0 0 20px rgba(255,77,109,0.35), 0 0 60px rgba(255,77,109,0.12); }
          50%     { box-shadow: 0 0 42px rgba(255,77,109,0.65), 0 0 100px rgba(255,77,109,0.25); }
        }
        @keyframes blobPulse {
          0%,100% { transform: scale(1) translate(0,0); opacity:0.8; }
          33%     { transform: scale(1.08) translate(15px,-10px); opacity:1; }
          66%     { transform: scale(0.95) translate(-10px,12px); opacity:0.9; }
        }
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes modalPop {
          from { opacity: 0; transform: scale(0.6) translateY(30px); }
          to   { opacity: 1; transform: scale(1) translateY(0); }
        }
        @keyframes ringWobble {
          0%,100% { transform: rotate(-8deg) scale(1); }
          25%     { transform: rotate(8deg) scale(1.12); }
          50%     { transform: rotate(-4deg) scale(1.06); }
          75%     { transform: rotate(6deg) scale(1.09); }
        }
        @keyframes burstPop {
          0%   { opacity: 0; transform: scale(0) translateY(0); }
          50%  { opacity: 1; transform: scale(1.35) translateY(-32px); }
          100% { opacity: 0; transform: scale(0.8) translateY(-65px); }
        }
        @keyframes fadeOutBurst {
          from { opacity: 1; }
          to   { opacity: 0; }
        }
        @keyframes rippleRing {
          0%   { transform: scale(0.85); opacity: 0.65; }
          100% { transform: scale(2.3); opacity: 0; }
        }
        @keyframes sparkSpin {
          from { transform: rotate(0deg) scale(1); }
          50%  { transform: rotate(180deg) scale(1.25); }
          to   { transform: rotate(360deg) scale(1); }
        }
        @keyframes titleEntrance {
          from { opacity: 0; transform: translateY(-22px) scale(0.95); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }

        .line-reveal { animation: fadeSlideUp 0.7s ease forwards; opacity: 0; }
        .quote-in    { animation: fadeIn 0.45s ease forwards; }
        .quote-out   { opacity: 0; transform: translateY(-8px); transition: all 0.35s ease; }

        /* scrollbar */
        ::-webkit-scrollbar       { width: 4px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: rgba(255,100,140,0.35); border-radius: 2px; }
      `}</style>

      {/* ── Floating hearts ── */}
      {hearts.map(({ id, origin }) => (
        <FloatingHeart key={id} id={id} origin={origin} onDone={() => removeHeart(id)} />
      ))}

      {/* ── Celebration burst ── */}
      {showCelebrate && <CelebrationBurst />}

      {/* ── Proposal modal ── */}
      {showModal && <ProposalModal onClose={() => setShowModal(false)} onYes={handleYes} />}

      {/* ══════════════════════════════════════════
          FULL-SCREEN BACKGROUND
      ══════════════════════════════════════════ */}
      <div
        className="min-h-screen w-full relative overflow-x-hidden flex items-start justify-center py-10 px-4"
        style={{
          background: "radial-gradient(ellipse at 25% 15%, #3d0030 0%, #1a0020 35%, #0a0012 70%, #080010 100%)",
        }}
      >
        {/* Animated blobs */}
        {BG_BLOBS.map((b, i) => (
          <div
            key={i}
            className="absolute rounded-full pointer-events-none"
            style={{
              top: b.top, left: b.left, bottom: b.bottom,
              width: b.w, height: b.h,
              background: `radial-gradient(circle, ${b.color}, transparent 70%)`,
              filter: "blur(65px)",
              animation: `blobPulse ${b.dur}s ease-in-out infinite`,
              animationDelay: `${i * 1.6}s`,
            }}
          />
        ))}

        {/* Decorative bg hearts */}
        {BG_HEARTS.map((h, i) => (
          <div
            key={i}
            className="absolute pointer-events-none select-none"
            style={{
              top: h.top, left: h.left,
              fontSize: `${h.size}px`,
              opacity: h.op,
              filter: "blur(3.5px)",
              color: "#ff6b9d",
              animation: `driftFloat ${h.dur}s ease-in-out infinite`,
              animationDelay: `${i * 1.2}s`,
            }}
          >
            ❤️
          </div>
        ))}

        {/* ══════════════════════════════════════════
            MAIN CARD
        ══════════════════════════════════════════ */}
        <div
          className="relative w-full max-w-xl"
          style={{
            opacity:    loaded ? 1 : 0,
            transform:  loaded ? "translateY(0)" : "translateY(44px)",
            transition: "opacity 1s ease, transform 1s ease",
          }}
        >
          {/* Animated gradient border glow */}
          <div
            className="absolute -inset-px rounded-3xl"
            style={{
              background: "linear-gradient(135deg, rgba(255,100,140,0.55), rgba(180,20,80,0.12), rgba(255,160,185,0.55), rgba(150,10,60,0.12), rgba(255,100,140,0.55))",
              backgroundSize: "300% 300%",
              animation: "shimmerText 5s ease infinite",
              filter: "blur(1.5px)",
            }}
          />

          <div
            className="relative rounded-3xl overflow-hidden"
            style={{
              background: "linear-gradient(160deg, rgba(255,255,255,0.055) 0%, rgba(180,30,75,0.1) 45%, rgba(70,5,35,0.18) 100%)",
              border: "1px solid rgba(255,120,155,0.2)",
              boxShadow: "0 50px 120px rgba(160,15,70,0.48), 0 20px 60px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,200,215,0.08)",
              backdropFilter: "blur(32px)",
            }}
          >
            {/* Top shimmer line */}
            <div
              className="absolute top-0 left-0 right-0 h-px z-10"
              style={{
                background: "linear-gradient(90deg, transparent 0%, rgba(255,150,180,0.7) 30%, rgba(255,230,240,1) 50%, rgba(255,150,180,0.7) 70%, transparent 100%)",
                backgroundSize: "200% 100%",
                animation: "shimmerBorder 3s linear infinite",
              }}
            />

            <div className="relative z-10 px-6 sm:px-10 pt-10 pb-10">

              {/* ── Music toggle (UI only) ── */}
              <button
                onClick={() => setMusicOn(m => !m)}
                className="absolute top-5 right-5 p-2 rounded-full transition-all duration-300 hover:scale-110"
                style={{
                  background: musicOn ? "rgba(255,77,109,0.22)" : "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,120,150,0.22)",
                  color: musicOn ? "#ff6b9d" : "rgba(255,180,200,0.35)",
                }}
                title="Love music vibes"
              >
                <Music size={15} />
              </button>

              {/* ──────────────────────────────
                  HERO SECTION
              ────────────────────────────── */}
              <div className="text-center mb-8">
                {/* Pulsing heart crown */}
                <div className="flex justify-center items-center gap-2 mb-4">
                  {[16, 20, 26, 20, 16].map((sz, i) => (
                    <Heart
                      key={i}
                      size={sz}
                      style={{
                        fill: "#ff4d6d", color: "#ff4d6d",
                        animation: `heartbeat ${1.4 + i * 0.12}s ease-in-out infinite`,
                        animationDelay: `${i * 0.18}s`,
                        filter: "drop-shadow(0 0 6px rgba(255,77,109,0.65))",
                      }}
                    />
                  ))}
                </div>

                {/* Title */}
                <h1
                  className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight"
                  style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    background: "linear-gradient(135deg, #ffd1dc 0%, #ff85a1 28%, #ff4d6d 52%, #c9184a 74%, #ff85a1 100%)",
                    backgroundSize: "250% 100%",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    animation: "titleEntrance 1s ease forwards, shimmerText 5s ease 1s infinite",
                  }}
                >
                  Happy Valentine's Day
                </h1>
                <h2
                  className="text-2xl sm:text-3xl font-bold mb-4 mt-1"
                  style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    background: "linear-gradient(135deg, #ff85a1, #ff4d6d, #c9184a)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    animation: "titleEntrance 1s ease 0.25s forwards",
                    opacity: 0,
                  }}
                >
                  ❤️ My Love
                </h2>

                <p
                  style={{
                    fontFamily: "'Lora', Georgia, serif",
                    fontStyle: "italic",
                    color: "rgba(255,200,215,0.8)",
                    fontSize: "0.95rem",
                    animation: "fadeSlideUp 1s ease 0.55s forwards",
                    opacity: 0,
                    letterSpacing: "0.01em",
                  }}
                >
                  From the moment you came into my life… everything changed.
                </p>
              </div>

              {/* ──────────────────────────────
                  COUPLE IMAGE
              ────────────────────────────── */}
              <div
                className="relative mx-auto mb-8 group overflow-hidden"
                style={{
                  width: "100%", maxWidth: "400px",
                  borderRadius: "20px",
                  animation: "pulseGlow 3.5s ease-in-out infinite",
                  boxShadow: "0 20px 60px rgba(180,20,80,0.5), 0 0 0 1px rgba(255,100,140,0.2)",
                }}
              >
                {/* Shimmering glow border */}
                <div
                  className="absolute -inset-1 rounded-2xl pointer-events-none z-0"
                  style={{
                    background: "linear-gradient(135deg, #ff4d6d55, #c9184a22, #ff85a155, #c9184a22, #ff4d6d55)",
                    backgroundSize: "300% 300%",
                    animation: "shimmerText 4s ease infinite",
                    filter: "blur(10px)",
                  }}
                />
                {/* Image overlay */}
                <div
                  className="absolute inset-0 z-10 pointer-events-none rounded-2xl"
                  style={{ background: "linear-gradient(180deg, rgba(30,0,20,0.04) 0%, rgba(30,0,20,0.62) 100%)" }}
                />
                {/* ⬇ Replace src with your couple photo */}
                <img
                  src="./valientsday.jpg"
                  alt="Our Love Story 💕"
                  className="w-full object-cover relative z-5 transition-transform duration-700 group-hover:scale-106"
                  style={{ height: "260px", display: "block", borderRadius: "20px", transform: "scale(1)" }}
                  onMouseEnter={e => e.currentTarget.style.transform = "scale(1.06)"}
                  onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
                />
                <div
                  className="absolute bottom-0 left-0 right-0 z-20 text-center py-3"
                  style={{ background: "linear-gradient(transparent, rgba(20,0,15,0.78))", borderRadius: "0 0 20px 20px" }}
                >
                  <p style={{ fontFamily: "'Lora', Georgia, serif", fontStyle: "italic", color: "rgba(255,200,215,0.85)", fontSize: "12px", letterSpacing: "0.07em" }}>
                    You &amp; Me — Forever &amp; Always 💕
                  </p>
                </div>
              </div>

              {/* ──────────────────────────────
                  PERSONAL LOVE MESSAGE
              ────────────────────────────── */}
              <div
                className="relative mb-8 px-5 py-6 rounded-2xl"
                style={{
                  background: "linear-gradient(135deg, rgba(255,77,109,0.07), rgba(180,20,80,0.11), rgba(100,5,50,0.09))",
                  border: "1px solid rgba(255,120,150,0.14)",
                }}
              >
                {/* Section label */}
                <div className="flex items-center justify-center gap-2 mb-5">
                  <Sparkles size={13} style={{ color: "#ff85a1", animation: "sparkSpin 4s linear infinite" }} />
                  <span style={{ color: "rgba(255,160,185,0.55)", fontSize: "10px", fontFamily: "Georgia, serif", letterSpacing: "0.12em", textTransform: "uppercase" }}>
                    A Letter From My Heart
                  </span>
                  <Sparkles size={13} style={{ color: "#ff85a1", animation: "sparkSpin 4s linear infinite reverse" }} />
                </div>

                {/* Love lines with staggered reveal */}
                <div className="space-y-2 text-center">
                  {LOVE_LINES.map((line, i) => (
                    <p
                      key={i}
                      className={linesVisible ? "line-reveal" : ""}
                      style={{
                        animationDelay: linesVisible ? `${line.delay}s` : "0s",
                        fontFamily: "'Lora', Georgia, serif",
                        fontStyle: line.big ? "normal" : "italic",
                        fontWeight: line.big ? 600 : 400,
                        fontSize: line.big ? "1.08rem" : "0.94rem",
                        color: line.big
                          ? "#ffb3c6"
                          : line.accent
                          ? "#ff85a1"
                          : "rgba(255,200,215,0.82)",
                        textShadow: line.big ? "0 0 18px rgba(255,100,140,0.38)" : "none",
                        letterSpacing: line.big ? "0.03em" : "0.01em",
                        lineHeight: 1.75,
                      }}
                    >
                      {line.text}
                    </p>
                  ))}
                </div>
              </div>

              {/* ──────────────────────────────
                  QUOTES SECTION
              ────────────────────────────── */}
              <div className="mb-8">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <Star size={12} fill="rgba(255,150,170,0.5)" style={{ color: "transparent" }} />
                  <span style={{ color: "rgba(255,150,175,0.5)", fontSize: "10px", fontFamily: "Georgia, serif", letterSpacing: "0.12em", textTransform: "uppercase" }}>
                    Words From My Soul
                  </span>
                  <Star size={12} fill="rgba(255,150,170,0.5)" style={{ color: "transparent" }} />
                </div>

                <div
                  className="relative px-6 py-5 rounded-2xl text-center"
                  style={{
                    background: "linear-gradient(135deg, rgba(255,255,255,0.038), rgba(200,40,80,0.09))",
                    border: "1px solid rgba(255,130,160,0.14)",
                    minHeight: "90px",
                  }}
                >
                  {/* Decorative quote mark */}
                  <span
                    className="absolute top-2 left-4 text-5xl leading-none pointer-events-none select-none"
                    style={{ color: "rgba(255,100,140,0.12)", fontFamily: "Georgia, serif" }}
                  >
                    "
                  </span>

                  <p
                    className={quoteFade ? "quote-in" : "quote-out"}
                    style={{
                      fontFamily: "'Playfair Display', Georgia, serif",
                      fontStyle: "italic",
                      fontSize: "1.05rem",
                      color: "rgba(255,210,225,0.9)",
                      textShadow: "0 0 18px rgba(255,100,140,0.22)",
                      lineHeight: 1.72,
                      letterSpacing: "0.02em",
                    }}
                  >
                    {QUOTES[quoteIdx]}
                  </p>

                  {/* Progress dots */}
                  <div className="flex justify-center gap-1.5 mt-3">
                    {QUOTES.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => {
                          setQuoteFade(false);
                          setTimeout(() => { setQuoteIdx(i); setQuoteFade(true); }, 300);
                        }}
                        style={{
                          width: i === quoteIdx ? "22px" : "6px",
                          height: "6px",
                          borderRadius: "3px",
                          background: i === quoteIdx ? "linear-gradient(90deg, #ff4d6d, #c9184a)" : "rgba(255,150,170,0.22)",
                          border: "none", cursor: "pointer",
                          transition: "all 0.4s ease", padding: 0,
                        }}
                      />
                    ))}
                  </div>
                </div>

                <div className="flex justify-center mt-3">
                  <button
                    onClick={nextQuote}
                    className="flex items-center gap-1.5 text-xs transition-all duration-200 hover:scale-105 active:scale-95 px-4 py-2 rounded-full"
                    style={{
                      fontFamily: "'Lora', Georgia, serif",
                      fontStyle: "italic",
                      color: "rgba(255,160,185,0.6)",
                      border: "1px solid rgba(255,130,160,0.14)",
                      background: "rgba(255,100,140,0.05)",
                    }}
                  >
                    <Heart size={10} fill="rgba(255,140,160,0.6)" style={{ color: "transparent" }} />
                    Next thought
                    <ArrowRight size={10} />
                  </button>
                </div>
              </div>

              {/* ──────────────────────────────
                  LOVE STATS / COUNTERS
              ────────────────────────────── */}
              <div className="flex justify-center gap-3 mb-8">
                {[
                  { icon: <Heart size={15} fill="#ff4d6d" style={{ color: "#ff4d6d" }} />, label: "Days Together", value: "∞" },
                  { icon: <Gift size={15} style={{ color: "#ff85a1" }} />,                  label: "Memories Made", value: "💕" },
                  { icon: <Smile size={15} style={{ color: "#ffb3c6" }} />,                 label: "Smiles Shared", value: "∞" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center gap-1.5 px-3 py-3 rounded-xl"
                    style={{
                      background: "rgba(255,100,140,0.07)",
                      border: "1px solid rgba(255,130,160,0.11)",
                      flex: 1,
                    }}
                  >
                    {item.icon}
                    <span
                      style={{
                        fontFamily: "'Playfair Display', Georgia, serif",
                        color: "#ffb3c6",
                        fontSize: "1.2rem",
                        fontWeight: 700,
                        textShadow: "0 0 12px rgba(255,100,140,0.4)",
                      }}
                    >
                      {item.value}
                    </span>
                    <span
                      style={{
                        color: "rgba(255,170,190,0.5)",
                        fontFamily: "Georgia, serif",
                        fontSize: "10px",
                        textAlign: "center",
                      }}
                    >
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* ──────────────────────────────
                  PROPOSAL BUTTON
              ────────────────────────────── */}
              <div className="flex justify-center mb-4">
                <div className="relative">
                  {/* Ripple rings */}
                  {[0, 0.65, 1.3].map((delay, i) => (
                    <div
                      key={i}
                      className="absolute inset-0 rounded-full pointer-events-none"
                      style={{
                        border: `2px solid rgba(255,77,109,${0.5 - i * 0.12})`,
                        animation: `rippleRing 2.2s ease-out ${delay}s infinite`,
                      }}
                    />
                  ))}

                  <button
                    ref={btnRef}
                    onClick={handlePropose}
                    className="relative flex items-center gap-2.5 rounded-full font-bold cursor-pointer select-none transition-all duration-300 hover:scale-105 active:scale-95"
                    style={{
                      fontFamily: "'Playfair Display', Georgia, serif",
                      fontSize: "1rem",
                      padding: "16px 32px",
                      background: "linear-gradient(135deg, #ff4d6d 0%, #c9184a 48%, #a4133c 100%)",
                      color: "#fff",
                      letterSpacing: "0.04em",
                      boxShadow: "0 12px 40px rgba(201,24,74,0.65), 0 4px 14px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,210,220,0.2)",
                      border: "1px solid rgba(255,150,170,0.32)",
                    }}
                  >
                    <Sparkles size={17} style={{ color: "#ffd1dc", animation: "sparkSpin 3s linear infinite" }} />
                    Will You Be Mine Forever? 💖
                    <Sparkles size={17} style={{ color: "#ffd1dc", animation: "sparkSpin 3s linear infinite reverse" }} />
                  </button>
                </div>
              </div>

              {/* Post-answer message */}
              {answered && (
                <div
                  className="text-center mt-5 px-5 py-4 rounded-2xl"
                  style={{
                    animation: "fadeSlideUp 0.6s ease forwards",
                    background: "rgba(255,77,109,0.1)",
                    border: "1px solid rgba(255,120,150,0.2)",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "'Playfair Display', Georgia, serif",
                      fontSize: "1.1rem",
                      fontWeight: 600,
                      color: "#ffb3c6",
                      textShadow: "0 0 18px rgba(255,100,140,0.5)",
                    }}
                  >
                    She said Yes! 🎉💕 Forever starts now…
                  </p>
                  <p
                    style={{
                      fontFamily: "'Lora', Georgia, serif",
                      fontStyle: "italic",
                      color: "rgba(255,180,200,0.65)",
                      fontSize: "0.85rem",
                      marginTop: "4px",
                    }}
                  >
                    Enna vida naan un maela love panrathu…
                  </p>
                </div>
              )}

              {/* ── Footer ── */}
              <div
                className="flex justify-center items-center gap-3 mt-8 pt-5"
                style={{ borderTop: "1px solid rgba(255,120,150,0.1)" }}
              >
                <span style={{ color: "rgba(255,150,175,0.38)", fontSize: "11px", fontFamily: "Georgia, serif" }}>
                  Made with all my love
                </span>
                <Heart
                  size={11}
                  fill="rgba(255,100,130,0.5)"
                  style={{ color: "transparent", animation: "heartbeat 2s ease-in-out infinite" }}
                />
                <span style={{ color: "rgba(255,150,175,0.38)", fontSize: "11px", fontFamily: "Georgia, serif" }}>
                  Only for you ❤️
                </span>
              </div>

            </div>

            {/* Bottom shimmer line */}
            <div
              className="absolute bottom-0 left-0 right-0 h-px"
              style={{ background: "linear-gradient(90deg, transparent, rgba(255,100,140,0.48), transparent)" }}
            />
          </div>
        </div>
      </div>
    </>
  );
}