// import React, { useState } from "react";
// import Header from "./pages/Header"
// import Navbar from "./components/Navbar"
// import Loader from "./components/Loader"
// import Aboutus from "./pages/About";
// import Experience from "./pages/Experience";
// import Projects from "./pages/Projects";
// import Skills from "./pages/Skills";
// import Education from "./pages/Education";
// import Certificates from "./pages/Certificates";
// import ExperienceHero from "./components/ExperienceHero";
// import Contact from "./pages/Contactus";
// import Footer from "./pages/Footer";

// function App() {
// const [isLoading, setIsLoading] = useState(true);
//   return (
//     <>
//    {isLoading && <Loader onComplete={() => setIsLoading(false)} />}
//     {!isLoading && <Navbar />}
//     {!isLoading && <Header />}
//     {!isLoading && <ExperienceHero />}
//     {!isLoading && <Aboutus />}
//     {!isLoading && <Experience />}
//     {!isLoading && <Projects />}
//     {!isLoading && <Skills />}
//     {!isLoading && <Education />}
//     {!isLoading && <Certificates />}
//     {!isLoading && <Contact />}
//     {!isLoading && <Footer />}
//     </>
//   )
// }

// export default App



import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";
import Loader from "./components/Loader";
import Footer from "./pages/Footer";
import ExperienceHero from "./components/ExperienceHero";

// Pages
import Header from "./pages/Header";
import Aboutus from "./pages/About";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Education from "./pages/Education";
import Certificates from "./pages/Certificates";
import Contact from "./pages/Contactus";

import Preloader from "./OldPortfolio/Preloader"
import RoseDayProposal from "./ValentinesDay/RoseDayProposal";
import ProposeDay from "./ValentinesDay/ProposeDay";
import ChocolateDay from "./ValentinesDay/ChocolateDay";
function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Router>
      {isLoading && <Loader onComplete={() => setIsLoading(false)} />}

      {!isLoading && (
        <>
          <Routes>
            {/* Home */}
            <Route
              path="/"
              element={
                <>
                  <Navbar />
                  <Header />
                  <ExperienceHero />
                  <Aboutus />
                  <Experience />
                  <Projects />
                  <Skills />
                  <Education />
                  <Certificates />
                  <Contact />
                  <Footer />
                </>
              }
            />

            {/* Individual Pages */}
            <Route path="/oldproject" element={<Preloader />} />

            <Route path="/rosedayproposal" element={<RoseDayProposal />} />
            <Route path="/proposeday" element={<ProposeDay />} />
            <Route path="/chocolateday" element={<ChocolateDay />} />

            <Route
              path="/jsscrackers"
              element={
                <iframe
                  src="/JssCrackers/index.html"
                  style={{ width: "100%", height: "100vh", border: "none" }}
                  title="Jss Crackers"
                />
              }
            />
            <Route
              path="/calculator"
              element={
                <iframe
                  src="/Calculator/index.html"
                  style={{ width: "100%", height: "100vh", border: "none" }}
                  title="Calculator"
                />
              }
            />
            <Route
              path="/tneb"
              element={
                <iframe
                  src="/TNEB/index.html"
                  style={{ width: "100%", height: "100vh", border: "none" }}
                  title="TNEB bill calculator"
                />
              }
            />
            <Route
              path="/expensetracker"
              element={
                <iframe
                  src="/ExpenseTracker/index.html"
                  style={{ width: "100%", height: "100vh", border: "none" }}
                  title="Expense Tracker"
                />
              }
            />
            {/* Fallback Route */}
            <Route
              path="*"
              element={
                <div className="text-center text-gray-300 py-20 bg-black h-screen flex flex-col justify-center items-center">
                  <h1 className="text-6xl font-extrabold text-blue-400 mb-4">404</h1>
                  <p className="text-lg mb-8">Oops! The page you’re looking for doesn’t exist.</p>
                  <a
                    href="/"
                    className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition-all duration-300"
                  >
                    ⬅ Back to Home
                  </a>
                </div>
              }
            />

          </Routes>
        </>
      )}
    </Router>
  );
}

export default App;
