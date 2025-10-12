import { useEffect, useState } from "react";
import { motion } from "motion/react";

import { cursorStore } from "../../stores/cursor";

export const CustomCursor = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const isHoveringProject = cursorStore.useTracked("isHoveringProject");

  useEffect(() => {
    const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 z-[9999] pointer-events-none mix-blend-difference"
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: "spring", stiffness: 500, damping: 30 }}
    >
      <motion.div
        className="rounded-full bg-white/10 border border-white/30 backdrop-blur-md px-4 py-2 text-sm font-jetbrains text-white"
        animate={{
          scale: isHoveringProject ? 1 : 0.2,
          opacity: isHoveringProject ? 1 : 0,
        }}
        transition={{ duration: 0.2 }}
      >
        {isHoveringProject && "View Project →"}
      </motion.div>
    </motion.div>
  );
};

export default CustomCursor;
