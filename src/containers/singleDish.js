import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/fontawesome-free-solid';
import LoadingPage from '../components/loadingPage';
import fetchDish from '../actions/dish';
import ErrorPage from '../components/errors/errorPage';
import '../styles/singleDish.scss';

const SingleDish = props => {
  const { mealID } = useParams();

  const {
    dish,
    loading,
    error,
    fetchDish,
  } = props;

  useEffect(() => {
    if (mealID) {
      fetchDish(mealID);
    }
  }, [fetchDish, mealID]);

  const {
    strMeal,
    strCategory,
    strArea,
    strInstructions,
    strMealThumb,
    strYoutube,
    strTags,
  } = dish;

  return (
    <section className="dish-section">
      {(() => {
        if (loading) {
          return <LoadingPage />;
        }
        return (
          error ? <ErrorPage error={error.message} />
            : (
              <div className="dish-item">
                <div className="dish-image">
                  <div className="img" style={{ backgroundImage: `url(${strMealThumb})` }} />
                  <div className="dish-title">
                    <h3>{strMeal}</h3>
                  </div>
                  <div className="dish-overlay" />
                </div>
                <div className="dish-info">
                  <p className="d-meta">
                    <span>{strCategory}</span>
                    <span>{strArea}</span>
                    {
                      strTags ? <span>{strTags}</span> : <p />
                    }
                  </p>
                  <Container>
                    <Row>
                      <Col style={{ margin: '0 auto' }} md={10} lg={10} sm={8}>
                        <div className="dish-instructions">
                          <h3>Instructions</h3>
                          <p>{strInstructions}</p>
                        </div>
                      </Col>
                    </Row>

                    <Row>
                      <Col md={4} lg={4} sm={4}>
                        <div className="youtube-link">
                          <div style={{ backgroundImage: `url(${strMealThumb})`, height: 200 }} />
                          <FontAwesomeIcon icon={faPlay} />
                        </div>
                      </Col>
                    </Row>
                  </Container>
                </div>
              </div>
            )
        );
      })() }
    </section>
  );
};

const mapStateToProps = state => ({
  dish: state.dish.dish,
  loading: state.dish.loading,
  error: state.dish.error,
});

const mapDispatchTOProps = dispatch => ({
  fetchDish: mealId => {
    dispatch(fetchDish(mealId));
  },
});

SingleDish.defaultProps = {
  dish: {},
  error: '',
  loading: false,
  fetchDish: () => undefined,
};

SingleDish.propTypes = {
  fetchDish: PropTypes.func,
  dish: PropTypes.shape({
    strMeal: PropTypes.string,
    strCategory: PropTypes.string,
    strArea: PropTypes.string,
    strInstructions: PropTypes.string,
    strMealThumb: PropTypes.string,
    strYoutube: PropTypes.string,
    strTags: PropTypes.string,
  }),
  error: PropTypes.string,
  loading: PropTypes.bool,
};

export default connect(mapStateToProps, mapDispatchTOProps)(SingleDish);
