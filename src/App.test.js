import { BrowserRouter } from 'react-router-dom'
import { render } from '@testing-library/react';
import App from './components/App';

test('true is true', () => {
  render(  <BrowserRouter>
    <App />
  </BrowserRouter>);

  expect(true).toEqual(true)
});