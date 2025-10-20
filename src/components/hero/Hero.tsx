import React from "react";

import HeroBackground from "@assets/images/hero-background-2.png";
import Headliner from "@components/headliner/Headliner";
import Location from "@components/shared/Location";

export const Hero: React.FC = () => {
  return (
    <div
      className="h-[100vh] w-full px-24 pt-24 max-mobile-768:px-12 max-mobile-640:px-4"
      id="about"
    >
      <Headliner />
      <div
        className="w-full h-[240px] mt-[80px] max-mobile-768:mt-[60px]"
        style={{
          backgroundImage: `url(${HeroBackground})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "bottom",
        }}
      />
      <div className="w-full h-[240px] mt-[100px] max-mobile-768:mt-[60px]">
        <p className="text-[120px] text-primary-gray font-semibold leading-8 max-mobile-768:text-[90px] max-mobile-640:text-[60px]">
          Full Stack
        </p>
        <p className="text-[120px] text-primary-white font-semibold pl-16 max-mobile-375:pl-0 max-mobile-768:text-[90px] max-mobile-640:text-[60px]">
          Developer
        </p>
      </div>

      <Location />
    </div>
  );
};
