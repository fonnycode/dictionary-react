import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";

export default function Dictionary() {
  let [words, setWords] = useState("Sunset");
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
let [photos, setPhotos]= useState(null);


  function handleResponse(response) {
    setResults(response.data);
  }

  function pexelResponse(response) {
    setPhotos(response.data.photos);
  }

  function load() {
    setLoaded(true);
    search();
  }

  function search() {
    let apiKey = "9tce7490b0da29acf6b444190735fo2f";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${words}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);

    let pexelapiKey ="73O9OPj2kGFF3MUenE1IzmrAD5iDgmBwAQ1oXCvNROUv5teOWBXxg4L6";
    let pexelapiUrl = `https://api.pexels.com/v1/search?query=${words}&per_page=8`;
    let headers = { Authorization: `${pexelapiKey}`};

    axios.get(`${pexelapiUrl}`,{headers}).then(pexelResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function updateWords(event) {
    setWords(event.target.value);
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <h1>Which word are you interested in looking up?</h1>
          <form onSubmit={handleSubmit}>
            <input
              className="form-control input-word"
              type="search"
              placeholder="Type any word"
              onChange={updateWords}
            />
          </form>
          <div className="hints">e.g: Yoga, Phone, Sunset, Fashion, etc.. </div>
        </section>

        <Results results={results} />
        <Photos photos={photos} />
      </div>
    );
  } else {
    load();
    return "Loading page..";
  }
}
