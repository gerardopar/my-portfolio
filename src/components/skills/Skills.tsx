import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

import { SkillsItem } from "./SkillsItem";
import UmbreonGif from "@assets/images/umbreon-sprite.gif";

import { skills } from "./skills.helpers";

export const Skills = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const totalCards = skills.length;

  // Translate the cards horizontally based on scroll
  const x = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", `-${(totalCards - 1) * 7}%`]
  );

  // Animate Umbreon in when scroll hits ~90%
  const umbreonOpacity = useTransform(scrollYProgress, [0.85, 1], [0, 1]);
  const umbreonX = useTransform(scrollYProgress, [0.85, 1], [30, 0]);
  const bounce = useSpring(useTransform(scrollYProgress, [0.9, 1], [0, -10]), {
    stiffness: 100,
    damping: 10,
    mass: 0.2,
  });

  return (
    <section
      ref={containerRef}
      className="relative bg-primary-black"
      style={{ height: `${totalCards * 100}vh` }}
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Header */}
        <div className="absolute top-0 left-0 right-0 z-10 px-24 py-16">
          <h1 className="text-5xl font-bold font-inter text-primary-white">
            Skills
          </h1>
        </div>

        {/* Cards & Umbreon */}
        <div className="flex items-center h-full px-12">
          <motion.div
            style={{ x }}
            className="flex gap-8 items-center relative"
          >
            {skills.map((skill, idx) => (
              <SkillsItem key={idx} skill={skill} idx={idx} />
            ))}

            {/* Umbreon Reveal */}
            <motion.img
              src={UmbreonGif}
              alt="Umbreon"
              className="w-[100px] rotate-[-10deg] absolute bottom-[50%] right-[-7%] z-10"
              style={{
                opacity: umbreonOpacity,
                x: umbreonX,
                y: bounce,
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
