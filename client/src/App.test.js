import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from './Containers/Home/Home';
import Spinner from './Components/Spinner/Spinner';

jest.mock('./Services/ApiService');

describe('Home', () => {
  it('loads the home page', async () => {
    render(<Home />);

    expect(screen.getByText('Aloe there!')).toBeInTheDocument();
  });
});

describe('Spinner', () => {
  it('loads the spinner', async () => {
    render(<Spinner />);

    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });
});
