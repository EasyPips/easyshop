import { useContext, useState } from 'react';
import { CartContext } from '../contexts/CartContext';
import menu from '../../assets/icon-menu.svg';
import close from '../../assets/icon-close.svg';
import cart from '../../assets/icon-cart.svg';
import logo from '../../assets/logo.svg';
import user from '../../assets/image-avatar.png';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { cartCount } = useContext(CartContext);

  return (
    <nav className="bg-white shadow-md fixed w-full z-10">
      <div className="container mx-auto flex items-center justify-between p-4">
        
        {/* Left - Logo + Hamburger for mobile */}
        <div className="flex items-center space-x-4">
          {/* Logo - hidden on small screens */}
          <a href="#" className="hidden md:block">
            <img src={logo} alt="Logo" className="h-8 w-auto" />
          </a>

          {/* Hamburger (mobile) */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden"
          >
            <img
              src={menuOpen ? close : menu}
              alt="Menu"
              className="w-6 h-6"
            />
          </button>
        </div>

        {/* Center - Menu List */}
        <ul className="hidden md:flex space-x-8 text-gray-700 text-2xl font-medium">
          <li><a href="#">Home</a></li>
          <li><a href="#">Shop</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">Blog</a></li>
        </ul>

        {/* Right - Cart + User Icons */}
        <div className="flex items-center space-x-6">
          {/* Cart Icon */}
          <div className="relative">
            <a href="#">
              <img src={cart} alt="Cart" className="w-7 h-7" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </a>
          </div>

          {/* User Profile Icon */}
          <div>
            <a href="#">
              <img src={user} alt="User" className="w-8 h-8 rounded-full" />
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <ul className="flex flex-col items-center space-y-4 py-4 text-gray-700 text-lg font-medium">
            <li><a href="#" onClick={() => setMenuOpen(false)}>Home</a></li>
            <li><a href="#" onClick={() => setMenuOpen(false)}>Shop</a></li>
            <li><a href="#" onClick={() => setMenuOpen(false)}>About</a></li>
            <li><a href="#" onClick={() => setMenuOpen(false)}>Contact</a></li>
            <li><a href="#" onClick={() => setMenuOpen(false)}>Blog</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
