import SearchBar from "@/components/SearchBar";
import React from "react";

export const metadata = {
  title: "Home - yonahakanji",
};

const page = () => {
  return (
    <div className="w-full h-[calc(100%-8rem)] flex justify-center items-center text-center flex-col gap-4">
      <h1 className="text-3xl lg:text-5xl font-bold tracking-tighter">
        Just another{" "}
        <span className="text-transparent bg-gradient-to-r from-primary to-accent bg-clip-text">
          Kanji
        </span>{" "}
        dictonary
      </h1>
      <SearchBar />
      <p className="text-sm opacity-50 lg:text-lg">
        yonahakanji is a simple Japanese-English Kanji dictonary. To get started
        type something into the search bar & for more information go to the
        about section.
      </p>
    </div>
  );
};

export default page;
