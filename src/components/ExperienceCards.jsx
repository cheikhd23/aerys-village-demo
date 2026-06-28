import { experiences } from '../data'
import { ArrowUpRight } from './Icons'
import { localize, useLanguage } from '../i18n'

export default function ExperienceCards() {
  const { language, t } = useLanguage()
  return (
    <section id="experiences" className="section-pad bg-[#f3ecdf] text-forest">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10 lg:px-14">
        <div className="reveal grid gap-8 border-b border-forest/10 pb-10 lg:grid-cols-[1.2fr_.8fr] lg:items-end">
          <div><p className="eyebrow text-terracotta">{t('experienceEyebrow')}</p><h2 className="section-title mt-5 text-forest">{t('experienceTitleA')}<br/><em>{t('experienceTitleB')}</em></h2></div>
          <div className="lg:pb-2"><p className="max-w-lg text-sm font-light leading-7 text-ink/60">{t('experienceText')}</p><p className="mt-4 text-[9px] uppercase tracking-[.18em] text-terracotta/70">{t('publicExperiences')}</p></div>
        </div>

        <div className="mt-10 grid auto-rows-[320px] gap-3 md:grid-cols-4 md:auto-rows-[300px]">
          {experiences.map((item) => (
            <article key={item.number} className={`reveal experience-tile group relative overflow-hidden ${item.className || ''}`}>
              <img src={item.image} alt="" className="absolute inset-0 h-full w-full object-cover transition duration-1000 group-hover:scale-110" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/95 via-ink/15 to-ink/10 transition group-hover:from-ink/90" />
              <span className="absolute left-5 top-5 text-[9px] tracking-[0.24em] text-white/60">{item.number}</span>
              <span className="absolute right-5 top-5 grid h-10 w-10 place-items-center rounded-full border border-white/30 text-white transition duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:bg-white group-hover:text-forest"><ArrowUpRight className="h-4 w-4" /></span>
              <div className="absolute inset-x-6 bottom-6">
                <p className="mb-2 text-[8px] uppercase tracking-[.2em] text-sand">{localize(item.kicker, language)}</p>
                <h3 className="font-display text-3xl md:text-4xl">{localize(item.title, language)}</h3>
                <p className="experience-copy mt-3 max-w-sm text-xs font-light leading-6 text-white/75 md:max-h-0 md:overflow-hidden md:opacity-0 md:transition-all md:duration-500 md:group-hover:max-h-24 md:group-hover:opacity-100">{localize(item.text, language)}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
