import { useRef, useState, useLayoutEffect } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

import { SkillsItem } from "./SkillsItem";
import UmbreonGif from "@assets/images/umbreon-sprite.gif";

import { skills } from "./skills.helpers";

export const Skills = () => {
  const containerRef = useRef(null);
  const cardsRef = useRef(null);
  const [maxScroll, setMaxScroll] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Calculate the actual distance needed to scroll all cards
  useLayoutEffect(() => {
    const updateMaxScroll = () => {
      if (cardsRef.current) {
        const cardsWidth = cardsRef?.current?.scrollWidth;
        const viewportWidth = window.innerWidth;
        // Calculate how far we need to translate to show all cards
        const scrollDistance = cardsWidth - viewportWidth + 0;
        setMaxScroll(scrollDistance);
      }
    };

    updateMaxScroll();
    window.addEventListener("resize", updateMaxScroll);
    return () => window.removeEventListener("resize", updateMaxScroll);
  }, []);

  const totalCards = skills.length;

  // Use the calculated maxScroll instead of a fixed percentage
  const x = useTransform(scrollYProgress, [0, 1], [0, -maxScroll]);

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
      id="skills"
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Header */}
        <div className="absolute top-0 left-0 right-0 z-10 px-24 max-mobile-768:px-12 py-16 max-mobile-640:px-4">
          <h1 className="text-5xl font-bold font-inter text-primary-white">
            Skills
          </h1>
        </div>

        {/* Cards & Umbreon */}
        <div className="flex items-center h-full px-12">
          <motion.div
            ref={cardsRef}
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
              className="w-[100px] rotate-[-10deg] absolute bottom-[50%] right-[-7.5%] z-10"
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
