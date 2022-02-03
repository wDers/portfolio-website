import { motion } from "framer-motion";
import { Project } from "../components";

function Kobold({ variants }) {
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
        title="Vorwerk Kobold Pécs"
        description="A Vorwerk Kobold Pécsi irodájának készített weboldal, hamarosan webshop és blog applikáció. A project kezdetben react-ben íródott, viszont a későbbiekben át 'migrált' next.js-be. A weboldalon lehetőség van bemutató időpontot foglalni, tájékozódni az aktuális állás hírdetésekről. A blog regisztráció nélkül használható, tartalma graphcms-ben szerkeszthető, bárki írhat kommentet a posztok alá, viszont a bejövő kommenteket először a cms-ben jóvá kell hagyni mielőtt kikerülnének. A webshop fejlesztés alatt áll."
        stack="Next.js, Sass, TailwindCSS, GraphQL"
        link="https://www.kobold-pecs.hu"
        noSource
        src="/kobold_project.webp"
        alt="Kép a kobold projectemről."
      />
      <img
        src={"/kobold_project_2.webp"}
        alt={"Kép a kobold projectemről."}
        width="720"
        height="365"
        className="rounded-xl mt-5"
      ></img>
    </motion.div>
  );
}

export default Kobold;
