import React from 'react';
import { createRoot } from 'react-dom/client'
import { RouterProvider, createHashRouter } from 'react-router-dom';
import './index.css'

import App from './App.jsx'
import Home from './components/Home.jsx'
import Products from './components/Products.jsx'
import About from './components/About.jsx'

const router = createHashRouter([
  {
    basename: import.meta.env.BASE_URL,
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
    ]
  },
])

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
