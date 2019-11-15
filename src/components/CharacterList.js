import React, { useEffect, useState } from "react";
import axios from 'axios';
import CharacterCard from "./CharacterCard";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([]);
  const [error, setError] = useState(null)

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios.get('https://rickandmortyapi.com/api/character/')
      .then(response => {
        console.log(response)
        setCharacters(response.data.results)
      })
      .catch(error => {
        setError(error.message)
      })
  }, []);

  return (
    <section className="character-list">
      {
        characters.map((curr, index) => {
          return (
            <div key={index}>
              <CharacterCard 
              curr={curr}
              index={index}/>
            </div>
          )
        })
      }
    </section>
  );
}
