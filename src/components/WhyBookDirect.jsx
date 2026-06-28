import { useLanguage } from '../i18n'

export default function WhyBookDirect() {
  const { language, t } = useLanguage()
  const reasons = language === 'fr' ? [['01', 'Réponse personnalisée'], ['02', 'Informations fiables sur votre séjour'], ['03', 'Demandes spéciales possibles'], ['04', 'Contact direct avec l’équipe'], ['05', 'Expériences organisées sur mesure']] : [['01', 'A personal response'], ['02', 'Reliable stay information'], ['03', 'Special requests welcomed'], ['04', 'Direct contact with the team'], ['05', 'Tailored experiences']]
  return (
    <section className="section-pad bg-[#eee6d9]">
      <div className="mx-auto grid max-w-[1320px] gap-14 px-5 md:px-10 lg:grid-cols-[.9fr_1.1fr] lg:gap-24 lg:px-14">
        <div className="reveal"><p className="eyebrow">{t('directEyebrow')}</p><h2 className="section-title mt-5">{t('directTitleA')}<br/>{t('directTitleB')}<br/><em>{t('directTitleC')}</em></h2><p className="mt-7 max-w-md text-sm font-light leading-7 text-ink/65">{t('directText')}</p></div>
        <div className="reveal reveal-delay border-t border-forest/20">
          {reasons.map(([number, label]) => <div key={number} className="group flex items-center gap-6 border-b border-forest/20 py-6 md:py-8"><span className="text-[10px] tracking-widest text-terracotta">{number}</span><h3 className="font-display text-2xl text-forest transition group-hover:translate-x-2 md:text-3xl">{label}</h3></div>)}
        </div>
      </div>
    </section>
  )
}
