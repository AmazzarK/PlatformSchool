import React, { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause, ArrowDown, Users, Award, Target } from 'lucide-react';

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const intervalRef = useRef(null);
  const containerRef = useRef(null);

  const slides = useMemo(() => [
    {
      id: 1,
      title: "Bienvenue à Marcel Arnaud",
      subtitle: "Excellence Éducative",
      description: "Façonnons l'avenir avec une éducation d'excellence, innovation et bienveillance pour chaque élève dans un environnement stimulant.",
      image: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=90",
      primaryButton: "Découvrir nos programmes",
      secondaryButton: "Planifier une visite",
      stats: [
        { icon: Users, value: "1200+", label: "Étudiants" },
        { icon: Award, value: "98%", label: "Réussite" },
        { icon: Target, value: "25", label: "Années d'expérience" }
      ],
      accent: "from-blue-600 to-indigo-700"
    },
    {
      id: 2,
      title: "Innovation Pédagogique",
      subtitle: "Méthodes Modernes",
      description: "Des approches d'enseignement révolutionnaires intégrant les dernières technologies pour un apprentissage immersif et personnalisé.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=90",
      primaryButton: "Explorer nos méthodes",
      secondaryButton: "Voir les innovations",
      stats: [
        { icon: Target, value: "100%", label: "Numérique" },
        { icon: Users, value: "15", label: "Étudiants/classe" },
        { icon: Award, value: "5★", label: "Excellence" }
      ],
      accent: "from-indigo-600 to-purple-700"
    },
    {
      id: 3,
      title: "Accompagnement Personnalisé",
      subtitle: "Chaque Élève Compte",
      description: "Un suivi individualisé et bienveillant pour révéler le potentiel unique de chaque élève et garantir son épanouissement personnel.",
      image: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=90",
      primaryButton: "Notre approche",
      secondaryButton: "Rencontrer l'équipe",
      stats: [
        { icon: Award, value: "1:8", label: "Ratio prof/élève" },
        { icon: Users, value: "24/7", label: "Support" },
        { icon: Target, value: "100%", label: "Suivi personnalisé" }
      ],
      accent: "from-blue-600 to-teal-600"
    }
  ], []);

  // Optimized slide navigation
  const nextSlide = useCallback(() => {
    setCurrentSlide(prev => (prev + 1) % slides.length);
    setProgress(0);
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide(prev => (prev - 1 + slides.length) % slides.length);
    setProgress(0);
  }, [slides.length]);

  const goToSlide = useCallback((index) => {
    setCurrentSlide(index);
    setProgress(0);
  }, []);

  const togglePlayPause = useCallback(() => {
    setIsPlaying(prev => !prev);
  }, []);

  // Mouse parallax effect
  const handleMouseMove = useCallback((e) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    setMousePosition({
      x: (mouseX - centerX) / centerX,
      y: (mouseY - centerY) / centerY
    });
  }, []);

  // Auto-advance with progress tracking
  useEffect(() => {
    if (!isPlaying) return;

    const progressTimer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          nextSlide();
          return 0;
        }
        return prev + (100 / 60); // 6 seconds total
      });
    }, 100);

    return () => clearInterval(progressTimer);
  }, [isPlaying, nextSlide]);

  // Loading simulation
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e) => {
      switch (e.key) {
        case 'ArrowLeft':
          prevSlide();
          break;
        case 'ArrowRight':
          nextSlide();
          break;
        case ' ':
          e.preventDefault();
          togglePlayPause();
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [nextSlide, prevSlide, togglePlayPause]);

  if (isLoading) {
    return (
      <div className="h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-white/20 border-t-white rounded-full animate-spin mb-4 mx-auto"></div>
          <p className="text-white/80 text-lg font-medium">Chargement de l'expérience</p>
        </div>
      </div>
    );
  }

  return (
    <section 
      ref={containerRef}
      className="relative h-screen overflow-hidden bg-gradient-to-br from-blue-900 to-indigo-900"
      onMouseMove={handleMouseMove}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_70%)]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_48%,rgba(255,255,255,0.05)_49%,rgba(255,255,255,0.05)_51%,transparent_52%)] bg-[length:20px_20px]"></div>
      </div>

      {/* Slides Container */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => {
          const isActive = index === currentSlide;
          const isPrev = index === (currentSlide - 1 + slides.length) % slides.length;
          const isNext = index === (currentSlide + 1) % slides.length;
          
          return (
            <div
              key={slide.id}
              className={`
                absolute inset-0 transition-all duration-1000 ease-out
                ${isActive ? 'translate-x-0 scale-100 opacity-100 z-20' : ''}
                ${isPrev ? '-translate-x-full scale-95 opacity-60 z-10' : ''}
                ${isNext ? 'translate-x-full scale-95 opacity-60 z-10' : ''}
                ${!isActive && !isPrev && !isNext ? 'translate-x-full scale-90 opacity-0 z-0' : ''}
              `}
            >
              {/* Dynamic Background with Light Smoke Effect */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 ease-out"
                style={{ 
                  backgroundImage: `url(${slide.image})`,
                  transform: isActive ? `scale(1.1) translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)` : 'scale(1.05)',
                  filter: 'brightness(0.85) contrast(1.05) saturate(1.1)'
                }}
              >
                {/* Light Professional Smoke Overlay System */}
                <div className="absolute inset-0 bg-gradient-to-r from-white/25 via-gray-100/20 to-white/25"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-gray-200/40 via-white/15 to-gray-100/30"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-slate-100/20 to-indigo-50/25"></div>
                
                {/* Sophisticated Light Smoke Effect */}
                <div className="absolute inset-0 opacity-60">
                  <div className="absolute inset-0 bg-gradient-radial from-transparent via-white/25 to-gray-200/40"></div>
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-slate-50/40 via-transparent to-gray-50/35 mix-blend-overlay"></div>
                  <div className="absolute bottom-0 left-0 w-full h-2/3 bg-gradient-to-t from-white/50 via-gray-100/25 to-transparent"></div>
                </div>
                
                {/* Brand Color Accent */}
                <div className={`absolute inset-0 bg-gradient-to-r ${slide.accent} opacity-25 mix-blend-multiply`}></div>
              </div>

              {/* Floating Elements */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className={`absolute w-2 h-2 bg-white/20 rounded-full animate-pulse transition-all duration-1000 ${
                      isActive ? 'opacity-100' : 'opacity-0'
                    }`}
                    style={{
                      left: `${20 + i * 15}%`,
                      top: `${30 + Math.sin(i) * 20}%`,
                      animationDelay: `${i * 0.5}s`,
                      transform: isActive ? `translate(${mousePosition.x * (i + 1) * 5}px, ${mousePosition.y * (i + 1) * 5}px)` : 'translate(0, 0)'
                    }}
                  />
                ))}
              </div>

              {/* Main Content */}
              <div className="relative z-30 h-full flex items-center">
                <div className="container mx-auto px-6 lg:px-8">
                  <div className="grid lg:grid-cols-2 gap-12 items-center">
                    
                    {/* Text Content */}
                    <div className="space-y-8">
                      {/* Subtitle with Animation */}
                      <div className={`transform transition-all duration-1000 delay-300 ${
                        isActive ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                      }`}>
                        <div className="inline-flex items-center space-x-2 bg-gray-900/80 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-700/50">
                          <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                          <span className="text-white font-semibold text-sm uppercase tracking-wider">
                            {slide.subtitle}
                          </span>
                        </div>
                      </div>

                      {/* Main Title */}
                      <h1 className={`text-4xl lg:text-6xl xl:text-7xl font-black text-gray-900 leading-tight transform transition-all duration-1000 delay-500 drop-shadow-lg ${
                        isActive ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
                      }`}>
                        {slide.title.split(' ').map((word, wordIndex) => (
                          <span 
                            key={wordIndex}
                            className="inline-block mr-4"
                            style={{ 
                              animationDelay: `${wordIndex * 0.1 + 0.5}s`,
                              transform: isActive ? 'translateY(0)' : 'translateY(20px)'
                            }}
                          >
                            {word}
                          </span>
                        ))}
                      </h1>

                      {/* Description */}
                      <p className={`text-lg lg:text-xl text-gray-800 leading-relaxed max-w-2xl transform transition-all duration-1000 delay-700 drop-shadow-sm ${
                        isActive ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                      }`}>
                        {slide.description}
                      </p>

                      {/* Action Buttons */}
                      <div className={`flex flex-col sm:flex-row gap-4 transform transition-all duration-1000 delay-900 ${
                        isActive ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                      }`}>
                        <button className="group relative overflow-hidden bg-blue-600 text-white hover:bg-blue-700 px-8 py-4 rounded-2xl font-bold text-base transition-all duration-500 shadow-xl shadow-blue-600/30 hover:shadow-2xl hover:shadow-blue-600/50 transform hover:-translate-y-1">
                          <div className={`absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
                          <span className="relative z-10">{slide.primaryButton}</span>
                        </button>
                        
                        <button className="group relative border-2 border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white px-8 py-4 rounded-2xl font-bold text-base transition-all duration-500 backdrop-blur-sm hover:shadow-lg transform hover:-translate-y-1 bg-white/80">
                          <span className="relative z-10 flex items-center space-x-2">
                            <span>{slide.secondaryButton}</span>
                            <div className="w-2 h-2 bg-current rounded-full group-hover:animate-pulse"></div>
                          </span>
                        </button>
                      </div>
                    </div>

                    {/* Stats Cards */}
                    <div className={`lg:justify-self-end transform transition-all duration-1000 delay-1100 ${
                      isActive ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
                    }`}>
                      <div className="grid gap-4">
                        {slide.stats.map((stat, statIndex) => (
                          <div 
                            key={statIndex}
                            className="group bg-white/80 backdrop-blur-lg border border-gray-200/50 rounded-2xl p-6 hover:bg-white/90 transition-all duration-500 hover:scale-105 shadow-lg"
                            style={{ animationDelay: `${statIndex * 0.2 + 1.1}s` }}
                          >
                            <div className="flex items-center space-x-4">
                              <div className={`p-3 rounded-xl bg-gradient-to-br ${slide.accent} shadow-lg`}>
                                <stat.icon className="w-6 h-6 text-white" />
                              </div>
                              <div>
                                <div className="text-2xl font-black text-gray-800 group-hover:scale-110 transition-transform duration-300">
                                  {stat.value}
                                </div>
                                <div className="text-gray-600 font-medium text-sm">
                                  {stat.label}
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Enhanced Navigation Controls */}
      <div className="absolute inset-x-0 top-1/2 flex justify-between items-center px-6 lg:px-8 z-40 pointer-events-none">
        <button
          onClick={prevSlide}
          className="group pointer-events-auto bg-gray-900/80 hover:bg-gray-900/90 backdrop-blur-lg text-white p-4 rounded-2xl transition-all duration-500 border border-gray-700/50 hover:border-gray-600/60 hover:scale-110 hover:-translate-y-1 shadow-xl"
        >
          <ChevronLeft className="h-6 w-6 group-hover:-translate-x-1 transition-transform duration-300" />
        </button>
        
        <button
          onClick={nextSlide}
          className="group pointer-events-auto bg-gray-900/80 hover:bg-gray-900/90 backdrop-blur-lg text-white p-4 rounded-2xl transition-all duration-500 border border-gray-700/50 hover:border-gray-600/60 hover:scale-110 hover:-translate-y-1 shadow-xl"
        >
          <ChevronRight className="h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
        </button>
      </div>

      {/* Progress Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-40">
        <div className="flex items-center space-x-4 bg-gray-900/80 backdrop-blur-lg rounded-2xl p-4 border border-gray-700/50">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className="group relative"
            >
              <div className={`w-12 h-2 rounded-full transition-all duration-500 ${
                index === currentSlide 
                  ? 'bg-white shadow-lg shadow-white/25' 
                  : 'bg-gray-400/50 hover:bg-gray-300/70'
              }`}>
                {index === currentSlide && (
                  <div 
                    className="h-full bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full transition-all duration-100 ease-linear"
                    style={{ width: `${progress}%` }}
                  />
                )}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Play/Pause Control */}
      <div className="absolute bottom-8 right-8 z-40">
        <button 
          onClick={togglePlayPause}
          className="group bg-gray-900/80 hover:bg-gray-900/90 backdrop-blur-lg text-white p-4 rounded-2xl transition-all duration-500 border border-gray-700/50 hover:border-gray-600/60 hover:scale-110 shadow-xl"
        >
          {isPlaying ? 
            <Pause className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" /> : 
            <Play className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
          }
        </button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-40 animate-bounce">
        <div className="flex flex-col items-center text-gray-800 group cursor-pointer hover:text-gray-900 transition-colors duration-300">
          <div className="text-sm mb-3 font-medium tracking-wider uppercase">Explorer</div>
          <div className="flex flex-col items-center space-y-2">
            <div className="w-px h-8 bg-gradient-to-b from-gray-700/60 to-transparent"></div>
            <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform duration-300" />
          </div>
        </div>
      </div>

      {/* Ambient Light Effect */}
      <div className="absolute inset-0 pointer-events-none z-10">
        <div 
          className="absolute w-96 h-96 bg-blue-400/10 rounded-full blur-3xl transition-all duration-1000"
          style={{
            left: `${50 + mousePosition.x * 10}%`,
            top: `${50 + mousePosition.y * 10}%`,
            transform: 'translate(-50%, -50%)'
          }}
        />
      </div>
    </section>
  );
};

export default HeroCarousel;