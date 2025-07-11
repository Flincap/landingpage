import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
import WhyJoinSection from "./components/WhyJoinSection";
import MemberCategories from "./components/MemberCategories";
import WhyStablecoinsSection from "./components/WhyStablecoinsSection";
import ConferenceSection from "./components/ConferenceSection";
import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";
import Events from "./components/Events";

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-neutral-50 font-sans text-neutral-900">
        <Navbar isScrolled={isScrolled} />
        <main>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <AboutSection />
                  <WhyJoinSection />
                  <MemberCategories />
                  <WhyStablecoinsSection />
                  <ConferenceSection />
                  <CallToAction />
                </>
              }
            />
            <Route path="/events" element={<Events />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
