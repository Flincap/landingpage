import { Calendar, MapPin, Users, Clock, Sparkles } from "lucide-react";
import SectionTitle from "./SectionTitle";

const ConferenceSection = () => {
  const speakerCategories = [
    "Stablecoin Issuers & Operators",
    "Central Bank Representatives",
    "Blockchain Technology Experts",
    "Financial Inclusion Advocates",
    "Fintech Innovators",
    "Regulatory Experts",
  ];

  const sessions = [
    "State of Stablecoins in Africa",
    "Regulatory Frameworks & Compliance",
    "Building Infrastructure for Mass Adoption",
    "Financial Inclusion Through Stablecoins",
    "Cross-Border Payment Solutions",
    "Partnerships & Collaboration Opportunities",
  ];

  return (
    <section
      id="conference"
      className="py-20 bg-neutral-50 relative overflow-hidden"
    >
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-300/10 rounded-full blur-3xl -mr-48 -mt-48 z-0"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-500/10 rounded-full blur-3xl -ml-48 -mb-48 z-0"></div>

      <div className="container mx-auto px-4 relative z-10">
        <SectionTitle
          title="West Africa Stablecoin Summit"
          subtitle="Join Us In Abuja"
        />

        <div className="bg-white rounded-2xl shadow-lg overflow-hidden mt-12 border border-neutral-100">
          <div className="md:flex">
            {/* Left - Image Section */}
            <div className="md:w-2/5 bg-blue-900 p-8 flex items-center justify-center">
              <div className="text-center">
                <h3 className="text-white text-3xl font-bold mb-4">
                  July 30, 2026
                </h3>

                <p className="text-blue-100 mb-2">Lagos, Nigeria</p>
                <p className="text-blue-100 mb-8">8:00am</p>
                <a
                  href="https://tix.africa/discover/nss2026"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-yellow-500 hover:bg-yellow-600 text-blue-900 px-6 py-3 rounded-full text-lg font-bold transition-colors"
                >
                  Register Now
                </a>
              </div>
            </div>

            {/* Right - Conference Details */}
            <div className="md:w-3/5 p-8">
              <h3 className="text-2xl font-bold text-blue-900 mb-6">
                Conference Highlights
              </h3>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start">
                  <Calendar className="text-green-600 h-6 w-6 mt-1 shrink-0" />
                  <div className="ml-4">
                    <h4 className="font-semibold text-blue-900">Date & Time</h4>
                    <p className="text-neutral-700">July 30, 2026</p>
                    <p className="text-neutral-700">8:00am WAT</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPin className="text-green-600 h-6 w-6 mt-1 shrink-0" />
                  <div className="ml-4">
                    <h4 className="font-semibold text-blue-900">Venue</h4>
                    {/* <p className="text-neutral-700">Four Points by Sheraton</p> */}
                    <p className="text-neutral-700">Lagos, Nigeria</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Users className="text-green-600 h-6 w-6 mt-1 shrink-0" />
                  <div className="ml-4">
                    <h4 className="font-semibold text-blue-900">Attendees</h4>
                    <p className="text-neutral-700">
                      Industry leaders, regulators, innovators, and stakeholders
                      from across Nigeria
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="text-green-600 h-6 w-6 mt-1 shrink-0" />
                  <div className="ml-4">
                    <h4 className="font-semibold text-blue-900">Format</h4>
                    <p className="text-neutral-700">
                      Keynotes, panel discussions, workshops, and networking
                      sessions
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="font-semibold text-blue-900 mb-3 flex items-center">
                  <Sparkles className="text-yellow-500 h-5 w-5 mr-2" />
                  Featured Speakers
                </h4>
                <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                  {speakerCategories.map((category, index) => (
                    <div key={index} className="flex items-center">
                      <span className="text-green-600 mr-2">•</span>
                      <span className="text-neutral-700 text-sm">
                        {category}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8">
                <h4 className="font-semibold text-blue-900 mb-3 flex items-center">
                  <Sparkles className="text-yellow-500 h-5 w-5 mr-2" />
                  Key Sessions
                </h4>
                <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                  {sessions.map((session, index) => (
                    <div key={index} className="flex items-center">
                      <span className="text-green-600 mr-2">•</span>
                      <span className="text-neutral-700 text-sm">
                        {session}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-neutral-700 max-w-3xl mx-auto mb-8">
            The West Africa Stablecoin Summit is the premier gathering for
            Stablecoin enthusiasts, issuers, users and regulators in Nigeria.
            Don’t miss this opportunity to be a part of shaping the future of
            digital finance in Nigeria and Africa at large.
          </p>
          <a
            href="https://tix.africa/west-africa-stablecoin-summit"
            className="inline-block bg-blue-900 hover:bg-blue-800 text-white px-8 py-3 rounded-full text-lg font-medium transition-colors"
          >
            Secure Your Spot
          </a>
        </div>
      </div>
    </section>
  );
};

export default ConferenceSection;
