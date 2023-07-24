import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.tsx'
import './index.css'

const router = createBrowserRouter([
  // Match 0, 1, or 2 parameters
  {
    path: "/",
    element: <App />
  },
  {
    path: "/:year",
    element: <App />
  },
  {
    path: "/:year/:month",
    element: <App />
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
