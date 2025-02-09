import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Navbar from './Navbar'
import Home from './Home'
import Category from './Category'
import Products from './Products'
import Create from './Create'
import Footer from './Footer'
import CatList from "./CatList";
import Details from "./Details";
import ProductList from "./ProductList";

function App() {

  return (
    <>
      <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/category" element={<Category />} />
      <Route path="/catList/:slug" element={<CatList />} />
      <Route path="/products" element={<Products />} />
      <Route path="/details/:id" element={<Details />} />
      <Route path="/create" element={<Create />} />
    </Routes>
    <Footer />
    </>
  )
}


export default App
