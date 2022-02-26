import { motion } from "framer-motion";
import { Project } from "../components";

function SearchApp({ variants }) {
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
        title="Search Applikáció"
        description="Egy eltérő design-al ellátott google clone applikáció. A google search api felhasználásával készűlt, amit rapid api-n keresztül vettem igénybe. Ha nem dob ki semmit a keresésre az azt jelenti ,hogy a havi 600 request-es limitet meghaladta az api."
        stack="Next.js, TailwindCSS, RapidAPI"
        link="https://search-app-wders.vercel.app"
        source="https://github.com/wDers/search-app"
        src="/search_app_project.webp"
        alt="Kép a search app projectemről."
      />
      <img
        src={"/search_app_project_2.webp"}
        alt={"Kép a search app projectemről."}
        width="720"
        height="365"
        className="rounded-xl mt-5"
      />
      <img
        src={"/search_app_project_3.webp"}
        alt={"Kép a search app projectemről."}
        width="720"
        height="365"
        className="rounded-xl mt-5"
      />
    </motion.div>
  );
}

export default SearchApp;
