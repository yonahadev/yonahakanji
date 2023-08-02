import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full h-16 flex items-center justify-between font-semibold text-xl tracking-tighter lg:text-2xl">
      <Link href={"/"} className="">
        <span className="text-accent font-normal">與那覇</span> yonahadic
      </Link>
      <Link className="underline text-accent font-normal" href={"/about"}>
        About
      </Link>
    </nav>
  );
};

export default Navbar;
