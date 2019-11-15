import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Route } from 'react-router-dom';
import CharacterCard from "./CharacterCard";
import SearchForm from "./SearchForm";
import styled from 'styled-components';

const Container = styled.div`
  margin: 0px auto;
  width: 95%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

const Card = styled.div`
  width: 45%;
`;

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([]);
  const [error, setError] = useState(null)

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios.get('https://rickandmortyapi.com/api/character/')
      .then(response => {
        setCharacters(response.data.results)
      })
      .catch(error => {
        setError(error.message)
      })
  }, []);

  return (
    <Container className="character-list">
   <br/>
      <h1>This is working</h1>
      {
        characters.map((curr, index) => {
          return (
            <Card key={index}>
              <CharacterCard 
              curr={curr}
              index={index}/>
            </Card>
          )
        })
      }
    </Container>
  );
}
