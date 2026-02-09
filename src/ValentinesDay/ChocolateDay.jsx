import React, { useState } from 'react';
import { Heart, Candy, Gift, Sparkles } from 'lucide-react';

export default function ChocolateDay() {
    const [showMessage, setShowMessage] = useState(false);
    const [hugged, setHugged] = useState(false);
    const [secret, setSecret] = useState(false);

    const floatingHearts = Array.from({ length: 15 }, (_, i) => i);

    return (
        <div className="min-h-screen w-full bg-gradient-to-br from-amber-900 via-rose-400 to-pink-300 flex items-center justify-center p-4 overflow-hidden relative">
            {/* Floating Hearts Background */}
            {floatingHearts.map((i) => (
                <div
                    key={i}
                    className="absolute animate-float opacity-20"
                    style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        animationDelay: `${Math.random() * 5}s`,
                        animationDuration: `${8 + Math.random() * 4}s`,
                    }}
                >
                    {i % 3 === 0 ? (
                        <Heart className="text-pink-600" size={20 + Math.random() * 30} fill="currentColor" />
                    ) : i % 3 === 1 ? (
                        <Candy className="text-amber-700" size={20 + Math.random() * 30} />
                    ) : (
                        <Sparkles className="text-rose-400" size={20 + Math.random() * 30} />
                    )}
                </div>
            ))}

            {/* Main Card */}
            <div className="relative z-10 w-full max-w-md">
                {/* Glassmorphism Card */}
                <div className="backdrop-blur-xl bg-white/20 rounded-3xl shadow-2xl p-8 border border-white/30 transform hover:scale-105 transition-transform duration-500">
                    {/* Header with Icon */}
                    <div className="flex justify-center mb-6 animate-bounce">
                        <div className="bg-gradient-to-br from-pink-500 to-rose-600 p-4 rounded-full shadow-lg">
                            <Gift className="text-white" size={48} />
                        </div>
                    </div>

                    {/* Title */}
                    <h1 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-amber-900 to-pink-600 bg-clip-text text-transparent">
                        Happy Chocolate Day! 🍫
                    </h1>

                    {/* Romantic Messages */}
                    <div className="space-y-4 mb-8">
                        <div className="bg-white/30 backdrop-blur-sm rounded-2xl p-4 border border-pink-200/50 transform hover:scale-105 transition-transform">
                            <p className="text-lg text-amber-900 font-medium text-center flex items-center justify-center gap-2">
                                <Heart className="text-rose-500" size={20} fill="currentColor" />
                                You are my Dairy Milk — sweet, irresistible, and always on my mind
                            </p>
                        </div>

                        <div className="bg-white/30 backdrop-blur-sm rounded-2xl p-4 border border-pink-200/50 transform hover:scale-105 transition-transform">
                            <p className="text-lg text-amber-900 font-medium text-center flex items-center justify-center gap-2">
                                <Candy className="text-amber-700" size={20} />
                                Today is Chocolate Day, so I give you chocolate… and my whole heart
                            </p>
                        </div>

                        <div className="bg-white/30 backdrop-blur-sm rounded-2xl p-4 border border-pink-200/50 transform hover:scale-105 transition-transform">
                            <p className="text-lg text-amber-900 font-medium text-center flex items-center justify-center gap-2">
                                <Sparkles className="text-pink-500" size={20} />
                                Every smile of yours melts me more than chocolate ever could
                            </p>
                        </div>
                    </div>

                    {/* Buttons */}
                    <div className="space-y-4">
                        <button
                            onClick={() => setShowMessage(true)}
                            className="w-full bg-gradient-to-r from-amber-700 to-amber-900 hover:from-amber-800 hover:to-amber-950 text-white font-bold py-4 px-6 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
                        >
                            <Candy size={24} />
                            Accept My Chocolate 🍫
                        </button>



                        <button
                            onClick={() => setHugged(true)}
                            className="w-full bg-gradient-to-r from-pink-500 to-rose-600 hover:from-pink-600 hover:to-rose-700 text-white font-bold py-4 px-6 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
                        >
                            <Heart size={24} fill="currentColor" />
                            Hug Me 🤍
                        </button>

                        <button
                            onClick={() => setSecret(true)}
                            className="w-full bg-gradient-to-r from-rose-500 to-rose-600 hover:from-pink-600 hover:to-rose-700 text-white font-bold py-4 px-6 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
                        >
                            Secret 🙈🙈
                        </button>

                    </div>

                    {/* Response Messages */}
                    {showMessage && (
                        <div className="mt-6 bg-gradient-to-r from-pink-100 to-rose-100 rounded-2xl p-6 border-2 border-pink-300 animate-fadeIn">
                            <p className="text-center text-lg font-semibold text-rose-800 flex items-center justify-center gap-2">
                                <Sparkles className="text-pink-600 animate-spin" size={24} />
                                Thank you for accepting! You've made my heart skip a beat! 💕
                                <Sparkles className="text-pink-600 animate-spin" size={24} />
                            </p>
                        </div>
                    )}

                    {hugged && (
                        <div className="mt-6 bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl p-6 border-2 border-purple-300 animate-fadeIn">
                            <p className="text-center text-lg font-semibold text-purple-800 flex items-center justify-center gap-2">
                                <Heart className="text-rose-600 animate-pulse" size={24} fill="currentColor" />
                                *Hugs you tightly* You're the sweetest! 🫂💖
                                <Heart className="text-rose-600 animate-pulse" size={24} fill="currentColor" />
                            </p>
                        </div>
                    )}

                    {secret && (
                        <div className="mt-6 bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl p-6 border-2 border-purple-300 animate-fadeIn">
                            <p className="text-center text-lg font-semibold text-purple-800 flex items-center justify-center gap-2">
                                <Heart className="text-rose-600 animate-pulse" size={24} fill="currentColor" />
                                🙈🙈 I give you chocolate today, but what I really want is your heart... because nothing in this world is sweeter to me than your boobs.🙈🙈
                                <Heart className="text-rose-600 animate-pulse" size={24} fill="currentColor" />
                            </p>
                        </div>
                    )}


                    {/* Footer */}
                    <div className="mt-8 text-center">
                        <p className="text-sm text-amber-900/70 font-medium">
                            You deserve all the chocolate in the world... and all my love too 💝
                        </p>
                    </div>
                </div>

                {/* Floating decorative hearts around the card */}
                <div className="absolute -top-6 -left-6 animate-pulse">
                    <Heart className="text-pink-500" size={40} fill="currentColor" />
                </div>
                <div className="absolute -top-6 -right-6 animate-pulse" style={{ animationDelay: '0.5s' }}>
                    <Candy className="text-amber-700" size={40} />
                </div>
                <div className="absolute -bottom-6 -left-6 animate-pulse" style={{ animationDelay: '1s' }}>
                    <Sparkles className="text-rose-400" size={40} />
                </div>
                <div className="absolute -bottom-6 -right-6 animate-pulse" style={{ animationDelay: '1.5s' }}>
                    <Gift className="text-pink-600" size={40} />
                </div>
            </div>

            {/* Custom CSS for animations */}
            <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-30px) rotate(180deg);
          }
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        .animate-float {
          animation: float linear infinite;
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
      `}</style>
        </div>
    );
}