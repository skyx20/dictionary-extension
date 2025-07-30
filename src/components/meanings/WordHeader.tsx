import ukFlag from "../../assets/Flag_of_the_United_Kingdom.png";
import usFlag from "../../assets/Flag_of_the_United_States.png";
import { MdOutlineWork } from "react-icons/md";

type wordHeaderTypes = {
  word: string;
  word_origin: "uk" | "us" | "business";
};

function WordHeader({ word, word_origin }: wordHeaderTypes) {
  console.log("original", word_origin);
  word_origin = "business";
  return (
    <>
      <header
        className="
        mx-auto text-center space-y-2"
      >
        <h1 className="text-3xl font-bold ">{word}</h1>
        <div className="flex gap-2 items-center">
          <strong
            title="origin"
            className="rounded-3xl text-white text-sm bg-greenBg py-0.5 px-2"
            id="w-origin"
          >
            {word_origin}
          </strong>

          {word_origin === "business" ? (
            <MdOutlineWork className="h-6 w-6" />
          ) : (
            <img
              src={word_origin === "uk" ? ukFlag : usFlag}
              className="h-5 w-9 opacity-100"
              alt={word_origin === "uk" ? "uk-flag" : "us-flag"}
            />
          )}
        </div>
      </header>
    </>
  );
}

export default WordHeader;
