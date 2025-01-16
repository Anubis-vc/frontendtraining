import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer/Footer';
import Home from './Routes/HomePage/Home';
import About from './Routes/About/About';
import Contact from './Routes/Contact/Contact';
import Store from './Routes/Store/Store';
import Product from './Routes/ProductPage/Product';

function App() {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("all");
  const [sort, setSort] = useState("name");

  /* Going to useEffect once on all data and then filter
    data on client-side for best performance because of 
    the reduced size of our data. Would usually query
    backend on each request if possible 
  */
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products")
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setProducts(data)
      }
      catch (err) {
        console.error(err);
      }
    }
    fetchData();
  }, []);

  return (
    <BrowserRouter>
      <Navbar cart={cart}/>
      <Routes>
        <Route path="/" element={<Home setCategory={setCategory}/>} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="product/:id" element={
          <Product
            data={products}
            cart={cart}
            setCart={setCart}
          />
        }/>
        <Route path="store" element={
          <Store
            data={products}
            cart={cart}
            category={category}
            sort={sort}
            setCart={setCart}
            setCategory={setCategory}
            setSort={setSort}
          />
        } />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;