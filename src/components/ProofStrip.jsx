import { proofPoints } from '../data'
import { localize, useLanguage } from '../i18n'

export default function ProofStrip() {
  const { language } = useLanguage()
  return (
    <section className="relative z-10 bg-[#21473b] text-white" aria-label={language === 'fr' ? 'Notes clients vérifiées' : 'Verified guest ratings'}>
      <div className="mx-auto grid max-w-[1440px] grid-cols-2 px-5 md:grid-cols-4 md:px-10 lg:px-14">
        {proofPoints.map((point, index) => (
          <div key={`${point.value}-${index}`} className={`reveal flex min-h-28 flex-col justify-center border-white/10 py-6 md:min-h-36 md:px-8 ${index % 2 ? 'border-l' : ''} ${index > 1 ? 'border-t md:border-t-0' : ''} ${index ? 'md:border-l' : ''}`}>
            <p className="font-display text-4xl leading-none text-sand md:text-5xl">{language === 'en' ? point.value.replace(',', '.') : point.value}<span className="ml-1 text-lg text-white/50">{point.suffix}</span></p>
            <p className="mt-2 text-[9px] uppercase tracking-[.2em] text-white/50">{localize(point.label, language)}</p>
          </div>
        ))}
      </div>
      <p className="absolute bottom-2 right-4 text-[7px] uppercase tracking-[.16em] text-white/25 md:right-8">{language === 'fr' ? 'Données publiques Booking.com · Juin 2026' : 'Public Booking.com data · June 2026'}</p>
    </section>
  )
}
