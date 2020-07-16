import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Container, Row } from 'react-bootstrap';
import Category from '../components/category';
import fetchCategories from '../actions/categories';
import '../styles/category.scss';

const CategoryList = ({
  categories, error, loading, fetchCategories,
}) => {
  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <section className="categories-section">
      <Container>
        <Row>
          {(() => {
            if (loading) {
              return (<p>Loading....</p>);
            }
            return (
              error ? <p>{error.message}</p>
                : categories.map(cat => <Category key={cat.idCategory} category={cat} />)
            );
          })() }
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

CategoryList.defaultProps = {
  categories: [],
  error: '',
  loading: false,
  fetchCategories: () => undefined,
};

CategoryList.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      strCategory: PropTypes.string,
    }),
  ),
  error: PropTypes.string,
  loading: PropTypes.bool,
  fetchCategories: PropTypes.func,
};
export default connect(mapStateToProps, mapDispatchToProps)(CategoryList);
