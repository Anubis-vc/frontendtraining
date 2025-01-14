import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer/Footer';
import Home from './Routes/HomePage/Home';
import About from './Routes/About/About';
import Contact from './Routes/Contact/Contact';

function App() {
  const [cart, setCart] = useState([]);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
};

export default App;