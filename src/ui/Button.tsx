import Loader from "./Loader";

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
      relative
      bg-headerBlue rounded-full 
      text-sm text-font duration-200 
      transition ease-in-out
      focus:ring-1 focus:ring-offset-2 focus:ring-btnHv
      hover:ring-1 hover:ring-btnHv hover:ring-offset-2
      font-semibold 
      cursor-pointer
      px-4 py-2"
    >
      {isDisable ? (
        <Loader />
      ) : (
        <p className={isDisable ? "opacity-0" : "opacity-100"}>{children}</p>
      )}
    </button>
  );
}

export default Button;
