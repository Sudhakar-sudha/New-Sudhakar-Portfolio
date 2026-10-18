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

import Preloader from "./OldPortfolio/Preloader";
import RoseDayProposal from "./ValentinesDay/RoseDayProposal";
import ProposeDay from "./ValentinesDay/ProposeDay";
import ChocolateDay from "./ValentinesDay/ChocolateDay";
import TeddyDay from "./ValentinesDay/TeddyDay";
import PromiseDay from "./ValentinesDay/PromiseDay";
import HugDay from "./ValentinesDay/HugDay";
import KissDayCard from "./ValentinesDay/KissDay";
import ValentineProposal from "./ValentinesDay/ValentinesDay";
import LoveJourneyDashboard from "./ValentinesDay/AllDay";

const IframePage = ({ src, title }) => (
  <iframe
    src={src}
    title={title}
    style={{ width: "100%", height: "100vh", border: "none" }}
  />
);

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Router>
      {isLoading && <Loader onComplete={() => setIsLoading(false)} />}

      {!isLoading && (
        <Routes>
          {/* Home (CharacterCanvas now lives inside Header) */}
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

          {/* Individual pages */}
          <Route path="/oldproject" element={<Preloader />} />
          <Route path="/rosedayproposal" element={<RoseDayProposal />} />
          <Route path="/promiseday" element={<ProposeDay />} />
          <Route path="/chocolateday" element={<ChocolateDay />} />
          <Route path="/teddyday" element={<TeddyDay />} />
          <Route path="/proposeday" element={<PromiseDay />} />
          <Route path="/hugday" element={<HugDay />} />
          <Route path="/kissday" element={<KissDayCard />} />
          <Route path="/valentinesday" element={<ValentineProposal />} />
          <Route path="/keeruma" element={<LoveJourneyDashboard />} />

          <Route path="/jsscrackers" element={<IframePage src="/JssCrackers/index.html" title="Jss Crackers" />} />
          <Route path="/calculator" element={<IframePage src="/Calculator/index.html" title="Calculator" />} />
          <Route path="/tneb" element={<IframePage src="/TNEB/index.html" title="TNEB bill calculator" />} />
          <Route path="/expensetracker" element={<IframePage src="/ExpenseTracker/index.html" title="Expense Tracker" />} />

          {/* Fallback */}
          <Route
            path="*"
            element={
              <div className="flex h-screen flex-col items-center justify-center bg-black py-20 text-center text-gray-300">
                <h1 className="mb-4 text-6xl font-extrabold text-blue-400">404</h1>
                <p className="mb-8 text-lg">Oops! The page you’re looking for doesn’t exist.</p>
                <a
                  href="/"
                  className="rounded-lg bg-blue-500 px-6 py-3 text-white shadow-md transition-all duration-300 hover:bg-blue-600"
                >
                  ⬅ Back to Home
                </a>
              </div>
            }
          />
        </Routes>
      )}
    </Router>
  );
}

export default App;