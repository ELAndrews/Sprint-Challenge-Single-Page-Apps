import React from "react";
import { Link, NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header className="ui centered">
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
      <NavLink 
          to="/">Home
      </NavLink>
      <NavLink
        to="/characters-list/search">Search</NavLink>
    </header>
  );
}
