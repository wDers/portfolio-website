import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Header } from "../components";

function Blog({ variants }) {
  const strings = [
    "Itt mindig a legfrissebb blog bejegyzést láthatod.",
    "A régebbieket (ha van) az oldal alján találod.",
  ];

  const types = [
    {
      name: "build",
      description:
        "Build-el kapcsolatos változtatások (pl: egy új dependencie telepítése npm-el)",
    },
    {
      name: "chore",
      description:
        "Olyan változtatás amit a külső felhasználó nem lát (pl: változás a .gitignore vagy .prettierrc file-ban)",
    },
    {
      name: "feat",
      description: "Valami újdonság (pl: egy új komponens react-ben)",
    },
    { name: "fix", description: "Egy bug fix" },
    { name: "docs", description: "Dokumentációval kapcsolatos változtatás" },
    {
      name: "refactor",
      description:
        "Olyan kód ami se nem bug-al se nem új feature-el kapcsolatos, akkor használatos ha valami féle semantic változtatás történik (pl: egy változó nevének megváltoztatása vagy a kód olvashatóbbá tétele)",
    },
    { name: "perf", description: "Ha a kód javítja a teljesítményt" },
    { name: "style", description: "Amikor a kód a stílussal kapcsolatos" },
    {
      name: "test",
      description:
        "Új teszt hozzá adása vagy változtatás a már meglévő teszten",
    },
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
        lastString={"Nem is szaporítanám tovább a szót, jó olvasást!"}
      />
      <section class="mt-10">
        <h1>Git commit message convention</h1>
        <span className="text-highlight">
          <span className="font-semibold">2022.03.31</span> - 3 perc olvasás
        </span>
        <img
          src={"/git_blog_post.webp"}
          alt={"Kép az általam használt convention-ről."}
          width="720"
          height="365"
          className="rounded-xl my-5"
        />
        <article>
          <p>
            Ahogy a legtöbb programozó, szeretem ha a munkám könnyen átlátható,
            értelmezhető. Ebben nagy szerepet játszanak az úgy nevezett naming
            convention-ök, melyek tisztábbá teszik kódunkat. Mivel a
            programozásban az elemek nem tartalmazhatnak szóközt, ezekhez a
            naming convention-ökhöz fordulunk. Nyilván ez emberre válogatja, az{" "}
            <span className="font-bold">én esetben</span> például legyen szó
            react események elnevezéséről,{" "}
            <span className="text-highlight">camelCase</span>
            -t használok kisbetűk helyett. React komponensek elnevezésekor{" "}
            <span className="text-highlight">PascalCase</span>
            -t. Illetve file-ok elnevezésére, legyen az pl egy pdf vagy
            valamilyen kép, <span className="text-highlight">snake_case</span>
            -t használok. Térjünk ki kicsit a{" "}
            <span className="text-highlight">CSS</span>-re, nekem személy
            szerint van ,hogy több időbe telik kitalálni a legmegfelelőbb
            className-et mint magát a stílust elkészíteni. Ilyenkor jön kapóra
            egy naming convention, az én esetemben ez a{" "}
            <span className="text-highlight">BEM</span>. Amit tegyünk hozzá{" "}
            <span className="text-highlight">SASS</span>
            -el ötvözve rengeteg időt megtakaríthatunk. Tehát mindezen
            elgondolkodva amikor még a{" "}
            <span className="text-highlight">GIT</span>
            -el ismerkedtem beugrott , miért ne használhatnánk valami ilyesféle{" "}
            <span className="font-bold">szabályt</span> commit messagekre is?
            Ezért ebben a posztban szeretném megosztani azt, amit én használok.
          </p>
          <h2 className="no-underline">Hogy is néz ki egy ilyen git commit?</h2>
          <span className="text-highlight font-semibold">
            {"<type>(<scope>): <subject>"}
          </span>
          <h2 className="no-underline">
            A 'type'-nak az alábbiak egyikének kell lennie
          </h2>
          <ul className="list-disc ml-5">
            {types.map((type) => (
              <li>
                <span className="badge rounded px-1 text-text bg-primary lowercase dark:bg-primarydark">
                  {type.name}
                </span>
                : {type.description}
              </li>
            ))}
          </ul>
          <h2 className="no-underline">A 'scope' opcionális</h2>
          <ul className="list-disc ml-5">
            <li>
              A kód azon <span className="text-highlight">szakasza</span> ahol a
              változtatás történt
            </li>
            <li>
              {" "}
              A scope mindenféle képpen{" "}
              <span className="text-highlight">főnév</span>
            </li>
          </ul>
          <h2 className="no-underline">A 'subject'</h2>
          <ul className="list-disc ml-5">
            <li>
              Gondolom azt mondanom sem kell ,hogy git commit-ot{" "}
              <span className="text-highlight">angolul</span> írunk
            </li>
            <li>
              <span className="text-highlight">Imperative, present tense</span>
              -t használunk (Felszólító mód, jelen idő) (pl: 'adds'/'added'
              helyett szimplán 'add'-ot írunk)
            </li>
            <li>
              <span className="text-highlight">Nem</span> kezdjük nagy betűvel a
              mondatot
            </li>
            <li>
              <span className="text-highlight">Nem</span> teszünk pontot a
              mondat végére
            </li>
          </ul>
        </article>
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
