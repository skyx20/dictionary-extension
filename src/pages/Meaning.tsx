import WordHeader from "@/components/meanings/WordHeader";
import Speech from "@/components/meanings/Speech";
import Accordion from "@/components/meanings/accordion";
import { useLocation } from "react-router";
import { type WordData } from "./types";

// Testing purporses
const data: WordData = {
  word: "mind",
  ipas: {
    uk: "maɪnd",
    us: "maɪnd",
  },
  audio_links: {
    uk: "https://dictionary.cambridge.org/media/english/uk_pron/u/ukm/ukmil/ukmilli027.mp3",
    us: "https://dictionary.cambridge.org/media/english/us_pron/m/min/mind_/mind.mp3",
  },
  origin: "uk",
  meanings: [
    {
      posType: "noun",
      guideWordDefs: [
        {
          guideWord: null,
          meanings: [
            {
              definition:
                "the part of a person that makes it possible for him or her to think, feel emotions, and understand things",
              cerfLevel: "B1",
              examples: [
                "Her mind was full of what had happened the night before, and she just wasn't concentrating.",
                "Of course I'm telling the truth - you have such a suspicious mind!",
                "I just said the first thing that came into my mind.",
                "I'm not quite clear in my mind about what I'm doing.",
                "Is the human mind like a computer in the way that it works?",
              ],
            },
            {
              definition: "a very intelligent person",
              cerfLevel: null,
              examples: [
                "She was one of the most brilliant minds of the last century.",
              ],
            },
            {
              definition:
                "If a problem is all in the mind, it does not exist and is only imagined",
              cerfLevel: null,
              examples: [
                "His doctor tried to convince him that he wasn't really ill and that it was all in his mind.",
              ],
            },
            {
              definition:
                "to remember a piece of information when you are making a decision or thinking about a matter",
              cerfLevel: "B2",
              examples: [
                "Bearing in mind how young she is, I thought she did really well.",
              ],
            },
            {
              definition: "to come quickly into your mind",
              cerfLevel: null,
              examples: [
                "When I think of dog breeding, pictures of adorable puppies come to mind.",
                "Is there anything in particular that comes to mind?",
                'Say the word "Australia" and a vision of beaches and blue seas immediately springs to mind.',
              ],
            },
            {
              definition:
                "to think repeatedly about something and especially an event that has happened",
              cerfLevel: null,
              examples: [
                "She kept going over the accident again and again in her mind, wishing that she could somehow have prevented it.",
              ],
            },
          ],
        },
      ],
    },
    {
      posType: "verb",
      guideWordDefs: [
        {
          guideWord: "BE ANNOYED",
          meanings: [
            {
              definition:
                "(used in questions and negatives) to be annoyed or worried by something",
              cerfLevel: "A2",
              examples: [
                "Do you think he'd mind if I borrowed his book?",
                "I don't mind having a dog in the house so long as it's clean.",
                "I wouldn't mind (= I would like) something to eat, if that's OK.",
                "Would you mind turning (= please turn) your radio down a little please?",
                "Do you mind if I (= may I) put the TV on?",
                "Do you mind me smoking?",
                "I don't mind what you wear so long as it's not that awful pink shirt.",
                "I'd rather stay in tonight, if you don't mind.",
                '"Would you like tea or coffee?" "I don\'t mind - either."',
              ],
            },
            {
              definition:
                "said to someone when you feel annoyed with that person for what they have just done or said",
              cerfLevel: null,
              examples: ["Do you mind? That's my seat you're sitting in!"],
            },
          ],
        },
        {
          guideWord: "BE CAREFUL",
          meanings: [
            {
              definition: "to be careful of, or give attention to something",
              cerfLevel: "B1",
              examples: [
                "Mind that box - the bottom isn't very strong.",
                "Mind (that) you don't bang your head on the shelf when you stand up.",
                "Mind (= make certain that) you take enough money with you.",
                "Mind your language (= don't use swear words), young lady!",
              ],
            },
            {
              definition:
                "used to tell someone to move or be careful, or to warn someone of danger",
              cerfLevel: null,
              examples: ["Mind out! We're coming through with the stretcher."],
            },
            {
              definition:
                'said when you say goodbye to someone, meaning "take care"',
              cerfLevel: null,
              examples: ["Mind how you go now, and have a good day."],
            },
          ],
        },
        {
          guideWord: "TAKE CARE OF",
          meanings: [
            {
              definition: "to take care of someone or something",
              cerfLevel: null,
              examples: [
                "She asked me if I'd mind the children for an hour while she went shopping.",
                "Could you mind my bag for a moment while I go to the toilet?",
              ],
            },
          ],
        },
        {
          guideWord: "OBEY",
          meanings: [
            {
              definition: "to listen to and obey someone",
              cerfLevel: null,
              examples: ["Mind your grandma!", "This dog won't mind."],
            },
          ],
        },
      ],
    },
  ],
};

function Meaning() {
  "This component use a state object to get the data from the search page";
  const location = useLocation();
  const wordData = location.state?.wordData;

  return (
    <div className="p-2 flex flex-col gap-2">
      {wordData && (
        <article>
          <WordHeader
            word={wordData["word"]}
            word_origin={wordData["origin"]}
          />
          <p className="text-base">Pronunciation:</p>
          <Speech
            audio_links={wordData["audio_links"]}
            ipas={wordData["ipas"]}
          />
          <div className="w-full my-2 text-center border-t-2 border-greyEx rounded"></div>
          <p className="text-base">Definitions:</p>
          <Accordion data={wordData["meanings"]} />
        </article>
      )}
    </div>
  );
}

export default Meaning;
