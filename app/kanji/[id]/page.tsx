import Kanji from "@/KanjiList.json";
import KanjiEntry from "@/interfaces";

const page = ({ params }: { params: { id: number } }) => {
  const id = params.id - 1;
  const kanjiArray = Object.values(Kanji);
  const currentKanji: KanjiEntry = kanjiArray[id];

  return (
    <div>
      {currentKanji[0]}
      {currentKanji[1]}
      {currentKanji[2]}
      {currentKanji[3]}
      {currentKanji[4].map((translation: string) => (
        <p>{translation}</p>
      ))}
      {Object.entries(currentKanji[5]).map(([key, value]: any) => (
        <p>
          {key}:{value}
        </p>
      ))}
    </div>
  );
};

export default page;
