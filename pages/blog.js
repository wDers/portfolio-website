import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Header } from "../components";

function Blog({ variants }) {
  return (
    <motion.div
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={{ duration: 0.4, type: "easeInOut" }}
      style={{ position: "relative" }}
    >
      <Header lastString="A blog jelenleg fejlesztés alatt áll. Hamarosan elkészül." />
      <section class="mt-10">
        <h1>Blog - Hamarosan</h1>
        <span className="relative top-2">
          Számos érdekes bejegyzéssel készülök, nagyrészük webfejlesztéssel
          kapcsolatos. De lesz köztük egyéb érdekes IT téma is.
        </span>
        <hr className="my-6 border-text dark:border-whitesmoke" />
        <div className="flex justify-center">
          <Link href="/">
            <button className="link-btn">Vissza a Főoldalra</button>
          </Link>
        </div>
      </section>
    </motion.div>
  );
}

export default Blog;
