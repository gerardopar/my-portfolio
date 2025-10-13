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
      className="relative bg-primary-black"
      style={{ height: `${totalCards * 100}vh` }}
    >
      {/* Sticky container that stays in viewport */}
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Header */}
        <div className="absolute top-0 left-0 right-0 z-10 px-12 py-12">
          <h1 className="text-5xl font-bold font-inter text-primary-white">
            Skills
          </h1>
        </div>

        {/* Horizontal scrolling cards container */}
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
