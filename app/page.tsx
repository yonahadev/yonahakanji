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
    <div className="w-full h-[calc(100%-4rem)] flex justify-center items-center text-center">
      <h1 className="text-3xl font-bold">
        Esoteric{" "}
        <span className="text-transparent bg-gradient-to-r from-primary to-accent bg-clip-text">
          Kanji
        </span>{" "}
        Dictonary
      </h1>
      <SearchBar submitEvent={submitEvent} />
    </div>
  );
};

export default page;
