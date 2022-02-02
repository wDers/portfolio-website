import React from "react";
import Typewriter from "typewriter-effect";

function Header({ strings, lastString }) {
  return (
    <section>
      <div className="text-center my-6 bg-[#f5f0e8] rounded-md shadow-sm p-2 dark:bg-[#23212B]">
        <Typewriter
          options={{
            strings: strings,
            autoStart: true,
            loop: false,
            delay: "25",
            deleteSpeed: "25",
            pauseFor: "2500",
          }}
          onInit={(typewriter) => {
            typewriter.typeString(lastString).start();
          }}
        />
      </div>
      <div className="md:w-2/3 md:mx-auto relative md:top-2">
        <div className="flex flex-col md:flex-row md:justify-between">
          <div className="flex flex-col">
            <h1>Walek Ders</h1>
            <span>Junior Frontend Developer</span>
          </div>
          <div className="flex justify-center mt-4 md:mt-0">
            <img
              src="/avatar.jpg"
              height="100px"
              width="100px"
              alt="Profile picture"
              className="rounded-full border-2 border-[#ffffffcc]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Header;
