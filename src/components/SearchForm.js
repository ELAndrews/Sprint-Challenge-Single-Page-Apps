import React, { useState } from "react";
import CharacterCard from "./CharacterCard";


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
    <section className="search-form">
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
    </section>
  );
}
