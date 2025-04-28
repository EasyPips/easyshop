// App.js
import React from 'react';
import Home from './components/pages/Home';
import Navbar from './components/common/Navbar';
import CartPage from './components/pages/Cart';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Footer from './components/common/footer';


function App() {
  return (
    <div className='flex flex-col min-h-screen'>
      <Router>
        <Navbar />
        <main className='flex-grow '>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/cart" element={<CartPage />}></Route>
          </Routes>
        </main>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
