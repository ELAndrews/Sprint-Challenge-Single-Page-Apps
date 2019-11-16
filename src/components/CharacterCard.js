import React from "react";
import styled from 'styled-components';

const Card = styled.div`
  width: 90%;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.3), 0pc 3px 5px rgba(0, 0, 0, 0.22);
  padding: 8px;
  text-align: center;
  margin: 10px;
`;

const H3 = styled.h3`
  margin: 3px auto;
`;

const Img = styled.img`
  width: 80%;
`;

export default function CharacterCard(props) {


  return (
    <Card>
      <H3>{props.curr.name}</H3>
      <Img src={props.curr.image} alt={props.curr.name} />
      <p>Species: {props.curr.species}</p>
      <p>Gender: {props.curr.gender}</p>
      <p>Status: {props.curr.status}</p>
    </Card>
  )
}
