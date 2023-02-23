import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { About } from './Pages/About';
import { Home } from './Pages/Home';
import { Product } from './Pages/Product';

function App() {
  return (
    <div className="relative pb-10 min-h-screen">
      <BrowserRouter>
        <Header  />
        <Routes>
            <Route path="/" element={ <Home /> } />
            <Route path="/about" element={ <About/> } />
            <Route path="/Home" element={<Home />} />
            <Route path="/Products/:id" element={<Product />} />
        </Routes>
        <Footer />
      </BrowserRouter>
     
    </div>
  );
}

export default App;
