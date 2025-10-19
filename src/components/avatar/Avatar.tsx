import React from "react";

import AvatarImage from "@assets/images/avatar.png";

export const Avatar: React.FC = () => {
  return (
    <div
      className={`
        rounded-full h-[100px] w-[100px] overflow-hidden mr-6 
        min-w-[100px] min-h-[100px] max-mobile-640:min-w-[80px] 
        max-mobile-640:min-h-[80px] max-mobile-640:max-h-[80px] 
        max-mobile-640:max-w-[80px] max-mobile-640:mr-4`}
    >
      <img
        src={AvatarImage}
        alt="Avatar"
        className="h-full w-full object-cover"
      />
    </div>
  );
};

export default Avatar;
