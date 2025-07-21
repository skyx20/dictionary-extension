import Loader from "./Loader";
import DotsLoader from "../assets/3-dots-bounce.svg";

type Props = {
  children: React.ReactNode;
  isDisable: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

function Button({ children, isDisable, onClick }: Props) {
  return (
    <button
      disabled={isDisable || false}
      onClick={onClick}
      className="
      
    bg-headerBlue rounded-full 
      text-sm text-white duration-200 
      
      focus:ring-btnHv
      hover:ring-1 hover:ring-btnHv hover:ring-offset-2
      font-semibold 
      cursor-pointer
      h-10
      w-20
      flex items-center justify-center overflow-hidden
      relative
      "
    >
      {isDisable ? (
        // <img className="pt-1 h-6 w-6" src={DotsLoader} alt="loader" />
        <Loader />
      ) : (
        children
      )}
    </button>
  );
}

export default Button;
