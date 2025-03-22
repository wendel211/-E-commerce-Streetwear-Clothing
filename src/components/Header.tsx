import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Menu } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const Header: React.FC = () => {
  const { state } = useCart();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/catalog', label: 'Shop' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="bg-black text-white fixed w-full top-0 z-50 shadow-lg">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold">STREETWEAR</Link>
          
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`hover:text-gray-300 transition-colors duration-200 ${
                  isActive(item.path) ? 'text-accent font-semibold' : ''
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link 
              to="/cart" 
              className="relative hover:text-gray-300 transition-colors duration-200"
            >
              <ShoppingBag className={isActive('/cart') ? 'text-accent' : ''} />
              {state.items.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-accent text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {state.items.length}
                </span>
              )}
            </Link>
          </div>

          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <Menu />
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-4 pb-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`block hover:text-gray-300 transition-colors duration-200 ${
                  isActive(item.path) ? 'text-accent font-semibold' : ''
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link 
              to="/cart" 
              className="block hover:text-gray-300 transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Cart ({state.items.length})
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
};