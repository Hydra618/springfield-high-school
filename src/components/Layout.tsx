
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Mail, MapPin, Menu, X } from 'lucide-react';
import { useState } from 'react';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/admissions', label: 'Admissions' },
    { path: '/contact', label: 'Contact Us' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-900 to-blue-800 text-white shadow-lg">
        <div className="container mx-auto px-4">
          {/* Top Bar */}
          <div className="py-2 border-b border-blue-700 hidden md:block">
            <div className="flex justify-between items-center text-sm">
              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <a href="tel:9849161512" className="hover:text-yellow-300 transition-colors">
                    +91 98491 61512
                  </a>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4" />
                  <a href="mailto:sfph2003@gmail.com" className="hover:text-yellow-300 transition-colors">
                    sfph2003@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Mancherial, Telangana</span>
              </div>
            </div>
          </div>

          {/* Main Header */}
          <div className="py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="bg-white p-2 rounded-full">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-gold-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">SH</span>
                  </div>
                </div>
                <div>
                  <h1 className="text-2xl md:text-3xl font-bold">Springfield High School</h1>
                  <p className="text-blue-200 text-sm md:text-base">Excellence in Education Since 2003</p>
                </div>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className={`bg-blue-800 ${isMenuOpen ? 'block' : 'hidden'} md:block`}>
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row space-y-0 md:space-y-0 md:space-x-0">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`px-6 py-4 text-white hover:bg-blue-700 transition-colors border-b-2 ${
                    isActive(item.path)
                      ? 'border-yellow-400 bg-blue-700'
                      : 'border-transparent'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-yellow-400">Springfield High School</h3>
              <p className="text-gray-300 mb-4">
                Committed to providing quality education and nurturing young minds for a brighter future.
              </p>
              <div className="flex space-x-4">
                <a href="tel:9849161512" className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition-colors">
                  Call Now
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4 text-yellow-400">Quick Links</h4>
              <ul className="space-y-2">
                {navItems.map((item) => (
                  <li key={item.path}>
                    <Link to={item.path} className="text-gray-300 hover:text-white transition-colors">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4 text-yellow-400">Contact Info</h4>
              <div className="space-y-3 text-gray-300">
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4" />
                  <span>Mancherial, Telangana, India</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <a href="tel:9849161512" className="hover:text-white transition-colors">
                    +91 98491 61512
                  </a>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4" />
                  <a href="mailto:sfph2003@gmail.com" className="hover:text-white transition-colors">
                    sfph2003@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
            <p>&copy; 2024 Springfield High School. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
