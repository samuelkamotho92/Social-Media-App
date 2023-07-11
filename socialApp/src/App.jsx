import './App.css';
import { useState } from 'react'
import Register from './Pages/Register/Register'
import Home from './Pages/Home/Home'
import SignIn from './Pages/SignIn/SignIn'
import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/Sidebar/Sidebar'
import Rightbar from './components/Rightbar/Rightbar'
import Userprofile from './Pages/Userprofile/Userprofile';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Outlet,
  Navigate
} from "react-router-dom";
function App() {
  const user = true;
  const Layout = () => {
    return (
      <div className='theme-dark'>
        <Navbar />
        <div className='bars'>
          <Sidebar />
          <div className='mainCt'>
            <Outlet />
          </div>
          <Rightbar />
        </div>
      </div>
    )
  }

  const PrtRoute = ({ children }) => {
    if (!user) {
      return <Navigate to='/login' />
    }
    return children
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <PrtRoute>
          <Layout />
        </PrtRoute>
      ),
      children: [{
        path: "/",
        element: <Home />
      },
      {
        path: "/profile/",
        element: <Userprofile />
      }
      ]
    },
    {
      path: "/login",
      element: <SignIn />,
    },
    {
      path: "/register",
      element: <Register />,
    }
  ]);


  return (
    <div>
      <ToastContainer />
      <RouterProvider router={router} />
    </div>
  )
}

export default App
