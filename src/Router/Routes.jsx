import React from 'react';
import Layout from '../Layout/Layout';
import Home from '../Pages/Home/Home/Home';
import { createBrowserRouter } from 'react-router-dom';
import Login from '../Pages/Login/Login';
import Dashboard from '../Layout/Dasboard';
import AddHouse from '../Pages/Dashboard/AddHouse/AddHouse';
import Properties from '../Pages/Dashboard/allProperties/Properties';

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

  {
    path:'/dashboard',
    element: <Dashboard></Dashboard>,
    children:[
      {
        path:'/dashboard',
        element: <AddHouse></AddHouse>
      },
      {
        path:'/dashboard/properties',
         element: <Properties></Properties>
      }
    ]
  }



  ]);

export default router;