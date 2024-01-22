import React from 'react';
import Layout from '../Layout/Layout';
import Home from '../Pages/Home/Home/Home';

const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
    
      children: [
        {
          path: "/",
          element: <Home/>,
        },
      ],
    },
  ]);

export default router;