type wordHeaderTypes = {
  word: string;
  word_origin: "uk" | "us" | "be";
};

function WordHeader({ word, word_origin }: wordHeaderTypes) {
  return (
    <header className="flex flex-col text-center gap-2">
      <h1 className="text-3xl font-bold">{word}</h1>
      <strong
        title="origin"
        className="rounded-3xl mx-auto text-white bg-greenBg py-0.5 px-2"
        id="w-origin"
      >
        {word_origin}
      </strong>
    </header>
  );
}

export default WordHeader;
