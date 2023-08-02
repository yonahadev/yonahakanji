"use client";
import Kanji from "@/KanjiList.json";
import BackButton from "@/components/BackButton";
import SearchBar from "@/components/SearchBar";
import stringToArray from "@/functions";
import { FormData, KanjiEntryInterface } from "@/interfaces";
import { useRouter } from "next/navigation";
import React from "react";

const page = ({ params }: { params: { id: number } }) => {
  const id = params.id - 1;
  const kanjiArray = Object.values(Kanji);
  const currentKanji: KanjiEntryInterface = kanjiArray[id];

  const router = useRouter();
  const submitEvent = (data: FormData) => {
    router.push(`/search/${data.result}`);
  };

  return (
    <>
      <SearchBar placeholderText="" submitEvent={submitEvent} />
      <div className="grid-cols-[35%,65%] grid my-4 gap-2">
        <div className="flex items-center flex-col gap-2">
          <p className="text-7xl">{currentKanji[0]}</p>
          <p className="bg-accent text-white w-3/4 p-1 rounded-lg text-center font-semibold">
            {currentKanji[3]}
          </p>
          <p className="text-sm opacity-75">
            {currentKanji[5].strokes !== undefined
              ? `${currentKanji[5].strokes} strokes`
              : null}
          </p>
          <p className="text-sm opacity-75">
            {currentKanji[5].grade !== undefined
              ? `Grade ${currentKanji[5].grade}`
              : null}
          </p>
          <p className="text-sm opacity-75">
            {currentKanji[5].jlpt !== undefined
              ? `JLPT N${currentKanji[5].jlpt}`
              : null}
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-2xl">
            {currentKanji[4].map(
              //maps english meaning
              (translation: string, index) => (
                <React.Fragment key={index}>
                  {index !== 0 && ", "}
                  {translation}
                </React.Fragment>
              )
            )}
          </p>
          <p className="mt-2 text-xl">
            On:{" "}
            {stringToArray(currentKanji[1]).map(
              //maps  english meaning
              (translation: string, index) => (
                <React.Fragment key={index}>
                  {index !== 0 && ", "}
                  <span className="text-accent">{translation}</span>
                </React.Fragment>
              )
            )}
          </p>
          <p className="text-xl">
            Kun:{" "}
            {stringToArray(currentKanji[2]).map(
              //maps  english meaning
              (translation: string, index) => (
                <React.Fragment key={index}>
                  {index !== 0 && ", "}
                  <span className="text-accent">{translation}</span>
                </React.Fragment>
              )
            )}
          </p>
        </div>
        <div className="col-span-2 flex items-center flex-col gap-2 mt-4">
          <p className="text-center text-sm opacity-50">
            {currentKanji[5].freq !== undefined
              ? `${currentKanji[5].freq}/2500 most frequent word in newspapers`
              : null}
          </p>
          <p className="text-sm opacity-50">
            {currentKanji[5].skip !== undefined
              ? `${currentKanji[5].skip} skip code`
              : null}
          </p>
          <p className="text-sm opacity-50">
            {currentKanji[5].ucs !== undefined
              ? `${currentKanji[5].ucs} unicode`
              : null}
          </p>
        </div>
      </div>
      <BackButton />
    </>
  );
};

export default page;
