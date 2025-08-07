import React, { useState, useEffect, useRef } from 'react';
import { BookOpen, MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin, Heart, ArrowRight, Send, Clock, Users, Award, TrendingUp, Globe, Shield, Sparkles } from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredStat, setHoveredStat] = useState(null);
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
    { icon: Facebook, href: "#", label: "Facebook", color: "hover:bg-blue-600" },
    { icon: Twitter, href: "#", label: "Twitter", color: "hover:bg-sky-500" },
    { icon: Instagram, href: "#", label: "Instagram", color: "hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500" },
    { icon: Linkedin, href: "#", label: "LinkedIn", color: "hover:bg-blue-700" }
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
    { name: "École maternelle", href: "#primaire" },
    { name: "École Primaire", href: "#primaire" },
    { name: "Collège", href: "#college" },
    { name: "Lycée", href: "#lycee" },
    { name: "Activités Extrascolaires", href: "#extrascolaire" },
    { name: "Soutien Scolaire", href: "#soutien" },
    { name: "Langues Étrangères", href: "#langues" }
  ];

  const stats = [
    { icon: Users, value: "1200+", label: "Élèves Formés", description: "Diplômés avec excellence" },
    { icon: Award, value: "98%", label: "Taux de Réussite", description: "Aux examens officiels" },
    { icon: TrendingUp, value: "45", label: "Enseignants", description: "Experts qualifiés" },
    { icon: Globe, value: "5+", label: "Années d'Expérience", description: "D'innovation pédagogique" }
  ];

  const legalLinks = [
    { name: "Politique de Confidentialité", href: "#privacy" },
    { name: "Conditions d'Utilisation", href: "#terms" },
    { name: "Mentions Légales", href: "#legal" },
    { name: "Politique des Cookies", href: "#cookies" }
  ];

  return (
    <footer ref={footerRef} className="relative bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-40 right-20 w-80 h-80 bg-indigo-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-blue-400 rounded-full opacity-30 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        {/* Main Footer Content */}
        <div className={`grid lg:grid-cols-4 gap-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Enhanced Brand Section */}
          <div className="lg:col-span-1 space-y-8">
            <div className="group">
              <div className="flex items-center mb-6 group-hover:scale-105 transition-transform duration-300">
                <div className="relative bg-gradient-to-br from-blue-500 via-blue-600 to-indigo-600 text-white rounded-2xl p-4 mr-4 shadow-2xl">
                  <BookOpen className="h-8 w-8" />
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full animate-ping"></div>
                  <Sparkles className="absolute -top-2 -right-2 h-4 w-4 text-yellow-300 animate-pulse" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                    G.S Marcel Arnaud
                  </h3>
                  <p className="text-blue-300 text-sm font-medium">Excellence Académique</p>
                </div>
              </div>
              
              <p className="text-gray-300 mb-8 leading-relaxed text-lg font-light">
                Une institution éducative d'avant-garde dédiée à l'excellence académique et au 
                développement holistique de chaque élève depuis plus de 5 ans.
              </p>
              
              {/* Enhanced Social Links */}
              <div className="space-y-4">
                <h4 className="text-sm font-semibold text-blue-300 uppercase tracking-wider flex items-center">
                  <Globe className="h-4 w-4 mr-2" />
                  Suivez-nous
                </h4>
                <div className="flex space-x-3">
                  {socialLinks.map(({ icon: Icon, href, label, color }, index) => (
                    <a
                      key={label}
                      href={href}
                      aria-label={label}
                      className={`group relative p-3 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 hover:border-transparent transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 ${color}`}
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <Icon className="h-5 w-5 text-gray-400 group-hover:text-white transition-colors duration-300" />
                      <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-300"></div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="relative">
              <h4 className="text-xl font-bold mb-8 text-blue-300 flex items-center">
                <div className="w-2 h-8 bg-gradient-to-b from-blue-400 to-indigo-500 rounded-full mr-3"></div>
                Liens Rapides
              </h4>
              <div className="space-y-4">
                {quickLinks.map((link, index) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="group flex items-center text-gray-300 hover:text-white transition-all duration-300 py-2 px-4 rounded-lg hover:bg-white/5 hover:translate-x-2 backdrop-blur-sm"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <ArrowRight className="h-4 w-4 mr-3 text-blue-400 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                    <span className="font-medium">{link.name}</span>
                    <div className="ml-auto w-0 h-0.5 bg-blue-400 group-hover:w-4 transition-all duration-300"></div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Programs */}
          <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="relative">
              <h4 className="text-xl font-bold mb-8 text-blue-300 flex items-center">
                <div className="w-2 h-8 bg-gradient-to-b from-indigo-400 to-purple-500 rounded-full mr-3"></div>
                Nos Programmes
              </h4>
              <div className="space-y-4">
                {programs.map((program, index) => (
                  <a
                    key={program.name}
                    href={program.href}
                    className="group flex items-center text-gray-300 hover:text-white transition-all duration-300 py-2 px-4 rounded-lg hover:bg-white/5 hover:translate-x-2 backdrop-blur-sm"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <ArrowRight className="h-4 w-4 mr-3 text-indigo-400 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                    <span className="font-medium">{program.name}</span>
                    <div className="ml-auto w-0 h-0.5 bg-indigo-400 group-hover:w-4 transition-all duration-300"></div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Enhanced Contact Info */}
          <div className={`transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="relative">
              <h4 className="text-xl font-bold mb-8 text-blue-300 flex items-center">
                <div className="w-2 h-8 bg-gradient-to-b from-purple-400 to-pink-500 rounded-full mr-3"></div>
                Contact
              </h4>
              
              <div className="space-y-6">
                {/* Address */}
                <div className="group flex items-start p-4 bg-gray-800/30 backdrop-blur-sm rounded-xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg p-2 mr-4">
                    <MapPin className="h-5 w-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-white mb-1">Adresse</p>
                    <div className="text-gray-300 text-sm">
                      <p>Bd el Fouarat, hay mohammadi</p>
                      <p>20500 Casablanca, Maroc</p>
                    </div>
                  </div>
                </div>

                {/* Phone */}
                <div className="group flex items-start p-4 bg-gray-800/30 backdrop-blur-sm rounded-xl border border-gray-700 hover:border-green-500/50 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg p-2 mr-4">
                    <Phone className="h-5 w-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-white mb-1">Téléphone</p>
                    <a href="tel:+212612345678" className="text-gray-300 hover:text-white transition-colors text-sm">
                      +212 6 12 34 56 78
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="group flex items-start p-4 bg-gray-800/30 backdrop-blur-sm rounded-xl border border-gray-700 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg p-2 mr-4">
                    <Mail className="h-5 w-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-white mb-1">Email</p>
                    <a href="mailto:contact@marcelarnaud.ma" className="text-gray-300 hover:text-white transition-colors text-sm">
                      contact@marcelarnaud.ma
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="bg-gradient-to-br from-gray-800/50 to-gray-700/50 backdrop-blur-sm rounded-xl p-4 border border-gray-600">
                  <h5 className="font-semibold mb-4 text-blue-300 flex items-center">
                    <Clock className="h-4 w-4 mr-2" />
                    Horaires d'Ouverture
                  </h5>
                  <div className="space-y-2 text-sm">
                    {[
                      { days: "Lun - Ven", hours: "8h00 - 17h00", active: true },
                      { days: "Samedi", hours: "9h00 - 12h00", active: true },
                      { days: "Dimanche", hours: "Fermé", active: false }
                    ].map((schedule, index) => (
                      <div key={index} className="flex justify-between items-center py-2 px-3 bg-gray-700/30 rounded-lg">
                        <span className="text-gray-300 font-medium">{schedule.days}</span>
                        <span className={`font-semibold ${schedule.active ? 'text-green-400' : 'text-gray-500'}`}>
                          {schedule.hours}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Newsletter Section */}
        <div className={`mt-20 transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="relative bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800 rounded-3xl p-12 overflow-hidden shadow-2xl border border-blue-500/20">
            {/* Animated background */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-white rounded-full blur-2xl animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-40 h-40 bg-indigo-300 rounded-full blur-2xl animate-pulse delay-1000"></div>
            </div>
            
            <div className="relative z-10 text-center max-w-4xl mx-auto">

              
              <h3 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Restez <span className="text-yellow-300">Informé</span>
              </h3>
              
              <p className="text-blue-100 mb-8 text-lg leading-relaxed max-w-2xl mx-auto">
                Inscrivez-vous à notre newsletter pour recevoir les dernières actualités, 
                événements et informations importantes de GS Marcel Arnaud.
              </p>
              
              {isSubscribed ? (
                <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 max-w-md mx-auto border border-white/30">
                  <div className="flex items-center justify-center text-green-300 mb-2">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-3">
                      <ArrowRight className="h-4 w-4 text-white" />
                    </div>
                    <span className="font-semibold">Inscription réussie !</span>
                  </div>
                  <p className="text-blue-100 text-sm">Merci de votre confiance.</p>
                </div>
              ) : (
                <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
                  <div className="relative flex-1">
                    <input 
                      type="email" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="votre.email@exemple.com"
                      className="w-full px-6 py-4 rounded-2xl bg-white/90 backdrop-blur-sm text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-white/30 border-2 border-transparent focus:border-white/50 transition-all duration-300"
                    />
                  </div>
                  <button 
                    onClick={handleSubscribe}
                    disabled={!email}
                    className="group bg-white hover:bg-gray-100 text-blue-600 hover:text-blue-700 px-8 py-4 rounded-2xl font-bold transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                  >
                    <span className="flex items-center">
                      S'inscrire
                      <Send className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Enhanced Stats Section */}
        <div className={`mt-20 transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">Notre Impact</h3>
            <p className="text-gray-400 text-lg">Des chiffres qui parlent de notre excellence</p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-6 text-center border border-gray-700 hover:border-blue-500/50 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 cursor-pointer"
                  onMouseEnter={() => setHoveredStat(index)}
                  onMouseLeave={() => setHoveredStat(null)}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  
                  <div className="text-4xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300">
                    {stat.value}
                  </div>
                  
                  <div className="text-gray-300 font-semibold mb-2 group-hover:text-white transition-colors duration-300">
                    {stat.label}
                  </div>
                  
                  <div className={`text-sm text-gray-400 transition-all duration-300 ${
                    hoveredStat === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                  }`}>
                    {stat.description}
                  </div>

                  {/* Hover effect overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-indigo-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Enhanced Bottom Section */}
        <div className={`mt-20 pt-12 border-t border-gray-700 transition-all duration-1000 delay-1200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-8 lg:space-y-0">
            {/* Copyright */}
            <div className="flex flex-col lg:flex-row items-center space-y-2 lg:space-y-0 lg:space-x-4">
              <div className="flex items-center text-gray-400 text-sm">
                <Shield className="h-4 w-4 mr-2 text-blue-400" />
                <span>© {currentYear} G.S Marcel Arnaud. Tous droits réservés.</span>
              </div>
              <div className="flex items-center text-gray-400 text-sm">
                <Heart className="h-4 w-4 text-red-500 mx-2 animate-pulse" />
                <span>Fait avec passion pour l'éducation</span>
              </div>
            </div>
            
            {/* Legal Links */}
            <div className="flex flex-wrap justify-center lg:justify-end gap-6">
              {legalLinks.map((link, index) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-400 hover:text-white text-sm transition-all duration-300 hover:translate-y-1 relative group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {link.name}
                  <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"></div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </footer>
  );
};

export default Footer;