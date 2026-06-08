// components/hero.tsx
import React from "react";
import Image from "next/image";

export const Hero = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 pt-6 select-none">
      {/* Aspect-ratio container ensures the banner maintains its dimensions nicely across screens */}
      <div className="relative w-full aspect-[1200/340]  overflow-hidden shadow-xl">
        <Image
          src="/banner.png.png"
          alt="Today's Special Menu Offer Banner"
          fill
          priority
          sizes="(max-w-1280px) 100vw, 1200px"
          className="object-cover object-center"
        />
      </div>
    </div>
  );
};
