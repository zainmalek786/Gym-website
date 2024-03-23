import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { Router } from 'react-router-dom'
import Layout from './Layout.jsx'
import Homepg from './pages/Homepg.jsx'
import Aboutpg from './pages/Aboutpg.jsx'
import Classespg from './pages/Classespg.jsx'
import Schedulepg from './pages/Schedulepg.jsx'
import Contactpg from './pages/Contactpg.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(

    <Route path='/' element={<Layout/>}>
    <Route path='' element={<Homepg/>}/>
    <Route path='about' element={<Aboutpg/>}/>

    <Route path='classes' element={<Classespg/>}/>
    <Route path='schedule' element={<Schedulepg/>}/>
    <Route path='contact' element={<Contactpg/>}/>
       </Route>
  )
)



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}

    <RouterProvider router={router} />
  </React.StrictMode>
)
