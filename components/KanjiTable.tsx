import Kanji from "@/KanjiList.json";
import React from "react";
import KanjiEntry from "./KanjiEntry";

interface Props {
  searchResult: string;
}

const KanjiTable = ({ searchResult }: Props) => {
  const kanjiArray = Object.values(Kanji);

  const filteredKanji =
    searchResult === ""
      ? kanjiArray.slice(0, 10)
      : kanjiArray.filter((kanji) => kanji[0].includes(searchResult));

  return (
    <div>
      {filteredKanji.map((kanji, index) => (
        <KanjiEntry key={index} kanji={kanji} />
      ))}
    </div>
  );
};

export default KanjiTable;
