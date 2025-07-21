import Input from "../ui/Input";
import Button from "../ui/Button";
import { useNavigate } from "react-router";
import { sendMessage } from "webext-bridge/background";
import { IoIosCloseCircleOutline } from "react-icons/io";

function Search() {
  const [isLoading, setIsLoading] = useState(false);
  const [inputString, setInputString] = useState("");
  const [lang, setLang] = useState("uk");
  const [error, setError] = useState("");
  const navigation = useNavigate();

  function handleClose() {
    setError("");
  }

  async function handleSubmit(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    if (!inputString) {
      setError("Insert a word");
      return;
    }
    setIsLoading(true);
    try {
      const r = await fetch(
        `http://127.0.0.1:8000/search/${inputString}/${lang}`
      );

      if (!r.ok) {
        console.log("this is error", r);
        const errorMessage = await r.json();
        setError(errorMessage.detail);
        throw new Error(r.statusText);
      }

      const data = await r.json();

      navigation(`/meanings/${inputString}/${lang}`, {
        state: { wordData: data },
      });
    } catch (e) {
      console.error(e);
      setIsLoading(false);
      // Optionally handle the error UI
      // setError('An unexpected error occurred.');
    }
  }

  return (
    <div className="h-full flex flex-col gap-4">
      <div className="h-64 pb-auto gap-4 flex-col flex justify-end items-center">
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
          <div className="mx-auto pt-2 flex justify-center">
            <Button onClick={handleSubmit} isDisable={isLoading}>
              Search
            </Button>
          </div>
          {/* <div className="border-1 border-greyEx rounded mt-2">
              <select
              // onChange={setLang(value)}
                defaultChecked
                className="mx-auto"
                name="langs"
                >
                <option>dict Variant</option>
                <option value="uk">Unided Kindom</option>
                <option value="us">United Stated</option>
                <option value="be">Bussines</option>
                </select>
                </div> */}
        </form>
      </div>
      {error && (
        <div className="mx-auto">
          <div
            className="
          flex justify-between gap-5 items-center rounded 
          p-2 bg-red-200"
          >
            <div className="italic text-xs text-red-600">{error}</div>
            <button className="hover:cursor-pointer" onClick={handleClose}>
              <IoIosCloseCircleOutline className="h-5 w-5" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Search;
