import React from 'react';
import { BookOpen, Users, Star, Award, Globe, Heart, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Features = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: BookOpen,
      title: "Excellence Académique",
      description: "Des programmes rigoureux et adaptés qui préparent nos élèves aux défis de demain avec un taux de réussite exceptionnel.",
      color: "blue"
    },
    {
      icon: Users,
      title: "Équipe Pédagogique",
      description: "Des enseignants qualifiés et passionnés qui accompagnent chaque élève dans son parcours d'apprentissage personnalisé.",
      color: "blue"
    },
    {
      icon: Star,
      title: "Innovation Pédagogique",
      description: "Méthodes d'enseignement modernes intégrant les nouvelles technologies pour un apprentissage interactif et engageant.",
      color: "blue"
    },
    {
      icon: Award,
      title: "Reconnaissance Officielle",
      description: "École certifiée et reconnue par le ministère de l'Éducation avec des accréditations internationales.",
      color: "blue"
    },
    {
      icon: Globe,
      title: "Ouverture Internationale",
      description: "Programmes d'échange, langues étrangères et partenariats avec des établissements du monde entier.",
      color: "blue"
    },
    {
      icon: Heart,
      title: "Bien-être Étudiant",
      description: "Un environnement bienveillant qui favorise l'épanouissement personnel et le développement des talents.",
      color: "blue"
    }
  ];

  const handleVisitClick = () => {
    // Redirect to contact form with pre-filled subject
    navigate('/contact', { state: { sujet: "Visite de l'école" } });
  };

  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Light smoke effects base */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50/60 to-blue-100/40"></div>
      
      {/* Advanced light smoke particles */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-radial from-blue-200/40 via-blue-100/20 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-gradient-radial from-blue-300/30 via-blue-200/15 to-transparent rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-gradient-radial from-blue-400/25 via-blue-100/10 to-transparent rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      {/* Floating light smoke layers */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-full h-32 bg-gradient-to-r from-transparent via-blue-200/30 to-transparent transform rotate-12 blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-0 w-full h-24 bg-gradient-to-l from-transparent via-blue-300/20 to-transparent transform -rotate-6 blur-xl animate-pulse delay-700"></div>
      </div>

      {/* Light floating particles */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-30 animate-ping"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          ></div>
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-20">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="relative inline-block mb-6">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full blur-lg opacity-20 animate-pulse"></div>
            <div className="relative flex items-center justify-center w-16 h-16 bg-gradient-to-br from-white/90 via-blue-50/90 to-blue-100/90 rounded-full backdrop-blur-xl border border-blue-300/40 shadow-2xl">
              <Sparkles className="w-8 h-8 text-blue-600" />
              <div className="absolute -top-1 -right-1">
                <Sparkles className="w-4 h-4 text-blue-500 animate-spin" />
              </div>
            </div>
          </div>

          <div className="relative inline-block bg-white/80 backdrop-blur-sm text-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-4 border border-blue-200/50 shadow-lg">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 to-blue-100/50 rounded-full blur-sm"></div>
            <span className="relative">Nos Atouts</span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold mb-6 relative">
            <span className="bg-gradient-to-r from-gray-800 via-blue-700 to-gray-800 bg-clip-text text-transparent">
              Pourquoi choisir 
            </span>
            <span className="bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
              {" "}notre école
            </span>
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-200/10 to-blue-300/10 blur-xl -z-10"></div>
          </h2>

          <div className="relative mb-6">
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto rounded-full shadow-lg"></div>
            <div className="absolute inset-0 w-24 h-1 bg-gradient-to-r from-blue-300 to-blue-500 mx-auto rounded-full blur-sm"></div>
          </div>

          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed font-light">
            Nous offrons un environnement d'apprentissage exceptionnel avec des programmes innovants 
            et un accompagnement personnalisé pour chaque élève.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div 
                key={index}
                className="group relative"
              >
                <div className="absolute inset-0 bg-white/60 rounded-xl blur-sm group-hover:blur-md transition-all duration-300"></div>
                <div className="relative bg-white/90 backdrop-blur-xl rounded-xl p-8 border border-blue-100/50 shadow-lg group-hover:shadow-xl group-hover:scale-105 transition-all duration-300 h-full">
                  {/* Icon */}
                  <div className="relative mb-6">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-400/40 to-blue-600/40 rounded-full blur-lg group-hover:blur-xl transition-all duration-500"></div>
                    <div className="relative bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="h-6 w-6" />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm group-hover:text-gray-700 transition-colors duration-300">
                    {feature.description}
                  </p>

                  {/* Hover Effect Border */}
                  <div className="mt-6 w-0 h-1 bg-gradient-to-r from-blue-600 to-blue-800 group-hover:w-full transition-all duration-500"></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="relative group">
            <div className="absolute inset-0 bg-white/60 rounded-2xl blur-sm group-hover:blur-md transition-all duration-300"></div>
            <div className="relative bg-white/90 backdrop-blur-xl rounded-2xl p-8 max-w-4xl mx-auto border border-blue-200/40 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Prêt à rejoindre notre communauté éducative ?
              </h3>
              <p className="text-gray-600 mb-6 text-lg font-light">
                Découvrez comment notre école peut accompagner votre enfant vers la réussite.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={handleVisitClick}
                  className="relative bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                >
                  <span className="relative z-10">Programmer une visite</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400/30 to-blue-600/30 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
                <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300">
                  Télécharger la brochure
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;