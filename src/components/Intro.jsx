import { ArrowUpRight } from './Icons'
import { useLanguage } from '../i18n'

export default function Intro() {
  const { t } = useLanguage()
  return (
    <section id="village" className="overflow-hidden bg-cream py-20 md:py-28 lg:py-36">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10 lg:px-14">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_.95fr] lg:items-center lg:gap-24">
          <div className="reveal relative min-h-[540px] md:min-h-[720px]">
            <img src="/images/chalet-nature-placeholder.jpg" alt={t('architectureEyebrow')} className="absolute left-0 top-0 h-[88%] w-[82%] object-cover" />
            <img src="/images/interior-placeholder.jpg" alt={t('livingWood')} className="absolute bottom-0 right-0 h-[42%] w-[45%] border-[10px] border-cream object-cover shadow-soft md:border-[16px]" />
            <div className="absolute right-3 top-8 grid h-28 w-28 place-items-center rounded-full bg-terracotta p-4 text-center text-cream shadow-soft md:h-36 md:w-36">
              <p className="text-[8px] font-semibold uppercase leading-4 tracking-[.18em]">{t('award')}<br/><span className="mt-1 block font-display text-3xl font-normal tracking-normal">2024</span></p>
            </div>
          </div>

          <div className="reveal reveal-delay lg:py-10">
            <p className="eyebrow">{t('architectureEyebrow')}</p>
            <h2 className="section-title mt-6">{t('architectureTitleA')}<br/><em>{t('architectureTitleB')}</em></h2>
            <p className="mt-8 max-w-xl font-display text-2xl leading-snug text-forest md:text-3xl">{t('architectureLead')}</p>
            <p className="mt-7 max-w-xl text-sm font-light leading-8 text-ink/65">{t('architectureText')}</p>
            <div className="mt-9 grid grid-cols-3 border-y border-forest/10 py-6">
              {[t('earthBrick'), t('localStone'), t('livingWood')].map((material) => <div key={material} className="border-forest/10 px-2 text-center text-[9px] uppercase leading-4 tracking-[.14em] text-forest/65 [&:not(:first-child)]:border-l">{material}</div>)}
            </div>
            <a className="mt-9 inline-flex items-center gap-4 text-[10px] font-semibold uppercase tracking-[.18em] text-forest" href="#experiences">{t('seeExperiences')} <span className="round-link"><ArrowUpRight className="h-5 w-5" /></span></a>
          </div>
        </div>
      </div>
    </section>
  )
}
