import { useState, useEffect, useCallback } from "react";
import { Heart, Sparkles, Gift, Star } from "lucide-react";

const hugImage = "/hug.jpg";

const quotes = [
  { text: "I always tight hug with you chelloo 🫂❤️", sub: "Every moment in your arms is everything." },
  { text: "En chellatha kettiya ketti pudichupen 💞", sub: "You are my world, my everything." },
  { text: "Your hug is my safest place in this world 💖", sub: "Where I belong, forever and always." },
  { text: "In your arms, I forget every pain 🥺❤️", sub: "Your love heals me completely." },
];

const floatingHearts = [
  { id: 1, style: { top: "10%", left: "8%", animationDelay: "0s", animationDuration: "4s" } },
  { id: 2, style: { top: "20%", right: "10%", animationDelay: "1s", animationDuration: "5s" } },
  { id: 3, style: { top: "50%", left: "5%", animationDelay: "2s", animationDuration: "6s" } },
  { id: 4, style: { top: "70%", right: "7%", animationDelay: "0.5s", animationDuration: "4.5s" } },
  { id: 5, style: { top: "35%", left: "3%", animationDelay: "1.5s", animationDuration: "5.5s" } },
  { id: 6, style: { top: "80%", left: "12%", animationDelay: "3s", animationDuration: "4s" } },
  { id: 7, style: { top: "15%", right: "3%", animationDelay: "2.5s", animationDuration: "5s" } },
  { id: 8, style: { top: "60%", right: "12%", animationDelay: "0.8s", animationDuration: "6s" } },
];

const imageFloatingHearts = [
  { id: 1, x: "-translate-x-20", y: "-translate-y-16", delay: "0s", size: 16, color: "text-pink-400" },
  { id: 2, x: "translate-x-20", y: "-translate-y-12", delay: "1s", size: 12, color: "text-rose-500" },
  { id: 3, x: "-translate-x-16", y: "translate-y-16", delay: "2s", size: 14, color: "text-red-400" },
  { id: 4, x: "translate-x-16", y: "translate-y-12", delay: "0.5s", size: 18, color: "text-pink-500" },
  { id: 5, x: "translate-x-0", y: "-translate-y-24", delay: "1.5s", size: 10, color: "text-rose-400" },
];

export default function HugDay() {
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [fadeIn, setFadeIn] = useState(true);
  const [hugCount, setHugCount] = useState(0);
  const [heartPops, setHeartPops] = useState([]);
  const [popId, setPopId] = useState(0);

  const nextQuote = () => {
    setFadeIn(false);
    setTimeout(() => {
      setQuoteIndex((prev) => (prev + 1) % quotes.length);
      setFadeIn(true);
    }, 300);
  };

  const sendHug = useCallback((e) => {
    setHugCount((c) => c + 1);
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const id = popId + 1;
    setPopId(id);
    setHeartPops((prev) => [...prev, { id, x, y }]);
    setTimeout(() => {
      setHeartPops((prev) => prev.filter((p) => p.id !== id));
    }, 900);
  }, [popId]);

  return (
    <div className="min-h-screen w-full relative overflow-hidden font-serif"
      style={{ background: "linear-gradient(135deg, #ff9a9e 0%, #fad0c4 25%, #fbc2eb 50%, #f9a8d4 75%, #f43f5e 100%)" }}>

      {/* Animated grain overlay */}
      <div className="absolute inset-0 opacity-10 pointer-events-none"
        style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E\")", backgroundSize: "200px" }} />

      {/* Glowing orbs background */}
      <div className="absolute top-10 left-1/4 w-64 h-64 rounded-full opacity-30 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, #ff6b9d, transparent)" }} />
      <div className="absolute bottom-20 right-1/4 w-80 h-80 rounded-full opacity-25 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, #c471f5, transparent)" }} />
      <div className="absolute top-1/2 left-0 w-48 h-48 rounded-full opacity-20 blur-2xl pointer-events-none"
        style={{ background: "radial-gradient(circle, #fa709a, transparent)" }} />

      {/* Floating background hearts */}
      {floatingHearts.map((h) => (
        <div key={h.id} className="absolute pointer-events-none opacity-20" style={h.style}>
          <Heart
            className="text-pink-300"
            style={{
              width: 20 + (h.id % 3) * 8,
              height: 20 + (h.id % 3) * 8,
              animation: `floatUp ${h.style.animationDuration} ${h.style.animationDelay} ease-in-out infinite alternate`,
            }}
            fill="currentColor"
          />
        </div>
      ))}

      {/* CSS Keyframes injected */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Lato:wght@300;400&display=swap');
        
        .font-display { font-family: 'Playfair Display', serif; }
        .font-body { font-family: 'Lato', sans-serif; }

        @keyframes floatUp {
          0% { transform: translateY(0px) rotate(0deg); opacity: 0.15; }
          100% { transform: translateY(-25px) rotate(8deg); opacity: 0.3; }
        }
        @keyframes floatImage {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
        @keyframes heartbeat {
          0%, 100% { transform: scale(1); }
          15% { transform: scale(1.3); }
          30% { transform: scale(1); }
          45% { transform: scale(1.15); }
          60% { transform: scale(1); }
        }
        @keyframes floatOrbit {
          0% { transform: translateY(0px) scale(1); opacity: 0.8; }
          50% { transform: translateY(-10px) scale(1.1); opacity: 1; }
          100% { transform: translateY(0px) scale(1); opacity: 0.8; }
        }
        @keyframes sparkle {
          0%, 100% { transform: rotate(0deg) scale(1); opacity: 0.7; }
          50% { transform: rotate(180deg) scale(1.2); opacity: 1; }
        }
        @keyframes popHeart {
          0% { transform: translate(-50%, -50%) scale(0); opacity: 1; }
          60% { transform: translate(-50%, -80%) scale(1.4); opacity: 1; }
          100% { transform: translate(-50%, -120%) scale(0.8); opacity: 0; }
        }
        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes glowPulse {
          0%, 100% { box-shadow: 0 0 20px rgba(244, 63, 94, 0.4), 0 0 40px rgba(244, 63, 94, 0.2); }
          50% { box-shadow: 0 0 40px rgba(244, 63, 94, 0.7), 0 0 80px rgba(244, 63, 94, 0.4), 0 0 100px rgba(251, 113, 133, 0.3); }
        }
        @keyframes titleGlow {
          0%, 100% { text-shadow: 0 0 10px rgba(255, 100, 130, 0.5); }
          50% { text-shadow: 0 0 20px rgba(255, 100, 130, 0.9), 0 0 40px rgba(255, 150, 170, 0.5); }
        }
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        .float-image { animation: floatImage 4s ease-in-out infinite; }
        .heartbeat { animation: heartbeat 2s ease-in-out infinite; }
        .sparkle-anim { animation: sparkle 3s ease-in-out infinite; }
        .orbit-float { animation: floatOrbit ease-in-out infinite; }
        .title-glow { animation: titleGlow 2.5s ease-in-out infinite; }
        .btn-glow { animation: glowPulse 2s ease-in-out infinite; }
        .pop-heart { animation: popHeart 0.9s ease-out forwards; }
        .fade-in { opacity: 1; transition: opacity 0.3s ease-in; }
        .fade-out { opacity: 0; transition: opacity 0.3s ease-out; }
      `}</style>

      {/* Main content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-lg">

          {/* Glassmorphism Card */}
          <div className="rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden"
            style={{
              background: "rgba(255, 220, 230, 0.22)",
              backdropFilter: "blur(24px)",
              WebkitBackdropFilter: "blur(24px)",
              border: "1.5px solid rgba(255,150,180,0.45)",
              boxShadow: "0 32px 64px rgba(244, 63, 94, 0.25), inset 0 1px 0 rgba(255,180,200,0.5)",
            }}>

            {/* Inner shimmer border */}
            <div className="absolute inset-0 rounded-3xl pointer-events-none"
              style={{
                background: "linear-gradient(135deg, rgba(255,182,193,0.3) 0%, transparent 50%, rgba(255,150,180,0.1) 100%)",
              }} />

            {/* ===== SECTION 1: TITLE ===== */}
            <div className="text-center mb-8 relative">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Sparkles className="sparkle-anim text-pink-500" size={18} style={{ animationDelay: "0.3s" }} />
                <Star className="sparkle-anim text-rose-400" size={14} style={{ animationDelay: "0.7s" }} />
                <Sparkles className="sparkle-anim text-pink-400" size={16} style={{ animationDelay: "1.1s" }} />
              </div>
              <h1 className="font-display title-glow text-3xl sm:text-4xl font-bold leading-tight"
                style={{ color: "#ff1a75", letterSpacing: "-0.5px" }}>
                Happy Hug Day
              </h1>
              <h2 className="font-display italic text-2xl sm:text-3xl font-normal mt-1 text-pink-600"
                style={{ textShadow: "0 2px 10px rgba(200,50,80,0.4)" }}>
                My Chelloo 🫂💗
              </h2>
              <div className="flex items-center justify-center gap-2 mt-2">
                <Star className="sparkle-anim text-rose-400" size={14} style={{ animationDelay: "0.2s" }} />
                <Sparkles className="sparkle-anim text-pink-500" size={18} style={{ animationDelay: "0.9s" }} />
                <Star className="sparkle-anim text-rose-300" size={14} style={{ animationDelay: "0.5s" }} />
              </div>
              <div className="mt-3 h-px w-24 mx-auto rounded-full"
                style={{ background: "linear-gradient(90deg, transparent, rgba(255,105,150,0.7), transparent)" }} />
            </div>

            {/* ===== SECTION 2: HUG IMAGE ===== */}
            <div className="relative flex items-center justify-center mb-10" style={{ height: 280 }}>

              {/* Orbiting hearts around image */}
              {imageFloatingHearts.map((h) => (
                <div key={h.id}
                  className={`absolute orbit-float ${h.color}`}
                  style={{
                    top: "50%",
                    left: "50%",
                    transform: `translate(-50%, -50%) translate(${
                      h.x.replace("translate-x-", "").replace("-translate-x-", "-").replace("px","") === "0"
                        ? "0px"
                        : h.x.includes("-translate-x-")
                          ? `-${h.x.replace("-translate-x-", "")}px`
                          : `${h.x.replace("translate-x-", "")}px`
                    }, ${
                      h.y.includes("-translate-y-")
                        ? `-${h.y.replace("-translate-y-", "")}px`
                        : `${h.y.replace("translate-y-", "")}px`
                    })`,
                    animationDelay: h.delay,
                    animationDuration: "3s",
                  }}>
                  <Heart size={h.size} fill="currentColor" />
                </div>
              ))}

              {/* Soft glow ring */}
              <div className="absolute rounded-full pointer-events-none btn-glow"
                style={{ width: 220, height: 220,
                  background: "radial-gradient(circle, rgba(244,63,94,0.25) 0%, transparent 70%)" }} />

              {/* Image */}
              <div className="float-image relative z-10 rounded-3xl overflow-hidden"
                style={{
                  width: 200,
                  height: 200,
                  boxShadow: "0 0 30px rgba(244,63,94,0.5), 0 0 60px rgba(244,63,94,0.25), 0 20px 40px rgba(0,0,0,0.25)",
                  border: "3px solid rgba(255,255,255,0.5)",
                }}>
                <img
                  src={hugImage}
                  alt="Hug Day"
                  className="w-full h-full object-cover"
                  style={{ filter: "brightness(1.05) saturate(1.1)" }}
                  onError={(e) => {
                    e.target.style.display = "none";
                    e.target.parentNode.innerHTML = `<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:linear-gradient(135deg,#ff9a9e,#fbc2eb);font-size:80px;">🫂</div>`;
                  }}
                />
              </div>
            </div>

            {/* ===== SECTION 3: QUOTE ===== */}
            <div className="text-center mb-8">
              <div className="rounded-2xl px-6 py-5 mb-5 relative overflow-hidden"
                style={{
                  background: "rgba(255,182,193,0.25)",
                  border: "1px solid rgba(255,105,150,0.35)",
                  minHeight: 100,
                }}>
                <div className={`transition-opacity duration-300 ${fadeIn ? "opacity-100" : "opacity-0"}`}>
                  <div className="heartbeat inline-block mb-2">
                    <Heart className="text-rose-300 mx-auto" size={20} fill="currentColor" />
                  </div>
                  <p className="font-display text-pink-900 text-lg sm:text-xl font-semibold leading-snug mb-2"
                    style={{ textShadow: "0 2px 8px rgba(255,100,130,0.3)" }}>
                    {quotes[quoteIndex].text}
                  </p>
                  <p className="font-body text-rose-900 font-bold text-sm tracking-wide">
                    {quotes[quoteIndex].sub}
                  </p>
                </div>

                {/* Quote number dots */}
                <div className="flex justify-center gap-1.5 mt-3">
                  {quotes.map((_, i) => (
                    <div key={i}
                      className="rounded-full transition-all duration-300"
                      style={{
                        width: i === quoteIndex ? 20 : 6,
                        height: 6,
                        background: i === quoteIndex ? "rgba(255,20,100,0.9)" : "rgba(255,100,150,0.35)",
                      }} />
                  ))}
                </div>
              </div>

              {/* Next Quote Button */}
              <button
                onClick={nextQuote}
                className="group relative overflow-hidden px-7 py-3 rounded-full font-body font-semibold text-pink-50 text-sm tracking-wide transition-all duration-300 hover:scale-105 active:scale-95"
                style={{
                  background: "linear-gradient(135deg, #f43f5e, #ec4899, #f43f5e)",
                  backgroundSize: "200% auto",
                  boxShadow: "0 4px 20px rgba(244,63,94,0.5)",
                  border: "1.5px solid rgba(255,150,180,0.5)",
                }}>
                <span className="relative z-10 flex items-center gap-2">
                  Give Me One More Hug 💞
                </span>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: "linear-gradient(135deg, rgba(255,182,193,0.25), transparent)" }} />
              </button>
            </div>

            {/* Divider */}
            <div className="flex items-center gap-3 mb-8">
              <div className="flex-1 h-px" style={{ background: "rgba(255,105,150,0.35)" }} />
              <Heart className="text-pink-400 opacity-80" size={14} fill="currentColor" />
              <div className="flex-1 h-px" style={{ background: "rgba(255,105,150,0.35)" }} />
            </div>

            {/* ===== SECTION 4: HUG COUNTER ===== */}
            <div className="text-center mb-8">
              <div className="inline-flex flex-col items-center gap-3">
                {hugCount > 0 && (
                  <div className="fade-in font-display text-pink-800 text-center">
                    <div className="flex items-center justify-center gap-2 mb-1">
                      {[...Array(Math.min(hugCount, 5))].map((_, i) => (
                        <Heart key={i} className="text-pink-300" size={16} fill="currentColor"
                          style={{ animation: `floatOrbit 1.5s ${i * 0.15}s ease-in-out infinite` }} />
                      ))}
                    </div>
                    <p className="font-body text-pink-600 text-sm tracking-widest uppercase mb-1">Hugs Sent</p>
                    <p className="text-4xl font-bold"
                      style={{ color: "#e91e8c", textShadow: "0 0 20px rgba(255,100,180,0.6)" }}>
                      {hugCount}
                    </p>
                    <p className="text-black text-xs mt-1 font-body">
                      {hugCount === 1 ? "First hug sent! 🥺" : hugCount < 5 ? "Keep them coming! 💗" : hugCount < 10 ? "So many hugs! 🫂" : "Infinite love! ♾️❤️"}
                    </p>
                  </div>
                )}

                {/* Hug Button */}
                <button
                  onClick={sendHug}
                  className="group relative overflow-hidden px-8 py-4 rounded-full font-body font-bold text-pink-50 text-base tracking-wide transition-all duration-300 hover:scale-105 active:scale-95 btn-glow"
                  style={{
                    background: "linear-gradient(135deg, #ff6b9d, #c471f5, #ff6b9d)",
                    backgroundSize: "200% auto",
                    animation: "glowPulse 2s ease-in-out infinite",
                    border: "2px solid rgba(255,150,200,0.5)",
                  }}>
                  <span className="relative z-10 flex items-center gap-2">
                    <Gift size={18} />
                    Send Tight Hug 🤗
                  </span>
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"
                    style={{ background: "rgba(255,182,193,0.2)" }} />

                  {/* Heart pops */}
                  {heartPops.map((pop) => (
                    <div key={pop.id} className="pop-heart absolute pointer-events-none z-20"
                      style={{ left: pop.x, top: pop.y }}>
                      <Heart className="text-pink-200" size={20} fill="currentColor" />
                    </div>
                  ))}
                </button>
              </div>
            </div>

            {/* ===== SECTION 5: FINAL ROMANTIC FOOTER ===== */}
            <div className="text-center relative py-6 rounded-2xl"
              style={{
                background: "rgba(255,182,193,0.2)",
                border: "1px solid rgba(255,105,150,0.3)",
              }}>
              <div className="flex justify-center gap-2 mb-3">
                <Heart className="heartbeat text-rose-300" size={16} fill="currentColor" style={{ animationDelay: "0s" }} />
                <Heart className="heartbeat text-pink-400" size={22} fill="currentColor" style={{ animationDelay: "0.4s" }} />
                <Heart className="heartbeat text-rose-300" size={16} fill="currentColor" style={{ animationDelay: "0.8s" }} />
              </div>
              <p className="font-display title-glow text-xl sm:text-2xl font-bold leading-tight"
                style={{ color: "#c0006a", textShadow: "0 0 25px rgba(255,100,130,0.5)" }}>
                Forever Your
              </p>
              <p className="font-display italic text-rose-600 text-xl sm:text-2xl font-semibold mt-0.5"
                style={{ textShadow: "0 0 20px rgba(255,100,130,0.4)" }}>
                Ketti Pudikkara Paiyan 💗
              </p>
              <div className="flex justify-center items-center gap-2 mt-3">
                <Sparkles className="sparkle-anim text-pink-500" size={14} />
                <p className="font-body text-pink-700 text-xs tracking-widest uppercase">
                  With All My Love & Hugs
                </p>
                <Sparkles className="sparkle-anim text-pink-500" size={14} style={{ animationDelay: "1s" }} />
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}