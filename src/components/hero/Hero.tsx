import React from "react";

import Divider from "@components/shared/Divider";
import Headliner from "@components/headliner/Headliner";
import RotatingStatus from "@components/shared/RotatingText";
import HeroBackground from "@assets/images/hero-background.png";

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
        <p className="text-[120px] text-primary-white font-semibold pl-16 max-mobile-768:text-[90px] max-mobile-640:text-[60px]">
          Developer
        </p>
      </div>

      <div className="w-full flex items-center justify-center gap-8 max-mobile-768:gap-4">
        <p className="text-primary-white font-jetbrains font-bold max-mobile-768:text-sm">
          🌴 Ventura, CA
        </p>
        <Divider className="max-mobile-768:hidden" />
        <p className="text-primary-white font-jetbrains font-bold max-mobile-768:hidden">
          Pacific Time (UTC-7)
        </p>
        <Divider />
        <RotatingStatus />
      </div>
    </div>
  );
};
