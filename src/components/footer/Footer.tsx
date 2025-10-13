import React from "react";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full flex items-center justify-center">
      <div className="px-24 pb-12 w-full flex items-center justify-end">
        <p className="text-gray-shade-light text-sm font-jetbrains">
          © {currentYear} Gerardo Paredes. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
