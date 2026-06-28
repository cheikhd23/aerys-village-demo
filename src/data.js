export const experiences = [
  { number: '01', title: { fr: 'Pool side', en: 'Poolside' }, kicker: { fr: 'Une journée au soleil', en: 'A day in the sun' }, text: { fr: 'Piscine, déjeuner et cocktails dans un décor végétal, même le temps d’une simple journée.', en: 'Pool, lunch and cocktails in a lush setting, even if you only stay for the day.' }, image: '/images/booking-pool-placeholder.jpg', className: 'md:col-span-2 md:row-span-2' },
  { number: '02', title: { fr: 'Table & cocktails', en: 'Dining & cocktails' }, kicker: { fr: 'Goûter Somone', en: 'Taste Somone' }, text: { fr: 'Petit-déjeuner continental ou halal, cuisine à la carte et verres servis au bord de l’eau.', en: 'Continental or halal breakfast, à la carte dining and drinks served beside the water.' }, image: '/images/restaurant-placeholder.jpg' },
  { number: '03', title: { fr: 'Yoga & massages', en: 'Yoga & massage' }, kicker: { fr: 'Revenir à soi', en: 'Return to yourself' }, text: { fr: 'Des parenthèses guidées pour délier le corps et ralentir l’esprit.', en: 'Guided moments designed to release the body and quiet the mind.' }, image: '/images/spa-placeholder.jpg' },
  { number: '04', title: { fr: 'Aventure', en: 'Adventure' }, kicker: { fr: 'Sortir des sentiers', en: 'Beyond the familiar' }, text: { fr: 'Balades, quad et nature autour de la lagune pour partager un autre rythme.', en: 'Nature walks and quad adventures around the lagoon, shared at a different pace.' }, image: '/images/activity-placeholder.jpg', className: 'md:col-span-2' },
  { number: '05', title: { fr: 'Célébrer', en: 'Celebrate' }, kicker: { fr: 'Les grands moments', en: 'Life’s great moments' }, text: { fr: 'Mariages et événements privés imaginés dans un cadre naturel et chaleureux.', en: 'Weddings and private events shaped within a warm natural setting.' }, image: '/images/event-placeholder.jpg' },
  { number: '06', title: { fr: 'Se retrouver', en: 'Reconnect' }, kicker: { fr: 'Équipes & tribus', en: 'Teams & families' }, text: { fr: 'Team building, télétravail inspiré et journées en famille, loin de l’agitation.', en: 'Team building, inspired remote work and family days away from the noise.' }, image: '/images/wellness-placeholder.jpg' },
]

export const rooms = [
  {
    name: { fr: 'Chalet Jardin', en: 'Garden Chalet' }, short: { fr: 'Jardin', en: 'Garden' }, eyebrow: { fr: 'Au plus près de la nature', en: 'Close to nature' },
    text: { fr: 'Un cocon indépendant ouvert sur la végétation, pour des réveils calmes au chant des oiseaux.', en: 'A private cocoon opening onto the gardens, where mornings begin with birdsong.' },
    features: [{ fr: 'Terrasse privée', en: 'Private terrace' }, { fr: 'Vue jardin', en: 'Garden view' }, { fr: 'Petit-déjeuner inclus', en: 'Breakfast included' }], capacity: { fr: '2 voyageurs', en: '2 guests' },
    images: ['/images/booking-terrace-placeholder.jpg', '/images/chalet-nature-placeholder.jpg', '/images/booking-bathroom-placeholder.jpg'],
  },
  {
    name: { fr: 'Chalet Lagune', en: 'Lagoon Chalet' }, short: { fr: 'Lagune', en: 'Lagoon' }, eyebrow: { fr: 'L’eau comme horizon', en: 'Water on the horizon' },
    text: { fr: 'Une adresse intime tournée vers la lagune, pensée pour savourer la lumière de Somone du matin au soir.', en: 'An intimate retreat facing the lagoon, made for enjoying Somone’s light from morning to evening.' },
    features: [{ fr: 'Vue lagune', en: 'Lagoon view' }, { fr: 'Balcon', en: 'Balcony' }, { fr: 'Machine à café', en: 'Coffee machine' }], capacity: { fr: '2 voyageurs', en: '2 guests' },
    images: ['/images/booking-pool-villa-placeholder.jpg', '/images/lagoon-aerial-placeholder.jpg', '/images/booking-pool-building-placeholder.jpg'],
  },
  {
    name: { fr: 'Master Bedroom Lagune', en: 'Lagoon Master Bedroom' }, short: { fr: 'Master', en: 'Master' }, eyebrow: { fr: 'Plus d’espace, plus de silence', en: 'More space, deeper calm' },
    text: { fr: 'Une chambre généreuse à la literie confortable, avec terrasse et atmosphère feutrée.', en: 'A generous room with comfortable bedding, a terrace and a softly composed atmosphere.' },
    features: [{ fr: 'Lit king-size', en: 'King-size bed' }, { fr: 'Climatisation', en: 'Air conditioning' }, { fr: 'Salle de bain privée', en: 'Private bathroom' }], capacity: { fr: '2 voyageurs', en: '2 guests' },
    images: ['/images/booking-bedroom-queen-placeholder.jpg', '/images/room-placeholder.jpg', '/images/booking-bathroom-placeholder.jpg'],
  },
  {
    name: { fr: 'Master + chambre attenante', en: 'Master + adjoining room' }, short: { fr: 'Famille', en: 'Family' }, eyebrow: { fr: 'À vivre ensemble', en: 'Made to share' },
    text: { fr: 'La configuration la plus ample pour partager Aerys en famille ou entre proches, sans renoncer à son intimité.', en: 'The most spacious configuration for sharing Aerys with family or friends while keeping your privacy.' },
    features: [{ fr: 'Deux espaces nuit', en: 'Two sleeping areas' }, { fr: 'Idéal en famille', en: 'Ideal for families' }, { fr: 'Terrasse', en: 'Terrace' }], capacity: { fr: 'Jusqu’à 4 voyageurs', en: 'Up to 4 guests' },
    images: ['/images/booking-bedroom-window-placeholder.jpg', '/images/booking-room-service-placeholder.jpg', '/images/interior-placeholder.jpg'],
  },
]

export const gallery = [
  { src: '/images/lagoon-aerial-placeholder.jpg', alt: { fr: 'Vue aérienne de la lagune de Somone', en: 'Aerial view of Somone Lagoon' }, className: 'md:col-span-2 md:row-span-2' },
  { src: '/images/booking-terrace-placeholder.jpg', alt: { fr: 'Terrasse privée d’un chalet', en: 'Private chalet terrace' } },
  { src: '/images/booking-breakfast-placeholder.jpg', alt: { fr: 'Petit-déjeuner servi en chambre', en: 'Breakfast served in the room' } },
  { src: '/images/booking-pool-placeholder.jpg', alt: { fr: 'Piscine extérieure au cœur du village', en: 'Outdoor pool at the heart of the village' } },
  { src: '/images/restaurant-placeholder.jpg', alt: { fr: 'Assiette du restaurant', en: 'A dish from the restaurant' } },
  { src: '/images/event-placeholder.jpg', alt: { fr: 'Dîner en plein air sous les lumières', en: 'Outdoor dinner beneath warm lights' }, className: 'md:col-span-2' },
]

export const testimonials = [
  { quote: { fr: 'Un petit coin de paradis paisible, avec des chambres remarquables et une équipe réellement attentionnée.', en: 'A peaceful little paradise, with remarkable rooms and a genuinely attentive team.' }, author: 'Matthieu', stay: { fr: 'France · Avis Booking.com', en: 'France · Booking.com review' } },
  { quote: { fr: 'Des mini-villas spacieuses, une piscine agréable et des espaces communs décorés avec beaucoup de goût.', en: 'Spacious mini-villas, a lovely pool and shared spaces decorated with real taste.' }, author: 'Gwladys', stay: { fr: 'France · Avis Booking.com', en: 'France · Booking.com review' } },
  { quote: { fr: 'Le calme, le jardin, le chant des oiseaux au petit-déjeuner et un accueil impeccable.', en: 'The calm, the gardens, birdsong at breakfast and an impeccable welcome.' }, author: 'Daphnis', stay: { fr: 'France · Avis Booking.com', en: 'France · Booking.com review' } },
]

export const proofPoints = [
  { value: '8,9', suffix: '/10', label: { fr: 'Note Booking.com', en: 'Booking.com rating' } },
  { value: '9,6', suffix: '/10', label: { fr: 'Propreté', en: 'Cleanliness' } },
  { value: '9,1', suffix: '/10', label: { fr: 'Emplacement', en: 'Location' } },
  { value: '58', suffix: '', label: { fr: 'Avis vérifiés', en: 'Verified reviews' } },
]
