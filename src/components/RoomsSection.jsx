import { useState } from 'react'
import { rooms } from '../data'
import { ArrowRight } from './Icons'
import { localize, useLanguage } from '../i18n'

export default function RoomsSection() {
  const { language, t } = useLanguage()
  const [activeIndex, setActiveIndex] = useState(0)
  const [activePhotoIndex, setActivePhotoIndex] = useState(0)
  const room = rooms[activeIndex]
  const activeImage = room.images[activePhotoIndex]
  const selectRoom = (index) => { setActiveIndex(index); setActivePhotoIndex(0) }
  const changePhoto = (direction) => setActivePhotoIndex((current) => (current + direction + room.images.length) % room.images.length)

  return (
    <section id="sejours" className="section-pad overflow-hidden bg-[#f7f1e8]">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10 lg:px-14">
        <div className="reveal flex flex-col justify-between gap-8 border-b border-forest/10 pb-9 lg:flex-row lg:items-end">
          <div><p className="eyebrow">{t('staysEyebrow')}</p><h2 className="section-title mt-5">{t('staysTitleA')}<br/><em>{t('staysTitleB')}</em></h2></div>
          <div className="max-w-lg lg:text-right"><p className="text-sm font-light leading-7 text-ink/65">{t('staysText')}</p><p className="mt-3 text-[9px] uppercase tracking-[.18em] text-ink/40">{t('publicCategories')}</p></div>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[.42fr_1.18fr_.7fr] lg:gap-0">
          <div className="reveal flex overflow-x-auto border-y border-forest/10 lg:block lg:border-y-0 lg:border-r">
            {rooms.map((item, index) => (
              <button
                type="button"
                key={item.images[0]}
                onClick={() => selectRoom(index)}
                aria-pressed={activeIndex === index}
                className={`group min-w-[160px] border-r border-forest/10 px-4 py-5 text-left transition lg:block lg:min-w-0 lg:w-full lg:border-b lg:border-r-0 lg:px-0 lg:py-8 ${activeIndex === index ? 'text-forest' : 'text-forest/40 hover:text-forest/70'}`}
              >
                <span className="flex items-center gap-4"><span className={`text-[9px] tracking-[.2em] ${activeIndex === index ? 'text-terracotta' : ''}`}>0{index + 1}</span><span className="font-display text-xl lg:text-2xl">{localize(item.short, language)}</span></span>
                <span className={`mt-3 hidden h-px bg-terracotta transition-all duration-500 lg:block ${activeIndex === index ? 'w-16' : 'w-0 group-hover:w-8'}`} />
              </button>
            ))}
          </div>

          <div className="reveal relative min-h-[500px] overflow-hidden bg-forest lg:min-h-[680px]">
            <img key={activeImage} src={activeImage} alt={`${localize(room.name, language)} — ${t('photoOf')} ${activePhotoIndex + 1}`} className="room-image-enter absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-forest/45 via-transparent to-transparent" />
            <div className="absolute right-5 top-5 flex gap-2">
              <button type="button" onClick={() => changePhoto(-1)} aria-label={t('photoPrevious')} className="grid h-11 w-11 place-items-center rounded-full border border-white/50 bg-white/15 text-white backdrop-blur transition hover:bg-white hover:text-forest">←</button>
              <button type="button" onClick={() => changePhoto(1)} aria-label={t('photoNext')} className="grid h-11 w-11 place-items-center rounded-full border border-white/50 bg-white/15 text-white backdrop-blur transition hover:bg-white hover:text-forest">→</button>
            </div>
            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between text-white">
              <div><p className="text-[9px] uppercase tracking-[.2em] text-white/75">{t('socialImage')}</p><div className="mt-3 flex gap-2">{room.images.map((image, index) => <button key={image} type="button" onClick={() => setActivePhotoIndex(index)} aria-label={`${t('photoOf')} ${index + 1}`} aria-pressed={activePhotoIndex === index} className={`h-1 rounded-full transition-all ${activePhotoIndex === index ? 'w-8 bg-white' : 'w-4 bg-white/40'}`} />)}</div></div>
              <span className="font-display text-3xl text-white/50">{activePhotoIndex + 1} / {room.images.length}</span>
            </div>
          </div>

          <div className="reveal reveal-delay flex flex-col justify-between bg-cream p-7 md:p-10 lg:p-12">
            <div>
              <p className="text-[9px] font-semibold uppercase tracking-[.22em] text-terracotta">{localize(room.eyebrow, language)}</p>
              <h3 className="mt-5 font-display text-4xl leading-[.95] text-forest md:text-5xl">{localize(room.name, language)}</h3>
              <p className="mt-7 text-sm font-light leading-7 text-ink/65">{localize(room.text, language)}</p>
              <p className="mt-7 border-l border-gold pl-4 font-display text-xl text-forest">{localize(room.capacity, language)}</p>
              <ul className="mt-8 border-t border-forest/10">
                {room.features.map((feature) => <li key={localize(feature, language)} className="flex items-center justify-between border-b border-forest/10 py-4 text-xs text-ink/65"><span>{localize(feature, language)}</span><span className="text-gold">✦</span></li>)}
              </ul>
            </div>
            <div className="mt-10">
              <p className="text-[8px] uppercase tracking-[.2em] text-ink/40">{t('ratesAvailability')}</p>
              <p className="mt-2 font-display text-xl text-forest">{t('onRequest')}</p>
              <a href="#reservation" className="button-dark mt-6 w-full">{t('requestStay')} <ArrowRight /></a>
            </div>
          </div>
        </div>

        <div className="reveal mt-8 grid grid-cols-2 border-y border-forest/10 md:grid-cols-3 lg:grid-cols-6">
          {(language === 'fr' ? ['Piscine extérieure', 'Petit-déjeuner', 'Wi-Fi gratuit', 'Parking privé', 'Conciergerie', 'Navette sur demande'] : ['Outdoor pool', 'Breakfast', 'Free Wi-Fi', 'Private parking', 'Concierge', 'Shuttle on request']).map((service) => <div key={service} className="flex min-h-20 items-center justify-center border-forest/10 px-3 text-center text-[9px] uppercase leading-4 tracking-[.14em] text-forest/60 even:border-l md:border-l first:border-l-0">{service}</div>)}
        </div>
      </div>
    </section>
  )
}
