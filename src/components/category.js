import React from 'react';
import PropTypes from 'prop-types';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Category = ({ category }) => {
  const {
    strCategory,
    strCategoryDescription,
    strCategoryThumb,
  } = category;

  return (
    <Col md={6} lg={4} sm={10}>
      <div className="category-item">
        <img
          src={strCategoryThumb}
          alt={strCategory}
        />
        <div className="category-info">
          <Link to={`/${strCategory}`}><h1>{strCategory}</h1></Link>
          <p>{strCategoryDescription}</p>
        </div>
      </div>
    </Col>
  );
};

Category.defaultProps = {
  category: {
    strCategory: '',
    strCategoryDescription: '',
    strCategoryThumb: '',
  },
};

Category.propTypes = {
  category: PropTypes.shape({
    strCategory: PropTypes.string,
    strCategoryDescription: PropTypes.string,
    strCategoryThumb: PropTypes.string,
  }),
};

export default Category;
