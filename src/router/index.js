import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import CategoryList from '../containers/categoryList';
import MealList from '../containers/mealList';

const AppRouter = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={CategoryList} />
      <Route path="/:categoryType" component={MealList} />
    </Switch>
  </Router>
);

export default AppRouter;
