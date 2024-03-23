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
import men_banner from './components/images/men_banner.png'
import women_banner from './components/images/women_banner.png'
import electonic_banner from './components/images/electronic_banner.png'
import about_banner from './components/images/about_banner.png'
import contact_banner from './components/images/contact_banner.png'
import Signup from './components/signup/signup';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/mens' element={<ShopCategory category='mens' banner={men_banner}/>}/>
          <Route path='/womens' element={<ShopCategory category='womens' banner={women_banner}/>}/>
          <Route path='/electronics' element={<ShopCategory category='electronics' banner={electonic_banner}/>}/>         
          <Route path='/about' element={<About banner={about_banner}/>}/>
          <Route path='/contact' element={<Contact banner={contact_banner}/>}/>
          <Route path='/product' element={<Product/>}/>
            <Route path=':productId' element={<Product/>}/>
          <Route/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
