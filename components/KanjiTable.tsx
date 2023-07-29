import Kanji from "@/KanjiList.json";
import Link from "next/link";
import React from "react";

const KanjiTable = () => {
  const kanjiArray = Object.values(Kanji);

  return (
    <div>
      {kanjiArray.slice(0, 10).map((kanji, index) => (
        <div key={kanji.id}>
          <Link
            href={`/${kanji.id}`}
            className="text-xl text-blue-600 hover:text-blue-800 visited:text-purple-600 underline"
          >
            {kanji[0]}
          </Link>
          <p>{kanji[1]}</p>
          <p>{kanji[2]}</p>
          <p>{kanji[3]}</p>
          {kanji[4].map((translation: string) => (
            <p>{translation}</p>
          ))}
          {Object.entries(kanji[5]).map(([key, value]: any) => (
            <p>
              {key}:{value}
            </p>
          ))}
        </div>
      ))}
    </div>
  );
};

export default KanjiTable;
