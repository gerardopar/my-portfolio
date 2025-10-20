import React from "react";

import Avatar from "@components/avatar/Avatar";

export const Headliner: React.FC = () => {
  return (
    <div className="w-full flex items-center justify-start">
      <Avatar />
      <div className="flex flex-col gap-2">
        <p className="text-primary-white font-jetbrains font-[500] text-sm max-mobile-640:text-xs">
          Hello 👋🏽, I’m Gerardo — I write code,
          <br /> ship fast, and keep things simple.
        </p>
        <p className="text-primary-white font-jetbrains font-[500] text-xs max-mobile-640:text-xs">
          <span className="text-[#D7A8F3]">Engineer</span> by trade ·{" "}
          <span className="text-[#C9AD91]">Dog</span> dad by heart ·{" "}
          <span className="text-[#B2F2BB]">Matcha</span> always
        </p>
      </div>
    </div>
  );
};

export default Headliner;
