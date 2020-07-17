import React, { useState } from 'react';
import '../styles/searchBar.scss';
import { connect } from 'react-redux';
import { setIngredients } from '../actions/actionCreators';
import filterByIngredients from '../actions/filterByIngredients';
import { useHistory } from 'react-router-dom';

const SearchIngredients = props => {
  const { filterByIngredients, setIngredients } = props;
  const [ingredient, setStateIngredient] = useState('');
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIngredients(ingredient);
    filterByIngredients(ingredient);
    history.push(`/search/${ingredient}`);
  }

  const handleChange = (e) => {
    e.preventDefault();
    setStateIngredient(e.target.value);
  }

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Search Recipe ..."
        onChange={handleChange} 
        value={ingredient}
      />
      <button type="submit" className="btn-search">Search</button>
    </form>
  );
};

const mapDispatchToProps = dispatch => ({
  filterByIngredients: ingredient => {
    dispatch(filterByIngredients(ingredient));
  },
  setIngredients: ingredient => {
    dispatch(setIngredients(ingredient));
  }
})

export default connect(null, mapDispatchToProps)(SearchIngredients);