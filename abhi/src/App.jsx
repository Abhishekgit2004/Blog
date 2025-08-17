import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './Pages/Authantication/Login'
import Navbar from './Pages/Navbar'
import {BrowserRouter,Route,Router, Routes} from "react-router-dom"
import Signup from './Pages/Authantication/Signup'
import Home from './Pages/Home/Home'
import Profile from './Pages/Home/Profile'
import Contact from './Pages/Home/Contact'

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/sigup' element={<Signup/>}/>
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/contact' element={<Contact/>}/>
    </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
