import React, { useState } from 'react';
import { CheckCircle, Users, Clock, BookOpen, Sparkles } from 'lucide-react';

const Programs = () => {
  const [activeProgram, setActiveProgram] = useState(0);

  const programs = [
    {
      id: 1,
      level: "PS-GS",
      title: "Maternelle",
      subtitle: "Premiers Apprentissages",
      description: "Éveil et développement harmonieux de l'enfant à travers le jeu, la découverte et les premières acquisitions.",
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
      gradient: "bg-gradient-to-br from-pink-50 to-pink-100"
    },
    {
      id: 2,
      level: "1-6",
      title: "École Primaire",
      subtitle: "Fondations Solides",
      description: "Fondations solides en français, mathématiques, sciences et développement de la créativité et de l'autonomie.",
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
      gradient: "bg-gradient-to-br from-blue-50 to-blue-100"
    },
    {
      id: 3,
      level: "7-9",
      title: "Collège",
      subtitle: "Approfondissement",
      description: "Approfondissement des connaissances et préparation à l'orientation avec un suivi individualisé de chaque élève.",
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
      gradient: "bg-gradient-to-br from-blue-100 to-blue-200"
    },
    {
      id: 4,
      level: "10-12",
      title: "Lycée",
      subtitle: "Excellence et Préparation",
      description: "Préparation d'excellence au baccalauréat et aux études supérieures avec spécialisations et orientation personnalisée.",
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
      gradient: "bg-gradient-to-br from-blue-200 to-blue-300"
    }
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-lg mb-4">
            <BookOpen className="w-8 h-8 text-blue-600" />
          </div>
          <h2 className="text-4xl font-bold text-gray-800 mb-2">
            <span className="text-gray-800">Parcours Éducatifs </span>
            <span className="text-blue-600">Complets</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            De la maternelle au lycée, nous proposons un parcours éducatif complet.
          </p>
        </div>

        {/* Compact Program Tabs */}
        <div className="flex justify-center mb-2">
          <div className="inline-flex bg-white rounded-lg shadow-md p-1">
            {programs.map((program, index) => (
              <button
                key={program.id}
                onClick={() => setActiveProgram(index)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeProgram === index
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-600 hover:bg-blue-50'
                }`}
              >
                {program.title}
              </button>
            ))}
          </div>
        </div>

        {/* Active Program Content */}
        <div className="max-w-6xl mx-auto">
          {programs.map((program, index) => (
            <div
              key={program.id}
              className={`transition-all duration-300 ${
                activeProgram === index ? 'opacity-100 block' : 'opacity-0 hidden'
              }`}
            >
              <div className={`${program.gradient} rounded-xl shadow-lg overflow-hidden`}>
                <div className="p-6">
                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Left Column */}
                    <div className="space-y-6">
                      <div className="flex items-start">
                        <div className="bg-blue-600 text-white rounded-lg w-14 h-14 flex items-center justify-center mr-4">
                          <span className="font-bold">{program.level}</span>
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-gray-800">{program.title}</h3>
                          <p className="text-blue-600">{program.subtitle}</p>
                        </div>
                      </div>

                      <p className="text-gray-700">{program.description}</p>

                      <div className="grid grid-cols-3 gap-3">
                        <div className="bg-white/80 rounded-lg p-3 text-center">
                          <Users className="h-6 w-6 text-blue-600 mx-auto mb-1" />
                          <div className="font-bold">{program.students}</div>
                          <div className="text-xs text-gray-500">par classe</div>
                        </div>
                        <div className="bg-white/80 rounded-lg p-3 text-center">
                          <Clock className="h-6 w-6 text-blue-600 mx-auto mb-1" />
                          <div className="font-bold">{program.age}</div>
                          <div className="text-xs text-gray-500">âge</div>
                        </div>
                        <div className="bg-white/80 rounded-lg p-3 text-center">
                          <BookOpen className="h-6 w-6 text-blue-600 mx-auto mb-1" />
                          <div className="font-bold">{program.duration}</div>
                          <div className="text-xs text-gray-500">durée</div>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        {program.features.map((feature, idx) => (
                          <div key={idx} className="bg-white/80 rounded-md p-2 flex items-start">
                            <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Right Column */}
                    <div className="space-y-6">
                      <div className="rounded-lg overflow-hidden h-48">
                        <img 
                          src={program.image} 
                          alt={program.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="bg-white/80 rounded-lg p-4">
                        <h4 className="font-bold text-gray-800 mb-3">Matières Principales</h4>
                        <div className="grid grid-cols-2 gap-2">
                          {program.subjects.map((subject, idx) => (
                            <div key={idx} className="bg-blue-50 rounded-md px-3 py-2 text-center text-sm">
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