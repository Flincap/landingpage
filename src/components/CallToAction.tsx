import { ArrowRight } from "lucide-react";

const CallToAction = () => {
  return (
    <section
      id="join"
      className="py-20 bg-linear-to-br from-blue-900 via-blue-800 to-green-900 text-white"
    >
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Let's Build the Future of Finance in Africa Together
        </h2>
        <p className="text-blue-100 max-w-2xl mx-auto mb-8">
          Africa Stablecoin Network is a non-profit, non-membership organisation. Whether you're a regulator, founder, investor, researcher, or media partner — let's talk about how we can collaborate to advance stablecoin adoption across the continent.
        </p>

        <a
          href="https://calendly.com/nigeriastablecoinsummit/nss"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-blue-900 px-8 py-3 rounded-full text-lg font-medium transition-colors"
        >
          Book a Call <ArrowRight className="h-5 w-5" />
        </a>
      </div>
    </section>
  );
};

export default CallToAction;
