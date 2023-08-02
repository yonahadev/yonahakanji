"use client";
import { FormData } from "@/interfaces";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import { AiOutlineSearch } from "react-icons/ai";

interface Props {
  placeholderText?: string;
}

const SearchBar = ({ placeholderText }: Props) => {
  const router = useRouter();
  const submitEvent = (data: FormData) => {
    router.push(`/search/${data.result}`);
  };
  const { register, handleSubmit } = useForm<FormData>();
  return (
    <form
      onSubmit={handleSubmit(submitEvent)}
      className="flex items-center justify-center w-full border-accent border-2 rounded-sm px-2"
    >
      <input
        {...register("result")}
        placeholder={"Enter English or Japanese"}
        defaultValue={placeholderText}
        className="w-full bg-transparent h-12 focus:outline-none text-lg"
      ></input>
      <span onClick={handleSubmit(submitEvent)} className="">
        <AiOutlineSearch size="30" color="" />
      </span>
    </form>
  );
};

export default SearchBar;
