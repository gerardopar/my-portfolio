import React from "react";

export const Nav: React.FC = () => {
  return (
    <nav className="flex gap-12 max-mobile-768:gap-6 max-mobile-640:hidden">
      <a
        className="glitch text-primary-white font-inter font-[200]"
        href="#about"
        data-text="About"
      >
        About
      </a>
      <a
        className="glitch text-primary-white font-inter font-[200]"
        href="#projects"
        data-text="Projects"
      >
        Projects
      </a>
      <a
        className="glitch text-primary-white font-inter font-[200]"
        href="#skills"
        data-text="Skills"
      >
        Skills
      </a>
      <a
        className="glitch text-primary-white font-inter font-[200]"
        href="#contact"
        data-text="Contact"
      >
        Contact
      </a>
    </nav>
  );
};

export default Nav;
