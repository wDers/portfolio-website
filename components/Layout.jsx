import React from "react";
import Head from "next/head";
import { NavBar, Footer } from "../components";

function Layout({ children }) {
  return (
    <div className="w-screen min-w-[280px] min-h-screen mx-auto bg-bg backdrop-blur-md text-text transition ease duration-300 dark:bg-bgdark dark:text-textdark">
      <Head>
        <title>Walek Ders | hey@walekders.hu</title>
        <meta charset="UTF-8" />
        <meta name="description" content="Portfolio weboldal" />
        <meta name="keywords" content="Walek Ders, Frontend Developer" />
        <meta name="author" content="Walek Ders" />
      </Head>
      <header>
        <NavBar />
      </header>
      <main>
        <div className="max-w-lg mx-auto">{children}</div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Layout;
