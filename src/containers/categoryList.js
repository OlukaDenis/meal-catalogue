import React, { useEffect, Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Container, Row } from 'react-bootstrap';
import Category from '../components/category';
import fetchCategories from '../actions/categories';
import '../styles/category.scss';

const CategoryList = props => {

  const {
    categories, error, loading, fetchCategories,
  } = props;

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <section className="categories-section">
      <Container>
        <Row>
          {
            loading ? (
              <p>Loading....</p>
            ) : (
              error ? <p>{error.message}</p>
                : categories.map(cat => <Category key={cat.idCategory} category={cat} />)
            )
          }
        </Row>
      </Container>
    </section>
  );
};

const mapStateToProps = state => ({
  categories: state.categories.categories,
  error: state.categories.error,
  loading: state.categories.loading,
});

const mapDispatchToProps = dispatch => ({
  fetchCategories: () => {
    dispatch(fetchCategories());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList);
