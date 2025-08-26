import React, { useState } from 'react';
import { User, Users, Phone, FileText, CheckCircle, Send } from 'lucide-react';

export default function StudentRegistration() {
  const [formData, setFormData] = useState({
    // Student basics
    studentFirstName: '',
    studentLastName: '',
    studentBirthDate: '',
    gradeLevel: '',
    
    // Parent contact
    parent1FirstName: '',
    parent1LastName: '',
    parent1Phone: '',
    parent1Email: '',
    
    // Emergency
    emergencyContact: '',
    emergencyPhone: '',
    
    // Services
    transportNeeded: false,
    lunchService: false,
    
    // Consent
    gdprConsent: false
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const generatePDF = () => {
    const content = `
INSCRIPTION ÉTUDIANT - Groupe Scolaire Marcel Arnaud

ÉTUDIANT
Nom: ${formData.studentLastName} ${formData.studentFirstName}
Naissance: ${formData.studentBirthDate}
Niveau: ${formData.gradeLevel}

PARENT RESPONSABLE
Nom: ${formData.parent1LastName} ${formData.parent1FirstName}
Téléphone: ${formData.parent1Phone}
Email: ${formData.parent1Email}

CONTACT D'URGENCE
${formData.emergencyContact} - ${formData.emergencyPhone}

SERVICES
Transport: ${formData.transportNeeded ? 'Oui' : 'Non'}
Restauration: ${formData.lunchService ? 'Oui' : 'Non'}

Date: ${new Date().toLocaleDateString('fr-FR')}
    `;

    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `inscription_${formData.studentFirstName}_${formData.studentLastName}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const requiredFields = [
      'studentFirstName', 'studentLastName', 'studentBirthDate', 'gradeLevel',
      'parent1FirstName', 'parent1LastName', 'parent1Phone', 'parent1Email',
      'gdprConsent'
    ];
    
    const missingFields = requiredFields.filter(field => !formData[field]);
    
    if (missingFields.length > 0) {
      alert('Veuillez remplir tous les champs obligatoires');
      return;
    }
    
    generatePDF();
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen relative flex items-center justify-center">
        {/* Background */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2086&q=80')"
          }}
        />
        <div className="absolute inset-0 bg-black/60" />
        
        <div className="relative z-10 text-center max-w-md mx-auto px-6">
          <div className="backdrop-blur-xl bg-white/20 rounded-3xl p-8 border border-white/30">
            <CheckCircle className="w-16 h-16 text-emerald-400 mx-auto mb-6" />
            <h1 className="text-3xl font-bold text-white mb-4">
              Inscription Enregistrée
            </h1>
            <p className="text-gray-200 mb-6">
              Votre demande a été soumise. Nous vous contacterons rapidement.
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition-colors"
            >
              Nouvelle inscription
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen relative">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2086&q=80')"
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-blue-800/90 to-purple-900/90" />
      
      <div className="relative z-10 container mx-auto px-6 py-12">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-white mb-2">
              Inscription Étudiant
            </h1>
            <p className="text-blue-200">
              Groupe Scolaire Marcel Arnaud
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Student Info */}
            <div className="backdrop-blur-xl bg-white/15 rounded-2xl p-6 border border-white/20">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <User className="w-5 h-5" />
                Informations Étudiant
              </h3>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-200 mb-2">
                    Prénom *
                  </label>
                  <input
                    type="text"
                    value={formData.studentFirstName}
                    onChange={(e) => handleInputChange('studentFirstName', e.target.value)}
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-xl text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-200 mb-2">
                    Nom *
                  </label>
                  <input
                    type="text"
                    value={formData.studentLastName}
                    onChange={(e) => handleInputChange('studentLastName', e.target.value)}
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-xl text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-200 mb-2">
                    Date de naissance *
                  </label>
                  <input
                    type="date"
                    value={formData.studentBirthDate}
                    onChange={(e) => handleInputChange('studentBirthDate', e.target.value)}
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-200 mb-2">
                    Niveau scolaire *
                  </label>
                  <select
                    value={formData.gradeLevel}
                    onChange={(e) => handleInputChange('gradeLevel', e.target.value)}
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                    required
                  >
                    <option value="">Sélectionner</option>
                    <option value="Maternelle">Maternelle</option>
                    <option value="CP">CP</option>
                    <option value="CE1">CE1</option>
                    <option value="CE2">CE2</option>
                    <option value="CM1">CM1</option>
                    <option value="CM2">CM2</option>
                    <option value="6ème">6ème</option>
                    <option value="5ème">5ème</option>
                    <option value="4ème">4ème</option>
                    <option value="3ème">3ème</option>
                    <option value="2nde">2nde</option>
                    <option value="1ère">1ère</option>
                    <option value="Terminale">Terminale</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Parent Info */}
            <div className="backdrop-blur-xl bg-white/15 rounded-2xl p-6 border border-white/20">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Users className="w-5 h-5" />
                Parent Responsable
              </h3>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-200 mb-2">
                    Prénom *
                  </label>
                  <input
                    type="text"
                    value={formData.parent1FirstName}
                    onChange={(e) => handleInputChange('parent1FirstName', e.target.value)}
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-xl text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-200 mb-2">
                    Nom *
                  </label>
                  <input
                    type="text"
                    value={formData.parent1LastName}
                    onChange={(e) => handleInputChange('parent1LastName', e.target.value)}
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-xl text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-200 mb-2">
                    Téléphone *
                  </label>
                  <input
                    type="tel"
                    value={formData.parent1Phone}
                    onChange={(e) => handleInputChange('parent1Phone', e.target.value)}
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-xl text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                    placeholder="+212 6XX XXX XXX"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-200 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    value={formData.parent1Email}
                    onChange={(e) => handleInputChange('parent1Email', e.target.value)}
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-xl text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Emergency Contact */}
            <div className="backdrop-blur-xl bg-white/15 rounded-2xl p-6 border border-white/20">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Phone className="w-5 h-5" />
                Contact d'Urgence
              </h3>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-200 mb-2">
                    Nom du contact
                  </label>
                  <input
                    type="text"
                    value={formData.emergencyContact}
                    onChange={(e) => handleInputChange('emergencyContact', e.target.value)}
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-xl text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-200 mb-2">
                    Téléphone d'urgence
                  </label>
                  <input
                    type="tel"
                    value={formData.emergencyPhone}
                    onChange={(e) => handleInputChange('emergencyPhone', e.target.value)}
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-xl text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                  />
                </div>
              </div>
            </div>

            {/* Services */}
            <div className="backdrop-blur-xl bg-white/15 rounded-2xl p-6 border border-white/20">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <FileText className="w-5 h-5" />
                Services
              </h3>
              
              <div className="space-y-3">
                <label className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    checked={formData.transportNeeded}
                    onChange={(e) => handleInputChange('transportNeeded', e.target.checked)}
                    className="w-5 h-5 text-blue-400 bg-white/20 border-white/30 rounded focus:ring-blue-400 focus:ring-2"
                  />
                  <span className="text-gray-200 font-medium">Transport scolaire</span>
                </label>
                
                <label className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    checked={formData.lunchService}
                    onChange={(e) => handleInputChange('lunchService', e.target.checked)}
                    className="w-5 h-5 text-blue-400 bg-white/20 border-white/30 rounded focus:ring-blue-400 focus:ring-2"
                  />
                  <span className="text-gray-200 font-medium">Service de restauration</span>
                </label>
              </div>
            </div>

            {/* Consent */}
            <div className="backdrop-blur-xl bg-white/15 rounded-2xl p-6 border border-white/20">
              <label className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  checked={formData.gdprConsent}
                  onChange={(e) => handleInputChange('gdprConsent', e.target.checked)}
                  className="w-5 h-5 text-blue-400 bg-white/20 border-white/30 rounded focus:ring-blue-400 focus:ring-2 mt-0.5"
                  required
                />
                <span className="text-gray-200 text-sm">
                  J'autorise le traitement de mes données personnelles et accepte les conditions d'inscription *
                </span>
              </label>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-6 rounded-2xl transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl flex items-center justify-center gap-3"
            >
              <Send className="w-5 h-5" />
              Soumettre l'Inscription
            </button>
          </form>

          {/* Info */}
          <div className="mt-6 backdrop-blur-xl bg-amber-500/20 border border-amber-400/30 rounded-xl p-4">
            <p className="text-amber-100 text-sm text-center">
              Après soumission, présentez-vous avec les documents requis : acte de naissance, bulletins scolaires, certificat médical et photos d'identité.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}