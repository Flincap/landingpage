"use client";

import * as React from "react";
// import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import AutoScroll from "embla-carousel-auto-scroll";

const partners = [
  { name: "Coin Telegraph", logo: "/src/assets/cointelegraph-logo.svg" },
  { name: "The Cable", logo: "/src/assets/thecable.png" },
  { name: "Xinhua", logo: "/src/assets/xinhua.png" },
  { name: "Punch", logo: "/src/assets/punch.png" },
  { name: "Nairametrics", logo: "/src/assets/nairametrics-logo.svg" },
  { name: "cryptopolitan", logo: "/src/assets/cryptopolitan.png" },
  { name: "msn", logo: "/src/assets/msn.png" },
  { name: "technext24", logo: "/src/assets/technext24.png" },
  { name: "bitcoinke", logo: "/src/assets/bitcoinke.png" },
  { name: "cryptoninjas", logo: "/src/assets/cryptoninjas.png" },
  { name: "atlantic digest", logo: "/src/assets/atlanticdigest.png" },
  { name: "beincrypto", logo: "/src/assets/beincrypto.png" },
  { name: "news express", logo: "/src/assets/newsexpress.png" },
];

export default function CarouselPlugin() {
  const plugin = React.useRef(AutoScroll());

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full px-4"
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent className="-ml-8">
        {partners.map((partner, index) => (
          <CarouselItem key={index} className="bg-blue-200 mx-2 max-w-sm">
            <div className="p-1">
              <Card className="bg-red-200">
                <CardContent className="flex items-center justify-center p-6">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-h-16 max-w-[120px] object-contain"
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
