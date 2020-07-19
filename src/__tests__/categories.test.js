import React from 'react';
import { render, cleanup, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { MemoryRouter } from 'react-router-dom';
import Category from '../components/category';

afterEach(cleanup);

describe('Testing the category component', () => {
  const category = {
    strCategory: 'Meat',
    strCategoryDescription: 'Best meal',
    strCategoryThumb: 'image.png',
  };

  test('It should render category name', () => {
    render(<Category category={category} />, {wrapper: MemoryRouter});
    expect(screen.queryByText('Meat')).toBeVisible();
  });

  test('It should render category description', () => {
    render(<Category category={category} />, {wrapper: MemoryRouter});
    expect(screen.queryByText('Best meal')).toBeVisible();
  });

  test('It should render category image', () => {
    render(<Category category={category} />, {wrapper: MemoryRouter});
    expect(screen.queryByTestId('image')).toHaveAttribute('src','image.png');
  });


});

