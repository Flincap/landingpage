import React from "react";
import { ArrowUpRight } from "lucide-react";

const upcomingEvents = [
  {
    title: "Lagos Stablecoin Leadership Breakfast",
    description:
      "The Lagos Stablecoin Leadership Breakfast is a high-level convening designed for thought leaders, pioneers, and policy shapers in Nigeria's stablecoin and payments ecosystem. Hosted by the Africa Stablecoin Network (ASN), this event offers a unique platform to explore the future of borderless payments, foster impactful connections, and ignite strategic conversations around regulatory frameworks, innovation, and adoption.",
    image: "/lslb.jpeg",
    link: "https://lagos.afristablecoin.org/",
  },
  {
    title: "West Africa Stablecoin Summit, Abuja - November 2025",
    description:
      "The West Africa Stablecoin Summit is a high-impact convening of policymakers, fintech leaders, blockchain innovators, and investors focused on unlocking the potential of stablecoins to drive cross-border trade, financial inclusion, and economic growth across West Africa.",
    image: "/wass.PNG",
    link: "https://wass.afristablecoin.org",
  },
];

const pastEvents = [
  {
    title: "Nigeria Stablecoin Summit, Lagos - July 2025",
    description:
      "The Nigeria Stablecoin Summit, held on July 24, 2025, at The Ballroom, Oriental Hotel in Lagos, was a landmark gathering that brought Africa’s digital finance ecosystem under one roof. The event featured a powerful keynote from Dr. Emomotimi Agama, Director General of the Securities and Exchange Commission (SEC), whose bold remarks signaled Nigeria’s readiness to embrace stablecoins and set the tone for the future of digital finance across the continent. Another impactful keynote was delivered by Nathaniel Luz, President of the Africa Stablecoins Network, titled “Emerging Technologies: Africa's Last Chance”, which challenged leaders across the continent to see stablecoins and blockchain as transformative levers for inclusive growth. Attendees were inspired by an engaging fireside chat with visionary investor Iyin Aboyeji and energized by the Startup Pitch Competition, sponsored by Cloudplexo, where the innovative Cryptonia emerged as winner from a stellar lineup of six finalists. The Essay Competition, sponsored by Zabira, also celebrated bright young minds pushing the industry forward. With strong media coverage and high‑level participation, the summit elevated the conversation on stablecoins to new heights and cemented Africa Stablecoin Network’s role at the forefront of driving innovation, regulation, and adoption across Africa.",
    image: "/nss.PNG",
    gallery: [
      "/nss-gall1.jpg",
      "/nss-gall2.jpg",
      "/nss-gall3.JPG",
      "/nss-gall4.JPG",
      "/nss-gall5.JPG",
      "/nss-gall6.JPG",
      "/nss-gall7.JPG",
      "/nss-gall8.JPG",
    ],
  },
];

const Events: React.FC = () => {
  return (
    <section className="py-20 bg-neutral-50 min-h-screen">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-blue-900 mb-10 text-center">
          Our Events
        </h2>

        {/* Upcoming Events */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-blue-900 mb-8">
            Upcoming Events
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {upcomingEvents.map((event, idx) => (
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
                  <h4 className="text-xl font-semibold text-blue-900 mb-2">
                    {event.title}
                  </h4>
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

        {/* Past Events */}
        <div>
          <h3 className="text-2xl font-semibold text-blue-900 mb-8">
            Past Events
          </h3>
          <div className="grid md:grid-cols-1 gap-8">
            {pastEvents.map((event, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl shadow-lg overflow-hidden border border-neutral-100 flex flex-col opacity-90"
              >
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full object-contain object-top block"
                />
                <div className="p-6 pt-8 flex-1 flex flex-col">
                  <h4 className="text-xl font-semibold text-blue-900 mb-2">
                    {event.title}
                  </h4>
                  <p className="text-neutral-700 mb-4 flex-1">
                    {event.description}
                  </p>
                  <div className="mt-4">
                    <h5 className="text-lg font-semibold text-blue-900 mb-2">
                      Photo Gallery
                    </h5>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {event.gallery.map((img, i) => (
                        <img
                          key={i}
                          src={img}
                          alt={`Gallery ${i + 1}`}
                          className="w-full h-64 object-cover rounded-lg shadow-sm"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;
