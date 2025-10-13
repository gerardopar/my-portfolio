import { motion } from "motion/react";

import GithubButton from "../shared/Github";

import { cursorStore } from "../../stores/cursor";

import { type Project, projects } from "./projects.helpers";

export const ProjectItem: React.FC<{ project: Project; idx: number }> = ({
  project,
  idx,
}) => {
  const setIsHoveringProject = cursorStore.actions.setIsHoveringProject;

  const zIndex = projects.length + idx;
  let bgColor = "";

  if (idx === 0) {
    bgColor = "bg-gray-shade-light";
  } else if (idx === 1) {
    bgColor = "bg-gray-shade-medium";
  } else if (idx === 2) {
    bgColor = "bg-gray-shade-dark";
  }

  return (
    <div
      key={idx}
      className="group sticky top-[80px] h-[33%] transition-transform duration-500 ease-in-out"
      style={{ zIndex }}
    >
      <motion.div
        className={`p-8 flex justify-between items-center h-full ${bgColor}`}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          delay: idx * 0.1,
        }}
        viewport={{ once: true }}
        onMouseEnter={() => setIsHoveringProject(true)}
        onMouseLeave={() => setIsHoveringProject(false)}
      >
        <div className="w-full mx-4">
          <div className="mb-4 flex flex-col items-start justify-start text-left">
            <div className="flex items-center gap-2">
              <h3 className="text-2xl font-inter font-semibold leading-8">
                {project.title}
              </h3>
              <GithubButton link={project.sourceCodeUrl} />
            </div>
            <p className="text-white font-jetbrains max-w-[600px] mt-2">
              {project.description}
            </p>
          </div>

          <div className="flex flex-wrap gap-3 items-center text-xs text-white/70 mb-2">
            {project.techStack.map((tag, tIdx) => (
              <span
                key={tIdx}
                className="border border-white/20 px-3 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <img
          src={project.image}
          alt={project.title}
          className="w-[320px] shadow-lg grayscale group-hover:grayscale-0 transition-[filter,transform] duration-500 ease-in-out"
        />
      </motion.div>
    </div>
  );
};

export default ProjectItem;
