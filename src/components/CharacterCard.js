import React from "react";

export default function CharacterCard(props) {

  return (
    <div>
      <h3>{props.curr.name}</h3>
      <img src={props.curr.image} alt={props.curr.name} />
      <p>{props.curr.species}</p>
      <p>{props.curr.origin.name}</p>
      <p>{props.curr.species}</p>
    </div>
  )
}
