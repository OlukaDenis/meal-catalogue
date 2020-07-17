import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import CategoryList from '../containers/categoryList';
import MealList from '../containers/mealList';
import SingleDish from '../containers/singleDish';
import Header from '../components/header';
import NotFound from '../components/errors/notFound';

const AppRouter = () => (
  <Router>
    <Header />
    <Switch>      
      <Route exact path="/" component={CategoryList} />
      <Route exact path="/search/:ingredient" component={MealList} />
      <Route exact path="/:categoryType" component={MealList} />
      <Route exact path="/search/:ingredient/:mealID" component={SingleDish} />
      <Route exact path="/:categoryTpe/:mealID" component={SingleDish} />
      <Route component={NotFound} />
    </Switch>
  </Router>
);

export default AppRouter;
