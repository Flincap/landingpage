import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
import WhyJoinSection from "./components/WhyJoinSection";
import WhyStablecoinsSection from "./components/WhyStablecoinsSection";
import ConferenceSection from "./components/ConferenceSection";
import Gallery from "./components/Gallery";
import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";
import { useState } from "react";
import PrivacyPolicy from "./components/PrivacyPolicy";
import PrivacyPopup from "./components/PrivacyPopup";

function App() {
  const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-neutral-50 font-sans text-neutral-900">
        <Navbar />
        <main>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <AboutSection />
                  <WhyJoinSection />
                  <WhyStablecoinsSection />
                  <ConferenceSection />
                  <Gallery />
                  <CallToAction />
                </>
              }
            />
          </Routes>
        </main>
        {showPrivacyPolicy && (
          <PrivacyPolicy onClose={() => setShowPrivacyPolicy(false)} />
        )}
        <Footer />
        <PrivacyPopup onShowPrivacy={() => setShowPrivacyPolicy(true)} />
      </div>
    </Router>
  );
}

export default App;
