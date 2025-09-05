
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./Pages/MyComponent/Profile";
import About from './Pages/MyComponent/About';
import Navbar from "./Pages/MyComponent/Navbar";
import Home from "./Pages/MyComponent/Home/Home";
import Login from "./Pages/Authantication/Login";
import Signup from "./Pages/Authantication/Signup";

const App = () => {
  return (
   <>
   <BrowserRouter>
  <Navbar/>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/profile" element={<Profile/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/sigup" element={<Signup/>}/>
  </Routes>
  </BrowserRouter>

   </>
  )
}

export default App 