import React from "react";

import Divider from "@components/shared/Divider";
import Headliner from "@components/headliner/Headliner";
import RotatingStatus from "@components/shared/RotatingText";
import HeroBackground from "@assets/images/hero-background.png";

export const Hero: React.FC = () => {
  return (
    <div className="h-[100vh] w-full px-24 pt-24">
      <Headliner />
      <div
        className="w-full h-[240px] mt-[80px]"
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
        <p className="text-[120px] text-primary-white font-semibold pl-16">
          Developer
        </p>
      </div>

      <div className="w-full flex items-center justify-center gap-8">
        <p className="text-primary-white font-jetbrains font-bold">
          🌴 Ventura, CA
        </p>
        <Divider />
        <p className="text-primary-white font-jetbrains font-bold">
          Pacific Time (UTC-7)
        </p>
        <Divider />
        <RotatingStatus />
      </div>
    </div>
  );
};
