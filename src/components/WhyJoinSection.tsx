import { CheckCircle2 } from "lucide-react";
import SectionTitle from "./SectionTitle";

const WhyJoinSection = () => {
  const benefits = [
    {
      title: "Networking Opportunities",
      description:
        "Connect with a diverse community of stablecoin issuers, blockchain platforms, financial institutions, fintechs, and regulators.",
    },
    {
      title: "Exclusive Events",
      description:
        "Attend industry-specific events, workshops, and seminars focused on the latest developments in stablecoins.",
    },
    {
      title: "Regulatory Insights",
      description:
        "Gain access to regulatory updates and collaborate with policymakers to shape the future of stablecoin adoption in Africa.",
    },
    {
      title: "Educational Resources",
      description:
        "Access a rich repository of research, case studies, and best practices for stablecoin implementation.",
    },
    {
      title: "Infrastructure Support",
      description:
        "Collaborate on building robust infrastructure and frameworks that enhance the stability and usability of stablecoins.",
    },
    {
      title: "Member Visibility",
      description:
        "Gain recognition as a stablecoin ecosystem contributor and showcase your solutions to a targeted audience.",
    },
  ];

  return (
    <section id="why-join" className="py-20 bg-neutral-50">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Why Join The Network?"
          subtitle="Member Benefits"
        />

        <div className="max-w-4xl mx-auto mt-12">
          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 shadow-xs border border-neutral-100 flex hover:shadow-md transition-shadow"
              >
                <CheckCircle2 className="text-green-600 h-6 w-6 mt-1 shrink-0" />
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-blue-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-neutral-700">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a
              href="https://forms.gle/H6tDNApgEATnotiM8"
              className="inline-block bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full text-lg font-medium transition-colors"
            >
              Join The Network Today
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyJoinSection;
