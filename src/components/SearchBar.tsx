import Input from "../ui/Input";
import Button from "../ui/Button";
import Loader from "../ui/Loader";

function SearchBar() {
  const [isLoading, setIsLoading] = useState(false);
  const [inputString, setInputString] = useState("");

  function handleSubmit(e: React.MouseEvent<HTMLButtonElement>) {
    setIsLoading(true);
    e.preventDefault;
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  }

  return (
    <div className="box-border h-full gap-4 flex-col flex justify-center items-center">
      <p className="font-bold text-lg italic text-gray-700">
        Let's see what it means:
      </p>
      <form
        method="post"
        className="
      text-center
      "
      >
        <Input
          isDisabled={isLoading}
          name="word"
          placeholder="Insert the word"
          value={inputString}
          onChange={setInputString}
        />
        <div className="pt-4 relative">
          <Button onClick={(e) => handleSubmit(e)} isDisable={isLoading}>
            Search
          </Button>
        </div>
      </form>
    </div>
  );
}

export default SearchBar;
