import ButtonPlay from "../../ui/ButtonPlay";
import { type ipasAdioLinks } from "./../../pages/types";

type Country = "uk" | "us";

type ipaTypes = {
  contry: string;
  ipa: string;
  src: string;
};

function IPA({ contry, ipa, src }: ipaTypes) {
  return (
    <div className="flex rounded justify-between bg-greyBg py-2 px-2">
      <div className="grid grid-cols-2 place-items-center gap-3">
        <p
          className={`${
            contry === "uk"
              ? "bg-redBg text-red-600"
              : "bg-blueBg text-headerBlue"
          }
        text-center text-red px-2 font-bold rounded-2xl text-sm`}
        >
          {contry}
        </p>
        <p className="font-gentium-plus text-base">{ipa}</p>
      </div>
      <ButtonPlay src={src} />
    </div>
  );
}

function Speech({
  audio_links,
  ipas,
}: {
  audio_links: ipasAdioLinks;
  ipas: ipasAdioLinks;
}) {
  return (
    <>
      <p className="text-sm">Pronunciation</p>
      <div className="pt-2 flex gap-2 flex-col">
        {(Object.keys(audio_links) as Country[]).map((country) => (
          <>
            <IPA
              contry={country}
              ipa={ipas[country]}
              src={audio_links[country]}
            />
          </>
        ))}
      </div>
    </>
  );
}

export default Speech;
