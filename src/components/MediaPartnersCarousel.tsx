import React from "react";

const partners = [
  "Coin Telegraph",
  "The Cable",
  "Xinhua",
  "Punch",
  "Nairametrics",
  "cryptopolitan",
  "msn",
  "technext24",
  "bitcoinke",
  "cryptoninjas",
  "atlantic digest",
  "beincrypto",
  "news express",
];

const MediaPartnersCarousel: React.FC = () => {
  return (
    <div className="w-full bg-white py-6 border-b border-neutral-100">
      <div className="container mx-auto px-4">
        <h3 className="text-center text-lg font-semibold text-blue-900 mb-4">
          Media Partners
        </h3>
        <div className="overflow-x-auto">
          <div className="flex space-x-8 animate-scroll whitespace-nowrap">
            {partners.map((partner, idx) => (
              <div
                key={idx}
                className="inline-block bg-neutral-100 rounded-lg px-6 py-3 text-blue-900 font-bold text-base shadow-sm border border-neutral-200 min-w-[160px] text-center mx-2"
              >
                {partner}
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default MediaPartnersCarousel;
