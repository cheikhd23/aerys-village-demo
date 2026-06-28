import { testimonials } from '../data'
import { localize, useLanguage } from '../i18n'

export default function Testimonials() {
  const { language, t } = useLanguage()
  return (
    <section className="section-pad bg-cream">
      <div className="mx-auto max-w-[1320px] px-5 md:px-10 lg:px-14">
        <div className="reveal grid gap-9 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
          <div><p className="eyebrow">{t('reviewsEyebrow')}</p><h2 className="section-title mt-5">{t('reviewsTitleA')}<br/><em>{t('reviewsTitleB')}</em></h2></div>
          <div className="flex flex-col justify-between gap-6 border-l border-forest/10 pl-7 sm:flex-row sm:items-end md:pl-10">
            <p className="max-w-lg text-sm font-light leading-7 text-ink/60">{t('reviewsText')}</p>
            <div className="shrink-0 text-left sm:text-right"><p className="font-display text-6xl leading-none text-forest">{language === 'fr' ? '8,9' : '8.9'}<span className="text-2xl text-terracotta">/10</span></p><p className="mt-2 text-[8px] uppercase tracking-[.2em] text-ink/45">{t('verifiedReviews')}</p></div>
          </div>
        </div>

        <div className="mt-12 grid gap-px bg-forest/10 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <blockquote key={item.author} className={`reveal flex min-h-[340px] flex-col justify-between p-8 md:p-10 ${index === 1 ? 'bg-forest text-white' : 'bg-[#ebe2d4] text-forest'}`}>
              <div><div className="flex gap-1 text-xs text-gold" aria-hidden="true">✦ ✦ ✦</div><p className="mt-8 font-display text-2xl leading-snug md:text-[2rem]">“{localize(item.quote, language)}”</p></div>
              <footer className={`mt-8 border-t pt-5 text-[9px] uppercase leading-5 tracking-[.17em] ${index === 1 ? 'border-white/10 text-white/50' : 'border-forest/10 text-ink/45'}`}><span className="text-current">{item.author}</span><br/>{localize(item.stay, language)}</footer>
            </blockquote>
          ))}
        </div>
        <p className="mt-5 text-center text-[8px] uppercase tracking-[.17em] text-ink/35">{t('reviewNote')}</p>
      </div>
    </section>
  )
}
