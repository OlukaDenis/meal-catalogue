import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Container, Row, Col} from 'react-bootstrap';
import Category from '../components/category';
import fetchCategories from '../actions/categories';

const CategoryList = (props) => {

  const { categories, error, loading } = props;
  console.log(loading)
  return (
    <section  className="categories-section">
      <Container>
        <Row>
          {
            loading ? (
              <p>Loading....</p>
            ) : (
              categories.map(cat =>  <Category key={cat.idCategory} category={cat} />)
            )
          }
        </Row>
      </Container>
    </section>
  );
}

const mapStateToProps = state => ({
    categories: state.categories,
    error: state.error,
    loading: state.loading,
  });

const mapDispatchToProps = dispatch => ({
  fetchCategories: () => {
    dispatch(fetchCategories())
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList);