import Input from "../ui/Input";
import Button from "../ui/Button";
import { useNavigate } from "react-router";
import { sendMessage } from "webext-bridge/background";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { CiCircleInfo } from "react-icons/ci";

function Search() {
  const [isLoading, setIsLoading] = useState(false);
  const [inputString, setInputString] = useState("");
  const [lang, setLang] = useState("uk");
  const [error, setError] = useState("");
  const navigation = useNavigate();

  function handleClose(): void {
    setError("");
  }
  function handleLang(e: React.ChangeEvent<HTMLSelectElement>) {
    setLang(e.target.value);
  }
  console.log(lang);

  async function handleSubmit(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    if (!inputString) {
      setError("Insert a word");
      return;
    }
    setIsLoading(true);
    const fQuery = inputString.toLowerCase().trim();
    try {
      const r = await fetch(`http://127.0.0.1:8000/search/${fQuery}/${lang}`);
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
          {
            <div className="flex gap-2 justify-center mt-2">
              <div className="relative w-fit">
                <select
                  onChange={(e) => handleLang(e)}
                  defaultChecked
                  className="
                    focus:outline-none
                    border-1 w-fit p-1 border-greyEx rounded
                "
                  name="langs"
                >
                  <option value="uk">Unided Kindom</option>
                  <option value="us">United Stated</option>
                  <option value="be">Bussines</option>
                </select>
                <div className="absolute hover:cursor-help -right-5 top-0">
                  <div>
                    <CiCircleInfo className="h-4 w-4" />
                    <span className="opacity-0">
                      Select a dictionary variant
                    </span>
                  </div>
                </div>
              </div>
            </div>
          }
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
