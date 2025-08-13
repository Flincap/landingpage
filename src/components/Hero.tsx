import { ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import { motion } from "motion/react";

const Hero = () => {
  const heroContent = [
    {
      type: "main",
      image: "/hero1.jpg",
      title: "Africa Stablecoin Network",
      description:
        "Join the pioneers shaping the future of digital finance in Africa",
      buttonText: "Become a member",
      buttonLink: "https://forms.gle/H6tDNApgEATnotiM8",
    },
    {
      type: "event",
      image: "/hero2.jpg",
      title: "Lagos Stablecoin Leadership Breakfast",
      description:
        "A high-level convening for thought leaders, pioneers, and policy shapers in Nigeria's stablecoin ecosystem",
      buttonText: "Register Now",
      buttonLink: "https://lagos.afristablecoin.org",
    },
    {
      type: "event",
      image: "/hero3.jpg",
      title: "West Africa Stablecoin Summit",
      description:
        "Join policymakers and fintech leaders to unlock the potential of stablecoins across West Africa",
      buttonText: "Learn More",
      buttonLink: "https://wass.afristablecoin.org",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((current) => {
        const nextIndex = current + 1;
        return nextIndex >= heroContent.length ? 0 : nextIndex;
      });
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center py-20 pt-28"
    >
      <div className="absolute inset-0">
        {heroContent.map((content, index) => (
          <motion.div
            key={index}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${content.image})` }}
            initial={{ opacity: 0 }}
            animate={{
              opacity: index === currentIndex ? 1 : 0,
            }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
        ))}
      </div>
      <div className="absolute inset-0 bg-black/70 backdrop-blur-[1px]"></div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-loose font-anton">
            {heroContent[currentIndex].title}
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8 font-['Source_Sans_3',sans-serif]">
            {heroContent[currentIndex].description}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href={heroContent[currentIndex].buttonLink}
              className="bg-white hover:bg-neutral-100 text-blue-900 px-8 py-3 rounded-full text-lg font-medium transition-colors"
            >
              {heroContent[currentIndex].buttonText}
            </a>
          </div>
        </motion.div>
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
