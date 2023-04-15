import { render } from '@testing-library/react';
import FavContext from '../../utils/FavContext';
import Header from '../Header';
import store from '../../utils/store';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router-dom/server';
const card = [];
test('Check Header Logo Loading ', () => {
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <FavContext.Provider value={{ card }}>
          <Header />
        </FavContext.Provider>
      </Provider>
    </StaticRouter>
  );

  const logo = header.getAllByTestId('logo');
  expect(logo[0].classList.toString()).toBe('_8pSp-');
});

// Menu Check
test('Check Header Menu ', () => {
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <FavContext.Provider value={{ card }}>
          <Header />
        </FavContext.Provider>
      </Provider>
    </StaticRouter>
  );

  const menu = header.getByTestId('menu-check');
  expect(menu.className).toBe('menu');
});

test('Check Cart Items ', () => {
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <FavContext.Provider value={{ card }}>
          <Header />
        </FavContext.Provider>
      </Provider>
    </StaticRouter>
  );

  const cart = header.getByTestId('cart-check');
  expect(cart.innerHTML).toBe('');
});
