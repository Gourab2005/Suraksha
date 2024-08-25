import React from 'react'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Home from './Pages/Home'
import Loggedin from './Pages/Loggedin'
import Admindashboard from './Pages/Admindashboard'
import Login from './Pages/Login'
import Signup from './Pages/signup'
import AboutSection from './Pages/About'
import Navbar from './Components/Navbar'
import ContactSection from './Pages/Contact'
const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element:<Home/>,
    },
    {
      path: "/login",
      element:<><Navbar/><Login/></>,
    },
    {
        path: "/signup",
        element: <><Navbar/><Signup/></>,
    },
    {
      path: "/loggedin",
      element:<><Navbar/><Loggedin/></>,
    },
    {
      path: "/admindashboard",
      element:<><Navbar/><Admindashboard/></>,
    },
    {
      path: "/about",
      element:<><Navbar/><AboutSection/></>,
    },
    {
      path: "/contact",
      element:<><Navbar/><ContactSection/></>,
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App