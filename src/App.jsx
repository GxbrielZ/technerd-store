import { BrowserRouter as Router, Routes, Route } from "react-router";
import { CartProvider } from "./context/CartContext";
import Navbar from "./components/Navbar";
import BottomNavbar from "./components/BottomNavbar";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import ProductPage from "./pages/ProductPage";
import Footer from "./components/Footer";
import './App.css';

function App() {
  return (
    <Router>
      <CartProvider>
        <Navbar />
        <BottomNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product/:productId" element={<ProductPage />} />
        </Routes>
        <Footer />
      </CartProvider>
    </Router>
  )
}

export default App
