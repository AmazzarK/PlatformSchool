import React, { useState } from 'react';
import { 
  Filter, 
  Calendar, 
  Clock, 
  MapPin, 
  Users, 
  ChevronRight 
} from 'react-feather';

const EventsPage = () => {
  const [activeFilter, setActiveFilter] = useState('tous');

  const events = [
    {
      id: 1,
      title: "Journée Portes Ouvertes",
      description: "Venez découvrir nos installations, rencontrer notre équipe pédagogique et explorer nos programmes éducatifs.",
      date: "15 Mars 2025",
      time: "9h00 - 17h00",
      location: "Campus Principal",
      attendees: "Familles",
      category: "portes-ouvertes",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      featured: true
    },
    {
      id: 2,
      title: "Salon des Sciences",
      description: "Exposition des projets scientifiques de nos élèves avec démonstrations et expériences interactives.",
      date: "22 Mars 2025",
      time: "14h00 - 18h00",
      location: "Laboratoires Scientifiques",
      attendees: "Élèves et Familles",
      category: "exposition",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      featured: false
    },
    {
      id: 3,
      title: "Spectacle de Printemps",
      description: "Représentation théâtrale et musicale préparée par nos élèves sous la direction de nos professeurs d'arts.",
      date: "5 Avril 2025",
      time: "19h30 - 21h30",
      location: "Auditorium",
      attendees: "Communauté Scolaire",
      category: "spectacle",
      image: "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      featured: true
    },
    {
      id: 4,
      title: "Conférence Orientation",
      description: "Rencontre avec des professionnels et des conseillers d'orientation pour guider nos lycéens.",
      date: "12 Avril 2025",
      time: "15h00 - 17h00",
      location: "Salle de Conférence",
      attendees: "Élèves Lycée",
      category: "conference",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      featured: false
    },
    {
      id: 5,
      title: "Tournoi Sportif Inter-Classes",
      description: "Compétition sportive amicale entre toutes les classes pour promouvoir l'esprit d'équipe.",
      date: "20 Avril 2025",
      time: "13h00 - 17h00",
      location: "Complexe Sportif",
      attendees: "Tous les Élèves",
      category: "sport",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      featured: false
    },
    {
      id: 6,
      title: "Fête de l'École",
      description: "Célébration de fin d'année avec stands, animations, et spectacles préparés par toute la communauté.",
      date: "15 Juin 2025",
      time: "10h00 - 18h00",
      location: "Cour d'Honneur",
      attendees: "Toute la Communauté",
      category: "celebration",
      image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      featured: true
    }
  ];

  const filters = [
    { id: 'tous', label: 'Tous les Événements', count: events.length },
    { id: 'portes-ouvertes', label: 'Portes Ouvertes', count: events.filter(e => e.category === 'portes-ouvertes').length },
    { id: 'exposition', label: 'Expositions', count: events.filter(e => e.category === 'exposition').length },
    { id: 'spectacle', label: 'Spectacles', count: events.filter(e => e.category === 'spectacle').length },
    { id: 'conference', label: 'Conférences', count: events.filter(e => e.category === 'conference').length },
    { id: 'sport', label: 'Sports', count: events.filter(e => e.category === 'sport').length },
    { id: 'celebration', label: 'Célébrations', count: events.filter(e => e.category === 'celebration').length }
  ];

  const filteredEvents = activeFilter === 'tous' 
    ? events 
    : events.filter(event => event.category === activeFilter);

  const getCategoryColor = (category) => {
    const colors = {
      'portes-ouvertes': 'bg-blue-600',
      'exposition': 'bg-green-600',
      'spectacle': 'bg-purple-600',
      'conference': 'bg-orange-600',
      'sport': 'bg-red-600',
      'celebration': 'bg-pink-600'
    };
    return colors[category] || 'bg-blue-600';
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Événements
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Événements à <span className="text-blue-600">Venir</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez nos prochains événements et activités scolaires. 
            Rejoignez-nous pour des moments inoubliables en communauté.
          </p>
        </div>

        {/* Filters */}
        <div className="mb-12">
          <div className="flex items-center mb-6">
            <Filter className="h-5 w-5 text-gray-600 mr-2" />
            <span className="text-gray-700 font-semibold">Filtrer par catégorie :</span>
          </div>
          <div className="flex flex-wrap gap-3">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === filter.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-blue-50 hover:text-blue-600'
                }`}
              >
                {filter.label} ({filter.count})
              </button>
            ))}
          </div>
        </div>

        {/* Featured Events */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-800 mb-8">Événements À La Une</h3>
          <div className="grid lg:grid-cols-2 gap-8">
            {filteredEvents.filter(event => event.featured).map((event) => (
              <div key={event.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative">
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className={`absolute top-4 left-4 ${getCategoryColor(event.category)} text-white px-3 py-1 rounded-full text-sm font-semibold`}>
                    {event.category.charAt(0).toUpperCase() + event.category.slice(1).replace('-', ' ')}
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-2xl font-bold text-gray-800 mb-3">{event.title}</h4>
                  <p className="text-gray-600 mb-4 leading-relaxed">{event.description}</p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-gray-600">
                      <Calendar className="h-5 w-5 text-blue-600 mr-3" />
                      <span className="font-semibold">{event.date}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Clock className="h-5 w-5 text-blue-600 mr-3" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <MapPin className="h-5 w-5 text-blue-600 mr-3" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Users className="h-5 w-5 text-blue-600 mr-3" />
                      <span>{event.attendees}</span>
                    </div>
                  </div>

                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors flex items-center justify-center">
                    S'inscrire à l'événement
                    <ChevronRight className="h-5 w-5 ml-2" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* All Events */}
        <div>
          <h3 className="text-2xl font-bold text-gray-800 mb-8">Tous les Événements</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.filter(event => !event.featured).map((event) => (
              <div key={event.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group">
                <div className="relative">
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className={`absolute top-3 right-3 ${getCategoryColor(event.category)} text-white px-2 py-1 rounded-full text-xs font-semibold`}>
                    {event.date.split(' ')[0]} {event.date.split(' ')[1]}
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                    {event.title}
                  </h4>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {event.description.substring(0, 100)}...
                  </p>
                  
                  <div className="space-y-2 mb-4 text-sm">
                    <div className="flex items-center text-gray-600">
                      <Clock className="h-4 w-4 text-blue-600 mr-2" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <MapPin className="h-4 w-4 text-blue-600 mr-2" />
                      <span>{event.location}</span>
                    </div>
                  </div>

                  <button className="w-full border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white py-2 rounded-lg font-semibold transition-all duration-300 text-sm">
                    Plus d'infos
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">Ne Manquez Aucun Événement</h3>
            <p className="text-blue-100 mb-8 text-lg max-w-2xl mx-auto">
              Inscrivez-vous à notre newsletter pour être informé en avant-première 
              de tous nos événements et activités scolaires.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Votre adresse email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
              <button className="bg-white text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg font-semibold transition-colors">
                S'inscrire
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsPage;