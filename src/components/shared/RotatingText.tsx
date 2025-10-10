import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const statuses = [
  "Refactoring code",
  "Debugging race conditions",
  "Pushing to main",
  "Creating new branch",
  "Chasing performance gains",
  "Reviewing PRs",
  "Solving edge cases",
  "Deploying to prod",
  "Logging everything",
  "Fixing what I broke",
];

export const RotatingStatus: React.FC = () => {
  const [current, setCurrent] = useState(statuses[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => {
        let next = prev;
        while (next === prev) {
          next = statuses[Math.floor(Math.random() * statuses.length)];
        }
        return next;
      });
    }, 2500); // change every 2.5s

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-w-[240px] w-[240px] h-[22px] overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.p
          key={current}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="text-primary-white font-jetbrains font-bold absolute"
        >
          {current}
        </motion.p>
      </AnimatePresence>
    </div>
  );
};

export default RotatingStatus;
