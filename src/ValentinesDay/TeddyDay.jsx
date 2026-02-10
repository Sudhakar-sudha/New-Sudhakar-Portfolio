import React, { useState } from 'react';
import { Heart, Sparkles, Gift, Smile } from 'lucide-react';

export default function TeddyDay() {
  const [isLoved, setIsLoved] = useState(false);
  const [hearts, setHearts] = useState([]);

  const handleLoveClick = () => {
    setIsLoved(!isLoved);
    
    // Create floating hearts
    const newHearts = Array.from({ length: 12 }, (_, i) => ({
      id: Date.now() + i,
      left: Math.random() * 100,
      delay: Math.random() * 0.5
    }));
    
    setHearts(newHearts);
    
    // Remove hearts after animation
    setTimeout(() => setHearts([]), 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-rose-100 to-pink-200 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-pink-300/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-rose-300/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-pink-200/40 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '0.5s' }}></div>
      
      {/* Floating hearts on click */}
      {hearts.map((heart) => (
        <Heart
          key={heart.id}
          className="absolute text-pink-500 animate-float-up"
          size={20}
          fill="currentColor"
          style={{
            left: `${heart.left}%`,
            bottom: '50%',
            animationDelay: `${heart.delay}s`
          }}
        />
      ))}

      {/* Main content card */}
      <div className="max-w-md w-full">
        {/* Floating teddy icon */}
        <div className="flex justify-center mb-8">
          <div className="relative">
            <div className="absolute inset-0 bg-pink-400/30 rounded-full blur-xl animate-pulse"></div>
            <div className="relative bg-gradient-to-br from-pink-300 to-rose-400 p-6 rounded-full animate-bounce-slow shadow-2xl">
              <Gift className="text-white" size={48} />
            </div>
            <Sparkles 
              className="absolute -top-2 -right-2 text-yellow-400 animate-spin-slow" 
              size={24} 
              fill="currentColor"
            />
          </div>
        </div>

        {/* Romantic heading */}
        <h1 className="text-4xl font-bold text-center mb-6 bg-gradient-to-r from-pink-600 via-rose-500 to-pink-600 bg-clip-text text-transparent animate-glow" 
            style={{ fontFamily: 'Georgia, serif' }}>
          Happy Teddy Day, My Love 🧸❤️
        </h1>

        {/* Love message card */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-xl hover:scale-105 transition-all duration-300 mb-6 border border-pink-200/50">
          <div className="flex items-start gap-3 mb-4">
            <Heart className="text-pink-500 mt-1 flex-shrink-0 animate-pulse" size={20} fill="currentColor" />
            <p className="text-gray-700 leading-relaxed" style={{ fontFamily: 'Georgia, serif' }}>
              {isLoved ? (
                <span className="animate-fade-in">
                  Every moment with you feels like a warm hug from the softest teddy. You're my comfort, my joy, my forever cuddle buddy. I love you more than words can express! 💕✨
                </span>
              ) : (
                <span>
                  Just like this teddy, I want to be with you forever—holding you, comforting you, and loving you endlessly. You make every day feel like a celebration! 🌹
                </span>
              )}
            </p>
          </div>
          
          <div className="flex justify-center gap-2 mt-4">
            <Smile className="text-pink-400 animate-bounce" size={16} style={{ animationDelay: '0s' }} />
            <Smile className="text-rose-400 animate-bounce" size={16} style={{ animationDelay: '0.2s' }} />
            <Smile className="text-pink-500 animate-bounce" size={16} style={{ animationDelay: '0.4s' }} />
          </div>
        </div>

        {/* Interactive button */}
        <button
          onClick={handleLoveClick}
          className="w-full bg-gradient-to-r from-pink-500 via-rose-500 to-pink-500 text-white font-semibold py-4 px-8 rounded-full shadow-lg hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 animate-pulse-gentle"
        >
          <span className="flex items-center justify-center gap-2">
            <Heart size={20} fill="currentColor" />
            Tap to Feel My Love 💖
            <Heart size={20} fill="currentColor" />
          </span>
        </button>

        {/* Cute footer */}
        <p className="text-center mt-8 text-pink-600 text-sm" style={{ fontFamily: 'Georgia, serif' }}>
          Made with ❤️ just for you
        </p>
      </div>

      <style jsx>{`
        @keyframes float-up {
          0% {
            transform: translateY(0) scale(1);
            opacity: 1;
          }
          100% {
            transform: translateY(-300px) scale(0.5);
            opacity: 0;
          }
        }

        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
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

        @keyframes pulse-gentle {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.9;
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-float-up {
          animation: float-up 2.5s ease-out forwards;
        }

        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 4s linear infinite;
        }

        .animate-pulse-gentle {
          animation: pulse-gentle 2s ease-in-out infinite;
        }

        .animate-fade-in {
          animation: fade-in 0.5s ease-in;
        }
      `}</style>
    </div>
  );
}