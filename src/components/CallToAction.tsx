import { ArrowRight } from "lucide-react";

const CallToAction = () => {
  return (
    <section
      id="join"
      className="py-20 bg-linear-to-br from-blue-900 via-blue-800 to-green-900 text-white"
    >
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Join the Africa Stablecoin Network Today
        </h2>
        <p className="text-blue-100 max-w-2xl mx-auto mb-8">
          Be part of shaping the future of finance in Africa. Join our network
          and gain access to unparalleled resources, connections, and insights.
        </p>

        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSdFoQScJuGho1k4Y1pMm-Wnqo58mcrIDoN3iqfmpSpfPjoKVg/viewform"
          className="inline-block bg-yellow-500 hover:bg-yellow-600 text-blue-900 px-8 py-3 rounded-full text-lg font-medium transition-colors"
        >
          Apply Now
        </a>
      </div>
    </section>
  );
};

export default CallToAction;
