import React from "react";

import Headliner from "@components/headliner/Headliner";
import HeroBackground from "@assets/images/hero-background.png";

export const Hero: React.FC = () => {
  return (
    <div className="h-[100vh] w-full px-24 pt-24">
      <Headliner />
      <div
        className="w-full h-[240px] mt-8"
        style={{
          backgroundImage: `url(${HeroBackground})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "bottom",
        }}
      />
      <div className="w-full h-[240px] mt-[100px]">
        <p className="text-[120px] text-primary-gray font-semibold leading-8">
          Full Stack
        </p>
        <p className="text-[120px] text-primary-white font-semibold">
          Developer
        </p>
      </div>
    </div>
  );
};
