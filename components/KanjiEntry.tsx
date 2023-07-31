import KanjiEntryInterface from "@/interfaces";
import Link from "next/link";
import React from "react";

interface Props {
  kanji: KanjiEntryInterface;
}

const KanjiEntry = ({ kanji }: Props) => {
  return (
    <div>
      <Link
        href={`/kanji/${kanji.id}`}
        className="text-xl text-primary hover:text-accent underline"
      >
        {kanji[0]}
      </Link>
      <p>{kanji[1]}</p>
      <p>{kanji[2]}</p>
      {/* <p>{kanji[3]}</p> */}
      {kanji[4].map((translation: string, index) => (
        <p key={index}>{translation}</p>
      ))}
      {/* {Object.entries(kanji[5]).map(([key, value]: any) => (
        <p key={key}>
          {key}:{value}
        </p>
      ))} */}
    </div>
  );
};

export default KanjiEntry;
