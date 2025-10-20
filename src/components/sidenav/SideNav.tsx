import React from "react";
import { motion, AnimatePresence } from "framer-motion";

export const SideNav: React.FC<{
  isMenuOpen: boolean;
  toggleMenu: () => void;
}> = ({ isMenuOpen, toggleMenu }) => {
  return (
    <>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black z-40"
            onClick={toggleMenu}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            key="sidemenu"
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed top-0 left-0 h-full w-64 bg-primary-black z-50 flex flex-col gap-10 px-8 py-20"
          >
            {[
              { label: "About", href: "#about" },
              { label: "Projects", href: "#projects" },
              { label: "Skills", href: "#skills" },
              { label: "Contact", href: "#contact" },
            ].map(({ label, href }) => (
              <a
                key={label}
                className="glitch text-primary-white font-inter font-[200] text-2xl"
                href={href}
                data-text={label}
                onClick={toggleMenu}
              >
                {label}
              </a>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
};

export default SideNav;
