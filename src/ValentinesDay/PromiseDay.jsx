import React, { useState } from 'react';
import { Heart, Crown, Sparkles } from 'lucide-react';

export default function ProposeDay() {
  const [response, setResponse] = useState('');
  const [showConfetti, setShowConfetti] = useState(false);

  const handleYes = () => {
    setResponse('Loveee youu dii chellamaeee! 💍❤️');
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 3000);
  };

  const handleForever = () => {
    setResponse('Forever and Always 💕✨');
  };

  return (
    <div className="min-h-screen w-full relative overflow-hidden bg-gradient-to-br from-pink-200 via-rose-300 to-pink-400 flex items-center justify-center p-4">
      {/* Animated Background Hearts */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <Heart
            key={i}
            className="absolute text-pink-400/30 animate-float"
            size={Math.random() * 30 + 20}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 10 + 10}s`,
            }}
            fill="currentColor"
          />
        ))}
      </div>

      {/* Confetti Hearts */}
      {showConfetti && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(30)].map((_, i) => (
            <Heart
              key={`confetti-${i}`}
              className="absolute text-rose-500 animate-confetti"
              size={Math.random() * 25 + 15}
              style={{
                left: `${Math.random() * 100}%`,
                top: '-10%',
                animationDelay: `${Math.random() * 0.5}s`,
              }}
              fill="currentColor"
            />
          ))}
        </div>
      )}

      {/* Main Card */}
      <div className="relative z-10 w-full max-w-lg">
        <div className="backdrop-blur-xl bg-white/40 rounded-3xl shadow-2xl border border-white/50 p-8 sm:p-12 transform hover:scale-[1.02] transition-transform duration-500 my-8">
          {/* Sparkle Decorations */}
          <div className="absolute -top-6 -left-6 text-yellow-300 animate-spin-slow">
            <Sparkles size={40} fill="currentColor" />
          </div>
          <div className="absolute -top-6 -right-6 text-pink-300 animate-spin-slow" style={{ animationDelay: '1s' }}>
            <Sparkles size={40} fill="currentColor" />
          </div>
          <div className="absolute -bottom-6 -left-6 text-rose-300 animate-spin-slow" style={{ animationDelay: '2s' }}>
            <Sparkles size={35} fill="currentColor" />
          </div>
          <div className="absolute -bottom-6 -right-6 text-pink-400 animate-spin-slow" style={{ animationDelay: '3s' }}>
            <Sparkles size={35} fill="currentColor" />
          </div>

          {/* Header with Pulsing Heart */}
          <div className="text-center mb-8 animate-fade-in">
            <div className="inline-block mb-4">
              <Heart 
                className="text-rose-500 animate-pulse-slow mx-auto" 
                size={60} 
                fill="currentColor"
              />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-rose-600 via-pink-600 to-rose-600 bg-clip-text text-transparent mb-2 font-serif">
              Happy Propose Day
            </h1>
            <div className="text-3xl sm:text-4xl">💍</div>
          </div>

          {/* Romantic Message */}
          <div className="space-y-5 mb-10 text-center animate-fade-in-delayed">
            <p className="text-lg sm:text-xl text-rose-800 font-medium leading-relaxed">
              I am always with you chelloo ❤️
            </p>
            <p className="text-xl sm:text-2xl text-rose-900 font-semibold leading-relaxed">
              I love you sooo much chellamaee 🥺
            </p>
            
            {/* Additional Heart-touching Quotes */}
            <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-5 my-4 shadow-md border border-pink-200">
              <p className="text-base sm:text-lg text-rose-700 italic leading-relaxed">
                "Every moment without you feels incomplete, <br />
                Every moment with you feels like paradise 💫"
              </p>
            </div>

            <p className="text-lg sm:text-xl text-rose-800 font-medium leading-relaxed">
              You are my sunshine on the darkest days ☀️
            </p>

            <div className="bg-gradient-to-r from-pink-100/80 to-rose-100/80 backdrop-blur-sm rounded-2xl p-5 my-4 shadow-md">
              <p className="text-base sm:text-lg text-rose-800 font-medium leading-relaxed">
                "In your eyes, I found my home 🏡<br />
                In your heart, I found my love 💝<br />
                In your smile, I found my happiness 😊"
              </p>
            </div>

            <p className="text-lg sm:text-xl text-rose-900 font-semibold leading-relaxed">
              You make my heart skip a beat every single day 💓
            </p>

            <div className="flex items-center justify-center gap-2 my-4">
              <p className="text-lg sm:text-xl text-rose-800 font-medium">
                En princess
              </p>
              <Crown className="text-yellow-500 animate-bounce-slow" size={28} fill="currentColor" />
            </div>

            <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-5 my-4 shadow-md border border-pink-200">
              <p className="text-base sm:text-lg text-rose-700 italic leading-relaxed">
                "I choose you today, tomorrow, and forever 💍<br />
                Because loving you is the easiest thing I've ever done ✨"
              </p>
            </div>

            <p className="text-lg sm:text-xl text-rose-800 font-medium leading-relaxed">
              With you, I've found the love I never knew existed 💕
            </p>

            <div className="bg-gradient-to-r from-rose-100/80 to-pink-100/80 backdrop-blur-sm rounded-2xl p-5 my-4 shadow-md">
              <p className="text-base sm:text-lg text-rose-800 font-medium leading-relaxed">
                "You are not just my love,<br />
                You are my life, my dream, my everything 🌟"
              </p>
            </div>

            <p className="text-xl sm:text-2xl text-rose-900 font-bold leading-relaxed">
              I want to grow old with you, my love 👫💕
            </p>

            <div className="relative inline-block mt-6">
              <div className="absolute -inset-2 bg-gradient-to-r from-pink-400 via-rose-400 to-pink-400 rounded-lg blur-lg opacity-50 animate-pulse"></div>
              <p className="relative text-xl sm:text-2xl text-rose-900 font-bold bg-white/60 px-6 py-3 rounded-lg">
                Will you be mine forever?
              </p>
            </div>
          </div>

          {/* Response Message */}
          {response && (
            <div className="text-center mb-6 animate-scale-in">
              <div className="bg-gradient-to-r from-rose-500 to-pink-500 text-white text-xl sm:text-2xl font-bold py-4 px-6 rounded-2xl shadow-lg">
                {response}
              </div>
            </div>
          )}

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-delayed-2">
            <button
              onClick={handleYes}
              className="flex-1 bg-gradient-to-r from-rose-500 via-pink-500 to-rose-500 text-white font-bold text-lg py-4 px-6 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 hover:from-rose-600 hover:via-pink-600 hover:to-rose-600"
            >
              Yes My Love 💖
            </button>
            <button
              onClick={handleForever}
              className="flex-1 bg-white/60 backdrop-blur-sm border-2 border-rose-300 text-rose-700 font-bold text-lg py-4 px-6 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 hover:bg-white/80 hover:border-rose-400 active:scale-95 transition-all duration-300 hover:shadow-rose-300/50"
            >
              Forever With You 🤍
            </button>
          </div>

          {/* Bottom Decoration */}
          <div className="mt-8 flex justify-center gap-2 animate-fade-in-delayed-3">
            {[...Array(5)].map((_, i) => (
              <Heart
                key={i}
                className="text-rose-400 animate-pulse"
                size={16}
                fill="currentColor"
                style={{ animationDelay: `${i * 0.2}s` }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&display=swap');
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
            opacity: 0.3;
          }
          50% {
            transform: translateY(-30px) rotate(10deg);
            opacity: 0.6;
          }
        }

        @keyframes confetti {
          0% {
            transform: translateY(-10%) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(100vh) rotate(720deg);
            opacity: 0;
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes pulse-slow {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
        }

        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .animate-float {
          animation: float linear infinite;
        }

        .animate-confetti {
          animation: confetti 2s ease-out forwards;
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }

        .animate-fade-in-delayed {
          animation: fade-in 1s ease-out 0.3s backwards;
        }

        .animate-fade-in-delayed-2 {
          animation: fade-in 1s ease-out 0.6s backwards;
        }

        .animate-fade-in-delayed-3 {
          animation: fade-in 1s ease-out 0.9s backwards;
        }

        .animate-scale-in {
          animation: scale-in 0.5s ease-out;
        }

        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 2s ease-in-out infinite;
        }

        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }

        .font-serif {
          font-family: 'Playfair Display', serif;
        }
      `}</style>
    </div>
  );
} 