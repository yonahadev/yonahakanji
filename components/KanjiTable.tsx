import Kanji from "@/KanjiList.json";
import Link from "next/link";
import React from "react";
import KanjiEntry from "./KanjiEntry";

const KanjiTable = () => {
  const kanjiArray = Object.values(Kanji);

  return (
    <div>
      {kanjiArray.slice(0, 10).map((kanji, index) => (
        <KanjiEntry kanji={kanji} />
      ))}
    </div>
  );
};

export default KanjiTable;
