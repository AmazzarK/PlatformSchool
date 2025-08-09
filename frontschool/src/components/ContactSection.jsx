import React, { useState, useEffect } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, User, MessageSquare, Building2, Users2, UserCheck, ArrowRight, Star } from 'lucide-react';

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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
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
    }, 4000);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Adresse",
      primary: "Bd du Fouarat",
      secondary: "20500 Casablanca, Maroc",
      gradient: "bg-gradient-to-br from-blue-500 to-indigo-600",
      bgColor: "bg-blue-50"
    },
    {
      icon: Phone,
      title: "Téléphone",
      primary: "+212 6 12 34 56 78",
      secondary: "Lun-Ven: 8h00-17h00",
      gradient: "bg-gradient-to-br from-indigo-500 to-purple-600",
      bgColor: "bg-indigo-50"
    },
    {
      icon: Mail,
      title: "Email",
      primary: "contact@marcelarnaud.ma",
      secondary: "admissions@marcelarnaud.ma",
      gradient: "bg-gradient-to-br from-purple-500 to-pink-600",
      bgColor: "bg-purple-50"
    }
  ];

  const quickContacts = [
    {
      icon: UserCheck,
      title: "Admissions",
      description: "Pour toutes questions sur les inscriptions et dossiers d'admission",
      email: "admissions@marcelarnaud.ma",
      phone: "+212 600000000",
      gradient: "bg-gradient-to-br from-blue-500 to-indigo-600",
      bgGradient: "bg-gradient-to-br from-blue-50 via-blue-100 to-indigo-100"
    },
    {
      icon: Users2,
      title: "Vie Scolaire",
      description: "Suivi des élèves, questions pédagogiques et accompagnement",
      email: "vie-scolaire@marcelarnaud.ma",
      phone: "+212 600000000",
      gradient: "bg-gradient-to-br from-indigo-600 to-purple-600",
      bgGradient: "bg-gradient-to-br from-indigo-50 via-indigo-100 to-purple-100"
    },
    {
      icon: Building2,
      title: "Direction",
      description: "Rendez-vous avec la direction et questions administratives",
      email: "direction@marcelarnaud.ma",
      phone: "+212 600000000",
      gradient: "bg-gradient-to-br from-purple-600 to-pink-600",
      bgGradient: "bg-gradient-to-br from-purple-50 via-purple-100 to-pink-100"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 via-blue-50/30 to-indigo-50/20 relative overflow-hidden">
      {/* Background Patterns - Consistent with other sections */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-40 h-40 bg-blue-200 rounded-full blur-3xl"></div>
        <div className="absolute top-60 right-20 w-56 h-56 bg-indigo-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 left-1/3 w-48 h-48 bg-purple-200 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Header Section - Matching Style */}
        <div className={`text-center mb-16 lg:mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="relative inline-block mb-8">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-100/20 to-indigo-100/20 blur-2xl rounded-full"></div>
            <h2 className="relative text-4xl lg:text-6xl xl:text-7xl font-black leading-tight">
              <span className="bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 bg-clip-text text-transparent">
                Contactez 
              </span>
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Nous
              </span>
            </h2>
          </div>

          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full"></div>
              <div className="absolute inset-0 w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full blur-sm opacity-50"></div>
            </div>
          </div>

          <p className="text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-medium">
            Notre équipe dédiée est à votre disposition pour répondre à toutes vos questions 
            et vous accompagner dans votre projet éducatif avec expertise et bienveillance.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 max-w-7xl mx-auto mb-16 lg:mb-20">
          {/* Contact Information */}
          <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <h3 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 mb-8 lg:mb-12">
              <span className="flex items-center">
                <MapPin className="h-6 w-6 lg:h-8 lg:w-8 text-blue-600 mr-3 lg:mr-4" />
                Informations de Contact
              </span>
            </h3>
            
            <div className="space-y-6 lg:space-y-8 mb-8 lg:mb-12">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <div key={index} className="group transition-all duration-300 hover:translate-x-2">
                    <div className="flex items-start">
                      <div className={`${info.gradient} rounded-2xl p-3 lg:p-4 mr-4 lg:mr-6 flex-shrink-0 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}>
                        <IconComponent className="h-5 w-5 lg:h-6 lg:w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg lg:text-xl font-bold text-gray-900 mb-2 lg:mb-3 group-hover:text-blue-700 transition-colors duration-300">{info.title}</h4>
                        <div className="space-y-1">
                          <p className="text-gray-700 font-medium text-sm lg:text-base">{info.primary}</p>
                          <p className="text-gray-500 text-xs lg:text-sm">{info.secondary}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Hours */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl lg:rounded-3xl p-6 lg:p-8 shadow-xl border border-white/50">
              <h4 className="text-lg lg:text-xl font-bold text-gray-900 mb-4 lg:mb-6">
                <span className="flex items-center">
                  <Clock className="h-5 w-5 lg:h-6 lg:w-6 text-blue-600 mr-2 lg:mr-3" />
                  Horaires Détaillés
                </span>
              </h4>
              <div className="space-y-3 lg:space-y-4">
                {[
                  { day: "Lundi - Vendredi", hours: "8h00 - 17h00", active: true },
                  { day: "Samedi", hours: "9h00 - 12h00", active: true },
                  { day: "Dimanche", hours: "Fermé", active: false }
                ].map((schedule, idx) => (
                  <div key={idx} className="flex justify-between items-center p-3 lg:p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl">
                    <span className="font-semibold text-gray-900 text-sm lg:text-base">{schedule.day}</span>
                    <span className={`font-bold text-sm lg:text-base ${schedule.active ? 'text-blue-600' : 'text-gray-400'}`}>
                      {schedule.hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl lg:rounded-3xl p-6 lg:p-8 xl:p-10 shadow-2xl border border-white/50 sticky top-8">
              <h3 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 mb-6 lg:mb-8">
                <span className="flex items-center">
                  <Send className="h-6 w-6 lg:h-8 lg:w-8 text-blue-600 mr-3 lg:mr-4" />
                  Envoyez-nous un Message
                </span>
              </h3>
              
              {isSubmitted ? (
                <div className="text-center py-12 lg:py-16">
                  <div className="bg-gradient-to-br from-green-100 to-emerald-100 rounded-full w-20 h-20 lg:w-24 lg:h-24 flex items-center justify-center mx-auto mb-6 lg:mb-8 shadow-lg">
                    <CheckCircle className="h-10 w-10 lg:h-12 lg:w-12 text-green-600" />
                  </div>
                  <h4 className="text-xl lg:text-2xl xl:text-3xl font-bold text-gray-900 mb-3 lg:mb-4">Message Envoyé !</h4>
                  <p className="text-gray-600 text-base lg:text-lg leading-relaxed max-w-md mx-auto">
                    Merci pour votre message. Notre équipe vous répondra dans les plus brefs délais.
                  </p>
                  <div className="flex items-center justify-center mt-4 lg:mt-6 text-blue-600">
                    <Star className="h-4 w-4 lg:h-5 lg:w-5 fill-current" />
                    <Star className="h-4 w-4 lg:h-5 lg:w-5 fill-current mx-1" />
                    <Star className="h-4 w-4 lg:h-5 lg:w-5 fill-current" />
                  </div>
                </div>
              ) : (
                <div className="space-y-4 lg:space-y-6">
                  {/* Name Fields */}
                  <div className="grid md:grid-cols-2 gap-4 lg:gap-6">
                    {[
                      { name: 'firstName', label: 'Prénom', placeholder: 'Votre prénom' },
                      { name: 'lastName', label: 'Nom', placeholder: 'Votre nom' }
                    ].map((field) => (
                      <div key={field.name} className="relative">
                        <label className="text-gray-700 font-semibold mb-2 lg:mb-3 flex items-center text-sm lg:text-base">
                          <User className="h-3 w-3 lg:h-4 lg:w-4 mr-1 lg:mr-2 text-blue-600" />
                          {field.label} *
                        </label>
                        <input 
                          type="text" 
                          name={field.name}
                          value={formData[field.name]}
                          onChange={handleInputChange}
                          onFocus={() => setFocusedField(field.name)}
                          onBlur={() => setFocusedField(null)}
                          className={`w-full px-3 lg:px-4 py-3 lg:py-4 border border-gray-300 rounded-xl lg:rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-sm lg:text-base ${
                            focusedField === field.name ? 'transform scale-[1.02] shadow-lg' : ''
                          }`}
                          placeholder={field.placeholder}
                          required
                        />
                      </div>
                    ))}
                  </div>
                  
                  {/* Contact Fields */}
                  <div className="grid md:grid-cols-2 gap-4 lg:gap-6">
                    <div className="relative">
                      <label className="text-gray-700 font-semibold mb-2 lg:mb-3 flex items-center text-sm lg:text-base">
                        <Mail className="h-3 w-3 lg:h-4 lg:w-4 mr-1 lg:mr-2 text-blue-600" />
                        Email *
                      </label>
                      <input 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedField('email')}
                        onBlur={() => setFocusedField(null)}
                        className={`w-full px-3 lg:px-4 py-3 lg:py-4 border border-gray-300 rounded-xl lg:rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-sm lg:text-base ${
                          focusedField === 'email' ? 'transform scale-[1.02] shadow-lg' : ''
                        }`}
                        placeholder="votre.email@exemple.com"
                        required
                      />
                    </div>
                    <div className="relative">
                      <label className="text-gray-700 font-semibold mb-2 lg:mb-3 flex items-center text-sm lg:text-base">
                        <Phone className="h-3 w-3 lg:h-4 lg:w-4 mr-1 lg:mr-2 text-blue-600" />
                        Téléphone
                      </label>
                      <input 
                        type="tel" 
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedField('phone')}
                        onBlur={() => setFocusedField(null)}
                        className={`w-full px-3 lg:px-4 py-3 lg:py-4 border border-gray-300 rounded-xl lg:rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-sm lg:text-base ${
                          focusedField === 'phone' ? 'transform scale-[1.02] shadow-lg' : ''
                        }`}
                        placeholder="+212 6 12 34 56 78"
                      />
                    </div>
                  </div>
                  
                  {/* Subject */}
                  <div className="relative">
                    <label className="text-gray-700 font-semibold mb-2 lg:mb-3 text-sm lg:text-base">Sujet *</label>
                    <select 
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField('subject')}
                      onBlur={() => setFocusedField(null)}
                      className={`w-full px-3 lg:px-4 py-3 lg:py-4 border border-gray-300 rounded-xl lg:rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-sm lg:text-base ${
                        focusedField === 'subject' ? 'transform scale-[1.02] shadow-lg' : ''
                      }`}
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
                  <div className="relative">
                    <label className="text-gray-700 font-semibold mb-2 lg:mb-3 flex items-center text-sm lg:text-base">
                      <MessageSquare className="h-3 w-3 lg:h-4 lg:w-4 mr-1 lg:mr-2 text-blue-600" />
                      Message *
                    </label>
                    <textarea 
                      rows="5" 
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField(null)}
                      className={`w-full px-3 lg:px-4 py-3 lg:py-4 border border-gray-300 rounded-xl lg:rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 resize-none text-sm lg:text-base ${
                        focusedField === 'message' ? 'transform scale-[1.02] shadow-lg' : ''
                      }`}
                      placeholder="Décrivez votre demande en détail..."
                      required
                    ></textarea>
                  </div>
                  
                  {/* Submit Button */}
                  <button 
                    type="button"
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className={`group relative w-full overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-3 lg:py-4 rounded-xl lg:rounded-2xl font-bold text-base lg:text-lg transition-all duration-300 shadow-lg hover:shadow-xl ${
                      isSubmitting 
                        ? 'opacity-75 cursor-not-allowed' 
                        : 'hover:scale-[1.02] active:scale-[0.98]'
                    }`}
                  >
                    <span className="relative z-10 flex items-center justify-center">
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 lg:h-5 lg:w-5 border-b-2 border-white mr-2 lg:mr-3"></div>
                          Envoi en cours...
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4 lg:h-5 lg:w-5 mr-2 lg:mr-3 group-hover:translate-x-1 transition-transform duration-300" />
                          Envoyer le Message
                        </>
                      )}
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </button>


                </div>
              )}
            </div>
          </div>
        </div>
        
        {/* Map Section */}
        <div className={`mb-16 lg:mb-20 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center mb-8 lg:mb-12">
            <h3 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 mb-3 lg:mb-4">
              <span className="flex items-center justify-center">
                <MapPin className="h-6 w-6 lg:h-8 lg:w-8 text-blue-600 mr-3 lg:mr-4" />
                Notre Localisation
              </span>
            </h3>
            <p className="text-gray-600 text-base lg:text-lg max-w-2xl mx-auto leading-relaxed">
              Située au cœur de Casablanca, notre école est facilement accessible en transport public et privé
            </p>
          </div>
          
          <div className="w-full relative">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl lg:rounded-3xl p-3 lg:p-4 shadow-xl border border-white/50 overflow-hidden">
              <div className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl lg:rounded-2xl h-64 lg:h-96 w-full overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.349389578856!2d-7.5497608!3d33.5824923!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7cd803d3821b1%3A0xbb657083817e6990!2sBd%20du%20Fouarat%2C%20Casablanca%2020250!5e0!3m2!1sen!2sma!4v1620000000000!5m2!1sen!2sma"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="École Marcel Arnaud Location"
                  className="rounded-xl lg:rounded-2xl"
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Contact Cards */}
        <div className={`transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center mb-12 lg:mb-16">
            <h3 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 mb-3 lg:mb-4">Contacts Directs</h3>
            <p className="text-gray-600 text-base lg:text-lg max-w-2xl mx-auto leading-relaxed">
              Contactez directement le service adapté à votre demande pour un traitement plus rapide
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {quickContacts.map((contact, index) => {
              const IconComponent = contact.icon;
              return (
                <div 
                  key={index}
                  className={`group ${contact.bgGradient} rounded-2xl lg:rounded-3xl p-6 lg:p-8 text-center shadow-xl hover:shadow-2xl transition-all duration-500 hover:transform hover:scale-105 border border-white/50 backdrop-blur-sm`}
                >
                  <div className={`${contact.gradient} rounded-xl lg:rounded-2xl w-16 h-16 lg:w-20 lg:h-20 flex items-center justify-center mx-auto mb-4 lg:mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}>
                    <IconComponent className="h-8 w-8 lg:h-10 lg:w-10 text-white" />
                  </div>
                  
                  <h4 className="text-lg lg:text-xl xl:text-2xl font-bold text-gray-900 mb-3 lg:mb-4 group-hover:text-blue-700 transition-colors duration-300">
                    {contact.title}
                  </h4>
                  
                  <p className="text-gray-600 mb-4 lg:mb-6 leading-relaxed group-hover:text-gray-700 transition-colors duration-300 text-sm lg:text-base">
                    {contact.description}
                  </p>
                  
                  <div className="space-y-2 lg:space-y-3">
                    <div className="bg-white/80 backdrop-blur-sm rounded-lg lg:rounded-xl p-2 lg:p-3 shadow-sm">
                      <p className="text-blue-600 font-bold text-xs lg:text-sm">{contact.email}</p>
                    </div>
                    <div className="bg-white/80 backdrop-blur-sm rounded-lg lg:rounded-xl p-2 lg:p-3 shadow-sm">
                      <p className="text-gray-700 font-semibold text-xs lg:text-sm">{contact.phone}</p>
                    </div>
                  </div>

                  <div className="mt-4 lg:mt-6 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="flex items-center justify-center text-blue-600 font-semibold text-xs lg:text-sm">
                      <span>Contacter maintenant</span>
                      <ArrowRight className="h-3 w-3 lg:h-4 lg:w-4 ml-1 lg:ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactWithMap;