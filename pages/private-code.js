import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Header } from "../components";

function PrivateCode({ variants }) {
  return (
    <motion.div
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={{ duration: 0.4, type: "easeInOut" }}
      style={{ position: "relative" }}
    >
      <Header lastString="Oops! Sajnos ezt nem mutathatom meg." />
      <section class="mt-10">
        <h1>Privát Kód</h1>
        <span>Ennek a project-nek a tartalma nem publikus.</span>
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

export default PrivateCode;
