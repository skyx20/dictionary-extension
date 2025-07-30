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
    <div
      key={contry}
      className="flex rounded justify-between bg-greyBg py-2 px-2"
    >
      <div className="grid grid-cols-2 place-items-center gap-3">
        <p
          className={`${
            contry === "uk"
              ? "bg-redBg text-red-600"
              : "bg-blueBg text-headerBlue"
          }
        text-center text-red px-2 font-bold rounded-2xl text-base`}
        >
          {contry}
        </p>
        <p title="ipa" className="font-gentium-plus text-base">
          {ipa}
        </p>
      </div>
      {src && <ButtonPlay src={src} />}
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
      <div className="pt-2 flex gap-2 flex-col">
        {(Object.keys(audio_links) as Country[]).map(
          (country, index) =>
            ipas[country] &&
            audio_links[country] && (
              <>
                <IPA
                  key={index}
                  contry={country}
                  ipa={ipas[country]}
                  src={audio_links[country]}
                />
              </>
            )
        )}
      </div>
    </>
  );
}

export default Speech;
