import React from "react";

import AvatarImage from "@assets/images/avatar.png";

export const Avatar: React.FC = () => {
  return (
    <div className="rounded-full h-[100px] w-[100px] overflow-hidden mr-6">
      <img
        src={AvatarImage}
        alt="Avatar"
        className="h-full w-full object-cover"
      />
    </div>
  );
};

export default Avatar;
