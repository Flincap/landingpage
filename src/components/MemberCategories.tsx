import { Users, Landmark, Building2, BookOpen, Globe, Building } from 'lucide-react';
import SectionTitle from './SectionTitle';

const MemberCategories = () => {
  const categories = [
    {
      icon: <Landmark className="h-12 w-12" />,
      title: "Stablecoin Issuers",
      description: "Entities that issue stablecoins pegged to various fiat currencies or assets."
    },
    {
      icon: <Globe className="h-12 w-12" />,
      title: "Blockchain Platforms",
      description: "Companies providing the underlying technology for stablecoin transactions."
    },
    {
      icon: <Building2 className="h-12 w-12" />,
      title: "Financial Institutions and Fintechs",
      description: "Banks, payment processors, and fintech firms utilizing stablecoins for transactions."
    },
    {
      icon: <Users className="h-12 w-12" />,
      title: "Policy and Regulatory Stakeholders",
      description: "Government bodies and regulators shaping the legal framework for stablecoin use."
    },
    {
      icon: <BookOpen className="h-12 w-12" />,
      title: "Academic and Research Partners",
      description: "Universities and think tanks researching the impact and potential of stablecoins."
    },
    {
      icon: <Building className="h-12 w-12" />,
      title: "Enterprise and NGOs",
      description: "Organizations leveraging stablecoins for cross-border payments and financial inclusion projects."
    }
  ];

  return (
    <section id="members" className="py-20 bg-blue-900 text-white">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Member Categories"
          subtitle="Who Can Join"
          lightText={true}
        />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {categories.map((category, index) => (
            <div 
              key={index} 
              className="bg-blue-800/50 backdrop-blur-sm rounded-xl p-6 border border-blue-700/50 hover:transform hover:scale-[1.03] transition-all duration-300"
            >
              <div className="text-green-400 mb-4">{category.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-white">{category.title}</h3>
              <p className="text-blue-100/80">{category.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-blue-100 max-w-2xl mx-auto mb-8">
            Each member category plays a vital role in building a robust stablecoin ecosystem in Africa. Together, we can drive innovation, adoption, and positive change.
          </p>
          <a
            href="#join"
            className="inline-block bg-yellow-500 hover:bg-yellow-600 text-blue-900 px-8 py-3 rounded-full text-lg font-bold transition-colors"
          >
            Join Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default MemberCategories;