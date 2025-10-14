import React from "react";

export const Divider: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={`flex flex-1 items-center justify-center ${className}`}>
      <div className="w-full h-[.5px] bg-primary-gray" />
    </div>
  );
};

export default Divider;
