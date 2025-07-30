import Input from "../ui/Input";
import Button from "../ui/Button";
import { useNavigate } from "react-router";
import { sendMessage } from "webext-bridge/background";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { CiCircleInfo } from "react-icons/ci";
import { FaRegQuestionCircle } from "react-icons/fa";

function Search() {
  type dictTypes = {
    uk: string;
    us: string;
    be: string;
    [key: string]: string;
  };
  const dictVariants: dictTypes = {
    uk: "United Kingdom",
    us: "United States",
    be: "Business",
  };

  const [helpVariant, setHelpVariant] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [wordToSearch, setWordToSearch] = useState("");
  const [variant, setVariant] = useState("uk");
  const [error, setError] = useState("");
  const navigation = useNavigate();

  useEffect(() => {
    const dictPref = localStorage.getItem("userDictPref");
    if (dictPref) setVariant(dictPref);
  }, []);

  function handleMsgClose(): void {
    setError("");
  }
  function handleVariant(e: React.ChangeEvent<HTMLSelectElement>) {
    const value = e.target.value;
    setVariant(value);
    localStorage.setItem("userDictPref", value);
  }

  async function handleSubmit(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    if (!wordToSearch) {
      setError("Insert a word");
      return;
    }
    if (!variant) {
      setError("select a dictionary variant first");
      return;
    }

    setIsLoading(true);
    const fQuery = wordToSearch.toLowerCase().trim();
    try {
      const data = await browser.runtime.sendMessage({
        type: "getWord",
        message: { word: fQuery, variant: variant },
      });
      if (data.detail) {
        setError(data.detail);
        return;
      }
      // Send the data to the meanings page
      navigation(`/meanings/${wordToSearch}/${variant}`, {
        state: { wordData: data },
      });
    } catch (e) {
      console.log(e);
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
            value={wordToSearch}
            onChange={setWordToSearch}
          />
          <div className="mx-auto pt-2 flex justify-center">
            <Button onClick={handleSubmit} isDisable={isLoading}>
              Search
            </Button>
          </div>
          {
            <div className="relative flex justify-center flex-col items-center mt-2 mx-auto">
              <select
                onChange={(e) => handleVariant(e)}
                className="
                focus:outline-none
                border-1 w-fit p-1 border-slate-400 rounded
                "
                name="variants"
                value={variant}
              >
                {Object.keys(dictVariants).map((country) => (
                  <option key={country} value={country}>
                    {dictVariants[country]}
                  </option>
                ))}
              </select>
              <div
                className="absolute top-0 right-8 hover:cursor-pointer"
                onMouseEnter={() => setHelpVariant(true)}
                onMouseLeave={() => setHelpVariant(false)}
              >
                <FaRegQuestionCircle className="h-4 w-4" />
              </div>
              <span
                className={`absolute border-1 border-slate-400 
                  rounded pl-1 w-15 pointer-events-none text-left text-slate-800 leading-3.5
                  top-0 -right-9 font-gentium-plus transition-all duration-300
                            ${
                              helpVariant
                                ? "opacity-100 translate-x-0 pointer-events-auto"
                                : "opacity-0 -translate-x-2 "
                            }
                          `}
              >
                select a dictionary variant
              </span>
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
            <button className="hover:cursor-pointer" onClick={handleMsgClose}>
              <IoIosCloseCircleOutline className="h-5 w-5" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Search;
