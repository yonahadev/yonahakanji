"use client";
import SearchBar from "@/components/SearchBar";
import { FormData } from "@/interfaces";
import { useRouter } from "next/navigation";
import React from "react";

const page = () => {
  const router = useRouter();
  const submitEvent = (data: FormData) => {
    router.push(`/search/${data.result}`);
  };
  return (
    <div className="w-full h-[calc(100%-8rem)] flex justify-center items-center text-center flex-col gap-4">
      <h1 className="text-3xl font-bold tracking-tighter">
        Just another{" "}
        <span className="text-transparent bg-gradient-to-r from-primary to-accent bg-clip-text">
          Kanji
        </span>{" "}
        dictonary
      </h1>
      <SearchBar placeholderText="" submitEvent={submitEvent} />
      <p className="text-sm opacity-50">
        yonahadic is a simple Japanese-English Kanji dictonary. To get started
        type something into the search bar.
      </p>
    </div>
  );
};

export default page;
