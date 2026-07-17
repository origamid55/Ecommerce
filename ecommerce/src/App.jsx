import { useState } from 'react'
import './App.css'
import Header from './Components/Header'
import Main from './Components/Main'
import Footer from './Components/Footer'
import Vitrine from './Components/Vitrine'
import { Link, Route, Routes } from 'react-router-dom'
import Carrinho from './Components/Carrinho'

function App() {
  return (
  <>
  <Header/>
  <nav>
  </nav>
  <Routes>
    <Route path="/" element={<Main/>}/>
    <Route path="/carrinho" element={<Carrinho/>}/>
  </Routes>
  
  
  <Footer/>
  </>)
}
export default App
