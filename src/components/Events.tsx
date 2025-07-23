import React from "react";
import { ArrowUpRight } from "lucide-react";

const events = [
  {
    title: "Nigeria Stablecoin Summit, Lagos - July 2025",
    description:
      "The Nigeria Stablecoin Summit is the continent's premier platform for deep insights, live showcases, and high-value networking across the digital currency and stablecoin space. It is a convening of the country's most forward-thinking builders, regulators, innovators, and investors to explore how stablecoins are reshaping finance, empowering people, and accelerating economic transformation across Africa.",
    image: "/nss.PNG", // Placeholder image
    link: "https://summit.afristablecoin.org",
  },
  {
    title: "Lagos Stablecoin Leadership Breakfast",
    description:
      "The Lagos Stablecoin Leadership Breakfast is a high-level convening designed for thought leaders, pioneers, and policy shapers in Nigeria's stablecoin and payments ecosystem. Hosted by the Africa Stablecoin Network (ASN), this event offers a unique platform to explore the future of borderless payments, foster impactful connections, and ignite strategic conversations around regulatory frameworks, innovation, and adoption.",
    image: "/lslb.jpeg", // Placeholder image
    link: "https://lagos.afristablecoin.org/",
  },
  {
    title: "West Africa Stablecoin Summit, Abuja - November 2025",
    description:
      "The West Africa Stablecoin Summit is a high-impact convening of policymakers, fintech leaders, blockchain innovators, and investors focused on unlocking the potential of stablecoins to drive cross-border trade, financial inclusion, and economic growth across West Africa.",
    image: "/wass.PNG", // Placeholder image
    link: "https://wass.afristablecoin.org",
  },
];

const Events: React.FC = () => {
  return (
    <section className="py-20 bg-neutral-50 min-h-screen">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-blue-900 mb-10 text-center">
          Our Events
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {events.map((event, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-lg overflow-hidden border border-neutral-100 flex flex-col"
            >
              <img
                src={event.image}
                alt={event.title}
                className="w-full object-contain object-top block"
              />
              <div className="p-6 pt-8 flex-1 flex flex-col">
                <h3 className="text-xl font-semibold text-blue-900 mb-2">
                  {event.title}
                </h3>
                <p className="text-neutral-700 mb-4 flex-1">
                  {event.description}
                </p>
                <a
                  href={event.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full text-base font-semibold shadow-md transition-colors mt-auto gap-2"
                >
                  View Event
                  <ArrowUpRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
