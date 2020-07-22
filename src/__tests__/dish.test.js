import React from 'react';
import { render, cleanup, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { MemoryRouter } from 'react-router-dom';
import Dish from '../components/dish';

afterEach(cleanup);

describe('It should render meal component', () => {
  const meal = {
    idMeal: '54398',
    strMeal: 'Chicken Stew',
    strInstructions: 'Squeeze lime over chicken and rub well.',
    strMealThumb: 'chicken.png',
  };

  test('It should render dish name', () => {
    render(<Dish dish={meal} />, { wrapper: MemoryRouter });
    expect(screen.queryByText(meal.strMeal)).toBeVisible();
  });

  it('renders a dish with instructions ', () => {
    render(<Dish dish={meal} />, { wrapper: MemoryRouter });
    expect(screen.queryByText(meal.strInstructions)).toBeVisible();
  });

  it('renders a dish with a cover image ', () => {
    render(<Dish dish={meal} />, { wrapper: MemoryRouter });
    expect(screen.queryByTestId('image')).toHaveStyle(`background-image: url(${meal.strMealThumb})`);
  });
});
