import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Header } from "../components";

function Custom404({ variants }) {
  return (
    <motion.div
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={{ duration: 0.4, type: "easeInOut" }}
      style={{ position: "relative" }}
    >
      <Header lastString="Hoppá! Ezt az oldalt valamiért nem találom." />
      <section class="mt-10">
        <h1>Nincs ilyen oldal</h1>
        <span>A keresett oldal nem létezik vagy át lett helyezve.</span>
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

export default Custom404;
