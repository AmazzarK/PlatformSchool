import React, { useState } from 'react';
import { Menu, X, BookOpen } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white/90 backdrop-blur-sm shadow-sm fixed w-full top-0 z-50 border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-3">
          {/* Logo - Modernized */}
          <div className="flex items-center group">
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg p-2 mr-3 transition-all duration-300 group-hover:rotate-12">
              <BookOpen className="h-7 w-7" />
            </div>
            <h1 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              Groupe scolaire Marcel Arnaud
            </h1>
          </div>

          {/* Desktop Navigation - Modern */}
          <nav className="hidden lg:flex items-center space-x-1">
            <a href="#HeroCarousal" className="px-4 py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors rounded-lg hover:bg-blue-50">
              Accueil
            </a>
            <a href="#AboutSection" className="px-4 py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors rounded-lg hover:bg-blue-50">
              À Propos
            </a>
            <a href="#programs" className="px-4 py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors rounded-lg hover:bg-blue-50">
              Programmes
            </a>
            <a href="#Featuers" className="px-4 py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors rounded-lg hover:bg-blue-50">
              Actualités
            </a>
            <a href="#Events" className="px-4 py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors rounded-lg hover:bg-blue-50">
              Événements
            </a>
            <a href="#ContactSection" className="px-4 py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors rounded-lg hover:bg-blue-50">
              Contact
            </a>
            
            <button className="ml-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-5 py-2.5 rounded-lg font-medium transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5">
              Inscription
            </button>
          </nav>

          {/* Mobile Menu Button - Modern */}
          <button 
            className="lg:hidden p-2 rounded-lg hover:bg-blue-50 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-blue-600" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Menu - Modern */}
        {isMenuOpen && (
          <div className="lg:hidden py-3 border-t border-gray-100">
            <div className="flex flex-col space-y-2">
              <a 
                href="#HeroCarousal" 
                className="px-4 py-3 text-gray-700 hover:text-blue-600 font-medium transition-colors rounded-lg hover:bg-blue-50"
                onClick={() => setIsMenuOpen(false)}
              >
                Accueil
              </a>
              <a 
                href="#AboutSection" 
                className="px-4 py-3 text-gray-700 hover:text-blue-600 font-medium transition-colors rounded-lg hover:bg-blue-50"
                onClick={() => setIsMenuOpen(false)}
              >
                À Propos
              </a>
              <a 
                href="#programs" 
                className="px-4 py-3 text-gray-700 hover:text-blue-600 font-medium transition-colors rounded-lg hover:bg-blue-50"
                onClick={() => setIsMenuOpen(false)}
              >
                Programmes
              </a>
              <a 
                href="#Featuers" 
                className="px-4 py-3 text-gray-700 hover:text-blue-600 font-medium transition-colors rounded-lg hover:bg-blue-50"
                onClick={() => setIsMenuOpen(false)}
              >
                Atouts
              </a>
              <a 
                href="#Events" 
                className="px-4 py-3 text-gray-700 hover:text-blue-600 font-medium transition-colors rounded-lg hover:bg-blue-50"
                onClick={() => setIsMenuOpen(false)}
              >
                Événements
              </a>
              <a 
                href="#ContactSection" 
                className="px-4 py-3 text-gray-700 hover:text-blue-600 font-medium transition-colors rounded-lg hover:bg-blue-50"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
              <button className="mt-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-3 rounded-lg font-medium transition-colors">
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