/* import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png' */
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router";
import LoginPage from "./pages/LoginPage";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <BrowserRouter>
    {/*    <Navbar/> */}
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
