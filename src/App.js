import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {Footer} from './components';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import {About, Cart, Home, Products} from './pages';
import SingleProduct from './pages/SingleProduct';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<SingleProduct />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
