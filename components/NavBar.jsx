import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import NinjaIcon from "./NinjaIcon";
import { useTheme } from "next-themes";
import { GiHamburgerMenu } from "react-icons/gi";
import { BiSun } from "react-icons/bi";
import { IoMdMoon } from "react-icons/io";
import { AiFillGithub } from "react-icons/ai";

function NavBar(props) {
  const { systemTheme, theme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);
  const [iconColor, setIconColor] = useState();
  const [isOpen, setIsOpen] = useState(false);

  const ref = useRef();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    theme === "light" ? setIconColor("#1a202c") : setIconColor("#ffffeb");
  }, [theme]);

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (isOpen && ref.current && !ref.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [isOpen]);

  const renderThemeChanger = () => {
    if (!mounted) return null;

    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "light") {
      return (
        <button
          aria-label="Dark theme button"
          className="h-[38px] w-[38px] flex justify-center items-center bg-[#805ad5] rounded-lg transitionall hover:bg-[#6b46c1]"
          onClick={() => setTheme("dark") & setIsOpen(false)}
        >
          <IoMdMoon className="w-[18px] h-[18px] text-white" />
        </button>
      );
    } else
      return (
        <button
          aria-label="Light theme button"
          className="h-[38px] w-[38px] flex justify-center items-center bg-[#fbd38d] rounded-lg transitionall hover:bg-[#f6b059]"
          onClick={() => setTheme("light") & setIsOpen(false)}
        >
          <BiSun className="text-text w-[20px] h-[20px]" />
        </button>
      );
  };

  const Links = () => {
    const links = [
      { tabName: "Rólam", href: "/" },
      { tabName: "Projectek", href: "/projects" },
      { tabName: "Blog", href: "/blog" },
    ];
    const classes = "cursor-pointer hover:underline hover:underline-offset-4";

    return (
      <>
        {links.map((link, index) => (
          <li key={index} className={classes} onClick={() => setIsOpen(false)}>
            <Link href={link.href}>{link.tabName}</Link>
          </li>
        ))}
        <li>
          <a href="https://github.com/wDers" target="_blank" rel="noopener">
            <div className="flex flex-row items-center gap-1">
              <AiFillGithub /> Github
            </div>
          </a>
        </li>
      </>
    );
  };

  return (
    <nav className="flex justify-center" ref={ref}>
      <div className="w-[768px] flex flex-row justify-between py-2">
        <div className="flex flex-row gap-6">
          <Link href="/">
            <div
              className="flex flex-row gap-1.5 items-center py-1.5 text-text cursor-pointer dark:text-textdark"
              onClick={() => setIsOpen(false)}
            >
              <NinjaIcon color={iconColor} />
              <span className="text-lg font-semibold">Walek Ders</span>
            </div>
          </Link>
          <ul className="hidden flex-row items-center gap-5 ml-3 md:flex">
            <Links />
          </ul>
        </div>
        <div className="flex gap-1 items-center">
          {renderThemeChanger()}
          <button
            aria-label="Navigation button"
            className="h-[38px] w-[38px] flex justify-center items-center rounded-lg outline-none md:hidden"
          >
            <GiHamburgerMenu
              className="text-text dark:text-textdark"
              onClick={() => setIsOpen(!isOpen)}
            />
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="flex justify-end scale md:hidden">
          <ul className="absolute top-14 z-20 flex flex-col gap-2 w-52 bg-white py-3 px-4 border-[1px] border-whitesmoke rounded-md shadow-md dark:bg-[#2D3748]">
            <Links />
          </ul>
        </div>
      )}
    </nav>
  );
}

export default NavBar;
