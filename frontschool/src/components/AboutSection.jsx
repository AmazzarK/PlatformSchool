import { GraduationCap, Users, Award, BookOpen, Heart, Globe, Sparkles, Star } from "lucide-react";

export default function AboutSection() {
  const features = [
    {
      icon: GraduationCap,
      title: "Excellence Académique",
      description: "Programmes d'études rigoureux adaptés aux standards internationaux"
    },
    {
      icon: Users,
      title: "Approche Personnalisée",
      description: "Suivi individualisé pour révéler le potentiel de chaque élève"
    },
    {
      icon: Award,
      title: "Reconnaissance",
      description: "École certifiée avec de nombreux prix d'excellence éducative"
    },
    {
      icon: BookOpen,
      title: "Innovation Pédagogique",
      description: "Méthodes d'enseignement modernes intégrant les nouvelles technologies"
    },
    {
      icon: Heart,
      title: "Bienveillance",
      description: "Environnement chaleureux favorisant l'épanouissement personnel"
    },
    {
      icon: Globe,
      title: "Ouverture Internationale",
      description: "Partenariats avec des écoles du monde entier pour élargir les horizons"
    }
  ];

  return (
    <section id="about" className="py-24 bg-gray-50 relative overflow-hidden">
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
        {/* Enhanced Section Header */}
        <div className="text-center mb-16">
          <div className="relative inline-block mb-6">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full blur-lg opacity-20 animate-pulse"></div>
            <div className="relative flex items-center justify-center w-16 h-16 bg-gradient-to-br from-white/90 via-blue-50/90 to-blue-100/90 rounded-full backdrop-blur-xl border border-blue-300/40 shadow-2xl">
              <GraduationCap className="w-8 h-8 text-blue-600" />
              <div className="absolute -top-1 -right-1">
                <Sparkles className="w-4 h-4 text-blue-500 animate-spin" />
              </div>
            </div>
          </div>

          <div className="relative inline-block bg-white/80 backdrop-blur-sm text-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-4 border border-blue-200/50 shadow-lg">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 to-blue-100/50 rounded-full blur-sm"></div>
            <span className="relative">Notre École</span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold mb-6 relative">
            <span className="bg-gradient-to-r from-gray-800 via-blue-700 to-gray-800 bg-clip-text text-transparent">
              À propos de 
            </span>
            <span className="bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
              {" "}nous
            </span>
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-200/10 to-blue-300/10 blur-xl -z-10"></div>
          </h2>

          <div className="relative mb-6">
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto rounded-full shadow-lg"></div>
            <div className="absolute inset-0 w-24 h-1 bg-gradient-to-r from-blue-300 to-blue-500 mx-auto rounded-full blur-sm"></div>
          </div>

          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed font-light">
            L'École Lumière est dédiée à offrir une éducation de qualité exceptionnelle, 
            centrée sur l'élève, avec des méthodes modernes et un environnement stimulant 
            qui prépare nos étudiants aux défis de demain.
          </p>
        </div>

        {/* Mission Statement Card */}
        <div className="relative mb-16 group">
          <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-blue-50/40 to-blue-100/30 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-700"></div>
          <div className="absolute inset-0 bg-gradient-to-tl from-blue-100/20 via-white/30 to-blue-50/25 rounded-2xl blur-xl animate-pulse opacity-30"></div>
          
          <div className="relative bg-white/70 backdrop-blur-xl rounded-2xl p-8 border border-blue-200/40 shadow-xl group-hover:shadow-blue-200/60 transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/20 via-transparent to-blue-100/15 rounded-2xl"></div>
            
            <div className="relative text-center">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-gray-800 to-blue-700 bg-clip-text text-transparent mb-4">
                Notre Mission
              </h3>
              
              <p className="text-gray-700 leading-relaxed font-light">
                Nous nous engageons à former des <span className="text-blue-600 font-medium">citoyens éclairés</span>,{' '}
                <span className="text-blue-600 font-medium">créatifs</span> et <span className="text-blue-600 font-medium">responsables</span>, 
                capables de s'adapter et de contribuer positivement à un monde en constante évolution. 
                Notre approche holistique combine excellence académique, développement personnel et 
                ouverture sur le monde.
              </p>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="group/feature relative">
                <div className="absolute inset-0 bg-white/60 rounded-xl blur-sm group-hover/feature:blur-md transition-all duration-300"></div>
                <div className="relative bg-white/90 backdrop-blur-xl rounded-xl p-6 border border-blue-100/50 shadow-lg group-hover/feature:shadow-xl group-hover/feature:scale-105 transition-all duration-300 h-full">
                  <div className="flex items-start">
                    <div className="relative mr-4">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-400/40 to-blue-600/40 rounded-lg blur-lg group-hover/feature:blur-xl transition-all duration-500"></div>
                      <div className="relative bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-lg w-12 h-12 flex items-center justify-center shadow-lg group-hover/feature:scale-110 transition-transform duration-300">
                        <Icon className="w-6 h-6" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 text-lg mb-2">{feature.title}</h4>
                      <p className="text-gray-600 text-sm">{feature.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}