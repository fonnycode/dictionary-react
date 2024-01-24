import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  let [words, setWords] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    alert(`Searching for ${words}`);
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
