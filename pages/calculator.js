import { motion } from "framer-motion";
import { Project } from "../components";

function Calculator({ variants }) {
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
        title="Számológép"
        description="Egy egyszerű ugyanakkor design ügyileg szép és letisztult kalkulátor. Smooth számolás effekt-el. Lucia Scott design munkájának a megvalósítása. Innen is köszönöm az inspirációt."
        stack="React, TailwindCSS"
        link="https://calculator-wders.vercel.app"
        source="https://github.com/wDers/calculator"
        src="/calculator_project.webp"
        alt="Kép a kalkulátor projectemről."
      />
    </motion.div>
  );
}

export default Calculator;
