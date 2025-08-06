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
      {/* Light smoke/fog effects base */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50/60 to-blue-100/40"></div>
      
      {/* Advanced light smoke particles */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-radial from-blue-200/40 via-blue-100/20 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-gradient-radial from-blue-300/30 via-blue-200/15 to-transparent rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-gradient-radial from-blue-400/25 via-blue-100/10 to-transparent rounded-full blur-2xl animate-pulse delay-500"></div>
        <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-gradient-radial from-blue-300/35 via-blue-200/15 to-transparent rounded-full blur-3xl animate-pulse delay-1500"></div>
      </div>

      {/* Floating light smoke layers */}
      <div className="absolute inset-0 opacity-15">
        <div className="absolute top-10 left-10 w-full h-32 bg-gradient-to-r from-transparent via-blue-200/30 to-transparent transform rotate-12 blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-0 w-full h-24 bg-gradient-to-l from-transparent via-blue-300/20 to-transparent transform -rotate-6 blur-xl animate-pulse delay-700"></div>
        <div className="absolute top-1/2 left-0 w-full h-20 bg-gradient-to-r from-transparent via-blue-100/25 to-transparent transform rotate-3 blur-2xl animate-pulse delay-300"></div>
      </div>

      {/* Light floating particles */}
      <div className="absolute inset-0">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-40 animate-ping"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          ></div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-20">
        {/* Ethereal Light Header */}
        <div className="text-center mb-20">
          <div className="relative inline-block mb-8">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full blur-lg opacity-20 animate-pulse"></div>

          </div>
          
          <h3 className="text-5xl md:text-7xl font-bold mb-8 relative">
            <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-blue-700 bg-clip-text text-transparent drop-shadow-sm">
              À propos de nous
            </span>
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-200/10 to-blue-300/10 blur-xl -z-10"></div>
          </h3>
          
          <div className="relative mb-10">
            <div className="w-32 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto rounded-full shadow-lg"></div>
            <div className="absolute inset-0 w-32 h-1 bg-gradient-to-r from-blue-300 to-blue-500 mx-auto rounded-full blur-sm"></div>
          </div>
          
          <p className="max-w-5xl mx-auto text-xl md:text-2xl text-gray-700 leading-relaxed font-light">
            L'École Lumière est dédiée à offrir une éducation de qualité exceptionnelle, 
            centrée sur l'élève, avec des méthodes modernes et un environnement stimulant 
            qui prépare nos étudiants aux défis de demain.
          </p>
        </div>

        {/* Animated Light Smoky Mission Statement */}
        <div className="relative mb-20 group">
          {/* Animated background layers */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-blue-50/40 to-blue-100/30 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-700"></div>
          <div className="absolute inset-0 bg-gradient-to-tl from-blue-100/20 via-white/30 to-blue-50/25 rounded-3xl blur-2xl animate-pulse opacity-50"></div>
          
          {/* Floating particles around mission */}
          <div className="absolute inset-0 overflow-hidden rounded-3xl">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-blue-300 rounded-full opacity-30 animate-bounce"
                style={{
                  left: `${10 + Math.random() * 80}%`,
                  top: `${10 + Math.random() * 80}%`,
                  animationDelay: `${Math.random() * 2}s`,
                  animationDuration: `${2 + Math.random() * 2}s`
                }}
              ></div>
            ))}
          </div>

          {/* Animated border glow */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-200/0 via-blue-300/50 to-blue-200/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
          
          <div className="relative bg-white/70 backdrop-blur-2xl rounded-3xl p-10 md:p-16 border border-blue-200/50 shadow-2xl group-hover:shadow-blue-200/60 group-hover:scale-[1.02] transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-transparent to-blue-100/20 rounded-3xl group-hover:from-blue-100/40 group-hover:to-blue-50/30 transition-all duration-500"></div>
            
            {/* Animated corner accents */}
            <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-blue-300/60 rounded-tl-lg group-hover:border-blue-400/80 transition-colors duration-300"></div>
            <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-blue-300/60 rounded-tr-lg group-hover:border-blue-400/80 transition-colors duration-300"></div>
            <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-blue-300/60 rounded-bl-lg group-hover:border-blue-400/80 transition-colors duration-300"></div>
            <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-blue-300/60 rounded-br-lg group-hover:border-blue-400/80 transition-colors duration-300"></div>
            
            <div className="relative text-center">
              {/* Animated title with typewriter effect simulation */}
              <div className="relative mb-6">
                <h4 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-800 via-blue-700 to-gray-800 bg-clip-text text-transparent group-hover:from-blue-600 group-hover:via-blue-800 group-hover:to-blue-600 transition-all duration-500">
                  Notre Mission
                </h4>
                <div className="absolute inset-0 text-3xl md:text-4xl font-bold text-blue-200/20 blur-sm group-hover:blur-md transition-all duration-500">
                  Notre Mission
                </div>
                
                {/* Animated underline */}
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-blue-600 group-hover:w-32 transition-all duration-700 ease-out"></div>
              </div>
              
              {/* Animated text with subtle wave effect */}
              <div className="relative">
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto font-light group-hover:text-gray-800 transition-colors duration-300">
                  <span className="inline-block hover:animate-pulse">Nous</span>{' '}
                  <span className="inline-block hover:animate-pulse" style={{animationDelay: '0.1s'}}>nous</span>{' '}
                  <span className="inline-block hover:animate-pulse" style={{animationDelay: '0.2s'}}>engageons</span>{' '}
                  <span className="inline-block hover:animate-pulse" style={{animationDelay: '0.3s'}}>à</span>{' '}
                  <span className="inline-block hover:animate-pulse" style={{animationDelay: '0.4s'}}>former</span>{' '}
                  <span className="inline-block hover:animate-pulse" style={{animationDelay: '0.5s'}}>des</span>{' '}
                  <span className="inline-block hover:animate-pulse text-blue-600 font-medium" style={{animationDelay: '0.6s'}}>citoyens</span>{' '}
                  <span className="inline-block hover:animate-pulse text-blue-600 font-medium" style={{animationDelay: '0.7s'}}>éclairés</span>,{' '}
                  <span className="inline-block hover:animate-pulse text-blue-600 font-medium" style={{animationDelay: '0.8s'}}>créatifs</span>{' '}
                  et <span className="inline-block hover:animate-pulse text-blue-600 font-medium" style={{animationDelay: '0.9s'}}>responsables</span>, 
                  capables de s'adapter et de contribuer positivement à un monde en constante évolution. 
                  Notre approche holistique combine excellence académique, développement personnel et 
                  ouverture sur le monde.
                </p>
                
                {/* Animated reading progress indicator */}
                <div className="absolute -bottom-4 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-300 to-blue-500 group-hover:w-full transition-all duration-[2s] ease-out delay-300"></div>
              </div>
              
              {/* Floating success indicators */}
              <div className="absolute -top-2 -right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-500">
                <div className="w-4 h-4 bg-blue-400 rounded-full animate-ping"></div>
              </div>
              <div className="absolute -bottom-2 -left-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-700">
                <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>




      </div>
    </section>
  );
}