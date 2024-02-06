import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RouterProvider, createBrowserRouter, Navigate } from 'react-router-dom'
import Reg from './reg/Reg'
import Log from './auth/Auth'
import { useSelector } from 'react-redux'
import MainPage from './MainPage'
import Application from './application'
import Separate_card from './separate-card'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/reg" />
  },
  {
    path: '/reg',
    element: <Reg />
  },
  {
    path: '/auth',
    element: <Log />
  },
])

const authRouter = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />
  },
  {
    path: '/application',
    element: <Application />
  },
  {
    path: '*',
    element: <Navigate to="/" />
  },
])

const authRouterAdmin = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />
  },
  {
    path: "/separate_card",
    element: <Separate_card />,
  },
  {
    path: '/admin',
    element: <>admin</>
  }
])

function App() {

  const token = useSelector((state) => state.auth.token)
  const role = useSelector((state) => state.auth.role)

  console.log(token);

  return (
    token ? (role === "ADMIN" ? <RouterProvider router={authRouterAdmin} /> : <RouterProvider router={authRouter} />) :
    <RouterProvider router={router} />
  )
}

export default App
