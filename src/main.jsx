import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error/>,
    children: [
      {
        path: '/',
        element: <Private><Addfrom /></Private>
      },
      {
        path: '/employees',
        element: <Private><Employees /></Private>,
        loader: () => fetch('http://localhost:4000/employees')
      },
      {
        path: '/viewdetails/:id',
        element: <Private><Viewdetails /></Private>,
        loader: ({ params }) => fetch(`http://localhost:4000/employees/${params.id}`)
      },
      {
        path: '/updateform/:id',
        element: <Private><Updateform /></Private>,
        loader: ({ params }) => fetch(`http://localhost:4000/employees/${params.id}`)
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/register',
        element: <Register />
      }
    ]
  },
]);
import './index.css'
import Layout from './Layout';
import Addfrom from './pages/Addfrom';
import Employees from './pages/Employees';
import Viewdetails from './pages/Viewdetails';
import Updateform from './pages/Updateform';
import Login from './pages/Login';
import Register from './pages/Register';
import AuthProvider from './AuthProvider/AuthProvider';
import Private from './private/Private';
import Error from './error/Error';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
