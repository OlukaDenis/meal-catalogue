import React from 'react';
import { Link } from 'react-router-dom';
import SearchIngredients from './searchIngredients';
import '../styles/header.scss';

const Header = () => {

  return (
    <section className="header">
      <nav className="nav">
        <Link to={`/`} className="logo">
          <h2>Fudiz</h2>
        </Link>
        <SearchIngredients />
      </nav>
    </section>
  );
}

export default Header;