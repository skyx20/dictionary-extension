import Input from "../ui/Input";
import Button from "../ui/Button";
import { useNavigate } from "react-router";
import { sendMessage } from "webext-bridge/background";
import { BsInputCursorText } from "react-icons/bs";

function Search() {
  const [isLoading, setIsLoading] = useState(false);
  const [inputString, setInputString] = useState("");
  const [lang, setLang] = useState("uk");
  const navigation = useNavigate();

  async function handleSubmit(e: React.MouseEvent<HTMLButtonElement>) {
    setIsLoading(true);
    e.preventDefault();
    try {
      const r = await fetch(
        `http://127.0.0.1:8000/search/${inputString}/${lang}`
      );
      if (!r.ok) throw new Error(`HTTP error: ${r.status}`);

      const data = await r.json();
      navigation(`/meanings/${inputString}/${lang}`, {
        state: { wordData: data },
      });
    } catch (e) {
      console.error("Fetch failed", e);
    } finally {
      setIsLoading(false);
    }
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
  );
}

export default Search;
