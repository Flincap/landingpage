import { ChevronDown } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-[url('/hero-bg.jpg')] bg-cover bg-center py-20"
    >
      <div className="absolute inset-0 bg-black/70 backdrop-blur-[1px]"></div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-loose font-anton">
          Africa Stablecoin Network
        </h1>
        <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8 font-['Source_Sans_3',sans-serif]">
          Join the pioneers shaping the future of digital finance in Africa
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="https://forms.gle/H6tDNApgEATnotiM8"
            className="bg-white hover:bg-neutral-100 text-blue-900 px-8 py-3 rounded-full text-lg font-medium transition-colors"
          >
            Join Now
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-white/80 hover:text-white">
          <ChevronDown size={32} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
