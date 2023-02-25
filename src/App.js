import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import Body from './Components/Body';
import Header from './Components/Header';
import Footer from './Components/Footer';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Error from './Components/Error';
import Contact from './Components/Contact';
import ResturantMenu from './Components/ResturantMenu';
import Profile from './Components/Profile';
import ProfileFunc from './Components/ProfileFunc';
import { lazy } from 'react';

const About = lazy(() => import('./Components/About'));

const AppLayout = () => (
  <>
    <Header />
    <Outlet />
    <Footer />
  </>
);

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
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/resturant/:resId',
        element: <ResturantMenu />,
      },
      {
        path: '/profile',
        element: <ProfileFunc />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={appRouter} />);
