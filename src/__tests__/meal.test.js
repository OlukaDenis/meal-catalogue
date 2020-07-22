import React from 'react';
import { render, cleanup, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { MemoryRouter } from 'react-router-dom';
import Meal from '../components/meal';

afterEach(cleanup);

describe('It should render meal component', () => {
  const meal = {
    idMeal: '5432',
    strMeal: 'Chicken Salad',
    strMealThumb: 'chicken.png',
  };

  test('It should render meal name', () => {
    render(<Meal meal={meal} />, { wrapper: MemoryRouter });
    expect(screen.queryByText(meal.strMeal)).toBeVisible();
  });

  it('renders a category with an image ', () => {
    render(<Meal meal={meal} />, { wrapper: MemoryRouter });
    expect(screen.queryByTestId('image')).toHaveAttribute('src', meal.strMealThumb);
  });
});
