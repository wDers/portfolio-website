import { motion } from "framer-motion";
import { Project } from "../components";

function MemoryGame({ variants }) {
  return (
    <motion.div
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={{ duration: 0.4, type: "easeInOut" }}
      style={{ position: "relative" }}
    >
      <Project
        title="Memória játék"
        description="Egy nem túl nagy kihívást magában hordozó memória játék. Célja, hogy megtaláld nyolc általam használt frontend technológia párját."
        stack="React, Sass"
        link="https://memory-game-wders.vercel.app"
        source="https://github.com/wDers/memory-game"
        src="/memory_game_project.webp"
        alt="Kép a memória játék projectemről."
      />
    </motion.div>
  );
}

export default MemoryGame;
