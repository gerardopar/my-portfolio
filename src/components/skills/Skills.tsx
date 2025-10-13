import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import { skills } from "./skills.helpers";

export const Skills = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Calculate total scroll distance needed for all cards
  // Each card needs to scroll its width + gap
  const totalCards = skills.length;
  const x = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", `-${(totalCards - 1) * 25}%`]
  );

  return (
    <section
      ref={containerRef}
      // Height determines how long the scroll takes
      // Increase multiplier for slower scroll through cards
      className="relative bg-[#0a0a0a] text-white"
      style={{ height: `${totalCards * 100}vh` }}
    >
      {/* Sticky container that stays in viewport */}
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Header */}
        <div className="absolute top-0 left-0 right-0 z-10 px-12 py-12">
          <h1 className="text-5xl font-bold">Skills</h1>
        </div>

        {/* Horizontal scrolling cards container */}
        <div className="flex items-center h-full px-12">
          <motion.div style={{ x }} className="flex gap-8 items-center">
            {skills.map((skill, idx) => (
              <div
                key={idx}
                className="w-[400px] h-[70vh] bg-gray-shade-dark rounded-2xl flex flex-col justify-between p-8 flex-shrink-0"
              >
                {/* Number */}
                <div className="text-6xl font-bold text-gray-700">
                  {String(idx + 1).padStart(2, "0")}
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col justify-center">
                  <h3 className="text-2xl font-semibold mb-4">{skill.title}</h3>
                  <p className="text-gray-400 text-base leading-relaxed">
                    {skill.description}
                  </p>
                </div>

                {/* Tools */}
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
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
