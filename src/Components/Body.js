import React from 'react';
import Browse from './Browse';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MovieInfo from './MovieInfo';

const Body = () => {
    const appRouter = createBrowserRouter([
        {
            path: '/',
            element: <Browse />
        },
        {
            path: '/:id',
            element: <MovieInfo />
        }
    ])

  return (
    <>
        <RouterProvider router={appRouter} />
    </>
  )
}

export default Body;