import React from 'react';
import SearchIngredients from './searchIngredients';
import '../styles/header.scss';

const Header = () => {

  return (
    <section className="header">
      <nav className="nav">
        <div className="logo">
          <h2>Fudiz</h2>
        </div>
        <SearchIngredients />
      </nav>
    </section>
  );
}

export default Header;