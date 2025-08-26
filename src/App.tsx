import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
// import MediaPartnersCarousel from "./components/MediaPartnersCarousel";
import AboutSection from "./components/AboutSection";
import WhyJoinSection from "./components/WhyJoinSection";
import MemberCategories from "./components/MemberCategories";
import WhyStablecoinsSection from "./components/WhyStablecoinsSection";
import ConferenceSection from "./components/ConferenceSection";
import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";
import Events from "./components/Events";
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
                  {/* <MediaPartnersCarousel /> */}
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
