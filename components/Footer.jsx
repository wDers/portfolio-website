import React from "react";

function Footer(props) {
  return (
    <span className="flex justify-center text-sm pt-4 pb-5">
      &copy; {new Date().getFullYear()} Walek Ders. Minden jog fenntartva.
    </span>
  );
}

export default Footer;
