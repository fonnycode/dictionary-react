import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";

export default function Dictionary() {
  let [words, setWords] = useState("");
let [results, setResults] = useState(null);

function handleResponse(response){
  console.log(response.data.meanings[0].definition);
setResults(response.data);
}

  function handleSubmit(event) {
    event.preventDefault();
    
let apiKey = "9tce7490b0da29acf6b444190735fo2f";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${words}&key=${apiKey}`;
  axios.get(apiUrl).then(handleResponse);

  }

  function updateWords(event) {
    setWords(event.target.value);
  }
  return (
    <div className="Dictionary">
      <form onSubmit={handleSubmit}>
        <input
        className="form-control input-word"
          type="search"
          placeholder="Type any word"
          onChange={updateWords}
        />
      </form>
      <div className="hints">example: Book, Flower, Balloon </div>
      <Results results={results} />
    </div>
  );
}
