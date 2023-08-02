import stringToArray from "@/functions";
import KanjiEntryInterface from "@/interfaces";
import Link from "next/link";
import React from "react";

interface Props {
  kanji: KanjiEntryInterface;
}

const KanjiEntry = ({ kanji }: Props) => {
  return (
    <div className="border-b-2 my-2">
      <p className="opacity-50 mb-2 lg:text-lg">
        <span>
          {kanji[5].strokes !== undefined
            ? `${kanji[5].strokes} strokes. `
            : null}
        </span>
        <span>
          {kanji[5].grade !== undefined
            ? `Taught in grade ${kanji[5].grade}. `
            : null}
        </span>
        <span>
          {kanji[5].jlpt !== undefined ? `JLPT N${kanji[5].jlpt}.` : null}
        </span>
      </p>
      <div className="flex">
        <Link href={`/kanji/${kanji.id}`} className="text-5xl lg:text-6xl">
          {kanji[0]}
        </Link>
        <div className="ml-4 text-lg lg:text-xl font-medium w-full flex flex-col">
          {kanji[4].map(
            //maps english meaning
            (translation: string, index) => (
              <React.Fragment key={index}>
                {index !== 0 && ", "}
                {translation}
              </React.Fragment>
            )
          )}
          <p className="mt-2">
            On:{" "}
            {stringToArray(kanji[1]).map(
              //maps  english meaning
              (translation: string, index) => (
                <React.Fragment key={index}>
                  {index !== 0 && ", "}
                  <span className="text-accent">{translation}</span>
                </React.Fragment>
              )
            )}
          </p>
          <p>
            Kun:{" "}
            {stringToArray(kanji[2]).map(
              //maps  english meaning
              (translation: string, index) => (
                <React.Fragment key={index}>
                  {index !== 0 && ", "}
                  <span className="text-accent">{translation}</span>
                </React.Fragment>
              )
            )}
          </p>
          <Link
            href={`/kanji/${kanji.id}`}
            className="text-sm text-accent lg:text-base font-normal underline ml-auto"
          >
            details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default KanjiEntry;
