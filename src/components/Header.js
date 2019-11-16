import React from "react";
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 20px;

`;
const H1 = styled.h1`
  color: #320675;
  font-size: 3rem;
`;


export default function Header() {
  return (
    <HeaderContainer className="ui centered">
      <NavLink 
          to="/"
          className="link">Home
      </NavLink>
      <NavLink
        to="/characters-list/search"
        className="link">Search by Name
      </NavLink>
      <H1 className="ui center">Rick &amp; Morty Fan Page</H1>
    </HeaderContainer>
  );
}
