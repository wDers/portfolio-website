import { motion } from "framer-motion";
import { Header, ProjectRow } from "../components";

function ProjectsPage({ variants }) {
  const strings = [
    "Itt megtalálhatod az eddigi projectjeimet.",
    "Nehézségi szint szerint vannak szétválogatva.",
  ];

  return (
    <motion.div
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={{ duration: 0.4, type: "easeInOut" }}
      style={{ position: "relative" }}
    >
      <Header
        strings={strings}
        lastString={"A legtöbbhöz van mellékelve <strong>Source Code</strong>."}
      />
      <section className="mt-6">
        <h2 className="no-underline">Kezdő projectek</h2>
        <ProjectRow
          amount={2}
          src={"/todo_project.webp"}
          src2={"/calculator_project.webp"}
          href={"todo"}
          href2={"calculator"}
          alt={"A picture of my todo project."}
          alt2={"A picture of my calculator project."}
          topText={"Todo"}
          bottomText={"Todo applikáció local storage-ban menti a tennivalókat."}
          topText2={"Számológép"}
          bottomText2={"Minden fontosabb funkcióval, dark theme-el ellátva."}
          withHeader
        />
        <ProjectRow
          amount={2}
          src={"/bmi_calculator_project.webp"}
          src2={"/memory_game_project.webp"}
          href={"bmi-calculator"}
          href2={"memory-game"}
          alt={"A picture of my bmi calculator project."}
          alt2={"A picture of my memory game project."}
          topText={"BMI Kalkulátor"}
          bottomText={"Kiszámítja a bmi indexet és az ideális testtömeget."}
          topText2={"Memória játék"}
          bottomText2={"Megkell keresni mind a nyolc tech stack párját."}
          withHeader
        />
      </section>
      <section className="mt-6">
        <h2 className="no-underline">Nagyobb projectek</h2>
        <ProjectRow
          amount={1}
          src={"/kobold_project.webp"}
          src2={"/kobold_project.webp"}
          href={"/kobold"}
          href2={"/404"}
          alt={"A picture of my kobold project."}
          alt2={"A picture of my kobold project."}
          topText={"Kobold Pécs"}
          bottomText={"Weboldal és Blog applikáció"}
          topText2={"Mezőszél Óvoda"}
          bottomText2={"Weboldal"}
          withHeader
        />
      </section>
    </motion.div>
  );
}

export default ProjectsPage;
