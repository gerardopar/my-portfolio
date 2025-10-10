import React from "react";
import { Link } from "react-router";

export const Nav: React.FC = () => {
  return (
    <nav className="flex gap-12">
      <Link
        className="glitch text-primary-white font-inter font-[200]"
        to="/about"
        data-text="About"
      >
        About
      </Link>
      <Link
        className="glitch text-primary-white font-inter font-[200]"
        to="/projects"
        data-text="Projects"
      >
        Projects
      </Link>
      <Link
        className="glitch text-primary-white font-inter font-[200]"
        to="/contact"
        data-text="Contact"
      >
        Contact
      </Link>
    </nav>
  );
};

export default Nav;
