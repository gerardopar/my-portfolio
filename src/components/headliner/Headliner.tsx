import React from "react";

import Avatar from "@components/avatar/Avatar";

export const Headliner: React.FC = () => {
  return (
    <div className="w-full flex items-center justify-start">
      <Avatar />
      <p className="text-primary-white font-jetbrains font-[500] text-sm max-mobile-640:text-xs">
        Hello 👋🏽, I’m Gerardo —
        <br />I write code, ship fast, and keep
        <br />
        things simple (even when they’re not).
      </p>
    </div>
  );
};

export default Headliner;
