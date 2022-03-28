import { motion } from "framer-motion";
import { Project } from "../components";
import { useThemeContext } from "../contexts/ThemeContextProvider";

function Portfolio({ variants }) {
  const { currentTheme } = useThemeContext();

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
        title="Walek Ders Portfolio"
        description="Saját elképzelésem szerint elkészített weboldal, ahol nagy vonalakban mesélek magamról, megosztom eddigi munkáimat és blogot írok."
        stack="Next.js, TailwindCSS, Framer Motion"
        link="https://www.walekders.hu"
        source="https://github.com/wDers/portfolio-website"
        src={
          currentTheme === "light"
            ? "/portfolio_project_dark.webp"
            : "/portfolio_project_light.webp"
        }
        alt="Kép a portfolio projectemről."
      />
    </motion.div>
  );
}

export default Portfolio;
