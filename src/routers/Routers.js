import { Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home';
import Login from '../Pages/Login';
import Cart from '../Pages/Cart';
import Checkout from '../Pages/Checkout';
import Productdetails from '../Pages/Productdetails';
import Shop from '../Pages/Shop';
import Signup from '../Pages/Signup';

const Routers = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/shop/:id" element={<Productdetails />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
};

export default Routers;
