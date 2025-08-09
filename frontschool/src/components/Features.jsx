import React, { useState, useMemo, useRef, useCallback, useEffect } from 'react';
import { 
  Filter, 
  Calendar, 
  Clock, 
  MapPin, 
  Users, 
  ChevronRight,
  ChevronLeft,
  ExternalLink,
  Star
} from 'lucide-react';

const EVENTS_DATA = [
  {
    id: 1,
    title: "Journée Portes Ouvertes",
    description: "Découvrez notre établissement et nos programmes",
    date: "15 Mars 2025",
    time: "9h00 - 17h00",
    location: "Campus Principal",
    attendees: "Familles",
    category: "portes-ouvertes",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    capacity: 200,
    registered: 156
  },
  {
    id: 2,
    title: "Salon des Sciences",
    description: "Présentation des projets scientifiques des élèves",
    date: "22 Mars 2025",
    time: "14h00 - 18h00",
    location: "Laboratoires",
    attendees: "Élèves et Familles",
    category: "exposition",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    capacity: 150,
    registered: 89
  },
  {
    id: 3,
    title: "Spectacle de Printemps",
    description: "Représentation théâtrale et musicale des élèves",
    date: "5 Avril 2025",
    time: "19h30 - 21h30",
    location: "Auditorium",
    attendees: "Communauté",
    category: "spectacle",
    image: "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    capacity: 300,
    registered: 245
  },
  {
    id: 4,
    title: "Conférence Orientation",
    description: "Rencontre avec des professionnels pour l'orientation",
    date: "12 Avril 2025",
    time: "15h00 - 17h00",
    location: "Salle de Conférence",
    attendees: "Lycéens",
    category: "conference",
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    capacity: 100,
    registered: 67
  },
  {
    id: 5,
    title: "Tournoi Sportif",
    description: "Compétition sportive inter-classes",
    date: "20 Avril 2025",
    time: "13h00 - 17h00",
    location: "Complexe Sportif",
    attendees: "Élèves",
    category: "sport",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    capacity: 400,
    registered: 312
  },
  {
    id: 6,
    title: "Fête de l'École",
    description: "Célébration de fin d'année",
    date: "15 Juin 2025",
    time: "10h00 - 18h00",
    location: "Cour d'Honneur",
    attendees: "Tous",
    category: "celebration",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    capacity: 500,
    registered: 423
  }
];

const CATEGORY_CONFIG = {
  'portes-ouvertes': { 
    label: 'Portes Ouvertes', 
    color: 'bg-blue-600 hover:bg-blue-700', 
    icon: ExternalLink,
    gradient: 'from-blue-600 to-blue-700'
  },
  'exposition': { 
    label: 'Expositions', 
    color: 'bg-green-600 hover:bg-green-700', 
    icon: Star,
    gradient: 'from-green-600 to-green-700'
  },
  'spectacle': { 
    label: 'Spectacles', 
    color: 'bg-purple-600 hover:bg-purple-700', 
    icon: Star,
    gradient: 'from-purple-600 to-purple-700'
  },
  'conference': { 
    label: 'Conférences', 
    color: 'bg-orange-600 hover:bg-orange-700', 
    icon: Users,
    gradient: 'from-orange-600 to-orange-700'
  },
  'sport': { 
    label: 'Sports', 
    color: 'bg-red-600 hover:bg-red-700', 
    icon: Users,
    gradient: 'from-red-600 to-red-700'
  },
  'celebration': { 
    label: 'Célébrations', 
    color: 'bg-pink-600 hover:bg-pink-700', 
    icon: Star,
    gradient: 'from-pink-600 to-pink-700'
  }
};

const EventCard = React.memo(({ event, index }) => {
  const categoryConfig = CATEGORY_CONFIG[event.category];
  const IconComponent = categoryConfig?.icon || Star;

  return (
    <div 
      className="w-72 flex-shrink-0 bg-white rounded-lg shadow-sm overflow-hidden mx-2 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer border border-gray-100 group"
      style={{
        animationDelay: `${index * 100}ms`
      }}
    >
      <div className="relative aspect-video overflow-hidden">
        <img 
          src={event.image} 
          alt={event.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300" />
        <div className={`absolute top-2 left-2 bg-gradient-to-r ${categoryConfig.gradient} text-white px-2 py-0.5 rounded-full text-xs font-medium flex items-center shadow-md backdrop-blur-sm`}>
          <IconComponent className="h-3 w-3 mr-1" />
          {categoryConfig.label}
        </div>
      </div>
      
      <div className="p-3">
        <h3 className="text-sm font-semibold text-gray-800 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
          {event.title}
        </h3>
        
        <div className="space-y-1 mb-3">
          <div className="flex items-center text-gray-600 text-xs">
            <Calendar className="h-3 w-3 text-blue-500 mr-1.5 flex-shrink-0" />
            <span className="truncate">{event.date}</span>
          </div>
          <div className="flex items-center text-gray-600 text-xs">
            <Clock className="h-3 w-3 text-blue-500 mr-1.5 flex-shrink-0" />
            <span className="truncate">{event.time}</span>
          </div>
          <div className="flex items-center text-gray-600 text-xs">
            <MapPin className="h-3 w-3 text-blue-500 mr-1.5 flex-shrink-0" />
            <span className="truncate">{event.location}</span>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <span className="text-xs text-gray-500 bg-gray-50 px-2 py-1 rounded-full">
            {event.attendees}
          </span>
        </div>
      </div>
    </div>
  );
});

EventCard.displayName = 'EventCard';

const FilterButton = React.memo(({ filter, isActive, onClick, count }) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 rounded-full text-xs font-medium mx-1 transition-all duration-200 border ${
      isActive 
        ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white border-blue-600 shadow-md transform scale-105' 
        : 'bg-white text-gray-600 hover:bg-gray-50 border-gray-200 hover:border-blue-300 hover:text-blue-600'
    }`}
  >
    {filter.label} <span className="ml-1 opacity-75">({count})</span>
  </button>
));

FilterButton.displayName = 'FilterButton';

const ScrollButton = React.memo(({ direction, onClick, disabled }) => (
  <button 
    onClick={onClick}
    disabled={disabled}
    className={`absolute ${direction === 'left' ? 'left-2' : 'right-2'} top-1/2 transform -translate-y-1/2 z-10 bg-white p-2.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 border border-gray-100 group ${
      disabled ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-50 active:scale-95'
    }`}
    aria-label={`Scroll ${direction}`}
  >
    {direction === 'left' ? (
      <ChevronLeft className={`h-5 w-5 text-blue-600 transition-colors ${disabled ? 'text-gray-400' : 'group-hover:text-blue-700'}`} />
    ) : (
      <ChevronRight className={`h-5 w-5 text-blue-600 transition-colors ${disabled ? 'text-gray-400' : 'group-hover:text-blue-700'}`} />
    )}
  </button>
));

ScrollButton.displayName = 'ScrollButton';

const HorizontalEventSlider = () => {
  const [activeFilter, setActiveFilter] = useState('tous');
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const scrollContainerRef = useRef(null);

  const filters = useMemo(() => [
    { id: 'tous', label: 'Tous' },
    ...Object.entries(CATEGORY_CONFIG).map(([id, config]) => ({
      id,
      label: config.label
    }))
  ], []);

  const filteredEvents = useMemo(() => {
    const events = activeFilter === 'tous' 
      ? [...EVENTS_DATA]
      : EVENTS_DATA.filter(e => e.category === activeFilter);
    
    return events.sort((a, b) => new Date(a.date) - new Date(b.date));
  }, [activeFilter]);

  const updateScrollButtons = useCallback(() => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
    }
  }, []);

  const scroll = useCallback((direction) => {
    if (scrollContainerRef.current) {
      const cardWidth = 304; // 288px width + 16px margin
      const scrollAmount = direction === 'left' ? -cardWidth * 2 : cardWidth * 2;
      
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  }, []);

  const handleFilterChange = useCallback((filterId) => {
    setActiveFilter(filterId);
    // Reset scroll position when filter changes
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({ left: 0, behavior: 'smooth' });
    }
  }, []);

  // Update scroll buttons when events change or on scroll
  useEffect(() => {
    updateScrollButtons();
  }, [filteredEvents, updateScrollButtons]);

  useEffect(() => {
    const handleScroll = () => {
      updateScrollButtons();
    };

    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScroll, { passive: true });
      return () => scrollContainer.removeEventListener('scroll', handleScroll);
    }
  }, [updateScrollButtons]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'ArrowLeft') {
        scroll('left');
      } else if (e.key === 'ArrowRight') {
        scroll('right');
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [scroll]);

  return (
    <div className="py-8 bg-gradient-to-br from-gray-50 to-blue-50/30">
      <div className="container mx-auto px-4">
        <header className="text-center mb-8">
          <h1 className="text-4xl lg:text-6xl xl:text-7xl font-black mb-6 relative">
            <span className="bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 bg-clip-text text-transparent">
              Événements
            </span>
            <div className="absolute -inset-2 bg-gradient-to-r from-blue-100/20 to-indigo-100/20 blur-2xl -z-10 rounded-2xl"></div>
          </h1>
          
          <div className="relative mb-8">
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto rounded-full"></div>
            <div className="absolute inset-0 w-24 h-1 bg-gradient-to-r from-blue-400 to-indigo-500 mx-auto rounded-full blur-sm opacity-60"></div>
          </div>
          
          <p className="text-gray-600 text-lg max-w-md mx-auto font-medium">
            Découvrez nos prochaines activités et réservez votre place
          </p>
        </header>

        <div className="flex justify-center mb-6">
          <div className="flex flex-wrap justify-center gap-2 bg-white p-2 rounded-xl shadow-sm border border-gray-100">
            {filters.map(filter => {
              const count = filter.id === 'tous' 
                ? EVENTS_DATA.length 
                : EVENTS_DATA.filter(e => e.category === filter.id).length;
              return (
                <FilterButton
                  key={filter.id}
                  filter={filter}
                  isActive={activeFilter === filter.id}
                  onClick={() => handleFilterChange(filter.id)}
                  count={count}
                />
              );
            })}
          </div>
        </div>

        <div className="relative">
          <ScrollButton 
            direction="left" 
            onClick={() => scroll('left')} 
            disabled={!canScrollLeft}
          />
          
          <div 
            ref={scrollContainerRef}
            className="overflow-x-auto scrollbar-hide scroll-smooth"
            style={{ padding: '0.5rem 0' }}
            role="region"
            aria-label="Events list"
          >
            <div className="flex w-max px-8">
              {filteredEvents.map((event, index) => (
                <EventCard key={event.id} event={event} index={index} />
              ))}
            </div>
          </div>

          <ScrollButton 
            direction="right" 
            onClick={() => scroll('right')} 
            disabled={!canScrollRight}
          />
        </div>

        {filteredEvents.length === 0 && (
          <div className="text-center py-12 bg-white rounded-xl shadow-sm border border-gray-100 mt-6">
            <div className="text-6xl mb-4">📅</div>
            <h3 className="text-lg font-semibold text-gray-700 mb-2">
              Aucun événement disponible
            </h3>
            <p className="text-gray-500 text-sm max-w-sm mx-auto">
              Aucun événement ne correspond à cette catégorie pour le moment
            </p>
          </div>
        )}
      </div>

      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default HorizontalEventSlider;