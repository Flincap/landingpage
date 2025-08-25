import {
  ArrowUpRight,
  Coins,
  CreditCard,
  DollarSign,
  Percent,
} from "lucide-react";
import SectionTitle from "./SectionTitle";

const WhyStablecoinsSection = () => {
  const stablecoinBenefits = [
    {
      icon: <Coins className="h-10 w-10" />,
      title: "Value Stability",
      description:
        "Mitigate the volatility of traditional cryptocurrencies while maintaining blockchain benefits",
    },
    {
      icon: <CreditCard className="h-10 w-10" />,
      title: "Financial Inclusion",
      description:
        "Provide banking-like services to the unbanked and underbanked population across Africa",
    },
    {
      icon: <ArrowUpRight className="h-10 w-10" />,
      title: "Cross-Border Transactions",
      description:
        "Enable faster and cheaper remittances between African countries and beyond",
    },
    {
      icon: <DollarSign className="h-10 w-10" />,
      title: "Economic Stability",
      description:
        "Offer a hedge against local currency devaluation, helping preserve value",
    },
  ];

  const potentialPoints = [
    "Financial Inclusion: With a large unbanked population, stablecoins provide a gateway to financial services for millions.",
    "Cross-Border Transactions: Facilitating faster and cheaper cross-border payments, crucial for a continent with high remittance volume.",
    "Economic Stability: Offering a hedge against local currency devaluation, helping individuals and businesses preserve value.",
    "Innovation and Investment: Fostering innovation and attracting investment into fintech and blockchain projects across the continent.",
  ];

  const timingPoints = [
    "Growing Digital Adoption: The surge in smartphone usage and internet penetration provides a ready market for digital financial solutions.",
    "Supportive Regulatory Environment: Many African governments are exploring or implementing regulations favorable to blockchain and stablecoins.",
    "Community Building: By joining forces now, stablecoin startups can shape the narrative, influence policy, and drive mass adoption together.",
  ];

  return (
    <section id="stablecoins" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Why Stablecoins For Africa?"
          subtitle="The Opportunity"
        />

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-16 mt-12">
          <div>
            <h3 className="text-2xl font-bold text-blue-900 mb-6">
              The Value of Stablecoins
            </h3>
            <p className="text-neutral-700 mb-8 leading-relaxed">
              Stablecoins offer the stability of traditional fiat currencies
              with the efficiency and transparency of blockchain technology.
              They mitigate the volatility of other cryptocurrencies, making
              them ideal for everyday transactions, remittances, and savings. In
              Africa, where many regions face currency instability and limited
              access to banking, stablecoins provide a reliable and inclusive
              financial tool.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {stablecoinBenefits.map((benefit, index) => (
                <div
                  key={index}
                  className="p-4 bg-neutral-50 rounded-lg border border-neutral-100"
                >
                  <div className="text-green-600 mb-3">{benefit.icon}</div>
                  <h4 className="text-lg font-semibold text-blue-900 mb-2">
                    {benefit.title}
                  </h4>
                  <p className="text-neutral-600 text-sm">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">
                Great Potential in Africa
              </h3>
              <p className="text-neutral-700 mb-4">
                Africa is poised to benefit immensely from stablecoin adoption
                due to several factors:
              </p>
              <ul className="space-y-3">
                {potentialPoints.map((point, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-yellow-500 font-bold mr-2">•</span>
                    <span className="text-neutral-700">{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-blue-900 mb-4">
                Why Now is the Best Time
              </h3>
              <p className="text-neutral-700 mb-4">
                The ecosystem for digital finance in Africa is rapidly evolving,
                and there's no better time for stakeholders to come together:
              </p>
              <ul className="space-y-3">
                {timingPoints.map((point, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-green-600 font-bold mr-2">•</span>
                    <span className="text-neutral-700">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <a
            href="https://lagos.afristablecoin.org/"
            className="inline-block bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full text-lg font-medium transition-colors"
          >
            Learn More at Our Conference
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhyStablecoinsSection;
