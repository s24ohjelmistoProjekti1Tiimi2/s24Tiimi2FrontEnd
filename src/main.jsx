import React from 'react';
import { createRoot } from 'react-dom/client'
import { RouterProvider, createHashRouter } from 'react-router-dom';
import './index.css'

import App from './App.jsx'
import Home from './components/Home.jsx'
import Products from './components/Products.jsx'
import About from './components/About.jsx'
import Registration from './components/Registration.jsx'

const router = createHashRouter([
  {
    basename: import.meta.env.VITE_API_PRODUCTS_URL,
    path: "/",
    element: <App />,
    children: [
      {
        element: <Home />,
        index: true
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "registration",
        element: <Registration />,
      },
    ]
  },
])

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
