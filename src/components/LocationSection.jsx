import { MapPin } from './Icons'
import { useLanguage } from '../i18n'

export default function LocationSection() {
  const { language, t } = useLanguage()
  const distances = language === 'fr' ? [['1,2 km', 'Plage de Somone'], ['9,4 km', 'Golf de Saly'], ['19 km', 'Réserve de Popenguine'], ['28 km', 'Aéroport AIBD']] : [['1.2 km', 'Somone Beach'], ['9.4 km', 'Saly Golf Course'], ['19 km', 'Popenguine Reserve'], ['28 km', 'AIBD Airport']]
  return (
    <section id="acces" className="bg-cream pb-20 pt-20 md:pb-28 md:pt-28">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10 lg:px-14">
        <div className="reveal grid overflow-hidden bg-forest text-white lg:grid-cols-[.78fr_1.22fr]">
          <div className="flex flex-col justify-between p-8 md:p-12 lg:p-14">
            <div><p className="eyebrow text-sand">{t('locationEyebrow')}</p><h2 className="mt-6 font-display text-5xl leading-[.9] md:text-7xl">{t('locationTitleA')}<br/><em className="text-sand">{t('locationTitleB')}</em></h2><p className="mt-7 max-w-sm text-sm font-light leading-7 text-white/70">{t('locationText')}</p></div>
            <div className="mt-12 grid grid-cols-2 border-t border-white/10">
              {distances.map(([distance, place], index) => <div key={place} className={`py-5 ${index % 2 ? 'border-l border-white/10 pl-5' : 'pr-5'} ${index > 1 ? 'border-t border-white/10' : ''}`}><p className="font-display text-2xl text-sand">{distance}</p><p className="mt-1 text-[8px] uppercase leading-4 tracking-[.14em] text-white/45">{place}</p></div>)}
            </div>
            <p className="mt-7 flex gap-3 text-xs text-white/60"><MapPin className="h-4 w-4 shrink-0 text-sand"/>Av. de la Lagune, 23000 La Somone</p>
          </div>
          <div className="relative min-h-[520px] bg-sand/20 grayscale-[.2]">
            <iframe className="absolute inset-0 h-full w-full border-0 opacity-90" title={language === 'fr' ? 'Carte de Somone, Sénégal' : 'Map of Somone, Senegal'} loading="lazy" referrerPolicy="no-referrer-when-downgrade" src="https://www.google.com/maps?q=Av.%20de%20la%20Lagune%2C%20Somone%2C%20Senegal&z=13&output=embed" />
            <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10" />
          </div>
        </div>
      </div>
    </section>
  )
}
