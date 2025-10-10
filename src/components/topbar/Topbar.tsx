import React from "react";

import { Nav } from "@components/nav/Nav";
import Divider from "../shared/Divider";

export const Topbar: React.FC = () => {
  return (
    <header className="fixed left-0 top-0 h-[50px] w-[100vw] bg-primary-black px-24 pt-8 pb-4">
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
