import React from "react";

import { Nav } from "@components/nav/Nav";
import Divider from "../shared/Divider";

export const Topbar: React.FC = () => {
  return (
    <header className="fixed left-0 top-0 h-[80px] w-[100vw] px-24 py-6 z-50 max-mobile-768:px-12 max-mobile-640:px-6">
      <div className="absolute top-0 left-0 w-[100vw] h-[30px] backdrop-blur-[2px]" />
      <div className="flex items-center justify-between gap-8">
        <p className="text-primary-white font-jetbrains font-bold">
          Gerardo Paredes
        </p>
        <Divider />
        <Nav />
      </div>
    </header>
  );
};

export default Topbar;
