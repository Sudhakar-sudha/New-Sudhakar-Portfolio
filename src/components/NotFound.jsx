
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const generatedStars = Array.from({ length: 45 }, (_, index) => ({
      id: index,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: `${Math.random() * 4}s`,
      duration: `${2 + Math.random() * 4}s`,
      size: `${2 + Math.random() * 3}px`,
    }));

    setStars(generatedStars);
  }, []);

  const handleGoBack = () => {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate("/");
    }
  };

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#070B18] px-5 py-16 text-white">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-32 -top-32 h-80 w-80 rounded-full bg-blue-600/20 blur-[100px]" />
        <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-purple-600/20 blur-[120px]" />

        {/* Animated stars */}
        {stars.map((star) => (
          <span
            key={star.id}
            className="absolute animate-pulse rounded-full bg-white"
            style={{
              left: star.left,
              top: star.top,
              width: star.size,
              height: star.size,
              animationDelay: star.delay,
              animationDuration: star.duration,
              opacity: 0.65,
            }}
          />
        ))}
      </div>

      {/* Decorative elements */}
      <div className="pointer-events-none absolute left-[8%] top-[18%] h-3 w-3 animate-ping rounded-full bg-blue-400/60" />

      <div className="pointer-events-none absolute bottom-[20%] right-[10%] h-2 w-2 animate-pulse rounded-full bg-purple-400" />

      <div className="pointer-events-none absolute right-[15%] top-[15%] h-4 w-4 animate-bounce rounded-full border border-pink-400/40" />

      {/* Main content */}
      <section className="relative z-10 mx-auto w-full max-w-3xl text-center">
        {/* Error icon */}
        <div className="mb-6 inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 p-4 shadow-2xl shadow-blue-500/10 backdrop-blur-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="42"
            height="42"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-blue-400"
            aria-hidden="true"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M12 8v4" />
            <path d="M12 16h.01" />
          </svg>
        </div>

        {/* 404 number */}
        <div className="relative">
          <h1 className="select-none bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-[clamp(5rem,18vw,10rem)] font-black leading-none tracking-tighter text-transparent drop-shadow-2xl">
            404
          </h1>

          <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center">
            <div className="h-40 w-64 rounded-full bg-blue-500/20 blur-[80px] sm:h-56 sm:w-96" />
          </div>
        </div>

        {/* Error message */}
        <h2 className="mt-5 text-2xl font-bold tracking-tight sm:text-4xl">
          Oops! You’ve lost your way.
        </h2>

        <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-gray-400 sm:text-base">
          Looks like this page has wandered into another dimension. The URL
          might be incorrect, or the page may have moved. Let’s get you back
          on track!
        </p>

        {/* Navigation buttons */}
        <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            to="/"
            className="group inline-flex min-w-44 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3.5 font-semibold text-white shadow-lg shadow-blue-900/30 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-900/30 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-[#070B18]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="19"
              height="19"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="m3 10 9-7 9 7" />
              <path d="M5 9v12h14V9" />
              <path d="M9 21v-8h6v8" />
            </svg>

            Go Home

            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>

          <button
            type="button"
            onClick={handleGoBack}
            className="inline-flex min-w-44 items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3.5 font-semibold text-gray-200 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-blue-400/50 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="19"
              height="19"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="m15 18-6-6 6-6" />
              <path d="M9 12h12" />
            </svg>

            Go Back
          </button>
        </div>

        {/* Footer */}
        <div className="mt-12 border-t border-white/10 pt-6">
          <p className="text-xs tracking-wide text-gray-500 sm:text-sm">
            <span className="font-semibold text-gray-300">Sudhakar</span>
            {" "}· Full Stack Developer & Freelancer
          </p>

          <p className="mt-2 text-xs text-gray-600">
            Lost on the web, but never lost in code.
          </p>
        </div>
      </section>
    </main>
  );
};

export default NotFound;
