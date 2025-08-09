import React, { useState, useEffect, useRef } from 'react';
import { BookOpen, MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin, Heart, ArrowRight, Send, Clock, Users, Award, TrendingUp, Globe, Shield, Sparkles, Star, Zap } from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredStat, setHoveredStat] = useState(null);
  const [hoveredSocial, setHoveredSocial] = useState(null);
  const footerRef = useRef(null);
  const currentYear = new Date().getFullYear();

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleSubscribe = async () => {
    if (!email) return;
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubscribed(true);
    setEmail('');
    
    // Reset after success message
    setTimeout(() => setIsSubscribed(false), 3000);
  };

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook", color: "from-blue-600 to-blue-700", hoverColor: "hover:shadow-blue-500/25" },
    { icon: Twitter, href: "#", label: "Twitter", color: "from-sky-500 to-sky-600", hoverColor: "hover:shadow-sky-500/25" },
    { icon: Instagram, href: "#", label: "Instagram", color: "from-purple-500 to-pink-500", hoverColor: "hover:shadow-purple-500/25" },
    { icon: Linkedin, href: "#", label: "LinkedIn", color: "from-blue-700 to-blue-800", hoverColor: "hover:shadow-blue-700/25" }
  ];

  const quickLinks = [
    { name: "Accueil", href: "#accueil" },
    { name: "À Propos", href: "#apropos" },
    { name: "Programmes", href: "#programmes" },
    { name: "Admissions", href: "#admissions" },
    { name: "Actualités", href: "#actualites" },
    { name: "Contact", href: "#contact" }
  ];

  const programs = [
    { name: "École Maternelle", href: "#maternelle" },
    { name: "École Primaire", href: "#primaire" },
    { name: "Collège", href: "#college" },
    { name: "Lycée", href: "#lycee" },
    { name: "Activités Extra", href: "#extrascolaire" },
    { name: "Soutien Scolaire", href: "#soutien" },
    { name: "Langues", href: "#langues" }
  ];

  const stats = [
    { icon: Users, value: "1200+", label: "Élèves Formés", description: "Diplômés avec excellence", color: "from-blue-500 to-cyan-500" },
    { icon: Award, value: "98%", label: "Taux de Réussite", description: "Aux examens officiels", color: "from-green-500 to-emerald-500" },
    { icon: TrendingUp, value: "45", label: "Enseignants", description: "Experts qualifiés", color: "from-purple-500 to-violet-500" },
    { icon: Globe, value: "5+", label: "Années d'Expérience", description: "D'innovation pédagogique", color: "from-orange-500 to-red-500" }
  ];

  const legalLinks = [
    { name: "Confidentialité", href: "#privacy" },
    { name: "Conditions", href: "#terms" },
    { name: "Mentions Légales", href: "#legal" },
    { name: "Cookies", href: "#cookies" }
  ];

  return (
    <footer ref={footerRef} className="relative bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 text-white overflow-hidden">
      {/* Enhanced animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-48 h-48 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/3 left-1/3 w-32 h-32 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-2xl animate-pulse delay-2000"></div>
        <div className="absolute bottom-1/3 right-1/3 w-40 h-40 bg-gradient-to-r from-green-500 to-blue-500 rounded-full blur-2xl animate-pulse delay-3000"></div>
      </div>

      {/* Enhanced floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          >
            {i % 3 === 0 ? (
              <Star className="w-3 h-3 text-yellow-400 fill-current" />
            ) : i % 3 === 1 ? (
              <Sparkles className="w-2 h-2 text-blue-400" />
            ) : (
              <div className="w-1 h-1 bg-white rounded-full" />
            )}
          </div>
        ))}
      </div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        {/* Compact Main Footer Content */}
        <div className={`grid lg:grid-cols-4 gap-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Enhanced Brand Section */}
          <div className="lg:col-span-1 space-y-6">
            <div className="group">
              <div className="flex items-center mb-4 group-hover:scale-105 transition-transform duration-300">
                <div className="relative bg-gradient-to-br from-blue-500 via-blue-600 to-indigo-600 text-white rounded-2xl p-3 mr-3 shadow-2xl">
                  <BookOpen className="h-6 w-6" />
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full animate-ping"></div>
                  <Zap className="absolute -top-1 -right-1 h-3 w-3 text-yellow-300 animate-pulse" />
                </div>
                <div>
                  <h3 className="text-xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                    G.S Marcel Arnaud
                  </h3>
                  <p className="text-blue-300 text-xs font-medium">Excellence Académique</p>
                </div>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed text-sm font-light">
                Une institution éducative d'avant-garde dédiée à l'excellence académique et au 
                développement holistique de chaque élève.
              </p>
              
              {/* Compact Social Links */}
              <div className="space-y-3">
                <h4 className="text-xs font-semibold text-blue-300 uppercase tracking-wider flex items-center">
                  <Globe className="h-3 w-3 mr-1" />
                  Suivez-nous
                </h4>
                <div className="flex space-x-2">
                  {socialLinks.map(({ icon: Icon, href, label, color, hoverColor }, index) => (
                    <a
                      key={label}
                      href={href}
                      aria-label={label}
                      className={`group relative p-2.5 bg-gradient-to-r ${color} rounded-xl transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 shadow-lg ${hoverColor}`}
                      onMouseEnter={() => setHoveredSocial(index)}
                      onMouseLeave={() => setHoveredSocial(null)}
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <Icon className="h-4 w-4 text-white transition-all duration-300 group-hover:scale-110" />
                      {hoveredSocial === index && (
                        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 animate-fadeIn">
                          {label}
                        </div>
                      )}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Compact Quick Links */}
          <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h4 className="text-lg font-bold mb-6 text-blue-300 flex items-center">
              <div className="w-1.5 h-6 bg-gradient-to-b from-blue-400 to-indigo-500 rounded-full mr-2"></div>
              Liens Rapides
            </h4>
            <div className="space-y-2">
              {quickLinks.map((link, index) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="group flex items-center text-gray-300 hover:text-white transition-all duration-300 py-2 px-3 rounded-lg hover:bg-white/5 hover:translate-x-1 backdrop-blur-sm text-sm"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <span className="font-medium">{link.name}</span>
                  <ArrowRight className="h-3 w-3 ml-auto text-blue-400 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all duration-300" />
                </a>
              ))}
            </div>
          </div>

          {/* Compact Programs */}
          <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h4 className="text-lg font-bold mb-6 text-blue-300 flex items-center">
              <div className="w-1.5 h-6 bg-gradient-to-b from-indigo-400 to-purple-500 rounded-full mr-2"></div>
              Programmes
            </h4>
            <div className="space-y-2">
              {programs.map((program, index) => (
                <a
                  key={program.name}
                  href={program.href}
                  className="group flex items-center text-gray-300 hover:text-white transition-all duration-300 py-2 px-3 rounded-lg hover:bg-white/5 hover:translate-x-1 backdrop-blur-sm text-sm"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <span className="font-medium">{program.name}</span>
                  <ArrowRight className="h-3 w-3 ml-auto text-indigo-400 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all duration-300" />
                </a>
              ))}
            </div>
          </div>

          {/* Compact Contact Info */}
          <div className={`transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h4 className="text-lg font-bold mb-6 text-blue-300 flex items-center">
              <div className="w-1.5 h-6 bg-gradient-to-b from-purple-400 to-pink-500 rounded-full mr-2"></div>
              Contact
            </h4>
            
            <div className="space-y-3">
              {/* Address */}
              <div className="group flex items-start p-3 bg-gray-800/20 backdrop-blur-sm rounded-xl border border-gray-700/50 hover:border-blue-500/30 transition-all duration-300">
                <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg p-1.5 mr-3 flex-shrink-0">
                  <MapPin className="h-4 w-4 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-white text-sm mb-1">Adresse</p>
                  <div className="text-gray-300 text-xs">
                    <p>Bd el Fouarat, hay mohammadi</p>
                    <p>20500 Casablanca, Maroc</p>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="group flex items-start p-3 bg-gray-800/20 backdrop-blur-sm rounded-xl border border-gray-700/50 hover:border-green-500/30 transition-all duration-300">
                <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg p-1.5 mr-3 flex-shrink-0">
                  <Phone className="h-4 w-4 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-white text-sm mb-1">Téléphone</p>
                  <a href="tel:+212612345678" className="text-gray-300 hover:text-white transition-colors text-xs">
                    +212 6 12 34 56 78
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="group flex items-start p-3 bg-gray-800/20 backdrop-blur-sm rounded-xl border border-gray-700/50 hover:border-purple-500/30 transition-all duration-300">
                <div className="bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg p-1.5 mr-3 flex-shrink-0">
                  <Mail className="h-4 w-4 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-white text-sm mb-1">Email</p>
                  <a href="mailto:contact@marcelarnaud.ma" className="text-gray-300 hover:text-white transition-colors text-xs break-all">
                    contact@marcelarnaud.ma
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="group flex items-start p-3 bg-gray-800/20 backdrop-blur-sm rounded-xl border border-gray-700/50 hover:border-orange-500/30 transition-all duration-300">
                <div className="bg-gradient-to-br from-orange-500 to-red-600 rounded-lg p-1.5 mr-3 flex-shrink-0">
                  <Clock className="h-4 w-4 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-white text-sm mb-1">Horaires</p>
                  <div className="text-gray-300 text-xs">
                    <p>Lun-Ven: 8h00-17h00</p>
                    <p>Sam: 9h00-12h00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Compact Newsletter Section */}
        <div className={`mt-12 transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="relative bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800 rounded-2xl p-8 overflow-hidden shadow-2xl border border-blue-500/20">
            {/* Animated background */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute -top-2 -right-2 w-24 h-24 bg-white rounded-full blur-xl animate-pulse"></div>
              <div className="absolute -bottom-2 -left-2 w-32 h-32 bg-indigo-300 rounded-full blur-xl animate-pulse delay-1000"></div>
            </div>
            
            <div className="relative z-10 text-center max-w-3xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                Restez <span className="text-yellow-300">Informé</span>
              </h3>
              
              <p className="text-blue-100 mb-6 text-sm md:text-base leading-relaxed max-w-xl mx-auto">
                Inscrivez-vous à notre newsletter pour recevoir les dernières actualités et événements.
              </p>
              
              {isSubscribed ? (
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 max-w-sm mx-auto border border-white/30">
                  <div className="flex items-center justify-center text-green-300 mb-1">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-2">
                      <ArrowRight className="h-3 w-3 text-white" />
                    </div>
                    <span className="font-semibold text-sm">Inscription réussie !</span>
                  </div>
                  <p className="text-blue-100 text-xs">Merci de votre confiance.</p>
                </div>
              ) : (
                <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
                  <div className="relative flex-1">
                    <input 
                      type="email" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="votre.email@exemple.com"
                      className="w-full px-4 py-3 rounded-xl bg-white/90 backdrop-blur-sm text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-3 focus:ring-white/30 border-2 border-transparent focus:border-white/50 transition-all duration-300 text-sm"
                    />
                  </div>
                  <button 
                    onClick={handleSubscribe}
                    disabled={!email}
                    className="group bg-white hover:bg-gray-100 text-blue-600 hover:text-blue-700 px-6 py-3 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 text-sm"
                  >
                    <span className="flex items-center">
                      S'inscrire
                      <Send className="h-3 w-3 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Compact Stats Section */}
        <div className={`mt-12 transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-2">Notre Impact</h3>
            <p className="text-gray-400 text-sm">Des chiffres qui parlent de notre excellence</p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="group relative bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm rounded-xl p-4 text-center border border-gray-700/50 hover:border-blue-500/30 transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 cursor-pointer"
                  onMouseEnter={() => setHoveredStat(index)}
                  onMouseLeave={() => setHoveredStat(null)}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className={`bg-gradient-to-r ${stat.color} rounded-lg w-12 h-12 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  
                  <div className="text-2xl md:text-3xl font-bold text-white mb-1 group-hover:text-blue-300 transition-colors duration-300">
                    {stat.value}
                  </div>
                  
                  <div className="text-gray-300 font-semibold mb-2 group-hover:text-white transition-colors duration-300 text-xs">
                    {stat.label}
                  </div>
                  
                  <div className={`text-xs text-gray-400 transition-all duration-300 ${
                    hoveredStat === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-1'
                  }`}>
                    {stat.description}
                  </div>

                  {/* Enhanced hover effect overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 rounded-xl transition-opacity duration-300`}></div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Compact Bottom Section */}
        <div className={`mt-12 pt-8 border-t border-gray-700/50 transition-all duration-1000 delay-1200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            {/* Copyright */}
            <div className="flex flex-col lg:flex-row items-center space-y-2 lg:space-y-0 lg:space-x-3">
              <div className="flex items-center text-gray-400 text-xs">
                <Shield className="h-3 w-3 mr-1 text-blue-400" />
                <span>© {currentYear} G.S Marcel Arnaud. Tous droits réservés.</span>
              </div>
              <div className="flex items-center text-gray-400 text-xs">
                <Heart className="h-3 w-3 text-red-500 mx-1 animate-pulse" />
                <span>Fait avec passion pour l'éducation</span>
              </div>
            </div>
            
            {/* Legal Links */}
            <div className="flex flex-wrap justify-center lg:justify-end gap-4">
              {legalLinks.map((link, index) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-400 hover:text-white text-xs transition-all duration-300 hover:translate-y-0.5 relative group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {link.name}
                  <div className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"></div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(180deg); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-float {
          animation: float 5s ease-in-out infinite;
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-in-out forwards;
        }
      `}</style>
    </footer>
  );
};

export default Footer;