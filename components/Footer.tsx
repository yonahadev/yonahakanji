import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full h-16 flex items-center justify-between font-semibold text-xl">
      <Link href={"https://github.com/yonahadev"}>© yonahadev 2023</Link>
    </footer>
  );
};

export default Footer;
