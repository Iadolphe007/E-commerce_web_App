import './App.css';
import Navbar from './components/navbar/navbar';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import ShopCategory from './pages/ShopCategory';
import Product from './pages/product';
import Cart from './pages/cart';
import Login from './pages/Login';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/mens' element={<ShopCategory category='mens'/>}/>
          <Route path='/womens' element={<ShopCategory category='womens'/>}/>
          <Route path='/electronics' element={<ShopCategory category='Electronics'/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/product' element={<Product/>}/>
            <Route path=':productId' element={<Product/>}/>
          <Route/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
