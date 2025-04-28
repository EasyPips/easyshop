import { useContext, useState } from 'react';
import { CartContext } from '../contexts/CartContext';
import menu from '../../assets/icon-menu.svg';
import close from '../../assets/icon-close.svg';
import cart from '../../assets/icon-cart.svg';
import logo from '../../assets/logo.svg';
import user from '../../assets/image-avatar.png';
import { Link } from 'react-router-dom';


function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { cartCount } = useContext(CartContext);

  return (
    <nav className="bg-white shadow-md fixed w-full z-10">
      <div className="container mx-auto flex items-center justify-between p-4">
        
        <div className="flex items-center space-x-4">
          <a href="#" className="hidden md:block">
            <img src={logo} alt="Logo" className="h-8 w-auto" />
          </a>

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

        <ul className="hidden md:flex space-x-8 text-gray-700 text-xl font-medium">
          <li>
            <Link to="/" className="hover:text-gray-900">
              Home
            </Link>
          </li>
          <li>
            <Link to="/shop" className="hover:text-gray-900">
              Shop
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-gray-900">
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-gray-900">
              Contact
            </Link>
          </li>
          <li>
            <Link to="/blog" className="hover:text-gray-900">
              Blog
            </Link>
          </li>
        </ul>

        <div className="flex items-center space-x-6">
          <div className="relative">
            <Link to='/cart'>
              <img src={cart} alt="Cart" className="w-7 h-7" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>

          <div>
            <a href="#">
              <img src={user} alt="User" className="w-8 h-8 rounded-full" />
            </a>
          </div>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <ul className="flex flex-col items-center space-y-4 py-4 text-gray-700 text-lg font-medium">
            <li><Link to='/' onClick={() => setMenuOpen(false)}>Home</Link></li>
            <li><Link  onClick={() => setMenuOpen(false)}>Shop</Link></li>
            <li><Link  onClick={() => setMenuOpen(false)}>About</Link></li>
            <li><Link  onClick={() => setMenuOpen(false)}>Contact</Link></li>
            <li><Link  onClick={() => setMenuOpen(false)}>Blog</Link></li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
