import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        path: '/',
        element: <Addfrom/>
      },
      {
        path: '/employees',
        element: <Employees/>,
        loader: () => fetch('http://localhost:4000/employees')
      },
      {
        path: '/viewdetails/:id',
        element: <Viewdetails/>,
        loader: ({params}) => fetch(`http://localhost:4000/employees/${params.id}`)
      },
      {
        path: '/updateform/:id',
        element: <Updateform/>,
        loader: ({params}) => fetch(`http://localhost:4000/employees/${params.id}`)
      },
      {
        path: '/login',
        element: <Login/>
      },
      {
        path: '/register',
        element: <Register/>
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

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
