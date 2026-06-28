import { useEffect, useState } from 'react'
import { BrandMark, MenuIcon } from './Icons'
import { useLanguage } from '../i18n'

export default function Navbar() {
  const { language, setLanguage, t } = useLanguage()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const links = [[t('navVillage'), '#village'], [t('navStays'), '#sejours'], [t('navExperiences'), '#experiences'], [t('navGallery'), '#galerie'], [t('navAccess'), '#acces']]

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled || open ? 'bg-cream/95 py-3 text-forest shadow-sm backdrop-blur-xl' : 'bg-transparent py-5 text-white'}`}>
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-5 md:px-10 lg:px-14">
        <BrandMark light={!scrolled && !open} />
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Navigation principale">
          {links.map(([label, href]) => <a key={href} className="nav-link" href={href}>{label}</a>)}
        </nav>
        <div className="hidden items-center gap-6 lg:flex">
          <div className="flex items-center text-[10px] font-semibold tracking-[0.22em]" aria-label="Language"><button type="button" aria-pressed={language === 'fr'} className={language === 'fr' ? 'opacity-100' : 'opacity-45'} onClick={() => setLanguage('fr')}>FR</button><span className="mx-2 opacity-40">|</span><button type="button" aria-pressed={language === 'en'} className={language === 'en' ? 'opacity-100' : 'opacity-45'} onClick={() => setLanguage('en')}>EN</button></div>
          <a className={`rounded-full border px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.18em] transition ${scrolled ? 'border-forest bg-forest text-white hover:bg-pine' : 'border-white/50 bg-white/10 text-white hover:bg-white hover:text-forest'}`} href="#reservation">{t('book')}</a>
        </div>
        <button className="p-2 lg:hidden" aria-label={open ? t('closeMenu') : t('openMenu')} aria-expanded={open} onClick={() => setOpen((value) => !value)}><MenuIcon open={open} /></button>
      </div>
      <div className={`overflow-hidden transition-all duration-500 lg:hidden ${open ? 'max-h-[520px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <nav className="flex flex-col gap-5 px-6 pb-8 pt-8" aria-label="Navigation mobile">
          {links.map(([label, href]) => <a key={href} className="font-display text-3xl" href={href} onClick={() => setOpen(false)}>{label}</a>)}
          <div className="mt-2 flex items-center justify-between border-t border-forest/10 pt-6">
            <span className="flex items-center gap-3 text-xs tracking-[0.2em]"><button type="button" aria-pressed={language === 'fr'} className={language === 'fr' ? '' : 'opacity-40'} onClick={() => setLanguage('fr')}>FR</button><span className="opacity-30">|</span><button type="button" aria-pressed={language === 'en'} className={language === 'en' ? '' : 'opacity-40'} onClick={() => setLanguage('en')}>EN</button></span>
            <a className="rounded-full bg-forest px-5 py-3 text-xs uppercase tracking-wider text-white" href="#reservation" onClick={() => setOpen(false)}>{t('book')}</a>
          </div>
        </nav>
      </div>
    </header>
  )
}
