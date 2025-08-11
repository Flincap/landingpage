import { ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import { motion } from "motion/react";

const Hero = () => {
  const backgroundImages = [
    "/hero1.jpg",
    "/hero2.jpg",
    "/hero3.jpg",
    "/hero5.JPG",
    "/hero6.jpg",
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((currentIndex) => {
        const nextIndex = currentIndex + 1;
        if (nextIndex >= backgroundImages.length) {
          return 0;
        } else {
          return nextIndex;
        }
      });
    }, 5000);
    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center py-20 pt-28"
    >
      <div className="absolute inset-0">
        {backgroundImages.map((image, index) => (
          <motion.div
            key={index}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${image})` }}
            initial={{ opacity: 0 }}
            animate={{
              opacity: index === currentImageIndex ? 1 : 0,
            }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
        ))}
      </div>
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
            Become a member
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
