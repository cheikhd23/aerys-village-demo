import { ArrowRight } from './Icons'
import { useLanguage } from '../i18n'

export default function FinalCTA() {
  const { t } = useLanguage()
  return (
    <section className="relative min-h-[620px] overflow-hidden bg-forest text-white">
      <img src="/images/ecolodge-aerial-placeholder.jpg" alt={t('heroKicker')} className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
      <div className="absolute inset-0 bg-forest/45"/><div className="absolute inset-0 bg-gradient-to-t from-forest/80 via-transparent to-forest/10"/>
      <div className="relative mx-auto flex min-h-[620px] max-w-[1100px] flex-col items-center justify-center px-5 py-24 text-center">
        <p className="eyebrow text-sand">{t('finalEyebrow')}</p>
        <h2 className="mt-6 font-display text-[clamp(3.3rem,7vw,7rem)] leading-[.9] tracking-[-.04em]">{t('finalTitleA')}<br/><em className="text-sand">{t('finalTitleB')}</em></h2>
        <p className="mt-7 max-w-2xl text-sm font-light leading-7 text-white/80">{t('finalText')}</p>
        <a className="button-primary mt-9" href="#reservation">{t('requestBooking')} <ArrowRight /></a>
      </div>
    </section>
  )
}
