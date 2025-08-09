import React, { useState } from 'react';
import { CheckCircle, Users, Clock, BookOpen, ChevronRight, GraduationCap } from 'lucide-react';

const Programs = () => {
  const [activeProgram, setActiveProgram] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const programs = [
    {
      id: 1,
      level: "PS-GS",
      title: "Maternelle",
      subtitle: "Premiers Apprentissages",
      description: "Éveil et développement harmonieux de l'enfant à travers le jeu, la découverte et les premières acquisitions. Notre approche bienveillante favorise l'épanouissement de chaque enfant dans un environnement sécurisant.",
      age: "3-6 ans",
      students: "20 élèves max",
      duration: "3 années",
      image: "https://images.unsplash.com/photo-1576267423445-b2e0074d68a4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      features: [
        "Pédagogie par le jeu",
        "Développement de la motricité",
        "Éveil artistique et musical",
        "Apprentissage de la vie en groupe",
        "Initiation à la lecture et l'écriture",
        "Découverte des nombres"
      ],
      subjects: [
        "Langage Oral et Écrit",
        "Mathématiques Ludiques",
        "Explorer le Monde",
        "Arts Visuels",
        "Éducation Musicale",
        "Activité Physique"
      ],
      gradient: "bg-gradient-to-br from-blue-50 via-blue-100 to-indigo-100",
      accentColor: "bg-blue-500"
    },
    {
      id: 2,
      level: "1-6",
      title: "École Primaire",
      subtitle: "Fondations Solides",
      description: "Fondations solides en français, mathématiques, sciences et développement de la créativité et de l'autonomie. Nous cultivons la curiosité naturelle de l'enfant tout en structurant ses apprentissages fondamentaux.",
      age: "6-11 ans",
      students: "25 élèves max",
      duration: "5 années",
      image: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      features: [
        "Classes à effectif réduit",
        "Apprentissage ludique et interactif",
        "Éveil artistique et sportif",
        "Accompagnement personnalisé",
        "Initiation aux langues étrangères",
        "Développement de l'autonomie"
      ],
      subjects: [
        "Français et Littérature",
        "Mathématiques",
        "Sciences et Découverte",
        "Arabe-éducation islamique",
        "Anglais et théâtre",
        "Éducation Physique"
      ],
      gradient: "bg-gradient-to-br from-blue-100 via-blue-200 to-indigo-200",
      accentColor: "bg-blue-600"
    },
    {
      id: 3,
      level: "7-9",
      title: "Collège",
      subtitle: "Approfondissement",
      description: "Approfondissement des connaissances et préparation à l'orientation avec un suivi individualisé de chaque élève. Cette étape cruciale développe l'esprit critique et prépare aux défis du lycée.",
      age: "11-15 ans",
      students: "28 élèves max",
      duration: "4 années",
      image: "https://images.unsplash.com/photo-1522202176999-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      features: [
        "Programmes enrichis",
        "Laboratoires scientifiques",
        "Langues étrangères renforcées",
        "Projets interdisciplinaires",
        "Orientation personnalisée",
        "Activités extrascolaires"
      ],
      subjects: [
        "Français et Littérature",
        "Mathématiques Avancées",
        "Sciences Physiques",
        "Sciences de la Vie",
        "Langues Vivantes",
        "Technologie"
      ],
      gradient: "bg-gradient-to-br from-blue-200 via-blue-300 to-indigo-300",
      accentColor: "bg-blue-700"
    },
    {
      id: 4,
      level: "10-12",
      title: "Lycée",
      subtitle: "Excellence et Préparation",
      description: "Préparation d'excellence au baccalauréat et aux études supérieures avec spécialisations et orientation personnalisée. Nous formons les leaders de demain avec rigueur académique et ouverture internationale.",
      age: "15-18 ans",
      students: "30 élèves max",
      duration: "3 années",
      image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      features: [
        "Filières générales et technologiques",
        "Préparation aux concours",
        "Partenariats universitaires",
        "Orientation post-bac",
        "Stages en entreprise",
        "Projets de recherche"
      ],
      subjects: [
        "Spécialisations Scientifiques",
        "Littérature et Philosophie",
        "Sciences Économiques",
        "Langues et Cultures",
        "Arts et Créativité",
        "Préparation Supérieure"
      ],
      gradient: "bg-gradient-to-br from-blue-300 via-blue-400 to-indigo-400",
      accentColor: "bg-blue-800"
    }
  ];

  const handleProgramChange = (index) => {
    if (index === activeProgram) return;
    
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveProgram(index);
      setIsTransitioning(false);
    }, 150);
  };

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 via-blue-50/30 to-indigo-50/20">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Enhanced Header Section - Matching "À propos de nous" style */}
        <div className="text-center mb-16 relative">
          <h2 className="text-4xl lg:text-6xl xl:text-7xl font-black mb-6 relative">
            <span className="bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 bg-clip-text text-transparent">
              Parcours Éducatifs
            </span>
            <div className="absolute -inset-2 bg-gradient-to-r from-blue-100/20 to-indigo-100/20 blur-2xl -z-10 rounded-2xl"></div>
          </h2>
          
          <div className="relative mb-8">
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto rounded-full"></div>
            <div className="absolute inset-0 w-24 h-1 bg-gradient-to-r from-blue-400 to-indigo-500 mx-auto rounded-full blur-sm opacity-60"></div>
          </div>
          
          <p className="text-gray-600 max-w-4xl mx-auto text-lg lg:text-xl leading-relaxed font-medium">
            De la maternelle au lycée, nous proposons un parcours éducatif complet 
            adapté à chaque étape du développement de votre enfant avec excellence et bienveillance.
          </p>
        </div>

        {/* Enhanced Program Tabs */}
        <div className="flex justify-center mb-12">
          <div className="w-full max-w-5xl bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-2">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
              {programs.map((program, index) => (
                <button
                  key={program.id}
                  onClick={() => handleProgramChange(index)}
                  className={`group relative px-6 py-4 rounded-xl text-base font-semibold transition-all duration-300 overflow-hidden ${
                    activeProgram === index
                      ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg transform scale-[1.02]'
                      : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600 hover:shadow-md'
                  }`}
                >
                  <div className="relative z-10 flex flex-col items-center">
                    <span className="text-xs font-bold opacity-75 mb-1">{program.level}</span>
                    <span>{program.title}</span>
                  </div>
                  {activeProgram === index && (
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 rounded-xl"></div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Enhanced Program Content */}
        <div className="w-full relative">
          {programs.map((program, index) => (
            <div
              key={program.id}
              className={`transition-all duration-500 ${
                activeProgram === index 
                  ? `opacity-100 transform translate-y-0 ${isTransitioning ? 'scale-[0.98]' : 'scale-100'}` 
                  : 'opacity-0 absolute inset-0 transform translate-y-4 pointer-events-none'
              }`}
            >
              <div className={`${program.gradient} rounded-3xl shadow-2xl overflow-hidden border border-white/20 backdrop-blur-sm`}>
                <div className="p-8 lg:p-12">
                  <div className="grid lg:grid-cols-2 gap-12">
                    {/* Enhanced Left Column */}
                    <div className="space-y-8">
                      {/* Program Header */}
                      <div className="flex items-start gap-6">
                        <div className={`${program.accentColor} text-white rounded-2xl w-20 h-20 flex items-center justify-center text-xl font-bold shrink-0 shadow-lg transform rotate-3 hover:rotate-0 transition-transform duration-300`}>
                          {program.level}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2 leading-tight">{program.title}</h3>
                          <p className="text-blue-700 text-xl font-semibold flex items-center">
                            {program.subtitle}
                            <ChevronRight className="h-5 w-5 ml-2" />
                          </p>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-gray-700 text-lg leading-relaxed font-light">{program.description}</p>

                      {/* Stats Cards */}
                      <div className="grid grid-cols-3 gap-4">
                        {[
                          { icon: Users, label: program.students, sublabel: "par classe" },
                          { icon: Clock, label: program.age, sublabel: "âge" },
                          { icon: BookOpen, label: program.duration, sublabel: "durée" }
                        ].map((stat, idx) => (
                          <div key={idx} className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105 border border-white/50">
                            <stat.icon className="h-7 w-7 text-blue-600 mx-auto mb-3" />
                            <div className="font-bold text-gray-900">{stat.label}</div>
                            <div className="text-xs text-gray-500 font-medium uppercase tracking-wide">{stat.sublabel}</div>
                          </div>
                        ))}
                      </div>

                      {/* Features Grid */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {program.features.map((feature, idx) => (
                          <div key={idx} className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 flex items-start shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:translate-x-1 border border-white/50 group">
                            <CheckCircle className="h-6 w-6 text-blue-600 mr-3 mt-0.5 flex-shrink-0 group-hover:text-blue-700 transition-colors" />
                            <span className="text-sm font-medium text-gray-700 leading-relaxed">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Enhanced Right Column */}
                    <div className="space-y-8">
                      {/* Image */}
                      <div className="relative rounded-3xl overflow-hidden h-80 shadow-2xl group">
                        <img 
                          src={program.image} 
                          alt={program.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                        <div className="absolute bottom-4 left-4 right-4">
                          <div className="bg-white/90 backdrop-blur-sm rounded-xl p-3 shadow-lg">
                            <div className="text-sm font-semibold text-gray-900">{program.title}</div>
                            <div className="text-xs text-gray-600">{program.subtitle}</div>
                          </div>
                        </div>
                      </div>

                      {/* Subjects */}
                      <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/50">
                        <h4 className="font-bold text-gray-900 text-xl mb-6 flex items-center">
                          <BookOpen className="h-6 w-6 text-blue-600 mr-3" />
                          Matières Principales
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {program.subjects.map((subject, idx) => (
                            <div 
                              key={idx} 
                              className="bg-gradient-to-r from-blue-100 to-indigo-100 hover:from-blue-200 hover:to-indigo-200 rounded-xl px-4 py-3 text-center text-sm font-semibold text-gray-800 transition-all duration-300 hover:shadow-md hover:transform hover:scale-105 border border-blue-200/50"
                            >
                              {subject}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;