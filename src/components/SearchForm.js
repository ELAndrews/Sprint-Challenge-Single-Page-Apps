import React, { useState } from "react";
import CharacterCard from "./CharacterCard";
import styled from 'styled-components';

const Container = styled.section`
  text-align: center;
  margin: 0 auto 20px;
`;

export default function SearchForm(props) {
 
  const [searchName, setSearchName] = useState([])

  const handleChange = (e) => {
    const search = e.target.value.toLowerCase();
    const result = props.characters.filter(char => {
      return char.name.toLowerCase().includes(search);
  });
  setSearchName(result);
  }

  return (
    <Container className="search-form">
     <form className="formContainer">
       <label>Name:
         <input 
          type="text"
          name="name"
          placeholder="Name" 
          onChange={handleChange}/>
       </label>
     </form>
     {
       searchName.map((curr, index) => {
         return (
           <div key={index}>
             <CharacterCard curr={curr} index={index} />
           </div>
         )
       })
     }
    </Container>
  );
}
