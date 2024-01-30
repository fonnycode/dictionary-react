import React from "react";

export default function Synonyms(props){
    if(props.synonyms){
 return (
   <div className="Synonym-title">
     <strong>Synonyms:</strong>
     <ul className="synonyms">
       {props.synonyms.map(function (synonyms, index) {
         return <li key={index}>{synonyms}</li>;
       })}
     </ul>
   </div>
 );
    }else{
        return null;
    }   
}