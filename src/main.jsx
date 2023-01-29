import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import './assets/css/styles.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import ErrorPage from './ErrorPage'


import { loader as UserLoader } from "./routes/User"
import { Articles, Dashboard, Gallery, Root, Sample, Services, User, Users } from './routes'
const router = createBrowserRouter([
  {
    path: "/", element: <Root />, errorElement: <ErrorPage />, children: [
      { path: '/', element: <Dashboard /> },
      { path: '/users', element: <Users /> },
      { path: '/user/:id', element: <User />, loader: UserLoader, },
      { path: "/services", element: <Services /> },
      { path: "/gallery", element: <Gallery /> },
      { path: "/sample", element: <Sample /> },
      { path: "/articles", element: <Articles /> },
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
