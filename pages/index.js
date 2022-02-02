import Link from "next/link";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Header, ProjectRow } from "../components";
import { AiFillGithub, AiOutlineMail, AiOutlineDownload } from "react-icons/ai";
import { BiChevronRight } from "react-icons/bi";
import { FaLinkedin, FaPhoneSquareAlt } from "react-icons/fa";

export default function Home({ variants }) {
  useEffect(() => {
    const TagCloud = require("TagCloud");
    const container = ".tagcloud";
    const texts = [
      "HTML",
      "CSS",
      "JavaScript",
      "Sass",
      "Tailwind",
      "npm",
      "BEM",
      "GIT",
      "React",
      "Next.js",
    ];

    const options = {
      radius: "140",
    };
    TagCloud(container, texts, options);
  }, []);

  const strings = [
    "Köszöntelek az oldalamon! Walek Ders-nek hívnak.",
    "<strong>Frontend</strong> webfejlesztő vagyok.",
    "Az oldalon megtalálhatóak az eddigi munkáim.",
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
        lastString={"Nézz szét bátran! Elérhetőségeimet lent találod."}
      />
      <article>
        <h2>Rólam</h2>
        <p>
          Gimnázium közepe fele kezdtem el ismerkedni a webfejlesztéssel hobbi
          szinten. Akkor még jobban lekötöttek a különböző videójátékok viszont
          a későbbiekben egyre inkább kezdett érdekelni. Érettségi után
          felvételt nyertem a PTE Programtervező Informatikus szakára, ahol
          sajnos nem találtam meg számításaimat. Az egy éves egyetemen töltött
          időszakkal párhuzamosan előfizettem egy online{" "}
          <span className="text-secondary hover:underline hover:underline-offset-1 dark:text-secondarydark">
            <a href="https://codewithmosh.com/" target="_blank" rel="noopener">
              kurzusra
            </a>
          </span>{" "}
          amely segítségével szilárd alapra tettem szert.
        </p>
        <div className="flex justify-center my-4">
          <Link href="projects">
            <button aria-label="Portfolio button" className="group link-btn">
              Portfolio{" "}
              <span className="group-hover:relative group-hover:left-0.5 group-hover:scale-150 transitionall transition-scale">
                <BiChevronRight />
              </span>
            </button>
          </Link>
        </div>
      </article>
      <section>
        <div>
          <h2>Amit szeretek</h2>
          <p>
            Edzés, Olvasás, <span className="text-underline">Zene</span>, Tech
            Videó, <span className="text-underline">Film</span>, Podcast
          </p>
        </div>
        <div className="flex justify-center my-2">
          <div className="tagcloud text-xl"></div>
        </div>
      </section>
      <section>
        <div>
          <h2>Elérhetőségek</h2>
          <div>
            <ul className="text-primary dark:text-primarydark">
              <li>
                <button aria-label="Github button" className="contact-btn">
                  <a
                    href="https://github.com/wDers"
                    target="_blank"
                    rel="noopener"
                    className="flex flex-row items-center gap-1"
                  >
                    <AiFillGithub /> @wDers
                  </a>
                </button>
              </li>
              <li>
                <button aria-label="Linkedin button" className="contact-btn">
                  <a
                    href="https://www.linkedin.com/in/walekders/"
                    target="_blank "
                    rel="noopener"
                    className="flex flex-row items-center gap-1"
                  >
                    <FaLinkedin /> @walekders
                  </a>
                </button>
              </li>
              <li>
                <button aria-label="Tel button" className="contact-btn">
                  <a
                    href="tel:06302846691"
                    className="flex flex-row items-center gap-1"
                  >
                    <FaPhoneSquareAlt /> +36 30 284 66 91
                  </a>
                </button>
              </li>
              <li>
                <button aria-label="Email button" className="contact-btn">
                  <a
                    href="mailto:hey@walekders.hu"
                    className="flex flex-row items-center gap-1"
                  >
                    <AiOutlineMail /> hey@walekders.hu
                  </a>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section>
        <ProjectRow
          amount={1}
          src={"/kobold_project.webp"}
          src2={"/kobold_project.webp"}
          href={"/404"}
          href2={"/404"}
          alt={"A picture of my kobold project."}
          alt2={"A picture of my kindergarten project."}
          topText={"Kobold Pécs"}
          bottomText={"Weboldal és Blog applikáció"}
          topText2={"Mezőszél Óvoda"}
          bottomText2={"Weboldal"}
        />
        <div className="flex justify-center relative bottom-1">
          <a href="/cv.txt" download>
            <button aria-label="CV button" className="group link-btn">
              Önéletrajz{" "}
              <span className="group-hover:relative group-hover:scale-125 transition-scale">
                <AiOutlineDownload />
              </span>
            </button>
          </a>
        </div>
      </section>
    </motion.div>
  );
}
