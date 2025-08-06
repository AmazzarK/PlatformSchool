import React from 'react';
import { BookOpen, MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <div className="flex items-center mb-6">
              <div className="bg-blue-600 text-white rounded-lg p-2 mr-3">
                <BookOpen className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold">G.S Marcel Arnaud</h3>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Une institution éducative dédiée à l'excellence académique et au développement 
              personnel de chaque élève depuis plus de 5 ans.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors p-2 bg-gray-800 rounded-full hover:bg-blue-600">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors p-2 bg-gray-800 rounded-full hover:bg-blue-600">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors p-2 bg-gray-800 rounded-full hover:bg-blue-600">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors p-2 bg-gray-800 rounded-full hover:bg-blue-600">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-blue-400">Liens Rapides</h4>
            <ul className="space-y-3">
              <li>
                <a href="#accueil" className="text-gray-400 hover:text-white transition-colors hover:translate-x-1 transform duration-200 block">
                  Accueil
                </a>
              </li>
              <li>
                <a href="#apropos" className="text-gray-400 hover:text-white transition-colors hover:translate-x-1 transform duration-200 block">
                  À Propos
                </a>
              </li>
              <li>
                <a href="#programmes" className="text-gray-400 hover:text-white transition-colors hover:translate-x-1 transform duration-200 block">
                  Programmes
                </a>
              </li>
              <li>
                <a href="#admissions" className="text-gray-400 hover:text-white transition-colors hover:translate-x-1 transform duration-200 block">
                  Admissions
                </a>
              </li>
              <li>
                <a href="#actualites" className="text-gray-400 hover:text-white transition-colors hover:translate-x-1 transform duration-200 block">
                  Actualités
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors hover:translate-x-1 transform duration-200 block">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-blue-400">Nos Programmes</h4>
            <ul className="space-y-3">
              <li>
                <a href="#primaire" className="text-gray-400 hover:text-white transition-colors hover:translate-x-1 transform duration-200 block">
                  École Primaire
                </a>
              </li>
              <li>
                <a href="#college" className="text-gray-400 hover:text-white transition-colors hover:translate-x-1 transform duration-200 block">
                  Collège
                </a>
              </li>
              <li>
                <a href="#lycee" className="text-gray-400 hover:text-white transition-colors hover:translate-x-1 transform duration-200 block">
                  Lycée
                </a>
              </li>
              <li>
                <a href="#extrascolaire" className="text-gray-400 hover:text-white transition-colors hover:translate-x-1 transform duration-200 block">
                  Activités Extrascolaires
                </a>
              </li>
              <li>
                <a href="#soutien" className="text-gray-400 hover:text-white transition-colors hover:translate-x-1 transform duration-200 block">
                  Soutien Scolaire
                </a>
              </li>
              <li>
                <a href="#langues" className="text-gray-400 hover:text-white transition-colors hover:translate-x-1 transform duration-200 block">
                  Langues Étrangères
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-blue-400">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-blue-400 mr-3 mt-1 flex-shrink-0" />
                <div className="text-gray-400">
                  <p>Bd el Fouarat,hay mohammadi</p>
                  <p>20500 Casablanca, Maroc</p>
                </div>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-blue-400 mr-3 flex-shrink-0" />
                <a href="tel:+33123456789" className="text-gray-400 hover:text-white transition-colors">
                  +212 6 12 34 56 78
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-blue-400 mr-3 flex-shrink-0" />
                <a href="mailto:contact@marcelarnaud.ma" className="text-gray-400 hover:text-white transition-colors">
                  contact@marcelarnaud.ma
                </a>
              </div>
            </div>
            
            <div className="mt-6">
              <h5 className="font-semibold mb-3 text-blue-400">Horaires d'Ouverture</h5>
              <div className="text-gray-400 text-sm space-y-1">
                <div className="flex justify-between">
                  <span>Lun - Ven:</span>
                  <span>8h00 - 17h00</span>
                </div>
                <div className="flex justify-between">
                  <span>Samedi:</span>
                  <span>9h00 - 12h00</span>
                </div>
                <div className="flex justify-between">
                  <span>Dimanche:</span>
                  <span>Fermé</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Restez Informé</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Inscrivez-vous à notre newsletter pour recevoir les dernières actualités, 
              événements et informations importantes de GS Marcel Arnaud.
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

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center text-gray-400 mb-4 md:mb-0">
              <p>© {currentYear} G.S Marcel Arnaud. Tous droits réservés.</p>
              <Heart className="h-4 w-4 text-red-500 mx-2" />
              <p>Fait avec passion pour l'éducation</p>
            </div>
            <div className="flex flex-wrap gap-6">
              <a href="#privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
                Politique de Confidentialité
              </a>
              <a href="#terms" className="text-gray-400 hover:text-white text-sm transition-colors">
                Conditions d'Utilisation
              </a>
              <a href="#legal" className="text-gray-400 hover:text-white text-sm transition-colors">
                Mentions Légales
              </a>
              <a href="#cookies" className="text-gray-400 hover:text-white text-sm transition-colors">
                Politique des Cookies
              </a>
            </div>
          </div>
        </div>

        {/* School Stats */}
        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-400 mb-2">1200+</div>
              <div className="text-gray-400 text-sm">Élèves Formés</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-400 mb-2">98%</div>
              <div className="text-gray-400 text-sm">Taux de Réussite</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-400 mb-2">45</div>
              <div className="text-gray-400 text-sm">Enseignants</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-400 mb-2">5+</div>
              <div className="text-gray-400 text-sm">Années d'Expérience</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;