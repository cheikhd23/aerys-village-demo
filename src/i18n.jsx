import { createContext, useContext, useEffect, useMemo, useState } from 'react'

const translations = {
  fr: {
    navVillage: 'Le village', navStays: 'Séjours', navExperiences: 'Expériences', navGallery: 'Galerie', navAccess: 'Accès', book: 'Réserver', openMenu: 'Ouvrir le menu', closeMenu: 'Fermer le menu',
    heroLocation: 'Lagune de Somone · Sénégal', heroKicker: 'Un refuge entre lagune, nature et élégance', heroTitleA: 'Ici, le monde', heroTitleB: 'peut attendre.', heroText: 'Des chalets privés au cœur de la nature, une piscine sous le soleil et la lagune de Somone comme horizon.', heroDiscover: 'Découvrir Aerys', arrival: 'Arrivée', departure: 'Départ', chooseDate: 'Choisir une date', guests: 'Voyageurs', twoPeople: '2 personnes', findStay: 'Trouver mon séjour', heroServices: 'Chalets · Pool side · Cuisine · Bien-être', beachFive: 'À 5 minutes de la plage',
    architectureEyebrow: 'Une architecture habitée', architectureTitleA: 'Ancré dans', architectureTitleB: 'sa terre.', architectureLead: 'Aerys Village est né d’une architecture responsable, conçue pour appartenir à Somone — pas simplement pour s’y poser.', architectureText: 'Imaginé par Atelier Kalm et construit par KOS, le lieu assemble brique de terre, pierre et bois dans un paysage préservé. Chaque chalet laisse entrer la lumière, l’air et la nature.', earthBrick: 'Brique de terre', localStone: 'Pierre locale', livingWood: 'Bois vivant', seeExperiences: 'Voir tout ce que l’on peut vivre', award: 'Prix Imagine WATA',
    experienceEyebrow: 'Plus qu’une nuit', experienceTitleA: 'Tout un village', experienceTitleB: 'à vivre', experienceText: 'Aerys se découvre à votre rythme : une journée au bord de la piscine, un massage, une aventure, un mariage ou simplement une table partagée.', publicExperiences: 'Expériences proposées publiquement par Aerys Village',
    staysEyebrow: 'Les hébergements', staysTitleA: 'Choisir son', staysTitleB: 'refuge', staysText: 'Quatre façons de séjourner à Aerys, du chalet confidentiel à la configuration pensée pour les familles.', publicCategories: 'Catégories publiées par Aerys Village', socialImage: 'Image temporaire issue des galeries publiques', ratesAvailability: 'Tarifs & disponibilités', onRequest: 'Sur demande', requestStay: 'Demander ce séjour', photoPrevious: 'Photo précédente', photoNext: 'Photo suivante', photoOf: 'Photo',
    galleryEyebrow: 'Carnet de voyage', galleryTitleA: 'Les couleurs', galleryTitleB: 'de Somone', galleryText: 'L’eau, le bois, la terre et la lumière — une palette naturelle qui signe l’univers Aerys.', galleryNote: 'Visuels publics utilisés temporairement pour cette démonstration — à remplacer par les médias approuvés.',
    inquiryEyebrow: 'Votre parenthèse', inquiryTitleA: 'Commençons', inquiryTitleB: 'par votre envie', inquiryText: 'Partagez vos dates et vos souhaits. L’équipe pourra vous proposer le séjour le plus adapté, sans parcours de réservation impersonnel.', whatsappPrompt: 'Vous préférez échanger directement ?', whatsappBook: 'Réserver via WhatsApp', fullName: 'Nom complet', yourName: 'Votre nom', email: 'Email', phone: 'Téléphone / WhatsApp', desiredDates: 'Dates souhaitées', datesExample: 'Ex. 12 — 15 octobre', guestCount: 'Nombre de personnes', stayType: 'Type de séjour', choose: 'Choisir', message: 'Message', messagePlaceholder: 'Parlez-nous de votre séjour…', demoForm: 'Formulaire de démonstration — aucun message n’est envoyé pour le moment.', sendRequest: 'Envoyer ma demande', formSuccess: 'Merci. Dans la version finale, cette demande sera transmise directement à l’équipe Aerys Village.',
    stayCouple: 'Escapade en couple', stayFamily: 'Séjour en famille', stayPool: 'Journée pool side', stayWellness: 'Yoga & bien-être', stayTeam: 'Team building', stayEvent: 'Mariage ou événement privé', stayRemote: 'Télétravail au calme',
    directEyebrow: 'Réserver en direct', directTitleA: 'Plus simple.', directTitleB: 'Plus humain.', directTitleC: 'Plus Aerys.', directText: 'Le site transforme une découverte Instagram en conversation réelle, tout en donnant aux voyageurs les informations dont ils ont besoin pour se décider.',
    locationEyebrow: 'À la rencontre de l’eau', locationTitleA: 'Somone,', locationTitleB: 'Sénégal', locationText: 'Sur l’avenue de la Lagune, entre réserve naturelle, plage et douceur de vivre.',
    reviewsEyebrow: 'Ils l’ont vécu', reviewsTitleA: 'Le luxe', reviewsTitleB: 'du calme', reviewsText: 'Les voyageurs parlent surtout de la paix du lieu, de l’espace, du jardin, de la cuisine et de l’attention de l’équipe.', verifiedReviews: '58 avis Booking.com', reviewNote: 'Avis publics paraphrasés pour cette démonstration · Notes relevées en juin 2026',
    instagramEyebrow: '@aerysvillage', instagramTitleA: 'Suivre l’univers', instagramTitleB: 'Aerys', seeInstagram: 'Voir Instagram',
    finalEyebrow: 'L’évasion commence ici', finalTitleA: 'Prêt à vivre', finalTitleB: 'Aerys Village ?', finalText: 'Envoyez une demande de séjour et laissez l’équipe vous accompagner dans l’organisation de votre parenthèse à Somone.', requestBooking: 'Demander une réservation',
    footerText: 'Une expérience unique au bord de la lagune de Somone, entre nature, confort et douceur de vivre.', explore: 'Explorer', contactUs: 'Nous contacter', conceptual: 'Site conceptuel réalisé à titre de démonstration.', conceptDigital: 'Concept digital',
  },
  en: {
    navVillage: 'The village', navStays: 'Stays', navExperiences: 'Experiences', navGallery: 'Gallery', navAccess: 'Location', book: 'Book', openMenu: 'Open menu', closeMenu: 'Close menu',
    heroLocation: 'Somone Lagoon · Senegal', heroKicker: 'A retreat between lagoon, nature and elegance', heroTitleA: 'Here, the world', heroTitleB: 'can wait.', heroText: 'Private chalets surrounded by nature, a sunlit pool and Somone Lagoon stretching to the horizon.', heroDiscover: 'Discover Aerys', arrival: 'Arrival', departure: 'Departure', chooseDate: 'Choose a date', guests: 'Guests', twoPeople: '2 guests', findStay: 'Find my stay', heroServices: 'Chalets · Poolside · Dining · Wellness', beachFive: '5 minutes from the beach',
    architectureEyebrow: 'Architecture with a soul', architectureTitleA: 'Rooted in', architectureTitleB: 'the land.', architectureLead: 'Aerys Village was shaped by responsible architecture designed to belong to Somone — not simply stand within it.', architectureText: 'Designed by Atelier Kalm and built by KOS, the retreat brings earth brick, stone and wood into a preserved landscape. Every chalet welcomes light, air and nature.', earthBrick: 'Earth brick', localStone: 'Local stone', livingWood: 'Living wood', seeExperiences: 'Explore every experience', award: 'Imagine WATA Award',
    experienceEyebrow: 'More than a night', experienceTitleA: 'A whole village', experienceTitleB: 'to experience', experienceText: 'Discover Aerys at your own pace: a poolside day, a massage, an adventure, a wedding or simply a shared table.', publicExperiences: 'Experiences publicly offered by Aerys Village',
    staysEyebrow: 'Accommodation', staysTitleA: 'Choose your', staysTitleB: 'retreat', staysText: 'Four ways to stay at Aerys, from an intimate chalet to a configuration designed for families.', publicCategories: 'Categories published by Aerys Village', socialImage: 'Temporary image from public galleries', ratesAvailability: 'Rates & availability', onRequest: 'On request', requestStay: 'Request this stay', photoPrevious: 'Previous photo', photoNext: 'Next photo', photoOf: 'Photo',
    galleryEyebrow: 'Travel journal', galleryTitleA: 'The colours', galleryTitleB: 'of Somone', galleryText: 'Water, wood, earth and light — the natural palette behind the Aerys world.', galleryNote: 'Public images used temporarily for this demo — replace with approved media before launch.',
    inquiryEyebrow: 'Your escape', inquiryTitleA: 'Let’s begin', inquiryTitleB: 'with your wishes', inquiryText: 'Share your dates and preferences. The team can suggest the stay that fits you best, without an impersonal booking journey.', whatsappPrompt: 'Prefer to speak directly?', whatsappBook: 'Book via WhatsApp', fullName: 'Full name', yourName: 'Your name', email: 'Email', phone: 'Phone / WhatsApp', desiredDates: 'Preferred dates', datesExample: 'E.g. 12 — 15 October', guestCount: 'Number of guests', stayType: 'Type of stay', choose: 'Choose', message: 'Message', messagePlaceholder: 'Tell us about your stay…', demoForm: 'Demo form — no message is sent yet.', sendRequest: 'Send my request', formSuccess: 'Thank you. In the final version, this request will be sent directly to the Aerys Village team.',
    stayCouple: 'Romantic escape', stayFamily: 'Family stay', stayPool: 'Poolside day', stayWellness: 'Yoga & wellness', stayTeam: 'Team building', stayEvent: 'Wedding or private event', stayRemote: 'Peaceful remote work',
    directEyebrow: 'Book direct', directTitleA: 'Simpler.', directTitleB: 'More personal.', directTitleC: 'More Aerys.', directText: 'The website turns an Instagram discovery into a real conversation while giving travellers the information they need to decide.',
    locationEyebrow: 'Where land meets water', locationTitleA: 'Somone,', locationTitleB: 'Senegal', locationText: 'On Avenue de la Lagune, between the nature reserve, the beach and the gentle pace of Somone.',
    reviewsEyebrow: 'Their experience', reviewsTitleA: 'The luxury', reviewsTitleB: 'of stillness', reviewsText: 'Travellers most often mention the calm, space, gardens, cuisine and the care shown by the team.', verifiedReviews: '58 Booking.com reviews', reviewNote: 'Public reviews paraphrased for this demo · Ratings checked June 2026',
    instagramEyebrow: '@aerysvillage', instagramTitleA: 'Follow the world of', instagramTitleB: 'Aerys', seeInstagram: 'View Instagram',
    finalEyebrow: 'Your escape begins here', finalTitleA: 'Ready to experience', finalTitleB: 'Aerys Village?', finalText: 'Send a stay request and let the team help shape your escape in Somone.', requestBooking: 'Request a booking',
    footerText: 'A unique experience beside Somone Lagoon, combining nature, comfort and a slower way of living.', explore: 'Explore', contactUs: 'Contact', conceptual: 'Concept website created for demonstration purposes.', conceptDigital: 'Digital concept',
  },
}

const LanguageContext = createContext(null)

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => localStorage.getItem('aerys-language') || 'fr')
  useEffect(() => {
    document.documentElement.lang = language
    localStorage.setItem('aerys-language', language)
    document.title = language === 'fr' ? 'Aerys Village — Lagune de Somone' : 'Aerys Village — Somone Lagoon'
    document.querySelector('meta[name="description"]')?.setAttribute('content', language === 'fr' ? 'Aerys Village — concept de séjour au bord de la lagune de Somone.' : 'Aerys Village — a retreat beside Somone Lagoon in Senegal.')
  }, [language])
  const value = useMemo(() => ({ language, setLanguage, t: (key) => translations[language][key] || key }), [language])
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const value = useContext(LanguageContext)
  if (!value) throw new Error('useLanguage must be used within LanguageProvider')
  return value
}

export function localize(value, language) {
  return typeof value === 'object' && value !== null ? value[language] : value
}
