import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { type GuideWordDefMeaning } from "../../pages/types";

type MeaningsProps = {
  meanings: GuideWordDefMeaning[];
};

function ExampleItem({ example }: { example: string | null }) {
  return (
    <div className="bg-white italic border-l-3 border-greyEx rounded-sm p-1">
      "{example}"
    </div>
  );
}

function ExampleSection({ examples }) {
  return (
    <div className="flex pt-2 flex-col gap-1 ">
      <p className="font-bold text-">
        {examples?.length > 1 ? "EXAMPLES" : "EXAMPLE"}
      </p>
      {examples.map((eg, index) => (
        <ExampleItem key={index} example={eg} />
      ))}
    </div>
  );
}

function Meaning({ meanings }: MeaningsProps) {
  return (
    <>
      {meanings.map((def, index) => (
        <div
          key={index}
          className="mt-2 bg-greyBg border-1 border-greyEx p-2 rounded"
        >
          <div className="flex gap-2">
            {def["cerfLevel"] ? (
              <span
                title="cerf-level"
                className="bg-greenBg text-white rounded-2xl h-fit px-2"
              >
                {def["cerfLevel"]}
              </span>
            ) : (
              <span></span>
            )}
            <p className="text-sm">
              {def["definition"][0].toUpperCase() + def["definition"].slice(1)}
            </p>
          </div>
          <ExampleSection examples={def["examples"]} />
        </div>
      ))}
    </>
  );
}

function AccordionContent({ content }) {
  return (
    <div className="bg-white p-2">
      {content["guideWord"] && (
        <div className="flex gap-2 justify-items-center items-center">
          <span className="h-2 w-2 bg-greenBg rounded-full"></span>
          <h1 id="guide-word" title="guide-word" className="font-bold">
            {content["guideWord"]}
          </h1>
        </div>
      )}
      <Meaning meanings={content["meanings"]} />
    </div>
  );
}

function AccordionItem({ title, isOpened, onToggle, content }) {
  return (
    <div
      className={`
          bg-greyBg
          overflow-hidden
          rounded border-1 border-greyEx hover:cursor-pointer
          
          ${isOpened ? "h-fit" : "h-9"}
      `}
    >
      <div
        className="flex justify-between 
      items-center p-2"
        onClick={onToggle}
      >
        <p
          id="pos"
          title={"part-of-speech"}
          className="text-white bg-headerBlue rounded-3xl px-2"
        >
          {title}
        </p>
        <div
          className={` transition-transform duration-200 h-5 w-5 ${
            isOpened ? "rotate-90" : ""
          }`}
        >
          <ChevronRightIcon title="chevrongIcon" />
        </div>
      </div>
      <div
        className={` px-2 transition-all duration-200 ${
          isOpened ? "opacity-100" : "opacity-0"
        }`}
      >
        {content.map((meaningBlock, index) => (
          <AccordionContent
            key={index}
            content={meaningBlock}
          ></AccordionContent>
        ))}
      </div>
    </div>
  );
}

const Accordion = ({ data }) => {
  const [itemIsOpened, setItemIsOpened] = useState(null);

  function handleItemExpanded(itemId) {
    setItemIsOpened(itemIsOpened === itemId ? null : itemId);
  }

  return (
    <div
      className="
          flex flex-col gap-2"
    >
      {data.map((posType, index) => (
        <AccordionItem
          key={index}
          title={posType["posType"]}
          content={posType["guideWordDefs"]}
          onToggle={() => handleItemExpanded(index)}
          isOpened={itemIsOpened === index}
        />
      ))}
    </div>
  );
};

export default Accordion;
