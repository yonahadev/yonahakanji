"use client";

import KanjiTable from "@/components/KanjiTable";
import SearchBar from "@/components/SearchBar";
import { FormData } from "@/interfaces";
import { useState } from "react";

export default function Home() {
  const submitEvent = (data: FormData) => {
    setFormResult(data);
  };

  const [formResult, setFormResult] = useState<FormData>({
    result: "",
  });

  return (
    <main>
      <h1>yonaha-dic</h1>
      {formResult ? <p>{formResult.result}</p> : null}
      <SearchBar submitEvent={submitEvent} />
      <KanjiTable searchResult={formResult.result} />
    </main>
  );
}
