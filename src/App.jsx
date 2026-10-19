import React, { useState, useEffect, useCallback } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

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
import NotFound from "./components/NotFound";
import LoveJourneyDashboard from "./ValentinesDay/AllDay";

const IframePage = ({ src, title }) => (
  <iframe
    src={src}
    title={title}
    style={{ width: "100%", height: "100vh", border: "none" }}
  />
);

const Home = ({ onCharacterLoaded }) => (
  <>
    <Navbar />
    <Header onCharacterLoaded={onCharacterLoaded} />
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
);

function AppContent() {
  const { pathname } = useLocation();

  // Loader only on first load of the home page
  const [isLoading, setIsLoading] = useState(pathname === "/");
  const [canvasReady, setCanvasReady] = useState(pathname !== "/");

  const handleCharacterLoaded = useCallback(() => setCanvasReady(true), []);
  const handleLoaderComplete = useCallback(() => setIsLoading(false), []);

  // Failsafe: slow network na kooda loader stuck aagama irukka
  useEffect(() => {
    const t = setTimeout(() => setCanvasReady(true), 15000);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      {isLoading && (
        <Loader ready={canvasReady} onComplete={handleLoaderComplete} />
      )}

      {/* Always mounted, so CharacterCanvas frames load behind the loader */}
      <Routes>
        <Route
          path="/"
          element={<Home onCharacterLoaded={handleCharacterLoaded} />}
        />

        <Route path="/keeruma" element={<LoveJourneyDashboard />} />

        <Route path="/jsscrackers" element={<IframePage src="/JssCrackers/index.html" title="Jss Crackers" />} />
        <Route path="/calculator" element={<IframePage src="/Calculator/index.html" title="Calculator" />} />
        <Route path="/tneb" element={<IframePage src="/TNEB/index.html" title="TNEB bill calculator" />} />
        <Route path="/expensetracker" element={<IframePage src="/ExpenseTracker/index.html" title="Expense Tracker" />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;