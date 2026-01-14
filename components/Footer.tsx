
import React from 'react';
import { Mail, MapPin, Phone, Linkedin, Facebook, Instagram } from 'lucide-react';
import { Page } from '../types';

interface FooterProps {
  onPageChange: (page: Page) => void;
}

const Footer: React.FC<FooterProps> = ({ onPageChange }) => {
  return (
    <footer className="bg-blue-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <img
                src="/afts-logo.jpg"
                alt="AFTS - Air-Fin Technical Services"
                className="h-12 w-auto"
              />
              <span className="text-xl sm:text-2xl font-bold">
                <span className="text-orange-500">Air-Fin</span>
                <span className="text-blue-400"> Tech</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Founded in 2024, Air-Fin Technical Services Pvt Ltd is dedicated to bridging the gap in the ACHE spares and specialized services market.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-gray-700 rounded-full hover:bg-blue-600 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-gray-700 rounded-full hover:bg-blue-600 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-gray-700 rounded-full hover:bg-blue-600 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><button onClick={() => onPageChange(Page.About)} className="hover:text-white transition-colors">About Us</button></li>
              <li><button onClick={() => onPageChange(Page.Services)} className="hover:text-white transition-colors">Our Services</button></li>
              <li><button onClick={() => onPageChange(Page.Calculators)} className="hover:text-white transition-colors">Products</button></li>
              <li><button onClick={() => onPageChange(Page.Contact)} className="hover:text-white transition-colors">Contact Us</button></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[#FF8C00] flex-shrink-0" />
                <span>Air-Fin Technical Services Pvt Ltd, Plot No 305B, Moogambigai Nagar, Kovur, Chennai-600128. GSTIN: 33AAZCA9024C1ZM</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[#FF8C00] flex-shrink-0" />
                <span>+91 7695828840 / +91 9840204194</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[#FF8C00] flex-shrink-0" />
                <span>afts@airfintec.com / selvas@airfintec.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Newsletter</h3>
            <p className="text-gray-400 text-sm mb-4">Stay updated with industry insights and company news.</p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full bg-gray-700 border-none rounded-md px-4 py-2 text-white text-sm focus:ring-2 focus:ring-[#FF8C00]"
              />
              <button className="w-full bg-[#FF8C00] text-white py-2 rounded-md text-sm font-semibold hover:bg-orange-600 transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center text-gray-500 text-xs">
          <p>© 2026 Air-Fin Technical Services Pvt Ltd. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
