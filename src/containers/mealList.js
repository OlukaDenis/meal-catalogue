import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { Container, Row } from 'react-bootstrap';
import Meal from '../components/meal';
import fetchMeals from '../actions/meals';
import '../styles/meal.scss';

const MealList = (props) => {

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
  }, []);

  console.log(meals)
  return (
    <section className="meals-section">
      <Container>
        <Row>
          {
            loading ? (
              <p>Loading....</p>
            ) : (
              error ? <p>{error.message}</p>
                : meals.map(item => <Meal key={item.idMeal} meal={item} />)
            )
          }
        </Row>
      </Container>
    </section>
  )
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

export default connect(mapStateToProps, mapDispatchToProps)(MealList);
