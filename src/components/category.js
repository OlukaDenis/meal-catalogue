import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';

const Category = (props) => {
  const { category } = props;

  function handleClick() {
    console.log('Display meals');
  }

  return (
    <Col md={6} lg={4} sm={10}>
      <div className="category-item">
        <img 
          src={category.strCategoryThumb} 
          alt={category.strCategory} 
          onClick={handleClick}
        />
        <div className="category-info">
          <h1 onClick={handleClick} >{category.strCategory}</h1>
          <p>{category.strCategoryDescription}</p>
        </div>
      </div>
    </Col>
  );
}

export default Category;