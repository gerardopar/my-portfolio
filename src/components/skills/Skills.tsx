import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import { skills } from "./skills.helpers";
import { SkillsItem } from "./SkillsItem";

export const Skills = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const totalCards = skills.length;
  const x = useTransform(
    scrollYProgress,
    [0, 0.8],
    ["0%", `-${(totalCards - 1) * 100}%`]
  );

  return (
    <section
      ref={containerRef}
      className="relative bg-primary-dark text-primary-light"
      style={{ height: `${totalCards * 100}vh` }}
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        <div className="absolute top-0 left-0 right-0 z-10 px-12 py-12">
          <h1 className="text-5xl font-bold font-inter">Skills</h1>
        </div>

        <div className="flex items-center h-full px-12">
          <motion.div style={{ x }} className="flex gap-8 items-center">
            {skills.map((skill, idx) => (
              <SkillsItem key={idx} skill={skill} idx={idx} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
