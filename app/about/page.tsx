import Link from "next/link";
import React from "react";

export const metadata = {
  title: "About - yonahakanji",
};

const page = () => {
  return (
    <div className="text-center opacity-75 lg:text-xl lg:h-[calc(100%-8rem)] flex justify-center flex-col">
      <p>
        Hi, I'm yonahadev, thanks for checking out my website! This is a simple
        kanji dictionary in a familiar style for Japanese learners looking to
        find new Kanji or remember existing ones.
      </p>
      <br></br>
      <p>
        This site uses the{" "}
        <Link
          className="underline text-accent"
          href={"https://foosoft.net/projects/yomichan/index.html#dictionaries"}
        >
          KANJIDIC
        </Link>{" "}
        dictionary which contains numerous pieces of additional data which can
        be used to identify each kanji. The site has a total of 10350 kanji
        ranging from the most used to lesser used ones.
      </p>
      <br></br>
      <p>
        Each kanji has information regarding its Kunyomi and Onyomi readings as
        well as the English translation. You can search with either the English
        Japanese character sets including Romaji, Hiragana, Katakana and Kanji.
        The current system ranks search results by newspaper frequency to try
        and estimate relevance, although I would be willing to listen to any
        suggestions to try and improve this.
      </p>
      <br></br>
      <p>
        If you have any issues or would like to look at more of my work, feel
        free to click my github link below to find me. Happy learning!
      </p>
    </div>
  );
};

export default page;
