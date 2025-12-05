import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import Root from '../layouts/Root';
import Home from '../Pages/Home/Home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,   // <-- Component নয়, element হবে
    children: [
      { index: true, element: <Home /> },
    ],
  },
]);

export default router;
