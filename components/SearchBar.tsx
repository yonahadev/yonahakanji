import { FormData } from "@/interfaces";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { AiOutlineSearch } from "react-icons/ai";

interface Props {
  submitEvent: SubmitHandler<FormData>;
  placeholderText?: string;
}

const SearchBar = ({ submitEvent, placeholderText }: Props) => {
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
