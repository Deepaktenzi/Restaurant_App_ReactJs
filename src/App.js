import React, { Suspense, useState } from 'react';
import ReactDOM from 'react-dom/client';
import Body from './Components/Body';
import Header from './Components/Header';
import Footer from './Components/Footer';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Error from './Components/Error';
import ResturantMenu from './Components/ResturantMenu';
import { lazy } from 'react';
import FavContext from './utils/FavContext';
import FavouriteList from './Components/FavouriteList';
import { Provider } from 'react-redux';
import store from './utils/store';
import Checkout from './Components/Checkout';

const About = lazy(() => import('./Components/About'));

const AppLayout = () => {
  const [card, setCard] = useState([]);

  return (
    <Provider store={store}>
      <FavContext.Provider value={{ card, setCard }}>
        <Header />
        <Outlet />
      </FavContext.Provider>
      <Footer />
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Body />,
      },
      {
        path: '/about',
        element: (
          <Suspense fallback={<h1>Loading..</h1>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: '/resturant/:resId',
        element: <ResturantMenu />,
      },
      {
        path: '/cart',
        element: <Checkout />,
      },
      {
        path: '/favourite',
        element: <FavouriteList />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={appRouter} />);
