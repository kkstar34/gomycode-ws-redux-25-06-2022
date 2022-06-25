import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Accueil from './pages/Accueil';
import About from './pages/About';
import Contact from './pages/Contact';
import User from './pages/User';
import { useState } from 'react';
function App() {
  
  return (
    <Routes>
      <Route path="/" element={<Accueil />}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/user/:id" element={<User />}/>
    </Routes>
  );

}

export default App;
