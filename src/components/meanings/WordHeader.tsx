type wordHeaderTypes = {
  word: string;
  word_origin: "uk" | "us" | "be";
};

function WordHeader({ word, word_origin }: wordHeaderTypes) {
  return (
    <div className="flex flex-col gap-1.5">
      <h1 className="text-xl font-bold">{word}</h1>
      <div className="flex ">
        <p
          title="origin"
          className="rounded-3xl  text-white bg-greenBg py-0.5 px-2"
          id="w-origin"
        >
          {word_origin}
        </p>
      </div>
    </div>
  );
}

export default WordHeader;
