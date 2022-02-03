import React from "react";
import Link from "next/link";
import { Header } from "../components";
import { BiChevronRight } from "react-icons/bi";

function Project({
  title,
  description,
  stack,
  link,
  source,
  src,
  alt,
  noSource,
}) {
  let items = [{ link: link }, { source: source }];

  if (noSource) items[1].source = "private-code";

  return (
    <>
      <Header lastString="Nézd meg élőben remélem elnyeri a tetszésed. :)" />
      <section className="mt-6">
        <div className="flex items-center">
          <Link href="/projects">
            <span className="flex flex-row items-center text-primary cursor-pointer hover:underline underline-offset-[3px] dark:text-primarydark">
              Projectek{" "}
              <BiChevronRight className="text-text mx-1 dark:text-white" />
            </span>
          </Link>
          <h3>{title}</h3>
        </div>
        <p className="my-2.5">{description}</p>
        <ul className="list-none my-4">
          <li>
            <span className="badge">Stack</span>
            <span>{stack}</span>
          </li>
          {items.map((item, index) => (
            <li key={index} className="my-0.5">
              <span className="badge">{Object.keys(item)}</span>
              <span className="text-secondary hover:underline underline-offset-2 dark:text-secondarydark">
                <a href={Object.values(item)} target="_blank">
                  {Object.values(item)}
                </a>
              </span>
            </li>
          ))}
        </ul>
      </section>
      <img
        src={src}
        alt={alt}
        width="720"
        height="365"
        className="rounded-xl"
      ></img>
    </>
  );
}

export default Project;
