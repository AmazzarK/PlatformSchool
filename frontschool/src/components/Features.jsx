import React from 'react';
import { BookOpen, Users, Star, Award, Globe, Heart } from 'lucide-react';

const Features = () => {
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

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Nos Atouts
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Pourquoi choisir <span className="text-blue-600">MonÉcole</span> ?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Nous offrons un environnement d'apprentissage exceptionnel avec des programmes innovants 
            et un accompagnement personnalisé pour chaque élève.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div 
                key={index}
                className="group bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                {/* Icon */}
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                  <IconComponent className="h-8 w-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
                </div>
                
                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
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
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">
              Prêt à rejoindre notre communauté éducative ?
            </h3>
            <p className="text-gray-600 mb-6 text-lg">
              Découvrez comment MonÉcole peut accompagner votre enfant vers la réussite.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                Programmer une visite
              </button>
              <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300">
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