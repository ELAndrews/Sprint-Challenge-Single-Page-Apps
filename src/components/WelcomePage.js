import React from "react";
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.section`
  text-align: center;
`;
const H1 = styled.h1`
  color: #22103E;
`;
const Img = styled.img`
  width: 500px;
  opacity: 0.6;
`;

export default function WelcomePage() {
  return (
    <Container className="welcome-page">
      <header>
        <H1>Welcome to the ultimate fan site!</H1>
        <Link 
          to="/characters-list">
            <h3>Meet the Characters</h3>
          </Link>
        <Img
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />
      </header>
    </Container>
  );
}
