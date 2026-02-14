import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Heart, Sparkles, Star, Gift, ArrowRight, Music } from "lucide-react";

// ─── Day Data ────────────────────────────────────────────────────────────────
const LOVE_DAYS = [
  {
    day: 1,
    name: "Rose Day",
    emoji: "🌹",
    route: "/rosedayproposal",
    tagline: "A rose for the one who makes my life bloom.",
    gradient: "linear-gradient(135deg, #ff6b6b 0%, #ee0979 55%, #c9184a 100%)",
    glow: "rgba(238,9,121,0.55)",
    border: "rgba(255,120,160,0.5)",
    tag: "Day 1",
    particle: "#ff6b9d",
  },
  {
    day: 2,
    name: "Propose Day",
    emoji: "💍",
    route: "/proposeday",
    tagline: "The day I asked my heart to belong to you forever.",
    gradient: "linear-gradient(135deg, #f093fb 0%, #c026d3 55%, #7c3aed 100%)",
    glow: "rgba(192,38,211,0.55)",
    border: "rgba(220,120,255,0.45)",
    tag: "Day 2",
    particle: "#e879f9",
  },
  {
    day: 3,
    name: "Chocolate Day",
    emoji: "🍫",
    route: "/chocolateday",
    tagline: "You make my life sweeter than chocolate.",
    gradient: "linear-gradient(135deg, #f59e0b 0%, #d97706 50%, #92400e 100%)",
    glow: "rgba(217,119,6,0.55)",
    border: "rgba(251,191,36,0.45)",
    tag: "Day 3",
    particle: "#fbbf24",
  },
  {
    day: 4,
    name: "Teddy Day",
    emoji: "🧸",
    route: "/teddyday",
    tagline: "When you hug me, I feel home.",
    gradient: "linear-gradient(135deg, #fb923c 0%, #ea580c 50%, #c2410c 100%)",
    glow: "rgba(234,88,12,0.5)",
    border: "rgba(251,146,60,0.45)",
    tag: "Day 4",
    particle: "#fb923c",
  },
  {
    day: 5,
    name: "Promise Day",
    emoji: "🤝",
    route: "/promiseday",
    tagline: "My promises start and end with you.",
    gradient: "linear-gradient(135deg, #34d399 0%, #059669 50%, #065f46 100%)",
    glow: "rgba(5,150,105,0.5)",
    border: "rgba(52,211,153,0.45)",
    tag: "Day 5",
    particle: "#34d399",
  },
  {
    day: 6,
    name: "Hug Day",
    emoji: "🤗",
    route: "/hugday",
    tagline: "In your arms, I find peace.",
    gradient: "linear-gradient(135deg, #38bdf8 0%, #0284c7 50%, #0c4a6e 100%)",
    glow: "rgba(2,132,199,0.5)",
    border: "rgba(56,189,248,0.45)",
    tag: "Day 6",
    particle: "#38bdf8",
  },
  {
    day: 7,
    name: "Kiss Day",
    emoji: "💋",
    route: "/kissday",
    tagline: "One kiss from you is pure magic.",
    gradient: "linear-gradient(135deg, #f472b6 0%, #ec4899 50%, #be185d 100%)",
    glow: "rgba(236,72,153,0.55)",
    border: "rgba(244,114,182,0.5)",
    tag: "Day 7",
    particle: "#f472b6",
  },
  {
    day: 8,
    name: "Valentine's Day",
    emoji: "❤️",
    route: "/valentinesday",
    tagline: "You are my today, tomorrow, and forever.",
    gradient: "linear-gradient(135deg, #ff4d6d 0%, #c9184a 50%, #7f0000 100%)",
    glow: "rgba(201,24,74,0.65)",
    border: "rgba(255,100,140,0.55)",
    tag: "Day 8 ✨ FINAL",
    particle: "#ff4d6d",
    special: true,
  },
];

// ─── Ambient background hearts (static positions) ────────────────────────────
const BG_HEARTS = Array.from({ length: 16 }, (_, i) => ({
  left: `${(i * 13 + 3) % 97}%`,
  animDelay: `${(i * 0.8) % 9}s`,
  animDur: `${7 + (i % 5) * 1.5}s`,
  size: 14 + (i % 4) * 12,
  opacity: 0.04 + (i % 3) * 0.025,
  emoji: ["❤️", "💕", "💖", "🌸", "✨"][i % 5],
}));

// ─── Mini heart pop on card hover ────────────────────────────────────────────
function CardHearts({ visible, color }) {
  if (!visible) return null;
  return (
    <>
      {[...Array(4)].map((_, i) => (
        <span key={i} className="absolute pointer-events-none select-none"
          style={{
            fontSize: "12px",
            top: `${20 + i * 15}%`,
            right: `${5 + i * 6}%`,
            animation: `miniFloat 1.2s ease-out ${i * 0.15}s forwards`,
            color,
            zIndex: 20,
          }}>❤</span>
      ))}
    </>
  );
}

// ─── Progress ribbon ─────────────────────────────────────────────────────────
function LoveProgress() {
  return (
    <div className="flex items-center justify-center gap-0 flex-wrap mb-10 px-4">
      {LOVE_DAYS.map((d, i) => (
        <div key={d.day} className="flex items-center">
          <div className="flex flex-col items-center group">
            <Link to={d.route}
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center text-base sm:text-lg transition-transform duration-200 hover:scale-125"
              style={{
                background: d.gradient,
                boxShadow: `0 2px 12px ${d.glow}`,
                border: `1.5px solid ${d.border}`,
              }}
              title={d.name}>
              {d.emoji}
            </Link>
            <span className="text-[9px] mt-1 hidden sm:block"
              style={{ color: "rgba(255,180,200,0.4)", fontFamily: "'Lora', serif" }}>
              {d.day}
            </span>
          </div>
          {i < LOVE_DAYS.length - 1 && (
            <div className="w-4 sm:w-6 h-px mx-0.5"
              style={{ background: "linear-gradient(90deg, rgba(255,100,140,0.3), rgba(255,100,140,0.15))" }} />
          )}
        </div>
      ))}
    </div>
  );
}

// ─── Individual Gift Card ─────────────────────────────────────────────────────
function GiftCard({ dayData, index }) {
  const [hovered, setHovered] = useState(false);
  const [entered, setEntered] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setEntered(true), 200 + index * 110);
    return () => clearTimeout(t);
  }, [index]);

  return (
    <div
      className="relative rounded-2xl overflow-visible cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        opacity: entered ? 1 : 0,
        transform: entered
          ? hovered ? "translateY(-10px) scale(1.02)" : "translateY(0) scale(1)"
          : "translateY(28px)",
        transition: entered
          ? "transform 0.35s cubic-bezier(0.34,1.56,0.64,1), opacity 0.5s ease, box-shadow 0.35s ease"
          : "opacity 0.6s ease, transform 0.6s ease",
        boxShadow: hovered
          ? `0 24px 60px ${dayData.glow}, 0 0 0 1px ${dayData.border}`
          : `0 8px 30px ${dayData.glow.replace("0.55", "0.25")}, 0 0 0 1px rgba(255,100,140,0.1)`,
        zIndex: hovered ? 10 : 1,
      }}
    >
      {/* Special shimmer border for Valentine's Day */}
      {dayData.special && (
        <div className="absolute inset-0 rounded-2xl pointer-events-none"
          style={{
            background: "linear-gradient(135deg, rgba(255,100,140,0.6), rgba(200,20,80,0.2), rgba(255,80,120,0.5))",
            backgroundSize: "300% 300%",
            animation: "shimmerBorder 3s ease infinite",
            zIndex: -1, filter: "blur(3px)", inset: "-2px",
          }} />
      )}

      {/* Card body */}
      <div className="relative rounded-2xl overflow-hidden h-full"
        style={{
          background: "linear-gradient(160deg, rgba(255,255,255,0.06) 0%, rgba(0,0,0,0.2) 100%)",
          border: `1px solid ${dayData.border}`,
          backdropFilter: "blur(20px)",
        }}>

        {/* Top gradient band */}
        <div className="h-2 w-full" style={{ background: dayData.gradient }} />

        {/* Mini hover hearts */}
        <CardHearts visible={hovered} color={dayData.particle} />

        <div className="p-5">
          {/* Day badge + emoji */}
          <div className="flex items-start justify-between mb-3">
            <span className="text-xs px-2.5 py-1 rounded-full font-semibold"
              style={{
                background: "rgba(0,0,0,0.35)",
                border: `1px solid ${dayData.border}`,
                color: "rgba(255,200,220,0.7)",
                fontFamily: "'Lora', serif",
                letterSpacing: "0.05em",
              }}>
              {dayData.tag}
            </span>
            <span
              className="text-3xl"
              style={{
                display: "inline-block",
                animation: hovered ? "emojiPop 0.5s ease" : "none",
                filter: `drop-shadow(0 0 8px ${dayData.particle})`,
              }}>
              {dayData.emoji}
            </span>
          </div>

          {/* Gift icon + Name */}
          <div className="flex items-center gap-2 mb-2">
            <Gift size={14} style={{ color: dayData.particle, flexShrink: 0 }} />
            <h3 className="font-bold text-base sm:text-lg leading-tight"
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                background: dayData.gradient,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}>
              {dayData.name}
            </h3>
          </div>

          {/* Tagline */}
          <p className="text-xs sm:text-sm leading-relaxed mb-5"
            style={{
              fontFamily: "'Lora', Georgia, serif",
              fontStyle: "italic",
              color: "rgba(255,200,215,0.75)",
              minHeight: "38px",
            }}>
            "{dayData.tagline}"
          </p>

          {/* CTA Button */}
          <Link to={dayData.route}
            className="flex items-center justify-between w-full px-4 py-2.5 rounded-xl font-semibold text-sm transition-all duration-200 hover:scale-[1.03] active:scale-95 group/btn"
            style={{
              background: dayData.gradient,
              color: "#fff",
              boxShadow: hovered ? `0 6px 20px ${dayData.glow}` : "none",
              fontFamily: "'Playfair Display', serif",
              letterSpacing: "0.03em",
              border: `1px solid ${dayData.border}`,
              textDecoration: "none",
            }}>
            <span className="flex items-center gap-1.5">
              <Heart size={13} fill="white" style={{ color: "white" }} />
              Open Surprise
            </span>
            <ArrowRight size={15} className="transition-transform duration-200 group-hover/btn:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  );
}

// ─── Love Message Section ─────────────────────────────────────────────────────
const MSG_LINES = [
  { text: "Love you diii Chellamaeee ❤️", size: "text-xl sm:text-2xl", weight: "font-bold", color: "#ff6b9d" },
  { text: "En Ammu Kutty…", size: "text-base sm:text-lg", weight: "font-normal", color: "#ffb3c6", italic: true },
  { text: "En Chella Kutty…", size: "text-base sm:text-lg", weight: "font-normal", color: "#ffb3c6", italic: true },
  { text: "My Pondatii… My Wife…", size: "text-lg sm:text-xl", weight: "font-semibold", color: "#ff4d6d" },
  { text: "Ellamae nee than ❤️", size: "text-2xl sm:text-3xl", weight: "font-bold", color: "#ff2d55" },
  { text: "You are not part of my life…", size: "text-base sm:text-lg", weight: "font-medium", color: "#ffd6e0" },
  { text: "You are my whole life.", size: "text-xl sm:text-2xl", weight: "font-bold", color: "#ff6b9d" },
];

function LoveMessage() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    const el = document.getElementById("love-msg");
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div id="love-msg" className="text-center py-12 px-6">
      <div className="inline-block mb-6">
        <div className="flex items-center justify-center gap-3 mb-2">
          <Sparkles size={16} style={{ color: "#ff85a1", animation: "sparkFloat 2s ease-in-out infinite" }} />
          <span className="text-xs uppercase tracking-[0.2em]"
            style={{ color: "rgba(255,150,180,0.45)", fontFamily: "'Lora', serif" }}>
            From My Heart
          </span>
          <Sparkles size={16} style={{ color: "#ff85a1", animation: "sparkFloat 2s ease-in-out infinite 0.5s" }} />
        </div>
        <div className="h-px w-48 mx-auto"
          style={{ background: "linear-gradient(90deg, transparent, rgba(255,100,140,0.4), transparent)" }} />
      </div>

      <div className="space-y-3 max-w-lg mx-auto">
        {MSG_LINES.map((line, i) => (
          <p key={i}
            className={`${line.size} ${line.weight} leading-relaxed transition-all duration-700`}
            style={{
              fontFamily: line.weight === "font-bold" ? "'Playfair Display', Georgia, serif" : "'Lora', Georgia, serif",
              fontStyle: line.italic ? "italic" : "normal",
              color: line.color,
              textShadow: `0 0 30px ${line.color}55`,
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(20px)",
              transitionDelay: `${i * 250}ms`,
              letterSpacing: "0.02em",
            }}>
            {line.text}
          </p>
        ))}
      </div>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function LoveJourneyDashboard() {
  const [loaded, setLoaded] = useState(false);
  const [musicOn, setMusicOn] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      {/* ── Global Keyframes ── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400;1,700&family=Lora:ital,wght@0,400;0,500;0,600;1,400;1,500&display=swap');

        @keyframes bgFloat {
          0%, 100% { transform: translateY(0) rotate(-5deg); }
          50%       { transform: translateY(-22px) rotate(5deg); }
        }
        @keyframes bgHeartRise {
          0%   { transform: translateY(0); opacity: 0.8; }
          100% { transform: translateY(-100vh); opacity: 0; }
        }
        @keyframes titleShimmer {
          0%   { background-position: 0% 50%; }
          50%  { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes heartbeat {
          0%, 100% { transform: scale(1); }
          14%  { transform: scale(1.22); }
          28%  { transform: scale(1); }
          42%  { transform: scale(1.12); }
          56%  { transform: scale(1); }
        }
        @keyframes sparkFloat {
          0%, 100% { transform: translateY(0) scale(1); opacity: 0.6; }
          50%       { transform: translateY(-7px) scale(1.2); opacity: 1; }
        }
        @keyframes miniFloat {
          0%   { transform: translateY(0) scale(1); opacity: 1; }
          100% { transform: translateY(-50px) scale(0.3); opacity: 0; }
        }
        @keyframes emojiPop {
          0%   { transform: scale(1); }
          40%  { transform: scale(1.35) rotate(-8deg); }
          70%  { transform: scale(0.9) rotate(4deg); }
          100% { transform: scale(1) rotate(0deg); }
        }
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes shimmerBorder {
          0%   { background-position: 0% 50%; }
          50%  { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes orbPulse1 {
          0%, 100% { transform: translate(0,0) scale(1); opacity: 0.45; }
          33%       { transform: translate(25px,-18px) scale(1.1); opacity: 0.65; }
          66%       { transform: translate(-18px,14px) scale(0.9); opacity: 0.35; }
        }
        @keyframes orbPulse2 {
          0%, 100% { transform: translate(0,0) scale(1); opacity: 0.4; }
          33%       { transform: translate(-22px,18px) scale(1.12); opacity: 0.6; }
          66%       { transform: translate(18px,-12px) scale(0.88); opacity: 0.3; }
        }
        @keyframes musicBounce {
          0%, 100% { transform: rotate(-12deg) scale(1); }
          50%       { transform: rotate(12deg) scale(1.1); }
        }
        @keyframes specialPulse {
          0%, 100% { box-shadow: 0 0 20px rgba(255,77,109,0.4); }
          50%       { box-shadow: 0 0 50px rgba(255,77,109,0.75), 0 0 80px rgba(200,24,74,0.3); }
        }
      `}</style>

      {/* ── Full-screen wrapper ── */}
      <div
        className="min-h-screen w-full relative overflow-x-hidden"
        style={{ background: "radial-gradient(ellipse at 35% 25%, #3d0030 0%, #1a0020 40%, #0a000f 100%)" }}
      >
        {/* Ambient orbs */}
        <div className="fixed pointer-events-none"
          style={{ top: "-8%", left: "-12%", width: "65%", height: "65%",
            background: "radial-gradient(circle, rgba(200,20,100,0.28), transparent 70%)",
            filter: "blur(55px)", animation: "orbPulse1 10s ease-in-out infinite" }} />
        <div className="fixed pointer-events-none"
          style={{ bottom: "-12%", right: "-10%", width: "60%", height: "60%",
            background: "radial-gradient(circle, rgba(140,10,80,0.25), transparent 70%)",
            filter: "blur(65px)", animation: "orbPulse2 13s ease-in-out infinite" }} />
        <div className="fixed pointer-events-none"
          style={{ top: "35%", right: "5%", width: "35%", height: "35%",
            background: "radial-gradient(circle, rgba(120,0,100,0.18), transparent 70%)",
            filter: "blur(50px)", animation: "orbPulse1 16s ease-in-out infinite reverse" }} />

        {/* Floating bg hearts */}
        {BG_HEARTS.map((h, i) => (
          <div key={i} className="fixed pointer-events-none select-none"
            style={{
              left: h.left, bottom: "-5%",
              fontSize: `${h.size}px`,
              opacity: h.opacity,
              filter: "blur(2.5px)",
              animation: `bgHeartRise ${h.animDur} ease-in ${h.animDelay} infinite`,
            }}>
            {h.emoji}
          </div>
        ))}

        {/* Music toggle */}
        <button
          onClick={() => setMusicOn(!musicOn)}
          className="fixed top-4 right-4 z-50 w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110"
          style={{
            background: "rgba(255,80,120,0.18)",
            border: "1px solid rgba(255,100,140,0.35)",
            backdropFilter: "blur(10px)",
            color: musicOn ? "#ff6b9d" : "rgba(255,130,160,0.4)",
            animation: musicOn ? "musicBounce 1.5s ease-in-out infinite" : "none",
          }}
          title={musicOn ? "Music On" : "Music Off"}>
          <Music size={15} />
        </button>

        {/* ── Page Content ── */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 pt-10 pb-16">

          {/* ── Hero Section ── */}
          <div
            className="text-center mb-8"
            style={{
              opacity: loaded ? 1 : 0,
              transform: loaded ? "translateY(0)" : "translateY(30px)",
              transition: "opacity 0.9s ease, transform 0.9s ease",
            }}>

            {/* Icon crown */}
            <div className="flex justify-center items-center gap-2 mb-4">
              {[Star, Sparkles, Heart, Sparkles, Star].map((Icon, i) => (
                <Icon key={i} size={i === 2 ? 24 : 15}
                  fill={i === 2 ? "#ff4d6d" : "none"}
                  style={{
                    color: i === 2 ? "#ff4d6d" : "#ffb3c6",
                    animation: `${i === 2 ? "heartbeat" : "sparkFloat"} ${1.6 + i * 0.25}s ease-in-out infinite`,
                    animationDelay: `${i * 0.2}s`,
                  }} />
              ))}
            </div>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-3"
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                background: "linear-gradient(90deg, #ffb3c6, #ff6b9d, #ff2d55, #c9184a, #ff85a1, #ffd6e0, #ffb3c6)",
                backgroundSize: "300% 100%",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                animation: "titleShimmer 5s ease infinite",
              }}>
              Our Love Journey ❤️
            </h1>

            <p className="text-base sm:text-lg max-w-md mx-auto mb-1"
              style={{
                fontFamily: "'Lora', Georgia, serif",
                fontStyle: "italic",
                color: "rgba(255,185,205,0.75)",
                letterSpacing: "0.02em",
              }}>
              "Every day with you is a beautiful chapter of my heart."
            </p>

            {/* Subtitle badge */}
            <div className="inline-flex items-center gap-2 mt-3 px-4 py-1.5 rounded-full"
              style={{
                background: "rgba(255,80,120,0.12)",
                border: "1px solid rgba(255,100,140,0.25)",
                backdropFilter: "blur(8px)",
              }}>
              <Heart size={11} fill="#ff6b9d" style={{ color: "#ff6b9d", animation: "heartbeat 2s infinite" }} />
              <span className="text-xs" style={{ color: "rgba(255,160,190,0.65)", fontFamily: "'Lora', serif", letterSpacing: "0.1em" }}>
                February 7 → 14 · 8 Days of Love
              </span>
              <Heart size={11} fill="#ff6b9d" style={{ color: "#ff6b9d", animation: "heartbeat 2s infinite 0.5s" }} />
            </div>
          </div>

          {/* ── Progress ribbon ── */}
          <div style={{
            opacity: loaded ? 1 : 0,
            transition: "opacity 0.9s ease 0.3s",
          }}>
            <LoveProgress />
          </div>

          {/* ── Section label ── */}
          <div className="flex items-center gap-3 mb-6 px-2"
            style={{
              opacity: loaded ? 1 : 0,
              transition: "opacity 0.9s ease 0.5s",
            }}>
            <div className="flex-1 h-px"
              style={{ background: "linear-gradient(90deg, transparent, rgba(255,100,140,0.35))" }} />
            <div className="flex items-center gap-2">
              <Gift size={14} style={{ color: "#ff85a1" }} />
              <span className="text-xs uppercase tracking-[0.18em]"
                style={{ color: "rgba(255,150,180,0.5)", fontFamily: "'Lora', serif" }}>
                Open Each Surprise
              </span>
              <Gift size={14} style={{ color: "#ff85a1" }} />
            </div>
            <div className="flex-1 h-px"
              style={{ background: "linear-gradient(90deg, rgba(255,100,140,0.35), transparent)" }} />
          </div>

          {/* ── Gift Cards Grid ── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {LOVE_DAYS.map((day, i) => (
              <GiftCard key={day.day} dayData={day} index={i} />
            ))}
          </div>

          {/* ── Special Valentine's spotlight note ── */}
          <div className="text-center mb-4">
            <p className="text-xs" style={{ color: "rgba(255,150,180,0.35)", fontFamily: "'Lora', serif", fontStyle: "italic" }}>
              ✨ Save the best for last — Valentine's Day is waiting for you ✨
            </p>
          </div>

          {/* ── Divider ── */}
          <div className="flex items-center gap-3 mb-2 px-4">
            <div className="flex-1 h-px"
              style={{ background: "linear-gradient(90deg, transparent, rgba(255,80,120,0.25))" }} />
            {[...Array(5)].map((_, i) => (
              <Heart key={i} size={i === 2 ? 16 : 10}
                fill={i === 2 ? "#ff4d6d" : "#ff85a1"}
                style={{ color: "transparent", animation: `heartbeat ${1.5 + i * 0.3}s ease-in-out infinite`, animationDelay: `${i * 0.15}s` }} />
            ))}
            <div className="flex-1 h-px"
              style={{ background: "linear-gradient(90deg, rgba(255,80,120,0.25), transparent)" }} />
          </div>

          {/* ── Lover Message ── */}
          <LoveMessage />

          {/* ── Footer ── */}
          <div className="text-center pt-6 pb-2 border-t"
            style={{ borderColor: "rgba(255,80,120,0.1)" }}>
            <div className="flex justify-center items-center gap-2 mb-1">
              <Sparkles size={11} style={{ color: "rgba(255,130,160,0.35)" }} />
              <span className="text-xs"
                style={{ color: "rgba(255,150,180,0.3)", fontFamily: "'Lora', serif", fontStyle: "italic", letterSpacing: "0.08em" }}>
                Made with every beat of my heart, only for you
              </span>
              <Sparkles size={11} style={{ color: "rgba(255,130,160,0.35)" }} />
            </div>
            <div className="flex justify-center gap-1 mt-1">
              {["🌹","💍","🍫","🧸","🤝","🤗","💋","❤️"].map((e, i) => (
                <span key={i} className="text-sm" style={{ opacity: 0.35 }}>{e}</span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </>
  );
}