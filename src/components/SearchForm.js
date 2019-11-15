import React, { useState } from "react";
import CharacterCard from "./CharacterCard";
import { Link, Route } from 'react-router-dom';


export default function SearchForm(props) {
 
  const [searchName, setSearchName] = useState([])

  const handleChange = (e) => {
    const search = e.target.value;
    const result = props.characters.filter(char => {
      return char.name.includes(search);
  });
  console.log(result)
  setSearchName(result);
  }
console.log(searchName)
  // const handleSubmit = (e) => {
  //   e.preventDefault()
  //   const findMeName = props.characters.filter((curr, index) => {
  //     return curr.name.includes(e)
  //   })
  //   setSearchName(findMeName)
  //   console.log(findMeName)
  //   console.log(props.characters)
  // }

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
       {/* <Link 
        to={`/characters-list/search/${searchName}/find`}
        >Find me!</Link> */}
     </form>
     {
       searchName.map((curr, index) => {
         return (
           <CharacterCard curr={curr} index={index} />
         )
       })
     }
     {/* <Route 
        exact path={`/characters-list/search/${searchName}/find`}
        render={(props) => {
          console.log(searchName)
          return (
            <CharacterCard {...props} curr={searchName} />
          )} */}
      
    </section>
  );
}
