import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { Menu, X, BookOpen, ChevronRight, Sparkles } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Performance optimized scroll handler
  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;
    
    setScrollPosition(currentScrollY);
    setIsVisible(currentScrollY < lastScrollY || currentScrollY < 10);
    setLastScrollY(currentScrollY);
  }, [lastScrollY]);

  useEffect(() => {
    let ticking = false;
    
    const scrollListener = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', scrollListener, { passive: true });
    return () => window.removeEventListener('scroll', scrollListener);
  }, [handleScroll]);

  // Memoized navigation items for performance
  const navigationItems = useMemo(() => [
    { href: '#HeroCarousel', label: 'Accueil', isActive: true },
    { href: '#AboutSection', label: 'À Propos' },
    { href: '#programs', label: 'Programmes' },
    { href: '#Features', label: 'Actualités' },
    { href: './pages/EventsPages', label: 'Événements' },
    { href: '#ContactSection', label: 'Contact' }
  ], []);

  const handleMobileMenuToggle = useCallback(() => {
    setIsMenuOpen(prev => !prev);
  }, []);

  const handleMobileNavClick = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  // Dynamic header classes based on scroll
  const headerClasses = useMemo(() => {
    const baseClasses = "fixed w-full top-0 z-[100] transition-all duration-700 ease-out";
    const scrolledClasses = scrollPosition > 20
      ? "bg-white/98 backdrop-blur-2xl shadow-2xl shadow-blue-500/5 border-b border-blue-100/30"
      : "bg-white/92 backdrop-blur-xl shadow-lg shadow-blue-400/8 border-b border-gray-100/50";
    const visibilityClasses = isVisible ? "translate-y-0" : "-translate-y-full";
    
    return `${baseClasses} ${scrolledClasses} ${visibilityClasses}`;
  }, [scrollPosition, isVisible]);

  // Dynamic logo classes
  const logoClasses = useMemo(() => {
    const baseClasses = "relative overflow-hidden rounded-2xl p-3.5 mr-5 transition-all duration-700 group-hover:scale-105 group-hover:rotate-2";
    const scrolledClasses = scrollPosition > 20
      ? "bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 shadow-xl shadow-blue-600/20"
      : "bg-gradient-to-br from-blue-500 via-blue-600 to-indigo-700 shadow-lg shadow-blue-500/15";
    
    return `${baseClasses} ${scrolledClasses}`;
  }, [scrollPosition]);

  return (
    <header className={headerClasses}>
      {/* Ambient background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50/20 via-transparent to-indigo-50/20 pointer-events-none" />
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 lg:py-5">
          
          {/* Logo Section - Enterprise Grade */}
          <div className="flex items-center group cursor-pointer select-none">
            <div className={logoClasses}>
              {/* Animated background overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-white/5 group-hover:from-white/30 group-hover:to-white/10 transition-all duration-500" />
              
              {/* Sparkle effect */}
              <div className="absolute top-1 right-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <Sparkles className="h-3 w-3 text-white/80" />
              </div>
              
              <BookOpen className="h-8 w-8 text-white relative z-10 group-hover:rotate-12 transition-transform duration-500" />
            </div>
            
            <div className="flex flex-col">
              <h1 className="text-xl lg:text-2xl font-black bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-900 bg-clip-text text-transparent tracking-tight">
                Groupe scolaire Marcel Arnaud
              </h1>
              <div className="flex items-center space-x-2 mt-0.5">
                <div className="h-0.5 w-8 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full" />
                <p className="text-xs font-semibold text-blue-600/80 tracking-wider uppercase hidden sm:block">
                  Excellence • Innovation • Avenir
                </p>
              </div>
            </div>
          </div>

          {/* Desktop Navigation - Enterprise Level */}
          <nav className="hidden lg:flex items-center">
            <div className="flex items-center bg-gradient-to-r from-gray-50/80 to-blue-50/40 backdrop-blur-sm rounded-2xl p-1.5 shadow-inner shadow-blue-100/50 border border-white/60">
              {navigationItems.map((item, index) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={`
                    group relative px-5 lg:px-6 py-3 font-semibold transition-all duration-500 rounded-xl
                    ${item.isActive 
                      ? 'text-blue-700 bg-white shadow-lg shadow-blue-500/10 border border-blue-100/50' 
                      : 'text-gray-700 hover:text-blue-700 hover:bg-white hover:shadow-md hover:shadow-blue-400/8'
                    }
                  `}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <span className="relative z-20 text-sm lg:text-base">{item.label}</span>
                  
                  {/* Hover effect background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 via-indigo-50/30 to-blue-50/50 opacity-0 group-hover:opacity-100 rounded-xl transition-all duration-500 scale-95 group-hover:scale-100" />
                  
                  {/* Active indicator */}
                  {item.isActive && (
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-600 rounded-full" />
                  )}
                </a>
              ))}
            </div>
            
            {/* Premium CTA Button */}
            <div className="ml-8 relative">
              <button className="group relative overflow-hidden bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 hover:from-blue-700 hover:via-blue-800 hover:to-indigo-800 text-white px-8 py-3.5 rounded-2xl font-bold transition-all duration-700 shadow-xl shadow-blue-600/25 hover:shadow-2xl hover:shadow-blue-600/35 hover:-translate-y-1 active:translate-y-0 active:shadow-lg">
                
                {/* Animated shine effect */}
                <div className="absolute inset-0 -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                
                {/* Button content */}
                <span className="relative z-10 flex items-center space-x-2 text-sm lg:text-base">
                  <span>Inscription</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-300" />
                </span>
                
                {/* Pulsing dot */}
                <div className="absolute top-2 right-2 w-2 h-2 bg-white/60 rounded-full animate-pulse" />
              </button>
            </div>
          </nav>

          {/* Mobile Menu Button - Sophisticated */}
          <button 
            className={`
              lg:hidden relative p-3.5 rounded-2xl transition-all duration-500 transform hover:scale-105 active:scale-95
              ${isMenuOpen 
                ? 'bg-gradient-to-br from-blue-600 to-indigo-700 text-white shadow-xl shadow-blue-600/30' 
                : 'bg-white/80 backdrop-blur-sm text-gray-700 hover:text-blue-600 shadow-lg shadow-blue-400/10 border border-white/60'
              }
            `}
            onClick={handleMobileMenuToggle}
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
          >
            <div className="relative w-6 h-6">
              <Menu className={`absolute inset-0 w-6 h-6 transition-all duration-500 ${
                isMenuOpen ? 'opacity-0 rotate-180 scale-50' : 'opacity-100 rotate-0 scale-100'
              }`} />
              <X className={`absolute inset-0 w-6 h-6 transition-all duration-500 ${
                isMenuOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-180 scale-50'
              }`} />
            </div>
          </button>
        </div>

        {/* Mobile Navigation - Premium Design */}
        <div className={`
          lg:hidden overflow-hidden transition-all duration-700 ease-out
          ${isMenuOpen ? 'max-h-screen opacity-100 pb-8' : 'max-h-0 opacity-0 pb-0'}
        `}>
          <div className="relative bg-gradient-to-br from-white via-blue-50/30 to-indigo-50/20 backdrop-blur-xl rounded-3xl p-8 shadow-2xl shadow-blue-500/10 border border-white/50 mx-2">
            
            {/* Decorative elements */}
            <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-blue-100/50 to-indigo-100/30 rounded-full blur-2xl" />
            <div className="absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-br from-indigo-100/50 to-blue-100/30 rounded-full blur-xl" />
            
            <div className="relative z-10 space-y-2">
              {navigationItems.map((item, index) => (
                <a 
                  key={item.href}
                  href={item.href}
                  className={`
                    group relative flex items-center justify-between px-6 py-4 font-semibold transition-all duration-500 rounded-2xl
                    ${item.isActive 
                      ? 'text-blue-700 bg-white/80 shadow-lg shadow-blue-500/10' 
                      : 'text-gray-700 hover:text-blue-700 hover:bg-white/60 hover:shadow-md'
                    }
                  `}
                  onClick={handleMobileNavClick}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <span className="relative z-10 text-base">{item.label}</span>
                  <ChevronRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1" />
                  
                  {/* Hover gradient */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 to-indigo-50/30 opacity-0 group-hover:opacity-100 rounded-2xl transition-all duration-500" />
                </a>
              ))}
              
              {/* Mobile CTA */}
              <div className="pt-4 mt-4 border-t border-gradient-to-r from-transparent via-blue-200/50 to-transparent">
                <button className="group relative w-full overflow-hidden bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 hover:from-blue-700 hover:via-blue-800 hover:to-indigo-800 text-white px-8 py-5 rounded-2xl font-bold transition-all duration-700 shadow-xl shadow-blue-600/25 hover:shadow-2xl hover:shadow-blue-600/40 transform hover:-translate-y-1">
                  
                  {/* Animated background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-white/20 to-white/10 -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  
                  <span className="relative z-10 flex items-center justify-center space-x-3">
                    <span className="text-lg">Commencer l'inscription</span>
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-white/80 rounded-full animate-pulse" />
                      <div className="w-2 h-2 bg-white/60 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }} />
                      <div className="w-2 h-2 bg-white/40 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }} />
                    </div>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Premium bottom border with animation */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-300/60 to-transparent">
        <div className="h-full bg-gradient-to-r from-blue-400 to-indigo-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 origin-center" />
      </div>
    </header>
  );
};

export default Header;