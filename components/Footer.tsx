import Link from "next/link";
import React from "react";
import { AiFillGithub } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="w-full h-16 flex items-center justify-center font-medium gap-1 lg:text-lg">
      <AiFillGithub size="30" />
      <p>©</p>
      <Link
        href={"https://github.com/yonahadev"}
        className="text-accent underline"
      >
        yonahadev
      </Link>
      <p>2023</p>
    </footer>
  );
};

export default Footer;
