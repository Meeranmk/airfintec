
import React from 'react';
import { Menu, X, Search, Phone } from 'lucide-react';
import { Page } from '../types';

interface NavbarProps {
  currentPage: Page;
  onPageChange: (page: Page) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, onPageChange }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const navItems = [
    { label: 'Home', value: Page.Home },
    { label: 'About', value: Page.About },
    { label: 'Services', value: Page.Services },
    { label: 'Products', value: Page.Calculators },
    { label: 'Contact', value: Page.Contact },
  ];

  return (
    <nav className="fixed w-full bg-white z-50 shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo - Left */}
          <div className="flex items-center flex-shrink-0">
            <div
              className="flex items-center cursor-pointer space-x-3"
              onClick={() => onPageChange(Page.Home)}
            >
              <img
                src="/afts-logo.jpg"
                alt="AFTS - Air-Fin Technical Services"
                className="h-12 sm:h-14 w-auto"
              />
              <span className="text-xl sm:text-2xl font-bold">
                <span className="text-orange-500">Airfintec</span>
              </span>
            </div>
          </div>

          {/* Navigation Menu - Center */}
          <div className="hidden md:flex md:space-x-8 absolute left-1/2 transform -translate-x-1/2">
            {navItems.map((item) => (
              <button
                key={item.value}
                onClick={() => onPageChange(item.value)}
                className={`inline-flex items-center px-1 pt-1 text-sm font-medium border-b-2 transition-colors ${currentPage === item.value
                  ? 'border-[#FF8C00] text-[#FF8C00]'
                  : 'border-transparent text-gray-600 hover:text-gray-900 hover:border-gray-300'
                  }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Actions - Right */}
          <div className="hidden md:flex items-center">
            <button
              onClick={() => onPageChange(Page.Contact)}
              className="bg-[#FF8C00] text-white px-6 py-2 rounded-md text-sm font-semibold hover:bg-orange-600 transition-colors flex items-center space-x-2"
            >
              <Phone className="w-4 h-4" />
              <span>Get Quote</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 animate-in slide-in-from-top duration-300">
          <div className="pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.value}
                onClick={() => {
                  onPageChange(item.value);
                  setIsOpen(false);
                }}
                className={`block w-full text-left pl-3 pr-4 py-2 border-l-4 text-base font-medium ${currentPage === item.value
                  ? 'bg-orange-50 border-[#FF8C00] text-[#FF8C00]'
                  : 'border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800'
                  }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
