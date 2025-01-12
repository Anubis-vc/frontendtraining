import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Category from './Components/Category';
import ShoppingCart from './Components/ShoppingCart';
import './App.css'

function App() {
  const [cart, setCart] = useState([]);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Category/>}></Route>
      </Routes>
    </BrowserRouter>
  )
};

export default App
