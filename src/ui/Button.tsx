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
      bg-main rounded-full 
      text-sm text-font duration-200 
      transition ease-in-out
      focus:ring-1 focus:ring-offset-2 focus:ring-main
      hover:ring-1 hover:ring-secondary hover:ring-offset-2
      font-semibold 
      cursor-pointer
      
      px-8 py-3"
    >
      {isDisable ? <Loader/> : 
      <p className={isDisable ? "opacity-0" : "opacity-100"}>{children}</p>
      }
    </button>
  );
}

export default Button;
