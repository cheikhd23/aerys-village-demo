import { ArrowRight, MapPin } from './Icons'
import { useLanguage } from '../i18n'

const heroScenes = [
  { image: '/images/lagoon-aerial-placeholder.jpg', position: 'center 60%' },
  { image: '/images/chalet-nature-placeholder.jpg', position: 'center 48%' },
  { image: '/images/pool-placeholder.jpg', position: 'center 52%' },
]

export default function Hero() {
  const { t } = useLanguage()
  return (
    <section id="accueil" className="relative flex min-h-[820px] items-end overflow-hidden bg-forest text-white md:min-h-screen">
      <div className="absolute inset-0" aria-hidden="true">
        {heroScenes.map((scene, index) => (
          <div
            key={scene.image}
            className={`hero-scene hero-scene-${index + 1} absolute inset-0 bg-cover`}
            style={{ backgroundImage: `url(${scene.image})`, backgroundPosition: scene.position }}
          />
        ))}
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,22,17,.66)_0%,rgba(7,22,17,.26)_52%,rgba(7,22,17,.06)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(7,22,17,.68)_0%,transparent_58%)]" />
      <div className="pointer-events-none absolute inset-4 border border-white/10 md:inset-6" />
      <div className="hero-grain pointer-events-none absolute inset-0 opacity-20" />

      <div className="relative mx-auto w-full max-w-[1440px] px-5 pb-5 pt-32 md:px-10 md:pb-7 lg:px-14">
        <div className="max-w-5xl">
          <div className="mb-6 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.3em] text-sand"><MapPin className="h-4 w-4" /> {t('heroLocation')}</div>
          <p className="mb-4 max-w-xl font-display text-2xl italic text-white/80 md:text-3xl">{t('heroKicker')}</p>
          <h1 className="font-display text-[clamp(4.2rem,9vw,9rem)] font-medium leading-[.78] tracking-[-0.055em]">{t('heroTitleA')}<br/><em className="font-normal text-sand">{t('heroTitleB')}</em></h1>
          <div className="mt-7 flex max-w-3xl flex-col justify-between gap-6 md:flex-row md:items-end">
            <p className="max-w-xl text-sm font-light leading-7 text-white/80 md:text-base">{t('heroText')}</p>
            <a className="inline-flex shrink-0 items-center gap-3 text-[10px] font-semibold uppercase tracking-[.18em] text-white" href="#village">{t('heroDiscover')} <span className="grid h-11 w-11 place-items-center rounded-full border border-white/40"><ArrowRight /></span></a>
          </div>
        </div>

        <a href="#reservation" className="hero-booking mt-9 grid overflow-hidden rounded-sm border border-white/20 bg-[#f0e7d8]/95 text-forest shadow-2xl backdrop-blur-xl sm:grid-cols-[1fr_1fr_1fr_auto] md:mt-10">
          <div className="hero-booking-field"><span>{t('arrival')}</span><strong>{t('chooseDate')}</strong></div>
          <div className="hero-booking-field"><span>{t('departure')}</span><strong>{t('chooseDate')}</strong></div>
          <div className="hero-booking-field"><span>{t('guests')}</span><strong>{t('twoPeople')}</strong></div>
          <div className="flex min-h-16 items-center justify-center gap-3 bg-forest px-7 text-[10px] font-semibold uppercase tracking-[.16em] text-white transition hover:bg-pine sm:min-h-20">{t('findStay')} <ArrowRight /></div>
        </a>

        <div className="mt-4 flex items-center justify-between text-[9px] uppercase tracking-[.19em] text-white/50">
          <p>{t('heroServices')}</p>
          <p className="hidden sm:block">{t('beachFive')}</p>
        </div>
      </div>
    </section>
  )
}
