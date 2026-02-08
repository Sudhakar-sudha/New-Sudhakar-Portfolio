import React, { useState } from 'react';
import { Heart, Sparkles, Gift, Lock, Smile, ArrowLeft, Star, Crown, Flame } from 'lucide-react';

export default function ProposeDay() {
  const [response, setResponse] = useState(null);
  const [showPromises, setShowPromises] = useState(false);

  const handleYes = () => {
    setResponse('yes');
  };

  const handleThink = () => {
    setResponse('think');
  };

  const promises = [
    { text: "I'll never leave you, no matter how many years pass", icon: Lock },
    { text: "You are my life, my oxygen, my everything", icon: Heart },
    { text: "Our 2 years together are just the beginning", icon: Sparkles },
    { text: "I know you so well, and I want to know you forever", icon: Smile },
    { text: "Our love is stronger than anything in this world", icon: Flame },
    { text: "Every day with you is a blessing", icon: Star },
    { text: "You make my world complete, my Chelloo", icon: Crown },
    { text: "Ennaikumae na en chellatha kai vida mattaen kettiya pudichupen❤️", icon: Smile}
  ];

return (
  <div className="min-h-screen bg-gradient-to-br from-pink-400 via-rose-500 to-red-500 flex items-center justify-center p-3 sm:p-4 overflow-hidden relative">
    {/* Animated Background Particles */}
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute animate-float-particles"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${8 + Math.random() * 4}s`,
          }}
        >
          {i % 4 === 0 ? (
            <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-white/40" fill="currentColor" />
          ) : i % 4 === 1 ? (
            <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-white/40" />
          ) : i % 4 === 2 ? (
            <Star className="w-5 h-5 sm:w-6 sm:h-6 text-white/40" fill="currentColor" />
          ) : (
            <Gift className="w-5 h-5 sm:w-6 sm:h-6 text-white/40" />
          )}
        </div>
      ))}
    </div>

    {/* Glowing Ring Animation */}
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      <div className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full border-4 border-white/20 animate-pulse-ring"></div>
      <div className="absolute w-48 h-48 sm:w-60 sm:h-60 md:w-72 md:h-72 rounded-full border-4 border-white/10 animate-pulse-ring-delayed"></div>
    </div>

    {/* Main Content Card */}
    <div className="relative z-10 max-w-lg w-full bg-white/98 backdrop-blur-md rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden">
      {!response ? (
        <>
          {/* Header Section */}
          <div className="bg-gradient-to-r from-rose-500 to-red-500 p-3 sm:p-6 text-center">
            <div className="flex justify-center mb-3">
              <div className="relative">
                <Heart className="w-12 h-12 sm:w-14 sm:h-14 text-white animate-bounce-slow" fill="currentColor" />
                <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-300 absolute -top-1 -right-1 animate-spin-slow" />
              </div>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 animate-fade-in-down">
              To My Precious Chelloo
            </h1>
            <p className="text-white/90 text-xs sm:text-sm md:text-base font-medium px-2">
              Thango • Keerthii • Vairo • Ammu • Madam • Iceu • Kuttyma • Laddu Ma • Keeruma • chellamaee • Pattu 
            </p>
          </div>

          {/* Main Message */}
          <div className="p-4 sm:p-6 md:p-8">
            <div className="text-center mb-5 sm:mb-6">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-rose-600 mb-3 sm:mb-4 leading-snug animate-fade-in px-2">
                Will You Be Mine Forever? 🌹
              </h2>
              <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-3 sm:mb-4 px-2">
                2 years-aa namma onna erunthurukoom...
                Unna pathi na evalavu therinjuruken,
                ni enna pathi evalavu therinjuruka ❤️
              </p>
              <p className="text-gray-600 text-xs sm:text-sm md:text-base leading-relaxed px-2">
                Namma love romba strong... Ennum ethana years analum,
                <span className="font-bold text-rose-600"> na unna vittu poka matten!</span>
              </p>
            </div>

            {/* Heart Image */}
            <div className="flex justify-center mb-5 sm:mb-6">
              <div className="relative">
                <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full bg-gradient-to-br from-pink-300 via-rose-400 to-red-400 flex items-center justify-center shadow-xl animate-heartbeat-gentle">
                  <Heart className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 text-white" fill="currentColor" />
                </div>
                <div className="absolute -top-2 -right-2 bg-yellow-400 rounded-full p-2 sm:p-2.5 shadow-lg animate-spin-slow">
                  <Crown className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-900" />
                </div>
                <div className="absolute -bottom-2 -left-2 bg-pink-400 rounded-full p-2 sm:p-2.5 shadow-lg animate-bounce-slow">
                  <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
              </div>
            </div>

            {/* My Promises Button */}
            <button
              onClick={() => setShowPromises(!showPromises)}
              className="w-full mb-3 sm:mb-4 py-3 sm:py-3.5 px-4 bg-gradient-to-r from-purple-400 to-pink-400 text-white font-semibold text-sm sm:text-base rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Gift className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>{showPromises ? 'Hide My Promises' : 'Read My Promises To You'}</span>
            </button>

            {/* Promises List */}
            {showPromises && (
              <div className="mb-5 sm:mb-6 bg-gradient-to-br from-pink-50 to-rose-50 rounded-xl sm:rounded-2xl p-4 sm:p-5 animate-slide-down">
                <h3 className="text-base sm:text-lg font-bold text-rose-600 mb-3 sm:mb-4 text-center flex items-center justify-center gap-2">
                  <Heart className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" />
                  <span>My Promises To You Forever</span>
                  <Heart className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" />
                </h3>
                <div className="space-y-2.5 sm:space-y-3">
                  {promises.map((promise, index) => {
                    const IconComponent = promise.icon;
                    return (
                      <div
                        key={index}
                        className="flex items-start space-x-2 sm:space-x-3 animate-fade-in bg-white/60 rounded-lg p-2.5 sm:p-3 hover:bg-white/80 transition-all duration-300"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        <IconComponent className="w-4 h-4 sm:w-5 sm:h-5 text-rose-500 mt-0.5 sm:mt-1 flex-shrink-0" />
                        <p className="text-gray-700 text-xs sm:text-sm md:text-base leading-relaxed">
                          {promise.text}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="space-y-3">
              <button
                onClick={handleYes}
                className="w-full py-3.5 sm:py-4 px-4 sm:px-6 bg-gradient-to-r from-rose-500 to-red-500 text-white font-bold text-base sm:text-lg rounded-xl sm:rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 animate-glow-pulse"
              >
                <span className="flex items-center justify-center space-x-2">
                  <Heart className="w-5 h-5 sm:w-6 sm:h-6 animate-heartbeat-fast" fill="currentColor" />
                  <span>Yes, I'm Yours Forever</span>
                  <Heart className="w-5 h-5 sm:w-6 sm:h-6 animate-heartbeat-fast" fill="currentColor" />
                </span>
              </button>

              <button
                onClick={handleThink}
                className="w-full py-3.5 sm:py-4 px-4 sm:px-6 bg-white border-2 border-rose-300 text-rose-600 font-semibold text-sm sm:text-base md:text-lg rounded-xl sm:rounded-2xl shadow-md hover:shadow-lg hover:bg-rose-50 hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Smile className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>Let Me Think</span>
              </button>
            </div>
          </div>
        </>
      ) : response === 'yes' ? (
        <div className="p-6 sm:p-8 md:p-12 text-center animate-zoom-in">
          <div className="mb-5 sm:mb-6">
            <div className="flex justify-center mb-4 sm:mb-5">
              <Sparkles className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 text-rose-500 animate-bounce" />
            </div>
            <div className="flex justify-center space-x-3 sm:space-x-4 mb-4">
              <Heart className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 text-rose-500 animate-bounce" fill="currentColor" style={{ animationDelay: '0.1s' }} />
              <Crown className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 text-yellow-500 animate-bounce" style={{ animationDelay: '0.2s' }} />
              <Flame className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 text-orange-500 animate-bounce" style={{ animationDelay: '0.3s' }} />
            </div>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-rose-600 mb-3 sm:mb-4 px-2">
            You Made Me The Happiest Person! 💕
          </h2>
          <p className="text-gray-700 text-base sm:text-lg md:text-xl mb-3 sm:mb-4 leading-relaxed px-2">
            Thank you, my Chelloo!
            You are my life, my oxygen, my everything!
          </p>
          <p className="text-gray-600 text-sm sm:text-base md:text-lg mb-5 sm:mb-6 px-2">
            Our forever journey starts now...
            2 years become 20 years, then 50 years... ❤️
          </p>
          <div className="flex justify-center space-x-4 sm:space-x-6">
            <Gift className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-pink-500 animate-float-up-down" />
            <Heart className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-rose-500 animate-float-up-down" fill="currentColor" style={{ animationDelay: '0.3s' }} />
            <Star className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-yellow-500 animate-float-up-down" fill="currentColor" style={{ animationDelay: '0.6s' }} />
          </div>
        </div>
      ) : (
        <div className="p-6 sm:p-8 md:p-12 text-center animate-fade-in">
          <div className="flex justify-center mb-5 sm:mb-6">
            <Smile className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 text-rose-400 animate-sad-sway" />
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-600 mb-3 sm:mb-4 px-2">
            Take Your Time, My Love
          </h2>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-rose-600 mb-3 sm:mb-4 px-2">
            Ennaikumae na en chellatha kai vida mattaen kettiya pudichupen❤️
          </h2>
          <p className="text-gray-700 text-sm sm:text-base md:text-lg mb-3 sm:mb-4 leading-relaxed px-2">
            I'll be here waiting for you, Chelloo...
            Because true love is patient. ❤️
          </p>
          <p className="text-gray-600 text-xs sm:text-sm md:text-base mb-5 sm:mb-6 px-2">
            You're worth every moment of waiting.
            Na unna vittu poka matten, I promise!
          </p>
          <button
            onClick={() => setResponse(null)}
            className="py-3 sm:py-3.5 px-6 sm:px-8 bg-gradient-to-r from-rose-500 to-red-500 text-white font-semibold text-sm sm:text-base rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 inline-flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            <span>Go Back</span>
          </button>
        </div>
      )}
    </div>

    {/* Advanced CSS Animations */}
    <style jsx>{`
        @keyframes float-particles {
          0%, 100% {
            transform: translate(0, 0) rotate(0deg);
            opacity: 0.4;
          }
          25% {
            opacity: 0.7;
          }
          50% {
            transform: translate(-30px, -40px) rotate(180deg);
            opacity: 0.5;
          }
          75% {
            opacity: 0.8;
          }
        }

        @keyframes pulse-ring {
          0%, 100% {
            transform: scale(1);
            opacity: 0.3;
          }
          50% {
            transform: scale(1.2);
            opacity: 0.1;
          }
        }

        @keyframes pulse-ring-delayed {
          0%, 100% {
            transform: scale(1);
            opacity: 0.2;
          }
          50% {
            transform: scale(1.3);
            opacity: 0.05;
          }
        }

        @keyframes heartbeat-gentle {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.08);
          }
        }

        @keyframes heartbeat-fast {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.3);
          }
        }

        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-15px);
          }
        }

        @keyframes glow-pulse {
          0%, 100% {
            box-shadow: 0 10px 40px rgba(244, 63, 94, 0.4);
          }
          50% {
            box-shadow: 0 10px 60px rgba(244, 63, 94, 0.7);
          }
        }

        @keyframes fade-in-down {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
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

        @keyframes slide-down {
          from {
            opacity: 0;
            max-height: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            max-height: 1000px;
            transform: translateY(0);
          }
        }

        @keyframes zoom-in {
          from {
            opacity: 0;
            transform: scale(0.5);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes float-up-down {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes sad-sway {
          0%, 100% {
            transform: rotate(0deg);
          }
          25% {
            transform: rotate(-10deg);
          }
          75% {
            transform: rotate(10deg);
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

        .animate-float-particles {
          animation: float-particles linear infinite;
        }

        .animate-pulse-ring {
          animation: pulse-ring 3s ease-in-out infinite;
        }

        .animate-pulse-ring-delayed {
          animation: pulse-ring-delayed 3s ease-in-out infinite 0.5s;
        }

        .animate-heartbeat-gentle {
          animation: heartbeat-gentle 2s ease-in-out infinite;
        }

        .animate-heartbeat-fast {
          animation: heartbeat-fast 1s ease-in-out infinite;
        }

        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }

        .animate-glow-pulse {
          animation: glow-pulse 2s ease-in-out infinite;
        }

        .animate-fade-in-down {
          animation: fade-in-down 0.8s ease-out;
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }

        .animate-slide-down {
          animation: slide-down 0.5s ease-out;
        }

        .animate-zoom-in {
          animation: zoom-in 0.6s ease-out;
        }

        .animate-float-up-down {
          animation: float-up-down 2s ease-in-out infinite;
        }

        .animate-sad-sway {
          animation: sad-sway 2s ease-in-out infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 4s linear infinite;
        }
      `}</style>
  </div>
);
}