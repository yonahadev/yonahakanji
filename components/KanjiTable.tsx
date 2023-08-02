import Kanji from "@/KanjiList.json";
import KanjiEntryInterface from "@/interfaces";
import Link from "next/link";
import React from "react";
import * as wanakana from "wanakana";
import KanjiEntry from "./KanjiEntry";

interface Props {
  searchResult: string;
}

const KanjiTable = ({ searchResult }: Props) => {
  // plan: convert all to romaji then compare and return if kanji just return kanji
  const searchResultCheck = (string: string) => {
    const dotlessString = string.replaceAll(".", "");
    if (wanakana.isKanji(dotlessString)) {
      return dotlessString;
    } else {
      const newString = wanakana.toRomaji(dotlessString);
      const lowerString = newString.toLowerCase();
      return lowerString;
    }
  };

  const stringSplit = (string: string) => {
    const dotlessString = string.replaceAll(".", "");
    const romajiString = wanakana.toRomaji(dotlessString);
    const array = romajiString.split(" ");
    return array;
  };

  const mixedCheck = (str: string) => {
    const tokenised = wanakana.tokenize(str);
    return tokenised;
  };

  const kanjiArray = Object.values(Kanji);

  const finalResult = searchResultCheck(searchResult);

  const filteredKanji =
    searchResult === ""
      ? kanjiArray.slice(0, 0)
      : kanjiArray.filter((kanji) => {
          const onyomi = stringSplit(kanji[1]);
          const kunyomi = stringSplit(kanji[2]);
          const kanjiChar = kanji[0];
          const meanings = kanji[4];

          return (
            onyomi.includes(finalResult) ||
            kunyomi.includes(finalResult) ||
            meanings.includes(finalResult) ||
            finalResult.split("").includes(kanjiChar) ||
            mixedCheck(finalResult).some(
              (element) =>
                onyomi.includes(element) ||
                kunyomi.includes(element) ||
                meanings.includes(element)
            )
          );
        });

  const length = filteredKanji.length;

  const freqKanji = filteredKanji.filter((entry) => entry[5]?.freq);
  freqKanji.sort((entryA, entryB) => entryA[5]?.freq - entryB[5]?.freq);

  const orderedKanji = freqKanji.concat(
    filteredKanji.filter((entry) => !entry[5]?.freq)
  );

  return (
    <div className="mt-2">
      <p className="opacity-50 over break-words">
        {searchResult == "" ? (
          "Please enter something into the search bar."
        ) : (
          <>
            Found {length} {length === 1 ? "result" : "results"} for{" "}
            <span className="font-semibold">{searchResult}</span>
          </>
        )}
      </p>
      {orderedKanji.map((kanji, index) => (
        <KanjiEntry key={index} kanji={kanji} />
      ))}
      <Link className="underline text-accent font-semibold" href={"/"}>
        Home
      </Link>
    </div>
  );
};

export default KanjiTable;
