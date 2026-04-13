import { motion } from "motion/react";
import SectionTitle from "./SectionTitle";

// Drop your 30 photos into /public as asn-gall1.jpg ... asn-gall30.jpg
const galleryImages = Array.from({ length: 30 }, (_, i) => `/asn-gall${i + 1}.jpg`);

const Gallery = () => {
  const rows = [
    galleryImages.slice(0, 10),
    galleryImages.slice(10, 20),
    galleryImages.slice(20, 30),
  ];

  return (
    <section
      id="gallery"
      className="py-20 bg-gradient-to-b from-blue-950 via-blue-900 to-blue-950 overflow-hidden"
    >
      <div className="container mx-auto px-4 mb-12">
        <SectionTitle
          title="Moments from the Movement"
          subtitle="Highlights from Africa Stablecoin Network events, summits, and community gatherings across the continent."
          lightText
          centered
        />
      </div>

      <div className="space-y-4">
        {rows.map((row, rowIdx) => (
          <div
            key={rowIdx}
            className="flex gap-4 px-4"
            style={{
              transform: rowIdx % 2 === 1 ? "translateX(-40px)" : "none",
            }}
          >
            {row.map((src, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.04 }}
                className="relative flex-shrink-0 w-[260px] h-[180px] rounded-xl overflow-hidden shadow-2xl ring-1 ring-white/10 hover:ring-green-500/50 hover:scale-[1.03] transition-all"
              >
                <img
                  src={src}
                  alt={`ASN event moment ${rowIdx * 10 + i + 1}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).style.display = "none";
                  }}
                />
              </motion.div>
            ))}
          </div>
        ))}
      </div>

      <div className="container mx-auto px-4 mt-20">
        <div className="max-w-4xl mx-auto text-center mb-8">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Watch the Recap
          </h3>
          <p className="text-blue-200">
            Relive the energy and impact of our last summit.
          </p>
        </div>
        <div className="max-w-4xl mx-auto aspect-video rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/x8DxbBTnbgs"
            title="Nigeria Stablecoin Summit Recap"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
};

export default Gallery;
