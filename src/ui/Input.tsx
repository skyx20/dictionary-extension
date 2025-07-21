import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

function Input({
  name,
  placeholder,
  isDisabled,
  value,
  onChange,
}: {
  name: string;
  placeholder: string;
  isDisabled: boolean;
  value: string;
  onChange: Function;
}) {
  return (
    <div className="relative">
      <input
        onChange={(e) => onChange(e.target.value)}
        value={value}
        autoFocus={true}
        name={name}
        disabled={isDisabled}
        type="text"
        placeholder={
          placeholder[0].toUpperCase() +
          placeholder.toLocaleLowerCase().slice(1)
        }
        className={` 
        placeholder:italic 
        font-semibold
        border-1 rounded-xl
        text-sm
        -z-10
        px-8 py-1.5
        ${
          isDisabled
            ? "text-gray-400 placeholder:opacity-0 focus-within:text-gray-300"
            : ""
        }
        `}
      />
      <div className="absolute h-5 w-5 top-1.5 left-1.5 pointer-events-none">
        <MagnifyingGlassIcon></MagnifyingGlassIcon>
      </div>
    </div>
  );
}

export default Input;
