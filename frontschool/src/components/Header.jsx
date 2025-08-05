import React, { useState } from 'react';
import { Menu, X, ChevronDown, BookOpen } from 'lucide-react';


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (dropdownName) => {
    setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
  };


  
  return (
    <header className="bg-white shadow-lg fixed w-full top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg p-2 mr-3">
              <BookOpen className="h-8 w-8" />
            </div>
            <h1 className="text-2xl font-bold text-blue-800">Groupe scolaire Marcel Arnaud</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <a href="#HeroCarousal" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Accueil
            </a>
              <a href="#AboutSection" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              À Propos
            </a>
              <a href="#programs" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Programmes
            </a>

            <a href="#Featuers" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Actualités
            </a>
            <a href="#Events" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Événements
            </a>
            <a href="#ContactSection" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Contact
            </a>
            
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors transform hover:scale-105">
              Inscription
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-gray-700 hover:text-blue-600 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t">
            <div className="space-y-4">
              <a href="#accueil" className="block text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Accueil
              </a>
              <a href="#apropos" className="block text-gray-700 hover:text-blue-600 font-medium transition-colors">
                À Propos
              </a>
              <a href="#programmes" className="block text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Programmes
              </a>
              <a href="#Features" className="block text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Actualités
              </a>
              <a href="./pages/EventsPages" className="block text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Événements
              </a>
              <a href="#contact" className="block text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Contact
              </a>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors">
                Inscription
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;