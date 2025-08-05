import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, User, MessageSquare } from 'lucide-react';

const ContactWithMap = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    }, 3000);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Contact
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Contactez <span className="text-blue-600">MonÉcole</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Notre équipe est à votre disposition pour répondre à toutes vos questions 
            et vous accompagner dans votre projet éducatif.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Contact Information */}
          <div>
            <h3 className="text-3xl font-bold text-gray-800 mb-8">Informations de Contact</h3>
            
            <div className="space-y-8">
              {/* Address */}
              <div className="flex items-start">
                <div className="bg-blue-100 rounded-full p-4 mr-6 flex-shrink-0">
                  <MapPin className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-2">Adresse</h4>
                  <p className="text-gray-600 leading-relaxed">
                     Avenue Fourat<br />
                    20500 Casablanca, Maroc
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start">
                <div className="bg-blue-100 rounded-full p-4 mr-6 flex-shrink-0">
                  <Phone className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-2">Téléphone</h4>
                  <p className="text-gray-600">+33 1 23 45 67 89</p>
                  <p className="text-gray-500 text-sm mt-1">Lun-Ven: 8h00-17h00</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start">
                <div className="bg-blue-100 rounded-full p-4 mr-6 flex-shrink-0">
                  <Mail className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-2">Email</h4>
                  <p className="text-gray-600">contact@Marcelarnaud.ma</p>
                  <p className="text-gray-600">admissions@Marcelarnaud.ma</p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start">
                <div className="bg-blue-100 rounded-full p-4 mr-6 flex-shrink-0">
                  <Clock className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-2">Horaires d'Ouverture</h4>
                  <div className="text-gray-600 space-y-1">
                    <div className="flex justify-between w-64">
                      <span>Lundi - Vendredi:</span>
                      <span>8h00 - 17h00</span>
                    </div>
                    <div className="flex justify-between w-64">
                      <span>Samedi:</span>
                      <span>9h00 - 12h00</span>
                    </div>
                    <div className="flex justify-between w-64">
                      <span>Dimanche:</span>
                      <span>Fermé</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="mt-8">
              <h4 className="text-xl font-semibold text-gray-800 mb-4">Localisation</h4>
              <div className="bg-gray-100 rounded-xl h-80 flex items-center justify-center relative overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/dir//Bd+du+Fouarat,+Casablanca+20250/@33.5828509,-7.5496012,19.49z/data=!4m8!4m7!1m0!1m5!1m1!1s0xda7cd803d3821b1:0xbb657083817e6990!2m2!1d-7.5497608!2d33.5824923?entry=ttu&g_ep=EgoyMDI1MDczMC4wIKXMDSoASAFQAw%3D%3D"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-xl"
                  title="MonÉcole Location"
                ></iframe>
                <div className="absolute inset-0 bg-blue-600/20 hover:bg-transparent transition-colors duration-300 rounded-xl"></div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-3xl font-bold text-gray-800 mb-8 flex items-center">
              <MessageSquare className="h-8 w-8 text-blue-600 mr-3" />
              Envoyez-nous un Message
            </h3>
            
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="bg-green-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="h-10 w-10 text-green-600" />
                </div>
                <h4 className="text-2xl font-bold text-gray-800 mb-4">Message Envoyé !</h4>
                <p className="text-gray-600">
                  Merci pour votre message. Notre équipe vous répondra dans les plus brefs délais.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Fields */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-3">
                      <User className="inline h-4 w-4 mr-2" />
                      Prénom *
                    </label>
                    <input 
                      type="text" 
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      placeholder="Votre prénom"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-3">
                      <User className="inline h-4 w-4 mr-2" />
                      Nom *
                    </label>
                    <input 
                      type="text" 
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      placeholder="Votre nom"
                      required
                    />
                  </div>
                </div>
                
                {/* Email and Phone */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-3">
                      <Mail className="inline h-4 w-4 mr-2" />
                      Email *
                    </label>
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      placeholder="votre.email@exemple.com"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-3">
                      <Phone className="inline h-4 w-4 mr-2" />
                      Téléphone
                    </label>
                    <input 
                      type="tel" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      placeholder="+33 1 23 45 67 89"
                    />
                  </div>
                </div>
                
                {/* Subject */}
                <div>
                  <label className="block text-gray-700 font-semibold mb-3">Sujet *</label>
                  <select 
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    required
                  >
                    <option value="">Sélectionnez un sujet</option>
                    <option value="inscription">Demande d'inscription</option>
                    <option value="information">Information générale</option>
                    <option value="visite">Visite de l'école</option>
                    <option value="programme">Questions sur les programmes</option>
                    <option value="autre">Autre</option>
                  </select>
                </div>
                
                {/* Message */}
                <div>
                  <label className="block text-gray-700 font-semibold mb-3">
                    <MessageSquare className="inline h-4 w-4 mr-2" />
                    Message *
                  </label>
                  <textarea 
                    rows="6" 
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none"
                    placeholder="Décrivez votre demande en détail..."
                    required
                  ></textarea>
                </div>
                
                {/* Submit Button */}
                <button 
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                >
                  <Send className="h-5 w-5 mr-2" />
                  Envoyer le Message
                </button>

                {/* Privacy Notice */}
                <p className="text-sm text-gray-500 text-center">
                  En soumettant ce formulaire, vous acceptez que vos données soient utilisées 
                  pour répondre à votre demande conformément à notre politique de confidentialité.
                </p>
              </form>
            )}
          </div>
        </div>

        {/* Quick Contact Cards */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-gray-800 text-center mb-12">Contacts Directs</h3>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
              <div className="bg-blue-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <User className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-2">Admissions</h4>
              <p className="text-gray-600 mb-4">Pour toutes questions sur les inscriptions</p>
              <div className="space-y-2 text-sm">
                <p className="text-blue-600 font-semibold">admissions@marcelarnaud.ma</p>
                <p className="text-gray-600">+212 600000000</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
              <div className="bg-blue-700 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-2">Vie Scolaire</h4>
              <p className="text-gray-600 mb-4">Suivi des élèves et questions pédagogiques</p>
              <div className="space-y-2 text-sm">
                <p className="text-blue-600 font-semibold">vie-scolaire@marcelarnaud.ma</p>
                <p className="text-gray-600">+212 60000000</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-200 to-blue-300 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
              <div className="bg-blue-800 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-2">Direction</h4>
              <p className="text-gray-600 mb-4">Rendez-vous avec la direction</p>
              <div className="space-y-2 text-sm">
                <p className="text-blue-600 font-semibold">direction@marcelarnaud.ma</p>
                <p className="text-gray-600">+2126</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactWithMap;