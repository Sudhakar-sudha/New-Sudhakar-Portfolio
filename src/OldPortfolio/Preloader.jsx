import Navbar from "./Navbar";
import { useState, useEffect } from "react";

function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 5000); // Simulate loading for 5 seconds
  }, []);

  return (
    <div>
      {loading ? (
        <div>
          <div className="flex flex-col items-center justify-center h-screen">
            <div className="w-16 h-16 border-4 border-dashed mt-10 rounded-full border-gray-600 animate-spin"></div>
            <div>
              <span className="letters">L</span>
              <span className="letters">o</span>
              <span className="letters">a</span>
              <span className="letters">d</span>
              <span className="letters">i</span>
              <span className="letters">n</span>
              <span className="letters">g</span>
              <span className="letters">.</span>
              <span className="letters">.</span>
              <span className="letters">.</span>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <Navbar />
        </div>
      )}
    </div>
  );
}

export default Preloader;
