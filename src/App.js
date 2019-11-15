import React from "react";
import Header from "./components/Header.js";
import WelcomePage from "./components/WelcomePage.js";
import CharacterList from "./components/CharacterList";


import { BrowserRouter as Router } from "react-router-dom";


export default function App() {
  return (
    <main>
      <Router 
        exact path="/"
        component={WelcomePage} />
      <Header />
      <CharacterList />
      
    </main>
  );
}
