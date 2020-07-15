import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import CategoryList from '../containers/categoryList';
import MealList from '../containers/mealList';

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={CategoryList} />
        <Route path="/:categoryName">
          <MealList />
        </Route>
      </Switch>
    </Router>
  )
}

export default AppRouter;