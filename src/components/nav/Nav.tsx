import React from "react";

import { Link } from "react-router";

export const Nav: React.FC = () => {
  return (
    <nav className="flex gap-12">
      <Link className="text-white font-inter font-[200]" to="/about">
        About
      </Link>
      <Link className="text-white font-inter font-[200]" to="/projects">
        Projects
      </Link>
      <Link className="text-white font-inter font-[200]" to="/contact">
        Contact
      </Link>
    </nav>
  );
};

export default Nav;
