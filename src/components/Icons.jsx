import { useLanguage } from '../i18n'

export function ArrowUpRight({ className = 'h-4 w-4' }) {
  return <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M7 17 17 7M8 7h9v9" /></svg>
}

export function ArrowRight({ className = 'h-4 w-4' }) {
  return <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M5 12h14M14 7l5 5-5 5" /></svg>
}

export function MapPin({ className = 'h-5 w-5' }) {
  return <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.4"/></svg>
}

export function MenuIcon({ open }) {
  return <span className="relative block h-4 w-6"><span className={`absolute left-0 top-1 h-px w-6 bg-current transition ${open ? 'translate-y-1 rotate-45' : ''}`} /><span className={`absolute bottom-1 left-0 h-px w-6 bg-current transition ${open ? '-translate-y-1 -rotate-45' : ''}`} /></span>
}

export function BrandMark({ light = false }) {
  const { language } = useLanguage()
  return <a href="#accueil" aria-label={language === 'fr' ? 'Aerys Village, retour à l’accueil' : 'Aerys Village, back to home'} className={`group inline-flex items-center gap-3 ${light ? 'text-cream' : 'text-forest'}`}>
    <svg className="h-9 w-9" viewBox="0 0 40 40" fill="none" aria-hidden="true"><path d="M8 28 20 6l3.4 6.3L15 28H8Zm13.3 0 5-9.1L31 28h-9.7Z" fill="currentColor"/><path d="m25 7 7 13h-5.8L22 12.2 25 7Z" fill="currentColor" opacity=".55"/></svg>
    <span className="leading-none"><span className="block font-display text-xl font-semibold tracking-[0.08em]">AERYS</span><span className="mt-1 block text-[8px] uppercase tracking-[0.42em] opacity-75">Village · Somone</span></span>
  </a>
}
