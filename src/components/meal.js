import React from 'react';
import PropTypes from 'prop-types';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Meal = ({ meal }) => {
  const {
    idMeal,
    strMeal,
    strMealThumb,
  } = meal;

  return (
    <Col md={6} lg={4} sm={10}>
      <div className="category-item">
        <img
          src={strMealThumb}
          alt={strMeal}
        />
        <div className="category-info">
          <Link to={`/${idMeal}`}><h2>{strMeal}</h2></Link>
        </div>
      </div>
    </Col>
  );
};

export default Meal;
