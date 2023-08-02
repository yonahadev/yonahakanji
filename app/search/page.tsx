"use client";

import KanjiTable from "@/components/KanjiTable";
import SearchBar from "@/components/SearchBar";
import { FormData } from "@/interfaces";
import { useEffect, useState } from "react";

export default function Home({ params }: { params: { search: string } }) {
  const [placeholderText, setPlaceholderText] = useState("");

  function isPercentEncoded(str: string) {
    const regex = /%[0-9A-Fa-f]{2}/g;
    return regex.test(str);
  }

  useEffect(() => {
    if (params.search !== undefined) {
      if (isPercentEncoded(params.search)) {
        params.search = decodeURIComponent(params.search);
      }
      setFormResult(params.search);
      setPlaceholderText(params.search);
    }
    // window.history.replaceState(null, "", "/search");
  }, []);
  const submitEvent = (data: FormData) => {
    setFormResult(data.result);
    window.history.replaceState(null, "", `/search/${data.result}`);
  };

  const [formResult, setFormResult] = useState<string>("");

  return (
    <main>
      <SearchBar placeholderText={placeholderText} />
      <KanjiTable searchResult={formResult} />
    </main>
  );
}
