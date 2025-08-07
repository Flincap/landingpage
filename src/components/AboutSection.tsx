import SectionTitle from './SectionTitle';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="About The Network"
          subtitle="Our Vision & Mission"
        />
        
        <div className="grid md:grid-cols-2 gap-12 mt-12">
          <div className="bg-blue-50 p-8 rounded-2xl shadow-xs border border-blue-100 transform transition-transform hover:scale-[1.02]">
            <h3 className="text-2xl font-bold text-blue-900 mb-4 flex items-center">
              <span className="text-blue-600 mr-3 text-3xl">☆</span>
              Our Vision
            </h3>
            <p className="text-neutral-700 leading-relaxed">
              "To be the leading platform for fostering collaboration, innovation, and growth of stablecoin ecosystems across Africa."
            </p>
          </div>
          
          <div className="bg-green-50 p-8 rounded-2xl shadow-xs border border-green-100 transform transition-transform hover:scale-[1.02]">
            <h3 className="text-2xl font-bold text-blue-900 mb-4 flex items-center">
              <span className="text-green-600 mr-3 text-3xl">↗</span>
              Our Mission
            </h3>
            <p className="text-neutral-700 leading-relaxed">
              "Our mission is to create a unified network for all stakeholders in the stablecoin industry, facilitating knowledge exchange, advocacy, and the development of robust infrastructures that support financial inclusion and economic growth."
            </p>
          </div>
        </div>

        <div className="mt-16 bg-neutral-50 rounded-2xl p-8 border border-neutral-100">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-center text-blue-900 mb-6">
              Our Commitment
            </h3>
            <p className="text-neutral-700 text-center leading-relaxed mb-8">
              The Africa Stablecoin Network is committed to advancing the adoption and integration of stablecoins across Africa. We believe that collaboration among stakeholders is essential for creating a thriving ecosystem that benefits all Africans.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "Collaboration",
                  description: "Bringing together diverse stakeholders to build a stronger ecosystem",
                },
                {
                  title: "Innovation",
                  description: "Fostering new solutions to address Africa's unique financial challenges",
                },
                {
                  title: "Inclusion",
                  description: "Ensuring stablecoin benefits reach all segments of society",
                }
              ].map((item, index) => (
                <div key={index} className="text-center p-4">
                  <h4 className="text-lg font-semibold text-blue-900 mb-2">{item.title}</h4>
                  <p className="text-neutral-600 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;