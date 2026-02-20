import React from 'react'
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header'
import Login from './pages/Login'
import About from './pages/About'
import Footer from './pages/Footer'
import ScrollToTop from './components/ScrollToTop'
import Privacypolicy from './components/Privacypolicy'
import Refundpolicy from './components/Refundpolicy'
import Shippingpolicy from './components/Shippingpolicy'
import Termsofservice from './components/Termsofservice'
import Contact from './pages/Contact'
import Dresses from './components/Dresses'

function Layout() {
  const location = useLocation()

  return (
    <>
      <ScrollToTop />

      {/* Home page ma normal header */}
      {location.pathname === "/" ? (
          <Header />
      ) : (
        <div className="fixed top-0 left-0 w-full z-50 bg-white shadow-sm">
          <Header />
        </div>
      )}

      {/* Fixed header hoy to content ne padding aapvu jaruri */}
      <div className={location.pathname === "/" ? "" : "pt-20"}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/login' element={<Login />} />
          <Route path='/privacy-policy' element={<Privacypolicy />} />
          <Route path='/Refund-policy' element={<Refundpolicy />} />
          <Route path='/Shipping-policy' element={<Shippingpolicy />} />
          <Route path='/Termsofservice-policy' element={<Termsofservice />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/dresses' element={<Dresses />} />
        </Routes>
      </div>

      <Footer />
    </>
  )
}

function App() {
  return (
    <HashRouter>
      <Layout />
    </HashRouter>
  )
}

export default App