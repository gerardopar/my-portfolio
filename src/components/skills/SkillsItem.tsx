import React from "react";

import { NodeJsIcon } from "../svgs/NodeJs";
import { ReactIcon } from "../svgs/ReactIcon";
import { MongoDBIcon } from "../svgs/MongoDB";
import { TypeScriptIcon } from "../svgs/TypeScript";

import { type Skill } from "./skills.helpers";

export const SkillsItem: React.FC<{ skill: Skill; idx: number }> = ({
  skill,
  idx,
}) => {
  let icon: React.ReactNode | null = null;

  switch (skill.type) {
    case "react":
      icon = <ReactIcon className="text-gray-shade-light/5" />;
      break;
    case "typescript":
      icon = <TypeScriptIcon className="text-gray-shade-light/5" />;
      break;
    case "api":
      icon = <NodeJsIcon className="text-gray-shade-light/5" />;
      break;
    case "db":
      icon = <MongoDBIcon className="text-gray-shade-light/5" />;
      break;
    default:
      icon = null;
  }

  return (
    <div
      key={idx}
      className="w-[400px] h-[70vh] bg-gray-shade-dark rounded-2xl flex flex-col justify-between p-8 flex-shrink-0 relative overflow-hidden"
    >
      <div className="w-12 h-12 absolute top-5 right-5">{icon}</div>

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
            className="text-xs px-4 py-2 border border-gray-shade-medium rounded-full text-gray-300 font-jetbrains"
          >
            {tool}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SkillsItem;
