import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-blue-500">MOVO</span>BELTING
            </h3>
            <p className="text-gray-400 text-sm mb-4">
              Complete Material Handling Systems and Belting Solutions for Industrial Applications
              with System Integrations and Automation
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-blue-500 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-400 hover:text-blue-500 transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-blue-500 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-blue-500 transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Products</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>PVC/PU/PE Conveyor Belts</li>
              <li>Timing Belts & Pulleys</li>
              <li>All Type of Conveyors</li>
              <li>System Integration and Automation</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3 text-gray-400 text-sm">
              <div className="flex items-start space-x-2">
                <MapPin size={18} className="mt-1 flex-shrink-0" />
                <span> Plot No 48/B SY No 658/1B 
                  <br />
                  Tiny Co-Opeartive Society
                  <br />
                  Industrail Estate Udyambag   Belgaum 590008
                  <br />
                  Karnataka, India
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={18} />
                <span> +91 9743533859, +91 9591452090, +91 9480538786</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={18} />
                <span>movobelting@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Movobelting Industries. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
