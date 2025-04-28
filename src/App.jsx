// App.js
import React from 'react';
import Home from './components/pages/Home';
import Navbar from './components/common/Navbar';
import CartPage from './components/pages/Cart';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


function App() {
  return (
   <div>
    <Router>
    <Navbar/>
   <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/cart' element={<CartPage/>}></Route>
   </Routes>
    </Router>
   </div>
  );
}

export default App;
