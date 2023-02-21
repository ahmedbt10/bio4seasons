
import Header from './components/Header'
import { Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Products from './pages/Products'
import Footer from './components/Footer'
import Cart from './pages/Cart'
import CartProvider from './context/CartContext'
import CartFinalForm from './pages/CartFinalForm'
function App() {

  return (
    <div className="App">
      <CartProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/ahmed" element={<CartFinalForm />} />
        </Routes>
        <Footer />
      </CartProvider>
    </div>
  )
}

export default App
