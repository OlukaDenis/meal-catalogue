import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useParams, useRouteMatch } from 'react-router-dom';
import { connect } from 'react-redux';
import { Container, Row } from 'react-bootstrap';
import Meal from '../components/meal';
import fetchMeals from '../actions/meals';
import '../styles/meal.scss';

const MealList = props => {
  const { categoryType } = useParams();

  const {
    meals,
    error,
    loading,
    fetchMeals,
  } = props;

  useEffect(() => {
    if (categoryType) {
      fetchMeals(categoryType);
    }
  }, [fetchMeals, categoryType]);

  return (
    <section className="meals-section">
      <Container>
        <Row>
          {(() => {
            if (loading) {
              return (<p>Loading....</p>);
            }
            return (
              error ? <p>{error.message}</p>
                : meals.map(item => <Meal key={item.idMeal} meal={item} />)
            );
          })() }
        </Row>
      </Container>
    </section>
  );
};

const mapStateToProps = state => ({
  meals: state.meals.meals,
  error: state.meals.error,
  loading: state.meals.loading,
});

const mapDispatchToProps = dispatch => ({
  fetchMeals: category => {
    dispatch(fetchMeals(category));
  },
});

MealList.defaultProps = {
  meals: [],
  error: '',
  loading: false,
  fetchMeals: () => undefined,
};

MealList.propTypes = {
  meals: PropTypes.arrayOf(
    PropTypes.shape({
      strMeal: PropTypes.string,
    }),
  ),
  error: PropTypes.string,
  loading: PropTypes.bool,
  fetchMeals: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(MealList);
