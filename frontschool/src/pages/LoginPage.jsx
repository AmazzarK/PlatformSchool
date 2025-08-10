import React, { useState } from 'react';
import { FileText, Download, CheckCircle, User, Users, GraduationCap, Phone, Mail, MapPin } from 'lucide-react';

export default function StudentRegistration() {
  const [formData, setFormData] = useState({
    // Student information
    studentFirstName: '',
    studentLastName: '',
    studentBirthDate: '',
    studentBirthPlace: '',
    studentGender: '',
    studentNationality: '',
    studentAddress: '',
    studentCity: '',
    studentPostalCode: '',
    studentPhone: '',
    gradeLevel: '',
    previousSchool: '',
    medicalInfo: '',
    allergies: '',
    specialNeeds: '',
    
    // Parent information
    parent1FirstName: '',
    parent1LastName: '',
    parent1Phone: '',
    parent1Email: '',
    parent1Profession: '',
    parent1Workplace: '',
    
    parent2FirstName: '',
    parent2LastName: '',
    parent2Phone: '',
    parent2Email: '',
    parent2Profession: '',
    parent2Workplace: '',
    
    // Financial information
    monthlyIncome: '',
    paymentMethod: '',
    
    // Services
    transportNeeded: false,
    lunchService: false,
    hasDocuments: false,
    
    // Emergency contact
    emergencyContact: '',
    emergencyPhone: '',
    
    // Additional information
    howDidYouHear: '',
    additionalComments: '',
    newsletterSubscription: false,
    gdprConsent: false,
    
    // Files
    uploadedFiles: []
  });

  const [currentStep, setCurrentStep] = useState('register'); // Only 'register' and 'success'

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleFileUpload = (files) => {
    console.log('Files to upload:', files);
    setFormData(prev => ({
      ...prev,
      uploadedFiles: [...prev.uploadedFiles, ...Array.from(files)]
    }));
  };

  const generatePDF = () => {
    const content = `
FORMULAIRE D'INSCRIPTION ÉTUDIANT
Groupe Scolaire Marcel Arnaud

═══════════════════════════════════════

INFORMATIONS DE L'ÉTUDIANT
═══════════════════════════════════════
Prénom: ${formData.studentFirstName}
Nom: ${formData.studentLastName}
Date de naissance: ${formData.studentBirthDate}
Lieu de naissance: ${formData.studentBirthPlace}
Genre: ${formData.studentGender}
Nationalité: ${formData.studentNationality}
Adresse: ${formData.studentAddress}
Ville: ${formData.studentCity}
Code postal: ${formData.studentPostalCode}
Téléphone: ${formData.studentPhone}
Niveau scolaire: ${formData.gradeLevel}
École précédente: ${formData.previousSchool}

INFORMATIONS MÉDICALES
═══════════════════════════════════════
Informations médicales: ${formData.medicalInfo || 'Aucune'}
Allergies: ${formData.allergies || 'Aucune'}
Besoins spéciaux: ${formData.specialNeeds || 'Aucun'}

INFORMATIONS PARENT 1
═══════════════════════════════════════
Prénom: ${formData.parent1FirstName}
Nom: ${formData.parent1LastName}
Téléphone: ${formData.parent1Phone}
Email: ${formData.parent1Email}
Profession: ${formData.parent1Profession}
Lieu de travail: ${formData.parent1Workplace}

INFORMATIONS PARENT 2
═══════════════════════════════════════
Prénom: ${formData.parent2FirstName}
Nom: ${formData.parent2LastName}
Téléphone: ${formData.parent2Phone}
Email: ${formData.parent2Email}
Profession: ${formData.parent2Profession}
Lieu de travail: ${formData.parent2Workplace}

CONTACT D'URGENCE
═══════════════════════════════════════
Contact d'urgence: ${formData.emergencyContact}
Téléphone d'urgence: ${formData.emergencyPhone}

SERVICES
═══════════════════════════════════════
Transport scolaire: ${formData.transportNeeded ? 'Oui' : 'Non'}
Service de restauration: ${formData.lunchService ? 'Oui' : 'Non'}

INFORMATIONS FINANCIÈRES
═══════════════════════════════════════
Revenu mensuel: ${formData.monthlyIncome}
Mode de paiement: ${formData.paymentMethod}

INFORMATIONS COMPLÉMENTAIRES
═══════════════════════════════════════
Comment nous avez-vous connu: ${formData.howDidYouHear || 'Non spécifié'}
Commentaires: ${formData.additionalComments || 'Aucun'}

DOCUMENTS FOURNIS
═══════════════════════════════════════
Documents préparés: ${formData.hasDocuments ? 'Oui' : 'Non'}
Fichiers uploadés: ${formData.uploadedFiles.length > 0 ? formData.uploadedFiles.map(f => f.name).join(', ') : 'Aucun'}

CONSENTEMENTS
═══════════════════════════════════════
Newsletter: ${formData.newsletterSubscription ? 'Oui' : 'Non'}
RGPD: ${formData.gdprConsent ? 'Oui' : 'Non'}

═══════════════════════════════════════
Date de soumission: ${new Date().toLocaleDateString('fr-FR')}
Groupe Scolaire Marcel Arnaud
© 2024 - Tous droits réservés
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

  const downloadBrochure = () => {
    const brochureContent = `
BROCHURE - GROUPE SCOLAIRE MARCEL ARNAUD
═══════════════════════════════════════════════

🎓 EXCELLENCE ACADÉMIQUE DEPUIS 1985

Notre Mission:
Fournir une éducation de qualité supérieure dans un environnement bienveillant 
et stimulant, préparant nos étudiants à devenir les leaders de demain.

📚 PROGRAMMES OFFERTS:
• Maternelle (3-5 ans)
• Primaire (6-11 ans)  
• Collège (12-15 ans)
• Lycée (16-18 ans)

🏆 NOS ATOUTS:
• Classes à effectifs réduits (max 20 élèves)
• Corps enseignant qualifié et expérimenté
• Laboratoires modernes et bibliothèque fournie
• Programme bilingue Français/Anglais
• Activités extrascolaires variées
• Suivi personnalisé de chaque élève

🌟 SERVICES:
• Transport scolaire sécurisé
• Restauration équilibrée
• Infirmerie sur site
• Soutien psychologique
• Activités sportives et culturelles

📞 CONTACT:
Adresse: 123 Avenue de l'Éducation, Casablanca
Téléphone: +212 522 XX XX XX
Email: info@gsmarcelarnaud.ma
Site web: www.gsmarcelarnaud.ma

📋 PROCÉDURE D'INSCRIPTION:
1. Remplir le formulaire d'inscription en ligne
2. Fournir les documents requis
3. Entretien avec la direction
4. Confirmation d'inscription

💰 FRAIS DE SCOLARITÉ 2024-2025:
• Maternelle: 2,500 DH/mois
• Primaire: 3,000 DH/mois
• Collège: 3,500 DH/mois
• Lycée: 4,000 DH/mois

📄 DOCUMENTS REQUIS:
• Acte de naissance
• Photos d'identité récentes
• Derniers bulletins scolaires
• Certificat médical
• Justificatif de domicile

═══════════════════════════════════════════════
© 2024 Groupe Scolaire Marcel Arnaud
"Excellence • Innovation • Avenir"
    `;

    const blob = new Blob([brochureContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'brochure_GS_Marcel_Arnaud.txt';
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
      alert('Veuillez remplir tous les champs obligatoires marqués d\'un *');
      return;
    }
    
    if (!formData.gdprConsent) {
      alert('Veuillez accepter le traitement des données personnelles');
      return;
    }
    
    generatePDF();
    setCurrentStep('success');
  };

  if (currentStep === 'success') {
    return (
      <div className="min-h-screen relative flex items-center justify-center">
        {/* Background */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2086&q=80')"
          }}
        ></div>
        <div className="absolute inset-0 bg-green-950/70"></div>
        
        {/* Success Message */}
        <div className="relative z-10 w-full max-w-2xl px-6">
          <div className="backdrop-blur-lg bg-white/15 rounded-2xl border border-green-200/30 shadow-2xl p-8 text-center">
            <CheckCircle className="w-20 h-20 text-green-400 mx-auto mb-6" />
            <h1 className="text-4xl font-bold text-white mb-4">
              Inscription Enregistrée !
            </h1>
            <p className="text-green-100 text-lg mb-6">
              Votre demande d'inscription a été soumise avec succès. Nous vous contacterons dans les plus brefs délais pour confirmer les étapes d'inscription. 
              Merci de vous présenter à la direction dès que possible avec les documents requis.
            </p>
            
            <div className="space-y-4">
              <button
                onClick={downloadBrochure}
                className="w-full bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center gap-2"
              >
                <Download className="w-5 h-5" />
                Télécharger la Brochure
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-white mb-2">
              Formulaire d'Inscription Étudiant
            </h1>
            <p className="text-blue-200">
              Groupe Scolaire Marcel Arnaud - Parcours d'Excellence
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Student Information */}
            <div className="backdrop-blur-lg bg-white/10 rounded-2xl border border-blue-200/30 p-6">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <User className="w-6 h-6" />
                Informations de l'Étudiant
              </h3>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-blue-100 mb-2">
                    Prénom *
                  </label>
                  <input
                    type="text"
                    value={formData.studentFirstName}
                    onChange={(e) => handleInputChange('studentFirstName', e.target.value)}
                    className="w-full px-4 py-3 bg-white/20 border border-blue-200/40 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-blue-100 mb-2">
                    Nom *
                  </label>
                  <input
                    type="text"
                    value={formData.studentLastName}
                    onChange={(e) => handleInputChange('studentLastName', e.target.value)}
                    className="w-full px-4 py-3 bg-white/20 border border-blue-200/40 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-blue-100 mb-2">
                    Date de naissance *
                  </label>
                  <input
                    type="date"
                    value={formData.studentBirthDate}
                    onChange={(e) => handleInputChange('studentBirthDate', e.target.value)}
                    className="w-full px-4 py-3 bg-white/20 border border-blue-200/40 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-blue-100 mb-2">
                    Lieu de naissance
                  </label>
                  <input
                    type="text"
                    value={formData.studentBirthPlace}
                    onChange={(e) => handleInputChange('studentBirthPlace', e.target.value)}
                    className="w-full px-4 py-3 bg-white/20 border border-blue-200/40 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-blue-100 mb-2">
                    Genre
                  </label>
                  <select
                    value={formData.studentGender}
                    onChange={(e) => handleInputChange('studentGender', e.target.value)}
                    className="w-full px-4 py-3 bg-white/20 border border-blue-200/40 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                  >
                    <option value="">Sélectionner</option>
                    <option value="Masculin">Masculin</option>
                    <option value="Féminin">Féminin</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-blue-100 mb-2">
                    Niveau scolaire *
                  </label>
                  <select
                    value={formData.gradeLevel}
                    onChange={(e) => handleInputChange('gradeLevel', e.target.value)}
                    className="w-full px-4 py-3 bg-white/20 border border-blue-200/40 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                    required
                  >
                    <option value="">Sélectionner le niveau</option>
                    <option value="Maternelle Petite Section">Maternelle Petite Section</option>
                    <option value="Maternelle Moyenne Section">Maternelle Moyenne Section</option>
                    <option value="Maternelle Grande Section">Maternelle Grande Section</option>
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
              
              <div className="mt-4">
                <label className="block text-sm font-medium text-blue-100 mb-2">
                  Adresse complète
                </label>
                <textarea
                  value={formData.studentAddress}
                  onChange={(e) => handleInputChange('studentAddress', e.target.value)}
                  rows={3}
                  className="w-full px-4 py-3 bg-white/20 border border-blue-200/40 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
            </div>

            {/* Parent Information */}
            <div className="backdrop-blur-lg bg-white/10 rounded-2xl border border-blue-200/30 p-6">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <Users className="w-6 h-6" />
                Informations des Parents
              </h3>
              
              <div className="space-y-6">
                <h4 className="text-xl font-semibold text-blue-200">Parent 1 (Responsable principal)</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-blue-100 mb-2">
                      Prénom *
                    </label>
                    <input
                      type="text"
                      value={formData.parent1FirstName}
                      onChange={(e) => handleInputChange('parent1FirstName', e.target.value)}
                      className="w-full px-4 py-3 bg-white/20 border border-blue-200/40 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-blue-100 mb-2">
                      Nom *
                    </label>
                    <input
                      type="text"
                      value={formData.parent1LastName}
                      onChange={(e) => handleInputChange('parent1LastName', e.target.value)}
                      className="w-full px-4 py-3 bg-white/20 border border-blue-200/40 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-blue-100 mb-2">
                      Téléphone *
                    </label>
                    <input
                      type="tel"
                      value={formData.parent1Phone}
                      onChange={(e) => handleInputChange('parent1Phone', e.target.value)}
                      className="w-full px-4 py-3 bg-white/20 border border-blue-200/40 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-blue-100 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      value={formData.parent1Email}
                      onChange={(e) => handleInputChange('parent1Email', e.target.value)}
                      className="w-full px-4 py-3 bg-white/20 border border-blue-200/40 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-blue-100 mb-2">
                      Profession
                    </label>
                    <input
                      type="text"
                      value={formData.parent1Profession}
                      onChange={(e) => handleInputChange('parent1Profession', e.target.value)}
                      className="w-full px-4 py-3 bg-white/20 border border-blue-200/40 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-blue-100 mb-2">
                      Lieu de travail
                    </label>
                    <input
                      type="text"
                      value={formData.parent1Workplace}
                      onChange={(e) => handleInputChange('parent1Workplace', e.target.value)}
                      className="w-full px-4 py-3 bg-white/20 border border-blue-200/40 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                  </div>
                </div>
                
                <h4 className="text-xl font-semibold text-blue-200">Parent 2 (Optionnel)</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-blue-100 mb-2">
                      Prénom
                    </label>
                    <input
                      type="text"
                      value={formData.parent2FirstName}
                      onChange={(e) => handleInputChange('parent2FirstName', e.target.value)}
                      className="w-full px-4 py-3 bg-white/20 border border-blue-200/40 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-blue-100 mb-2">
                      Nom
                    </label>
                    <input
                      type="text"
                      value={formData.parent2LastName}
                      onChange={(e) => handleInputChange('parent2LastName', e.target.value)}
                      className="w-full px-4 py-3 bg-white/20 border border-blue-200/40 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-blue-100 mb-2">
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      value={formData.parent2Phone}
                      onChange={(e) => handleInputChange('parent2Phone', e.target.value)}
                      className="w-full px-4 py-3 bg-white/20 border border-blue-200/40 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-blue-100 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      value={formData.parent2Email}
                      onChange={(e) => handleInputChange('parent2Email', e.target.value)}
                      className="w-full px-4 py-3 bg-white/20 border border-blue-200/40 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-blue-100 mb-2">
                      Profession
                    </label>
                    <input
                      type="text"
                      value={formData.parent2Profession}
                      onChange={(e) => handleInputChange('parent2Profession', e.target.value)}
                      className="w-full px-4 py-3 bg-white/20 border border-blue-200/40 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-blue-100 mb-2">
                      Lieu de travail
                    </label>
                    <input
                      type="text"
                      value={formData.parent2Workplace}
                      onChange={(e) => handleInputChange('parent2Workplace', e.target.value)}
                      className="w-full px-4 py-3 bg-white/20 border border-blue-200/40 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Medical and Emergency Information */}
            <div className="backdrop-blur-lg bg-white/10 rounded-2xl border border-blue-200/30 p-6">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <Phone className="w-6 h-6" />
                Informations Médicales et Contact d'Urgence
              </h3>
              
              <div className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-blue-100 mb-2">
                      Contact d'urgence (nom complet)
                    </label>
                    <input
                      type="text"
                      value={formData.emergencyContact}
                      onChange={(e) => handleInputChange('emergencyContact', e.target.value)}
                      placeholder="Nom du contact d'urgence"
                      className="w-full px-4 py-3 bg-white/20 border border-blue-200/40 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-blue-100 mb-2">
                      Téléphone d'urgence
                    </label>
                    <input
                      type="tel"
                      value={formData.emergencyPhone}
                      onChange={(e) => handleInputChange('emergencyPhone', e.target.value)}
                      placeholder="+212 6XX XXX XXX"
                      className="w-full px-4 py-3 bg-white/20 border border-blue-200/40 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-blue-100 mb-2">
                    Informations médicales importantes
                  </label>
                  <textarea
                    value={formData.medicalInfo}
                    onChange={(e) => handleInputChange('medicalInfo', e.target.value)}
                    placeholder="Maladies chroniques, traitements en cours, etc."
                    rows={3}
                    className="w-full px-4 py-3 bg-white/20 border border-blue-200/40 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-blue-100 mb-2">
                    Allergies connues
                  </label>
                  <textarea
                    value={formData.allergies}
                    onChange={(e) => handleInputChange('allergies', e.target.value)}
                    placeholder="Allergies alimentaires, médicamenteuses, etc."
                    rows={2}
                    className="w-full px-4 py-3 bg-white/20 border border-blue-200/40 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-blue-100 mb-2">
                    Besoins éducatifs spéciaux
                  </label>
                  <textarea
                    value={formData.specialNeeds}
                    onChange={(e) => handleInputChange('specialNeeds', e.target.value)}
                    placeholder="Difficultés d'apprentissage, handicaps, adaptations nécessaires..."
                    rows={3}
                    className="w-full px-4 py-3 bg-white/20 border border-blue-200/40 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>
              </div>
            </div>

            {/* School Information */}
            <div className="backdrop-blur-lg bg-white/10 rounded-2xl border border-blue-200/30 p-6">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <GraduationCap className="w-6 h-6" />
                Informations Scolaires
              </h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-blue-100 mb-2">
                    École précédente (nom complet)
                  </label>
                  <input
                    type="text"
                    value={formData.previousSchool}
                    onChange={(e) => handleInputChange('previousSchool', e.target.value)}
                    placeholder="Nom de l'établissement précédent"
                    className="w-full px-4 py-3 bg-white/20 border border-blue-200/40 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-blue-100 mb-2">
                      Ville de l'étudiant
                    </label>
                    <input
                      type="text"
                      value={formData.studentCity}
                      onChange={(e) => handleInputChange('studentCity', e.target.value)}
                      placeholder="Casablanca"
                      className="w-full px-4 py-3 bg-white/20 border border-blue-200/40 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-blue-100 mb-2">
                      Code postal
                    </label>
                    <input
                      type="text"
                      value={formData.studentPostalCode}
                      onChange={(e) => handleInputChange('studentPostalCode', e.target.value)}
                      placeholder="20000"
                      className="w-full px-4 py-3 bg-white/20 border border-blue-200/40 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-blue-100 mb-2">
                    Nationalité de l'étudiant
                  </label>
                  <select
                    value={formData.studentNationality}
                    onChange={(e) => handleInputChange('studentNationality', e.target.value)}
                    className="w-full px-4 py-3 bg-white/20 border border-blue-200/40 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                  >
                    <option value="">Sélectionner la nationalité</option>
                    <option value="Marocaine">Marocaine</option>
                    <option value="Française">Française</option>
                    <option value="Algérienne">Algérienne</option>
                    <option value="Tunisienne">Tunisienne</option>
                    <option value="Autre">Autre</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Services and Options */}
            <div className="backdrop-blur-lg bg-white/10 rounded-2xl border border-blue-200/30 p-6">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <MapPin className="w-6 h-6" />
                Services et Options
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    id="transport"
                    checked={formData.transportNeeded}
                    onChange={(e) => handleInputChange('transportNeeded', e.target.checked)}
                    className="w-5 h-5 text-blue-400 bg-white/20 border-blue-200/40 rounded focus:ring-blue-400 focus:ring-2"
                  />
                  <label htmlFor="transport" className="text-blue-100 font-medium">
                    Transport scolaire requis
                  </label>
                </div>
                
                <div className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    id="lunch"
                    checked={formData.lunchService}
                    onChange={(e) => handleInputChange('lunchService', e.target.checked)}
                    className="w-5 h-5 text-blue-400 bg-white/20 border-blue-200/40 rounded focus:ring-blue-400 focus:ring-2"
                  />
                  <label htmlFor="lunch" className="text-blue-100 font-medium">
                    Service de restauration
                  </label>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-blue-100 mb-2">
                    Revenu familial mensuel (optionnel)
                  </label>
                  <select
                    value={formData.monthlyIncome}
                    onChange={(e) => handleInputChange('monthlyIncome', e.target.value)}
                    className="w-full px-4 py-3 bg-white/20 border border-blue-200/40 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                  >
                    <option value="">Sélectionner une tranche</option>
                    <option value="Moins de 5,000 DH">Moins de 5,000 DH</option>
                    <option value="5,000 - 10,000 DH">5,000 - 10,000 DH</option>
                    <option value="10,000 - 20,000 DH">10,000 - 20,000 DH</option>
                    <option value="20,000 - 30,000 DH">20,000 - 30,000 DH</option>
                    <option value="Plus de 30,000 DH">Plus de 30,000 DH</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-blue-100 mb-2">
                    Mode de paiement préféré
                  </label>
                  <select
                    value={formData.paymentMethod}
                    onChange={(e) => handleInputChange('paymentMethod', e.target.value)}
                    className="w-full px-4 py-3 bg-white/20 border border-blue-200/40 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                  >
                    <option value="">Sélectionner le mode de paiement</option>
                    <option value="Mensuel">Paiement mensuel</option>
                    <option value="Trimestriel">Paiement trimestriel</option>
                    <option value="Semestriel">Paiement semestriel</option>
                    <option value="Annuel">Paiement annuel</option>
                  </select>
                </div>
                
                <div className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    id="documents"
                    checked={formData.hasDocuments}
                    onChange={(e) => handleInputChange('hasDocuments', e.target.checked)}
                    className="w-5 h-5 text-blue-400 bg-white/20 border-blue-200/40 rounded focus:ring-blue-400 focus:ring-2"
                  />
                  <label htmlFor="documents" className="text-blue-100 font-medium">
                    J'ai préparé tous les documents requis (acte de naissance, bulletins, certificat médical, photos d'identité, justificatif de domicile)
                  </label>
                </div>
              </div>
            </div>

            {/* Additional Information */}
            <div className="backdrop-blur-lg bg-white/10 rounded-2xl border border-blue-200/30 p-6">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <Mail className="w-6 h-6" />
                Informations Complémentaires
              </h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-blue-100 mb-2">
                    Comment avez-vous connu notre établissement ?
                  </label>
                  <select
                    value={formData.howDidYouHear}
                    onChange={(e) => handleInputChange('howDidYouHear', e.target.value)}
                    className="w-full px-4 py-3 bg-white/20 border border-blue-200/40 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                  >
                    <option value="">Sélectionner une option</option>
                    <option value="Recommandation">Recommandation</option>
                    <option value="Réseaux sociaux">Réseaux sociaux</option>
                    <option value="Site web">Site web</option>
                    <option value="Publicité">Publicité</option>
                    <option value="Salon éducatif">Salon éducatif</option>
                    <option value="Autre">Autre</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-blue-100 mb-2">
                    Remarques ou commentaires supplémentaires
                  </label>
                  <textarea
                    value={formData.additionalComments}
                    onChange={(e) => handleInputChange('additionalComments', e.target.value)}
                    rows={3}
                    className="w-full px-4 py-3 bg-white/20 border border-blue-200/40 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="Toute information supplémentaire que vous souhaitez partager..."
                  />
                </div>
                
                <div className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    id="newsletter"
                    checked={formData.newsletterSubscription}
                    onChange={(e) => handleInputChange('newsletterSubscription', e.target.checked)}
                    className="w-5 h-5 text-blue-400 bg-white/20 border-blue-200/40 rounded focus:ring-blue-400 focus:ring-2"
                  />
                  <label htmlFor="newsletter" className="text-blue-100 font-medium">
                    Je souhaite recevoir la newsletter de l'établissement
                  </label>
                </div>
                
                <div className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    id="gdpr"
                    checked={formData.gdprConsent}
                    onChange={(e) => handleInputChange('gdprConsent', e.target.checked)}
                    className="w-5 h-5 text-blue-400 bg-white/20 border-blue-200/40 rounded focus:ring-blue-400 focus:ring-2"
                    required
                  />
                  <label htmlFor="gdpr" className="text-blue-100 font-medium">
                    J'autorise le traitement de mes données personnelles conformément à la politique de confidentialité *
                  </label>
                </div>
              </div>
            </div>

            {/* Document Upload */}
            <div className="backdrop-blur-lg bg-white/10 rounded-2xl border border-blue-200/30 p-6">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <FileText className="w-6 h-6" />
                Documents à Fournir
              </h3>
              
              <div className="space-y-4">
                <p className="text-blue-100">
                  Veuillez préparer les documents suivants pour finaliser l'inscription :
                </p>
                
                <ul className="list-disc pl-5 space-y-2 text-blue-100">
                  <li>Photocopie de l'acte de naissance de l'élève</li>
                  <li>2 photos d'identité récentes</li>
                  <li>Photocopie des bulletins scolaires de l'année précédente</li>
                  <li>Certificat médical de non contre-indication à la scolarité</li>
                  <li>Photocopie de la CIN des parents</li>
                  <li>Justificatif de domicile (facture d'eau/électricité de moins de 3 mois)</li>
                  <li>Dossier médical complet si l'élève a des besoins spécifiques</li>
                </ul>
                
                <div className="mt-4">
                  <label className="block text-sm font-medium text-blue-100 mb-2">
                    Vous pouvez également uploader vos documents maintenant (optionnel) :
                  </label>
                  <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-blue-200/40 border-dashed rounded-lg">
                    <div className="space-y-1 text-center">
                      <svg
                        className="mx-auto h-12 w-12 text-blue-200"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 48 48"
                        aria-hidden="true"
                      >
                        <path
                          d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <div className="flex text-sm text-blue-200">
                        <label
                          htmlFor="file-upload"
                          className="relative cursor-pointer bg-white/20 rounded-md font-medium text-blue-300 hover:text-white focus-within:outline-none"
                        >
                          <span>Uploader un fichier</span>
                          <input 
                            id="file-upload" 
                            name="file-upload" 
                            type="file" 
                            className="sr-only" 
                            multiple
                            onChange={(e) => handleFileUpload(e.target.files)}
                          />
                        </label>
                        <p className="pl-1">ou glisser-déposer</p>
                      </div>
                      <p className="text-xs text-blue-200">
                        PDF, JPG, PNG jusqu'à 10MB
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Final Steps */}
            <div className="backdrop-blur-lg bg-white/10 rounded-2xl border border-blue-200/30 p-6">
              <h3 className="text-2xl font-bold text-white mb-6">
                Prochaines Étapes
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-500/20 rounded-full p-2">
                    <div className="h-6 w-6 text-blue-300 text-center font-bold">1</div>
                  </div>
                  <div className="ml-3">
                    <p className="text-blue-100 font-medium">Soumission du formulaire</p>
                    <p className="text-blue-200 text-sm mt-1">
                      Après avoir soumis ce formulaire, vous recevrez une confirmation par email avec un récapitulatif.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-500/20 rounded-full p-2">
                    <div className="h-6 w-6 text-blue-300 text-center font-bold">2</div>
                  </div>
                  <div className="ml-3">
                    <p className="text-blue-100 font-medium">Entretien avec la direction</p>
                    <p className="text-blue-200 text-sm mt-1">
                      Notre équipe vous contactera pour planifier un entretien avec la direction pédagogique.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-500/20 rounded-full p-2">
                    <div className="h-6 w-6 text-blue-300 text-center font-bold">3</div>
                  </div>
                  <div className="ml-3">
                    <p className="text-blue-100 font-medium">Test d'évaluation</p>
                    <p className="text-blue-200 text-sm mt-1">
                      Pour certains niveaux, un test d'évaluation des compétences pourra être demandé.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-500/20 rounded-full p-2">
                    <div className="h-6 w-6 text-blue-300 text-center font-bold">4</div>
                  </div>
                  <div className="ml-3">
                    <p className="text-blue-100 font-medium">Finalisation administrative</p>
                    <p className="text-blue-200 text-sm mt-1">
                      Une fois accepté, vous devrez finaliser l'inscription en présentant les documents originaux et en réglant les frais d'inscription.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <button
                type="button"
                onClick={downloadBrochure}
                className="flex-1 bg-gradient-to-r from-green-600 to-green-800 hover:from-green-700 hover:to-green-900 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center gap-2"
              >
                <Download className="w-5 h-5" />
                Télécharger la Brochure
              </button>
              
              <button
                type="submit"
                className="flex-1 bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center gap-2"
              >
                <FileText className="w-5 h-5" />
                Soumettre l'Inscription
              </button>
            </div>

            {/* Information Notice */}
            <div className="backdrop-blur-lg bg-yellow-500/20 border border-yellow-300/30 rounded-lg p-4">
              <p className="text-yellow-100 text-sm">
                <strong>Important :</strong> Après soumission, vous recevrez automatiquement un fichier PDF avec toutes les informations saisies. 
                Veuillez vous présenter à l'administration avec ce document et les pièces justificatives requises dans les plus brefs délais.
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}