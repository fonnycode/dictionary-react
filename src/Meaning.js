import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {

  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      <strong>Definition:</strong>
      <br />
        {props.meaning.definition}
        <Synonyms synonyms={props.meaning.synonyms} />
    </div>
  );
}
