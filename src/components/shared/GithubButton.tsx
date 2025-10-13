import React from "react";

import { GithubIcon } from "../svgs/GithubIcon";

import { cursorStore } from "../../stores/cursor";

export const GithubButton: React.FC<{ link: string }> = ({ link }) => {
  const setIsHoveringProject = cursorStore.actions.setIsHoveringProject;

  const onMouseEnter = () => {
    setIsHoveringProject(false);
    document.body.style.cursor = "pointer";
  };

  const onMouseLeave = () => {
    setIsHoveringProject(true);
    document.body.style.cursor = "none";
  };

  return (
    <button
      className="cursor-pointer"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={(e) => {
        e.stopPropagation();
        window.open(link, "_blank");
      }}
    >
      <GithubIcon />
    </button>
  );
};

export default GithubButton;
