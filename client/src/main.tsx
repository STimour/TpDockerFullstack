
import './index.css'

import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Heure from './Heure';
import App from './App';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },{
    path: "/server/time",
    element: <Heure />
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)