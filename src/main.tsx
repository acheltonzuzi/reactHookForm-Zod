import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Fetch from './Components/Fetch.tsx'
import Profile from './Pages/Profile.tsx'
import NotFound from './Pages/NotFound.tsx'

const rota = createBrowserRouter([
  {
      path: '/',
      element:<Fetch />,
      errorElement:<NotFound/>
     
  },
  {
    path: '/profile/:id',
    element:<Profile/>,
    
  }
])
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={rota}></RouterProvider>
  </React.StrictMode>,
)
