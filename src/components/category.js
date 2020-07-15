import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';

const Category = (props) => {
  const { category } = props;

  return (
    <Col sm={4} md={6} lg={4} xl={4}>
      <h1>{category.strCategory}</h1>
    </Col>
  );
}

export default Category;