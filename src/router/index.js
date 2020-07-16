import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import CategoryList from '../containers/categoryList';
import MealList from '../containers/mealList';
import SingleDish from '../containers/singleDish';

const AppRouter = () => (
  <Router>
    <Switch>
      <Route  exact path="/" component={CategoryList} />
      <Route exact path="/:categoryType" component={MealList} />
      <Route exact path="/:categoryTpe/:mealID" component={SingleDish} />
    </Switch>
  </Router>
);

export default AppRouter;
