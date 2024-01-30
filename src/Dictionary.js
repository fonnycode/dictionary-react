import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";

export default function Dictionary() {
  let [words, setWords] = useState("Phone");
let [results, setResults] = useState(null);
let [loaded, setLoaded] = useState(false);

function handleResponse(response){
setResults(response.data);
}
function load(){
  setLoaded(true);
  search();
}
function search(){
let apiKey = "9tce7490b0da29acf6b444190735fo2f";
let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${words}&key=${apiKey}`;
axios.get(apiUrl).then(handleResponse);
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
   </div>
 );
  }else{
    load();
    return "Loading page.."
  }
 
}
