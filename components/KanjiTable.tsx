import Kanji from "@/KanjiList.json";
import Link from "next/link";
import React from "react";
import KanjiEntry from "./KanjiEntry";

interface Props {
  searchResult: string;
}

const KanjiTable = ({ searchResult }: Props) => {
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
