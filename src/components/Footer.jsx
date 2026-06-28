import { BrandMark, ArrowUpRight } from './Icons'
import { useLanguage } from '../i18n'

export default function Footer() {
  const { language, t } = useLanguage()
  return (
    <footer className="bg-[#0f2720] px-5 pb-7 pt-16 text-white md:px-10 lg:px-14">
      <div className="mx-auto max-w-[1320px]">
        <div className="grid gap-12 border-b border-white/10 pb-14 md:grid-cols-2 lg:grid-cols-[1.5fr_.7fr_.7fr]">
          <div><BrandMark light/><p className="mt-7 max-w-sm text-sm font-light leading-7 text-white/60">{t('footerText')}</p><p className="mt-5 font-display text-xl text-sand">Somone · {language === 'fr' ? 'Sénégal' : 'Senegal'}</p></div>
          <div><p className="footer-title">{t('explore')}</p><nav className="mt-5 flex flex-col gap-3 text-sm text-white/60"><a href="#village">{t('navVillage')}</a><a href="#sejours">{t('navStays')}</a><a href="#experiences">{t('navExperiences')}</a><a href="#galerie">{t('navGallery')}</a><a href="#acces">{t('navAccess')}</a></nav></div>
          <div><p className="footer-title">{t('contactUs')}</p><div className="mt-5 flex flex-col gap-3 text-sm text-white/60"><a className="flex items-center gap-2" href="https://www.instagram.com/aerysvillage/" target="_blank" rel="noreferrer">Instagram <ArrowUpRight /></a><a href="https://wa.me/221711186767" target="_blank" rel="noreferrer">WhatsApp</a><a href="mailto:bonjour@aerysvillage.sn">bonjour@aerysvillage.sn</a></div></div>
        </div>
        <div className="flex flex-col gap-3 pt-6 text-[9px] uppercase tracking-[.16em] text-white/35 md:flex-row md:items-center md:justify-between"><p>© {new Date().getFullYear()} Aerys Village — {t('conceptDigital')}</p><p>{t('conceptual')}</p></div>
      </div>
    </footer>
  )
}
