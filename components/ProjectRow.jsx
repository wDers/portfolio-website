import React from "react";
import Link from "next/link";

function ProjectRow({
  amount,
  src,
  src2,
  href,
  href2,
  alt,
  alt2,
  topText,
  bottomText,
  topText2,
  bottomText2,
  withHeader,
}) {
  const header = "text-lg font-semibold";
  return (
    <div className="pt-2 sm:flex sm:flex-row">
      <Link href={href}>
        <div className="cursor-pointer sm:mx-2">
          <img
            src={src}
            alt={alt}
            className="rounded-xl"
            width="720"
            height="365"
          />
          <div className="flex flex-col text-center text-sm mt-3 mb-5">
            <span className={withHeader ? header : null}>{topText}</span>
            <span>{bottomText}</span>
          </div>
        </div>
      </Link>
      <Link href={href2}>
        <div
          className={
            amount === 2
              ? "cursor-pointer sm:mx-2"
              : "cursor-pointer sm:mx-2 invisible"
          }
        >
          <img
            src={src2}
            alt={alt2}
            className="rounded-xl"
            width="720"
            height="365"
          />
          <div className="flex flex-col text-center text-sm mt-3 mb-5">
            <span className={withHeader === true ? header : null}>
              {topText2}
            </span>
            <span>{bottomText2}</span>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default ProjectRow;
