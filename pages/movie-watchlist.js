import { motion } from "framer-motion";
import { Project } from "../components";

function MovieWatchlist({ variants }) {
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
        title="Movie Watchlist Applikáció"
        description="Movie watchlist applikáció, a felhasználónak lehetősége van a legnépszerűbb filmek közül válogatni, két felé szortírozni azokat. A megnézendő , illetve a már látott filmek közé. Lehet keresni specifikusan filmekre, a már szét válogatott filmek között is. Ez a project rendhagyóan nem reszponzív, ennek az oka pusztán annyi ,hogy ez az app főként telefonra készült amit a későbbiekben tervezek react native-ban telefonos applikációként ismét elkészíteni. Egyelőre így marad, amint akad valami jó design ötletem a reszponzivitást nézve természetesen működni fog nagyobb kijelzőkön is."
        stack="Next.js, TailwindCSS, TMDBAPI"
        link="https://movie-watchlist-wders.vercel.app"
        source="https://github.com/wDers/movie-watchlist"
        src="/movie_watchlist_project.webp"
        alt="Illusztráció filmet néző emberekről."
      />
    </motion.div>
  );
}

export default MovieWatchlist;
