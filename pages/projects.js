import { motion } from "framer-motion";
import { useThemeContext } from "../contexts/ThemeContextProvider";
import { Header, ProjectRow } from "../components";

function ProjectsPage({ variants }) {
  const strings = [
    "Itt megtalálhatod az eddigi projectjeimet.",
    "Nehézségi szint szerint vannak szétválogatva.",
  ];

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
          alt={"Kép a todo projectemről."}
          alt2={"Kép a számológép projectemről."}
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
          alt={"Kép a bmi kalkulátor projectemről."}
          alt2={"Kép a memória játék projectemről."}
          topText={"BMI Kalkulátor"}
          bottomText={"Kiszámítja a bmi indexet és az ideális testtömeget."}
          topText2={"Memória játék"}
          bottomText2={"Megkell keresni mind a nyolc tech stack párját."}
          withHeader
        />
      </section>
      <section className="mt-4">
        <h2 className="no-underline">Haladó projectek</h2>
        <ProjectRow
          amount={2}
          src={"/search_app_project.webp"}
          src2={"/movie_watchlist_project.webp"}
          href={"/search-app"}
          href2={"/movie-watchlist"}
          alt={"Kép a search app projectemről."}
          alt2={"Illusztráció filmet néző emberekről."}
          topText={"Search App"}
          bottomText={"Kereső applikáció google search api használatával."}
          topText2={"Movie watchlist"}
          bottomText2={
            "Listába szedi a megnézendő illetve már látott filmeket."
          }
          withHeader
        />
      </section>
      <section className="mt-4">
        <h2 className="no-underline">Valós projectek</h2>
        <ProjectRow
          amount={2}
          src={"/kobold_project.webp"}
          src2={
            currentTheme === "light"
              ? "/portfolio_project_dark.webp"
              : "/portfolio_project_light.webp"
          }
          href={"/kobold"}
          href2={"/portfolio"}
          alt={"Kép a kobold projectemről."}
          alt2={"Kép a portfolio projectemről."}
          topText={"Kobold Pécs"}
          bottomText={"Weboldal és Blog applikáció"}
          topText2={"Walek Ders"}
          bottomText2={"Portfolio weboldal"}
          withHeader
        />
      </section>
    </motion.div>
  );
}

export default ProjectsPage;
