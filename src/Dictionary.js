import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";

export default function Dictionary() {
  let [words, setWords] = useState("");

function handleResponse(response){
console.log(response.data);
}

  function handleSubmit(event) {
    event.preventDefault();
    

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${words}`;
  axios.get(apiUrl).then(handleResponse);

  }

  function updateWords(event) {
    setWords(event.target.value);
  }
  return (
    <div className="Dictionary">
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Type any word"
          onChange={updateWords}
        />
      </form>
    </div>
  );
}
