import { motion } from "framer-motion";
import { Project } from "../components";

function BmiCalculator({ variants }) {
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
        title="BMI Kalkulátor"
        description="Nem szerint kiszámítja majd osztályba sorolja a testtömeg indexet, ezen felül megállapítja az ideális testtömeget a beírt adatok függvényében. A táblázatban felvannak tüntetve a határ értékek."
        stack="HTML, TailwindCSS, Javascript"
        link="https://bmi-calculator-wders.vercel.app"
        source="https://github.com/wDers/bmi-calculator"
        src="/bmi_calculator_project.webp"
        alt="Kép a bmi kalkulátor projectemről."
      />
    </motion.div>
  );
}

export default BmiCalculator;
