import { useRouter } from "next/navigation";
import React from "react";

const BackButton = () => {
  const router = useRouter();
  return (
    <button
      className="underline text-accent font-semibold w-full"
      onClick={() => {
        router.back();
        router.refresh();
      }}
    >
      Back to search results
    </button>
  );
};

export default BackButton;
