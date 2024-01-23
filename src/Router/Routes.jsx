import React from 'react';
import Layout from '../Layout/Layout';
import Home from '../Pages/Home/Home/Home';
import { createBrowserRouter } from 'react-router-dom';
import Login from '../Pages/Login/Login';

const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
    
      children: [
        {
          path: "/",
          element: <Home/>,
        },
        {
          path:'login',
          element:<Login></Login>
        }
      ],
    },
  ]);

export default router;