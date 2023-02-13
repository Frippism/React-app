import React from 'react';
import './App.css';
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Home from './pages/Home';
import Assets from './pages/Assets';
import Tutorial from './pages/Tutorial';
import Contact from './pages/Contact';
import {BrowserRouter as Router, Route , Routes} from "react-router-dom";


function App() {
  return (
    
    <div className='App'>
      <Router>
          <Navbar />
        <Routes>
          <Route  path="/" element={<Home/>} />
          <Route  path="/assets" element={<Assets/>} />
          <Route  path="/tutorial" element={<Tutorial/>} />
          <Route  path="/contact" element={<Contact/>} />
        </Routes>
        <Footer/>
      </Router>
    </div>
    
  );
}

export default App;
