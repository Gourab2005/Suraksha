import React from 'react'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Home from './Pages/Home'
import Loggedin from './Pages/Loggedin'
import Admindashboard from './Pages/Admindashboard'
import Login from './Pages/Login'
import Signup from './Pages/signup'
const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element:<Home/>,
    },
    {
      path: "/login",
      element:<Login/>,
    },
    {
      path: "/signup",
      element:<Signup/>,
    },
    {
      path: "/loggedin",
      element:<><Home/><Loggedin/></>,
    },
    {
      path: "/admindashboard",
      element:<><Home/><Admindashboard/></>,
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App