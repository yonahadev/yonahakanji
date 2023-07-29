import { FormData } from "@/interfaces";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";

interface Props {
  submitEvent: SubmitHandler<FormData>;
}

const SearchBar = ({ submitEvent }: Props) => {
  const { register, handleSubmit } = useForm<FormData>();
  return (
    <form onSubmit={handleSubmit(submitEvent)}>
      <input
        {...register("result")}
        placeholder="Enter English or Japanese"
      ></input>
      <input type="submit"></input>
    </form>
  );
};

export default SearchBar;
