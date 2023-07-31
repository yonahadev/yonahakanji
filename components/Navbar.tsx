import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full h-16 flex items-center justify-between font-semibold text-xl">
      <Link href={"/"}>yonahadic</Link>
      <Link href={"/about"}>About</Link>
    </nav>
  );
};

export default Navbar;
