import React, { useState } from 'react';
import { CheckCircle, Users, Clock, BookOpen } from 'lucide-react';

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
      gradient: "from-pink-50 to-pink-100"
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
        "Arabe-education islamique",
        "Anglais et theatre",
        "Éducation Physique"
      ],
      gradient: "from-blue-50 to-blue-100"
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
      gradient: "from-blue-100 to-blue-200"
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
      gradient: "from-blue-200 to-blue-300"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Nos Programmes
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Parcours Éducatifs <span className="text-blue-600">Complets</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            De la maternelle au lycée, nous proposons un parcours éducatif complet 
            adapté à chaque étape du développement de l'enfant.
          </p>
        </div>

        {/* Program Tabs */}
        <div className="flex flex-col lg:flex-row justify-center mb-12">
          <div className="flex flex-col lg:flex-row bg-gray-100 rounded-xl p-2">
            {programs.map((program, index) => (
              <button
                key={program.id}
                onClick={() => setActiveProgram(index)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeProgram === index
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'text-gray-600 hover:text-blue-600 hover:bg-white'
                }`}
              >
                {program.title}
              </button>
            ))}
          </div>
        </div>

        {/* Active Program Content */}
        <div className="max-w-7xl mx-auto">
          {programs.map((program, index) => (
            <div
              key={program.id}
              className={`transition-all duration-500 ${
                activeProgram === index ? 'opacity-100 block' : 'opacity-0 hidden'
              }`}
            >
              <div className={`bg-gradient-to-br ${program.gradient} rounded-2xl p-8 lg:p-12`}>
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  {/* Content Side */}
                  <div>
                    <div className="flex items-center mb-6">
                      <div className="bg-blue-600 text-white rounded-lg w-16 h-16 flex items-center justify-center mr-4">
                        <span className="font-bold text-xl">{program.level}</span>
                      </div>
                      <div>
                        <h3 className="text-3xl lg:text-4xl font-bold text-gray-800">
                          {program.title}
                        </h3>
                        <p className="text-blue-600 font-semibold text-lg">
                          {program.subtitle}
                        </p>
                      </div>
                    </div>

                    <p className="text-gray-700 text-lg mb-8 leading-relaxed">
                      {program.description}
                    </p>

                    {/* Program Stats */}
                    <div className="grid grid-cols-3 gap-4 mb-8">
                      <div className="bg-white rounded-lg p-4 text-center">
                        <Users className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                        <div className="font-semibold text-gray-800">{program.students}</div>
                        <div className="text-sm text-gray-600">par classe</div>
                      </div>
                      <div className="bg-white rounded-lg p-4 text-center">
                        <Clock className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                        <div className="font-semibold text-gray-800">{program.age}</div>
                        <div className="text-sm text-gray-600">âge</div>
                      </div>
                      <div className="bg-white rounded-lg p-4 text-center">
                        <BookOpen className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                        <div className="font-semibold text-gray-800">{program.duration}</div>
                        <div className="text-sm text-gray-600">durée</div>
                      </div>
                    </div>

                    {/* Features List */}
                    <div className="grid md:grid-cols-2 gap-3">
                      {program.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center">
                          <CheckCircle className="h-5 w-5 text-blue-600 mr-3 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Image and Subjects Side */}
                  <div>
                    {/* Program Image */}
                    <div className="rounded-xl overflow-hidden mb-6 shadow-lg">
                      <img 
                        src={program.image} 
                        alt={program.title}
                        className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    {/* Subjects */}
                    <div className="bg-white rounded-xl p-6 shadow-lg">
                      <h4 className="text-xl font-bold text-gray-800 mb-4">
                        Matières Principales
                      </h4>
                      <div className="grid grid-cols-2 gap-3">
                        {program.subjects.map((subject, idx) => (
                          <div 
                            key={idx}
                            className="bg-blue-50 rounded-lg p-3 text-center"
                          >
                            <span className="text-blue-700 font-medium text-sm">
                              {subject}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Call to Action */}
                <div className="text-center mt-12">
                  <div className="bg-white rounded-xl p-8 shadow-lg">
                    <h4 className="text-2xl font-bold text-gray-800 mb-4">
                      Intéressé par le {program.title} ?
                    </h4>
                    <p className="text-gray-600 mb-6">
                      Découvrez en détail notre programme et planifiez une visite de nos installations.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                        Plus d'informations
                      </button>
                      <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300">
                        Planifier une visite
                      </button>
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