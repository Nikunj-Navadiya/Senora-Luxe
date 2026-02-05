import React from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import AdminLayout from './components/AdminLayout'
import AddProducts from './pages/AddProducts'


function App() {

  return (
    <>
      <HashRouter>
        <AdminLayout>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/products' element={<AddProducts />} />
          </Routes>
        </AdminLayout>
      </HashRouter>
    </>
  )
}

export default App
