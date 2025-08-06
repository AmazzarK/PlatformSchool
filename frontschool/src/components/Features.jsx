import React, { useState, useEffect } from 'react';
import { BookOpen, Users, Star, Award, Globe, Heart, Sparkles, ArrowRight, CheckCircle } from 'lucide-react';

const Features = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: BookOpen,
      title: "Excellence Académique",
      description: "Des programmes rigoureux et adaptés qui préparent nos élèves aux défis de demain avec un taux de réussite exceptionnel de 98%.",
      stats: "98% de réussite",
      gradient: "bg-gradient-to-br from-blue-500 via-blue-600 to-indigo-600",
      hoverGradient: "group-hover:from-blue-600 group-hover:via-blue-700 group-hover:to-indigo-700"
    },
    {
      icon: Users,
      title: "Équipe Pédagogique",
      description: "Des enseignants qualifiés et passionnés qui accompagnent chaque élève dans son parcours d'apprentissage personnalisé et bienveillant.",
      stats: "25 élèves/classe",
      gradient: "bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600",
      hoverGradient: "group-hover:from-blue-700 group-hover:via-indigo-700 group-hover:to-purple-700"
    },
    {
      icon: Star,
      title: "Innovation Pédagogique",
      description: "Méthodes d'enseignement modernes intégrant les nouvelles technologies pour un apprentissage interactif et engageant du 21e siècle.",
      stats: "100% numérique",
      gradient: "bg-gradient-to-br from-indigo-500 via-blue-600 to-cyan-600",
      hoverGradient: "group-hover:from-indigo-600 group-hover:via-blue-700 group-hover:to-cyan-700"
    },
    {
      icon: Award,
      title: "Reconnaissance Officielle",
      description: "École certifiée et reconnue par le ministère de l'Éducation avec des accréditations internationales prestigieuses.",
      stats: "Certifiée ISO 9001",
      gradient: "bg-gradient-to-br from-blue-600 via-blue-700 to-slate-700",
      hoverGradient: "group-hover:from-blue-700 group-hover:via-blue-800 group-hover:to-slate-800"
    },
    {
      icon: Globe,
      title: "Ouverture Internationale",
      description: "Programmes d'échange, langues étrangères et partenariats avec des établissements du monde entier pour une vision globale.",
      stats: "12 pays partenaires",
      gradient: "bg-gradient-to-br from-cyan-500 via-blue-600 to-indigo-600",
      hoverGradient: "group-hover:from-cyan-600 group-hover:via-blue-700 group-hover:to-indigo-700"
    },
    {
      icon: Heart,
      title: "Bien-être Étudiant",
      description: "Un environnement bienveillant qui favorise l'épanouissement personnel et le développement des talents de chaque élève.",
      stats: "Suivi personnalisé",
      gradient: "bg-gradient-to-br from-purple-500 via-indigo-600 to-blue-600",
      hoverGradient: "group-hover:from-purple-600 group-hover:via-indigo-700 group-hover:to-blue-700"
    }
  ];

  const handleVisitClick = () => {
    // navigate('/contact', { state: { sujet: "Visite de l'école" } });
    console.log('Navigate to contact with visit subject');
  };

  const handleBrochureClick = () => {
    console.log('Download brochure');
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/30 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200 rounded-full blur-3xl"></div>
        <div className="absolute top-40 right-20 w-48 h-48 bg-indigo-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-1/3 w-40 h-40 bg-cyan-200 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative">
        {/* Enhanced Section Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Icon Badge */}


          {/* Main Title */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-700">Pourquoi choisir </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">notre école</span>
          </h2>

          {/* Animated Divider */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="w-32 h-1 bg-gradient-to-r from-blue-400 via-blue-600 to-indigo-600 rounded-full"></div>
              <div className="absolute inset-0 w-32 h-1 bg-gradient-to-r from-blue-400 via-blue-600 to-indigo-600 rounded-full blur-sm opacity-50"></div>
            </div>
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
            Nous offrons un environnement d'apprentissage exceptionnel avec des programmes innovants 
            et un accompagnement personnalisé pour révéler le potentiel unique de chaque élève.
          </p>
        </div>

        {/* Enhanced Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            const isHovered = hoveredCard === index;
            
            return (
              <div 
                key={index}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`group relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-white/50 shadow-xl hover:shadow-2xl hover:shadow-blue-100/50 transition-all duration-500 h-full transform hover:scale-[1.02] hover:-translate-y-2 ${
                  isVisible ? `opacity-100 translate-y-0 transition-delay-[${index * 100}ms]` : 'opacity-0 translate-y-8'
                }`}
                style={{ 
                  transitionDelay: isVisible ? `${index * 100}ms` : '0ms',
                  animationDelay: `${index * 100}ms`
                }}
              >
                {/* Gradient Background Effect */}
                <div className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-5 transition-opacity duration-500 ${feature.gradient}`}></div>
                
                {/* Stats Badge */}
                <div className="absolute top-6 right-6">
                  <div className="bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold border border-blue-200/50 backdrop-blur-sm">
                    {feature.stats}
                  </div>
                </div>

                {/* Icon Container */}
                <div className="relative mb-8">
                  <div className={`${feature.gradient} ${feature.hoverGradient} text-white rounded-2xl w-16 h-16 flex items-center justify-center shadow-lg transition-all duration-500 group-hover:shadow-2xl group-hover:scale-110`}>
                    <IconComponent className={`h-7 w-7 transition-transform duration-500 ${isHovered ? 'rotate-12 scale-110' : ''}`} />
                  </div>
                  <div className={`absolute inset-0 ${feature.gradient} rounded-2xl blur-md opacity-0 group-hover:opacity-30 transition-opacity duration-500 transform scale-110`}></div>
                </div>
                
                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-700 transition-colors duration-300 leading-tight">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6 group-hover:text-gray-700 transition-colors duration-300">
                    {feature.description}
                  </p>

                  {/* Learn More Link */}
                  <div className="flex items-center text-blue-600 font-semibold text-sm group-hover:text-blue-700 transition-colors duration-300">
                    <span className="opacity-0 group-hover:opacity-100 transition-all duration-300">En savoir plus</span>
                    <ArrowRight className={`h-4 w-4 ml-2 transition-all duration-300 ${isHovered ? 'translate-x-1 opacity-100' : 'opacity-0 -translate-x-2'}`} />
                  </div>
                </div>

                {/* Bottom Gradient Line */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 ${feature.gradient} rounded-b-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              </div>
            );
          })}
        </div>

        {/* Enhanced Call to Action */}
        <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-10 lg:p-12 max-w-5xl mx-auto border border-white/50 shadow-2xl hover:shadow-blue-100/50 transition-all duration-500 overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-indigo-50/50 rounded-3xl"></div>
            
            {/* Content */}
            <div className="relative z-10 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl mb-6 shadow-lg">
                <CheckCircle className="h-8 w-8 text-white" />
              </div>
              
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                Prêt à rejoindre notre 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600"> communauté éducative</span> ?
              </h3>
              
              <p className="text-gray-600 text-lg mb-8 max-w-3xl mx-auto leading-relaxed font-light">
                Découvrez comment notre école peut accompagner votre enfant vers l'excellence 
                et révéler son plein potentiel dans un environnement stimulant.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={handleVisitClick}
                  className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center"
                >
                  <span className="relative z-10 flex items-center">
                    Programmer une visite
                    <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
                
                <button 
                  onClick={handleBrochureClick}
                  className="group border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center"
                >
                  <span className="flex items-center">
                    Télécharger la brochure
                    <BookOpen className="h-5 w-5 ml-2 group-hover:rotate-12 transition-transform duration-300" />
                  </span>
                </button>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-blue-200/30 to-indigo-200/30 rounded-full blur-2xl"></div>
            <div className="absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-br from-indigo-200/30 to-purple-200/30 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;