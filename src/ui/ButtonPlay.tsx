import { IoPlayOutline } from "react-icons/io5";
import { useState } from "react";
import { GiSoundWaves } from "react-icons/gi";

type ButtonPlayTypes = {
  src: string;
};

function ButtonPlay({ src }: ButtonPlayTypes) {
  const audio = useRef<HTMLAudioElement>(null);

  const [isDisabled, setIsDisable] = useState(false);

  function handlePlay() {
    if (!audio.current) return;

    setIsDisable(true);
    audio.current?.play();

    audio.current.onended = () => {
      setIsDisable(false);
    };
  }

  return (
    <button
      onClick={handlePlay}
      className={`
      py-2 px-1 rounded-2xl 
      transition-colors ease-in-out duration-150
      ${
        isDisabled
          ? "bg-btnHv "
          : "bg-headerBlue hover:bg-btnHv hover:cursor-pointer"
      }
      `}
      disabled={isDisabled}
    >
      <div className="">
        {isDisabled ? (
          <GiSoundWaves className="text-white" />
        ) : (
          <IoPlayOutline className="text-white" />
        )}
      </div>
      <audio ref={audio} src={src}></audio>
    </button>
  );
}

export default ButtonPlay;
