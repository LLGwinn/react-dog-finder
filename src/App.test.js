import { render, getByText} from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

// SMOKE TEST
it ('renders without crashing', function () {
  render (
    <MemoryRouter>
      <App />
    </MemoryRouter>
  )
});

// SNAPSHOT TEST
it ('matches snapshot', function() {
  const {asFragment} = render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
  expect(asFragment).toMatchSnapshot();
})

