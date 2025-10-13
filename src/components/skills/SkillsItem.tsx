import React from "react";

import { type Skill } from "./skills.helpers";

export const SkillsItem: React.FC<{ skill: Skill; idx: number }> = ({
  skill,
  idx,
}) => {
  return (
    <div
      key={idx}
      className="w-[400px] h-[70vh] bg-gray-shade-dark rounded-2xl flex flex-col justify-between p-8 flex-shrink-0"
    >
      <div className="text-6xl font-bold text-gray-700">
        {String(idx + 1).padStart(2, "0")}
      </div>

      <div className="flex-1 flex flex-col justify-center">
        <h3 className="text-2xl font-semibold mb-4 font-inter">
          {skill.title}
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed font-jetbrains">
          {skill.description}
        </p>
      </div>

      <div className="flex gap-2 flex-wrap">
        {skill.tools.map((tool) => (
          <span
            key={tool}
            className="text-sm px-4 py-2 bg-[#2a2a2a] rounded-full text-gray-300"
          >
            {tool}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SkillsItem;
