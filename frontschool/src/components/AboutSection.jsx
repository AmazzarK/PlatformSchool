import React, { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import { GraduationCap, Users, Award, BookOpen, Heart, Globe, ArrowRight, CheckCircle } from "lucide-react";

export default function AboutSection() {
  const [visibleCards, setVisibleCards] = useState(new Set());
  const [missionVisible, setMissionVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef(null);
  const missionRef = useRef(null);

  const features = useMemo(() => [
    {
      icon: GraduationCap,
      title: "Excellence Académique",
      description: "Programmes d'études rigoureux adaptés aux standards internationaux avec un suivi personnalisé",
      accent: "from-blue-500 to-indigo-600"
    },
    {
      icon: Users,
      title: "Approche Personnalisée",
      description: "Suivi individualisé pour révéler le potentiel unique de chaque élève dans un environnement bienveillant",
      accent: "from-indigo-500 to-purple-600"
    },
    {
      icon: Award,
      title: "Reconnaissance Internationale",
      description: "École certifiée avec de nombreux prix d'excellence éducative et partenariats prestigieux",
      accent: "from-blue-600 to-teal-600"
    },
    {
      icon: BookOpen,
      title: "Innovation Pédagogique",
      description: "Méthodes d'enseignement révolutionnaires intégrant les dernières technologies éducatives",
      accent: "from-teal-500 to-cyan-600"
    },
    {
      icon: Heart,
      title: "Développement Holistique",
      description: "Environnement chaleureux favorisant l'épanouissement personnel et le bien-être de chaque élève",
      accent: "from-pink-500 to-rose-600"
    },
    {
      icon: Globe,
      title: "Ouverture Internationale",
      description: "Partenariats avec des institutions du monde entier pour élargir les horizons culturels",
      accent: "from-emerald-500 to-green-600"
    }
  ], []);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index);
            if (!isNaN(index)) {
              setTimeout(() => {
                setVisibleCards(prev => new Set([...prev, index]));
              }, index * 150);
            }
            
            if (entry.target === missionRef.current) {
              setMissionVisible(true);
            }
          }
        });
      },
      { threshold: 0.2, rootMargin: '50px' }
    );

    const cards = sectionRef.current?.querySelectorAll('[data-index]');
    cards?.forEach(card => observer.observe(card));
    
    if (missionRef.current) {
      observer.observe(missionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Mouse tracking for parallax effects
  const handleMouseMove = useCallback((e) => {
    if (!sectionRef.current) return;
    
    const rect = sectionRef.current.getBoundingClientRect();
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    setMousePosition({
      x: (mouseX - centerX) / centerX,
      y: (mouseY - centerY) / centerY
    });
  }, []);

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="py-24 bg-gradient-to-br from-gray-50 via-blue-50/30 to-indigo-50/20 relative overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Professional Light Smoke Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-blue-50/60 to-indigo-50/40"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.08),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(99,102,241,0.06),transparent_50%)]"></div>
      </div>

      {/* Animated Light Particles */}
      <div className="absolute inset-0 opacity-40">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/60 rounded-full animate-pulse"
            style={{
              left: `${10 + Math.random() * 80}%`,
              top: `${10 + Math.random() * 80}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
              transform: `translate(${mousePosition.x * (i + 1) * 2}px, ${mousePosition.y * (i + 1) * 2}px)`
            }}
          />
        ))}
      </div>

      {/* Floating Light Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-radial from-blue-200/20 to-transparent rounded-full blur-3xl animate-pulse"
          style={{ transform: `translate(${mousePosition.x * 30}px, ${mousePosition.y * 30}px)` }}
        />
        <div 
          className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-radial from-indigo-200/15 to-transparent rounded-full blur-3xl animate-pulse"
          style={{ 
            transform: `translate(${mousePosition.x * -25}px, ${mousePosition.y * -25}px)`,
            animationDelay: '1s' 
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-20">
        {/* Enhanced Header Section */}
        <div className="text-center mb-20">
          
          <h2 className="text-4xl lg:text-6xl xl:text-7xl font-black mb-8 relative">
            <span className="bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 bg-clip-text text-transparent">
              À propos de nous
            </span>
            <div className="absolute -inset-2 bg-gradient-to-r from-blue-100/20 to-indigo-100/20 blur-2xl -z-10 rounded-2xl"></div>
          </h2>
          
          <div className="relative mb-10">
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto rounded-full"></div>
            <div className="absolute inset-0 w-24 h-1 bg-gradient-to-r from-blue-400 to-indigo-500 mx-auto rounded-full blur-sm opacity-60"></div>
          </div>
          
          <p className="max-w-4xl mx-auto text-lg lg:text-xl text-gray-700 leading-relaxed font-medium">
            Le Groupe Scolaire Marcel Arnaud est dédié à offrir une éducation d'excellence exceptionnelle, 
            centrée sur l'élève, avec des méthodes innovantes et un environnement stimulant 
            qui prépare nos étudiants aux défis de demain.
          </p>
        </div>

        {/* Enhanced Mission Statement */}
        <div 
          ref={missionRef}
          className={`relative mb-20 group transition-all duration-1000 ${
            missionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-blue-50/50 to-indigo-50/40 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-700"></div>
          
          <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 lg:p-12 border border-blue-200/30 shadow-xl group-hover:shadow-2xl group-hover:shadow-blue-500/10 transition-all duration-700">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/40 via-transparent to-indigo-50/30 rounded-3xl"></div>
            
            {/* Corner Accents */}
            <div className="absolute top-6 left-6 w-8 h-8 border-l-2 border-t-2 border-blue-400/40 rounded-tl-xl"></div>
            <div className="absolute top-6 right-6 w-8 h-8 border-r-2 border-t-2 border-blue-400/40 rounded-tr-xl"></div>
            <div className="absolute bottom-6 left-6 w-8 h-8 border-l-2 border-b-2 border-blue-400/40 rounded-bl-xl"></div>
            <div className="absolute bottom-6 right-6 w-8 h-8 border-r-2 border-b-2 border-blue-400/40 rounded-br-xl"></div>
            
            <div className="relative text-center">
              <div className="relative mb-8">
                <h3 className="text-3xl lg:text-4xl font-black bg-gradient-to-r from-gray-800 via-blue-700 to-gray-800 bg-clip-text text-transparent">
                  Notre Mission
                </h3>
                <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-indigo-600 group-hover:w-32 transition-all duration-700"></div>
              </div>
              
              <p className="text-lg lg:text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto font-medium mb-8">
                Nous nous engageons à former des <span className="text-blue-700 font-semibold">citoyens éclairés</span>, 
                <span className="text-indigo-700 font-semibold"> créatifs</span> et 
                <span className="text-blue-700 font-semibold"> responsables</span>, 
                capables de s'adapter et de contribuer positivement à un monde en constante évolution. 
                Notre approche holistique combine excellence académique, développement personnel et 
                ouverture sur le monde.
              </p>

              <div className="flex items-center justify-center space-x-6">
                <div className="flex items-center space-x-2 text-gray-600">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="font-medium">Excellence académique</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="font-medium">Développement personnel</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="font-medium">Ouverture internationale</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Features Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const isVisible = visibleCards.has(index);
            const Icon = feature.icon;
            
            return (
              <div
                key={index}
                data-index={index}
                className={`group relative transition-all duration-700 ${
                  isVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Card Background with Light Smoke */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/70 via-blue-50/40 to-indigo-50/30 rounded-2xl blur-sm group-hover:blur-md transition-all duration-500"></div>
                
                <div className="relative bg-white/80 backdrop-blur-lg rounded-2xl p-8 border border-blue-200/30 shadow-lg group-hover:shadow-xl group-hover:shadow-blue-500/10 transform group-hover:-translate-y-2 transition-all duration-500">
                  
                  {/* Floating Icon Container */}
                  <div className="relative mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${feature.accent} rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-500 mx-auto`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    
                    {/* Icon Glow Effect */}
                    <div className={`absolute inset-0 w-16 h-16 bg-gradient-to-br ${feature.accent} rounded-2xl blur-lg opacity-0 group-hover:opacity-40 transition-all duration-500 mx-auto`}></div>
                  </div>

                  {/* Content */}
                  <div className="text-center">
                    <h4 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-blue-700 transition-colors duration-300">
                      {feature.title}
                    </h4>
                    
                    <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                      {feature.description}
                    </p>
                  </div>

                  {/* Hover Arrow */}
                  <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                    <ArrowRight className="w-5 h-5 text-blue-600" />
                  </div>

                  {/* Card Border Glow */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-400/0 via-blue-500/30 to-blue-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Enhanced Call to Action */}
        <div className="text-center mt-20">
          <div className="relative inline-block">
            <button className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white px-10 py-4 rounded-2xl font-bold text-lg transition-all duration-500 shadow-xl shadow-blue-600/25 hover:shadow-2xl hover:shadow-blue-600/40 transform hover:-translate-y-1">
              
              {/* Animated shine effect */}
              <div className="absolute inset-0 -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              
              <span className="relative z-10 flex items-center space-x-2">
                <span>Découvrir notre approche</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Ambient Light Effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div 
          className="absolute w-96 h-96 bg-blue-400/5 rounded-full blur-3xl transition-all duration-1000"
          style={{
            left: `${30 + mousePosition.x * 20}%`,
            top: `${40 + mousePosition.y * 20}%`,
            transform: 'translate(-50%, -50%)'
          }}
        />
        <div 
          className="absolute w-80 h-80 bg-indigo-400/8 rounded-full blur-3xl transition-all duration-1000"
          style={{
            right: `${20 + mousePosition.x * -15}%`,
            bottom: `${30 + mousePosition.y * -15}%`,
            transform: 'translate(50%, 50%)'
          }}
        />
      </div>
    </section>
  );
}