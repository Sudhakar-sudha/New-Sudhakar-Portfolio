import React, { useState, useEffect } from 'react';
import { Heart, Sparkles, Star, Gift, Music, Smile } from 'lucide-react';

const RoseDayProposal = () => {
  const [accepted, setAccepted] = useState(false);
  const [petals, setPetals] = useState([]);
  const [hearts, setHearts] = useState([]);
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    const petalArray = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 8 + Math.random() * 4,
      size: 8 + Math.random() * 12,
      rotation: Math.random() * 360,
    }));
    setPetals(petalArray);
  }, []);

  useEffect(() => {
    if (accepted) {
      setShowConfetti(true);
      const heartArray = Array.from({ length: 15 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 2,
        duration: 3 + Math.random() * 2,
      }));
      setHearts(heartArray);
    }
  }, [accepted]);

  return (
    <div className="relative min-h-screen w-full max-w-[390px] mx-auto overflow-hidden bg-gradient-to-br from-rose-200 via-pink-300 to-red-200">
      <style>{`
        @keyframes fall {
          0% {
            transform: translateY(-10vh) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(110vh) rotate(720deg);
            opacity: 0.3;
          }
        }
        @keyframes fadeSlideUp {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes heartbeat {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }
        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.1);
            opacity: 0.8;
          }
        }
        @keyframes glow {
          0%, 100% {
            filter: drop-shadow(0 0 8px rgba(244, 63, 94, 0.4));
          }
          50% {
            filter: drop-shadow(0 0 20px rgba(244, 63, 94, 0.7));
          }
        }
        @keyframes successFade {
          0% {
            opacity: 0;
            transform: scale(0.8);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
        @keyframes heartFloat {
          0% {
            transform: translateY(100vh) scale(0);
            opacity: 0;
          }
          20% {
            opacity: 1;
            transform: translateY(80vh) scale(1);
          }
          100% {
            transform: translateY(-10vh) scale(0.5);
            opacity: 0;
          }
        }
        @keyframes sparkle {
          0%, 100% {
            transform: scale(0) rotate(0deg);
            opacity: 0;
          }
          50% {
            transform: scale(1) rotate(180deg);
            opacity: 1;
          }
        }
        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        @keyframes rotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .petal {
          position: absolute;
          background: radial-gradient(ellipse at center, #fb7185 0%, #f43f5e 50%, #be123c 100%);
          border-radius: 50% 50% 50% 0;
          opacity: 0.8;
        }
        .card-animate {
          animation: fadeSlideUp 1s ease-out;
        }
        .heartbeat {
          animation: heartbeat 1.5s ease-in-out infinite;
        }
        .pulse {
          animation: pulse 2s ease-in-out infinite;
        }
        .glow-animate {
          animation: glow 2s ease-in-out infinite;
        }
        .success-animate {
          animation: successFade 0.6s ease-out;
        }
        .heart-float {
          animation: heartFloat 4s ease-in-out infinite;
        }
        .sparkle-animate {
          animation: sparkle 2s ease-in-out infinite;
        }
        .bounce-animate {
          animation: bounce 2s ease-in-out infinite;
        }
        .rotate-animate {
          animation: rotate 3s linear infinite;
        }
      `}</style>

      {petals.map((petal) => (
        <div
          key={petal.id}
          className="petal"
          style={{
            left: `${petal.left}%`,
            width: `${petal.size}px`,
            height: `${petal.size}px`,
            animation: `fall ${petal.duration}s linear ${petal.delay}s infinite`,
            transform: `rotate(${petal.rotation}deg)`,
          }}
        />
      ))}

      {showConfetti && hearts.map((heart) => (
        <Heart
          key={heart.id}
          className="absolute text-red-500 heart-float"
          size={24}
          fill="currentColor"
          style={{
            left: `${heart.left}%`,
            animationDelay: `${heart.delay}s`,
            animationDuration: `${heart.duration}s`,
          }}
        />
      ))}

      <div className="absolute top-4 left-4 sparkle-animate">
        <Sparkles className="text-yellow-300" size={32} />
      </div>
      <div className="absolute top-4 right-4 sparkle-animate" style={{ animationDelay: '0.5s' }}>
        <Star className="text-yellow-400" size={28} />
      </div>
      <div className="absolute bottom-4 left-4 pulse">
        <Music className="text-rose-600" size={28} />
      </div>
      <div className="absolute bottom-4 right-4 rotate-animate">
        <Gift className="text-red-600" size={28} />
      </div>

      <div className="relative z-10 flex items-center justify-center min-h-screen p-6">
        {!accepted ? (
          <div className="card-animate w-full max-w-sm bg-white/20 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-white/30">
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bounce-animate">
              <div className="bg-rose-500 rounded-full p-3 shadow-lg">
                <Heart className="text-white" size={32} fill="currentColor" />
              </div>
            </div>

            <div className="glow-animate mb-6 mt-4 relative">
              <img
                src="/roseday.png"
                alt="Proposal moment"
                className="w-full h-64 object-cover rounded-2xl shadow-lg"
              />
              <div className="absolute top-2 right-2">
                <Sparkles className="text-yellow-300 sparkle-animate" size={24} />
              </div>
            </div>

            <div className="flex justify-center gap-2 mb-4">
              <Heart className="text-rose-600 pulse" size={20} fill="currentColor" />
              <Heart className="text-pink-600 pulse" size={20} fill="currentColor" style={{ animationDelay: '0.2s' }} />
              <Heart className="text-red-600 pulse" size={20} fill="currentColor" style={{ animationDelay: '0.4s' }} />
            </div>

            <h1 className="text-3xl font-bold text-center text-rose-900 mb-4 flex items-center justify-center gap-2">
              Happy Rose Day, My Love
              <span className="inline-block bounce-animate">🌹</span>
            </h1>

            <p className="text-lg text-center text-rose-800 leading-relaxed mb-6 font-medium">
              Every moment with you feels magical. This rose carries my heart, my promise, and my forever. Will you be mine?
            </p>

            <div className="flex items-center justify-center gap-3 mb-6 text-rose-700">
              <Sparkles className="sparkle-animate" size={20} />
              <Star className="sparkle-animate" size={20} style={{ animationDelay: '0.3s' }} />
              <Heart className="pulse" size={20} fill="currentColor" />
              <Star className="sparkle-animate" size={20} style={{ animationDelay: '0.6s' }} />
              <Sparkles className="sparkle-animate" size={20} style={{ animationDelay: '0.9s' }} />
            </div>

            <button
              onClick={() => setAccepted(true)}
              className="heartbeat w-full bg-gradient-to-r cursor-pointer from-rose-500 to-red-600 text-white text-xl font-bold py-4 px-8 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:from-rose-600 hover:to-red-700 flex items-center justify-center gap-2"
            >
              Say Yes
              <Heart className="inline-block" size={24} fill="currentColor" />
            </button>
          </div>
        ) : (
          <div className="success-animate w-full max-w-sm bg-white/30 backdrop-blur-xl rounded-3xl shadow-2xl p-12 border border-white/40 text-center relative overflow-hidden">
            <div className="absolute top-4 left-4">
              <Smile className="text-yellow-400 bounce-animate" size={32} />
            </div>
            <div className="absolute top-4 right-4">
              <Smile className="text-yellow-400 bounce-animate" size={32} style={{ animationDelay: '0.3s' }} />
            </div>

            <div className="flex justify-center gap-2 mb-4">
              <Star className="text-yellow-400 sparkle-animate" size={28} />
              <Sparkles className="text-yellow-300 sparkle-animate" size={32} style={{ animationDelay: '0.2s' }} />
              <Star className="text-yellow-400 sparkle-animate" size={28} style={{ animationDelay: '0.4s' }} />
            </div>

            <h2 className="text-2xl font-bold text-rose-500 leading-relaxed mb-4 flex items-center justify-center gap-2">
              <Heart className="pulse" size={24} fill="currentColor" />
              Lovee youu dii chellamaeee
              <Heart className="pulse" size={24} fill="currentColor" style={{ animationDelay: '0.3s' }} />
            </h2>

            <div className="flex justify-center items-center gap-3 my-6">
              <Heart className="text-red-500 heartbeat" size={48} fill="currentColor" />
              <span className="text-6xl bounce-animate">🌹</span>
              <Heart className="text-pink-500 heartbeat" size={48} fill="currentColor" style={{ animationDelay: '0.5s' }} />
            </div>

            <h2 className="text-2xl font-bold text-pink-600 leading-relaxed mb-6">
              You just made me the happiest person ❤️🌹
            </h2>

            <div className="flex justify-center gap-3">
              <Gift className="text-red-500 bounce-animate" size={32} />
              <Sparkles className="text-yellow-400 sparkle-animate" size={32} />
              <Music className="text-rose-500 pulse" size={32} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RoseDayProposal;