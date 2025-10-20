import React from "react";

import SideNav from "../sidenav/SideNav";

export const HamburgerMenuButton: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <>
      <div className="max-mobile-640:block hidden">
        <button
          className={`hamburger hamburger--slider ${
            isMenuOpen ? "is-active" : ""
          }`}
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="hamburger-box">
            <span className="hamburger-inner"></span>
          </span>
        </button>
      </div>

      <SideNav
        isMenuOpen={isMenuOpen}
        toggleMenu={() => setIsMenuOpen(!isMenuOpen)}
      />
    </>
  );
};

export default HamburgerMenuButton;
