import React, { ChangeEvent, useState } from "react";
import { func, string } from "prop-types";

interface MadlibProps {
  story: string;
}

function Madlib(props: MadlibProps) {
  const { story } = props;

  let countNouns = (story.match(/NOUN/g) || []).length;
  let countAdjectives = (story.match(/ADJ/g) || []).length;
  let countVerbs = (story.match(/VERB/g) || []).length;

  const [nouns, setNouns] = useState<Array<string>>([]);
  const [adjectives, setAdjectives] = useState<Array<string>>([]);
  const [verbs, setVerbs] = useState<Array<string>>([]);
  const [finishedStory, setFinishedStory] = useState<string>();

  let nounInputs: any = [];
  for (let i = 0; i < countNouns; i++) {
    nounInputs.push(
      <input
        key={`noun${i}`}
        type="text"
        name="noun"
        placeholder="NOUN"
        onChange={event => handleChange("noun", event.target.value, i)}
        value={nouns[i]}
      />
    );
  }

  let adjectiveInputs = [];
  for (let i = 0; i < countAdjectives; i++) {
    adjectiveInputs.push(
      <input
        key={`adj${i}`}
        type="text"
        name="adjective"
        placeholder="ADJECTIVE"
        onChange={event => handleChange("adj", event.target.value, i)}
        value={adjectives[i]}
      />
    );
  }

  let verbInputs = [];
  for (let i = 0; i < countVerbs; i++) {
    verbInputs.push(
      <input
        key={`verb${i}`}
        type="text"
        name="verb"
        placeholder="VERB"
        onChange={event => handleChange("verb", event.target.value, i)}
        value={verbs[i]}
      />
    );
  }

  function handleChange(typeOfWord: string, value: any, index: number) {
    if (typeOfWord === "noun") {
      nouns[index] = value;
    } else if (typeOfWord === "adj") {
      adjectives[index] = value;
    } else if (typeOfWord === "verb") {
      verbs[index] = value;
    }
    console.log(typeOfWord, value, index);
  }

  function onClick() {
    let splitStory = story.split(" ");
    let nounIndex = 0;
    let adjectiveIndex = 0;
    let verbIndex = 0;

    for (let i = 0; i < splitStory.length; i++) {
      if (splitStory[i].indexOf("NOUN") === 0) {
        splitStory[i] = splitStory[i].replace("NOUN", nouns[nounIndex++]);
      } else if (splitStory[i].indexOf("ADJ") === 0) {
        splitStory[i] = splitStory[i].replace(
          "ADJ",
          adjectives[adjectiveIndex++]
        );
      } else if (splitStory[i].indexOf("VERB") === 0) {
        splitStory[i] = splitStory[i].replace("VERB", verbs[verbIndex++]);
      }
    }

    setFinishedStory(splitStory.join(" "));
    if (window.speechSynthesis) {
      var msg = new SpeechSynthesisUtterance(splitStory.join(" "));
      window.speechSynthesis.speak(msg);
    }
  }

  return (
    <React.Fragment>
      <div className="userInputs">
        <p>{nounInputs}</p>
        <p>{adjectiveInputs}</p>
        <p>{verbInputs}</p>
        <p>
          <button onClick={onClick}>Tell me my story.</button>
        </p>
      </div>

      <div className="showStory">{finishedStory}</div>
    </React.Fragment>
  );
}

export default Madlib;
