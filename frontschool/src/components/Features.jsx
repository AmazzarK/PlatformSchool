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
    navigate('/contact', { state: { sujet: "Visite de l'école" } });
  };

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">

          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-gray-800 hover:text-gray-700 transition-colors duration-300">Pourquoi choisir </span>
            <span className="text-blue-600 hover:text-blue-700 transition-colors duration-300">notre école</span>
          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto rounded-full mb-6 hover:w-32 transition-all duration-500"></div>

          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed hover:text-gray-800 transition-colors duration-300">
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
                className="group relative bg-white rounded-xl p-8 border border-gray-200 shadow-md hover:shadow-xl hover:border-blue-200 hover:-translate-y-2 transition-all duration-300 h-full"
              >
                {/* Icon */}
                <div className="relative mb-6 group-hover:[&>div]:scale-110">
                  <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-md transition-transform duration-300">
                    <IconComponent className="h-6 w-6 group-hover:rotate-12 transition-transform duration-500" />
                  </div>
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                  {feature.description}
                </p>

                {/* Hover Effect Border */}
                <div className="mt-6 w-0 h-1 bg-gradient-to-r from-blue-600 to-blue-800 group-hover:w-full transition-all duration-500"></div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 max-w-4xl mx-auto border border-gray-200 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <h3 className="text-2xl font-bold text-gray-800 mb-4 hover:text-blue-600 transition-colors duration-300">
              Prêt à rejoindre notre communauté éducative ?
            </h3>
            <p className="text-gray-600 mb-6 hover:text-gray-800 transition-colors duration-300">
              Découvrez comment notre école peut accompagner votre enfant vers la réussite.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={handleVisitClick}
                className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
              >
                <span className="relative z-10">Programmer une visite</span>
                <span className="absolute inset-0 bg-gradient-to-r from-blue-400/30 to-blue-600/30 opacity-0 hover:opacity-100 transition-opacity duration-300"></span>
              </button>
              <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105">
                Télécharger la brochure
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;