import { ArrowUpRight } from './Icons'
import { useLanguage } from '../i18n'

const posts = [
  '/images/village-aerial-placeholder.jpg',
  '/images/cocktail-placeholder.jpg',
  '/images/wellness-placeholder.jpg',
  '/images/activity-placeholder.jpg',
  '/images/nature-trail-placeholder.jpg',
]

export default function InstagramPreview() {
  const { language, t } = useLanguage()
  return (
    <section className="overflow-hidden bg-[#eee6d9] py-20 md:py-28">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10 lg:px-14">
        <div className="reveal flex flex-col justify-between gap-7 md:flex-row md:items-end">
          <div><p className="eyebrow">{t('instagramEyebrow')}</p><h2 className="section-title mt-5">{t('instagramTitleA')}<br/><em>{t('instagramTitleB')}</em></h2></div>
          <a className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[.16em] text-forest" href="https://www.instagram.com/aerysvillage/" target="_blank" rel="noreferrer">{t('seeInstagram')} <ArrowUpRight /></a>
        </div>
      </div>
      <div className="reveal mt-12 grid grid-cols-2 gap-2 px-2 sm:grid-cols-3 md:grid-cols-5">
        {posts.map((post, index) => <a key={post} href="https://www.instagram.com/aerysvillage/" target="_blank" rel="noreferrer" className={`group relative aspect-[4/5] overflow-hidden ${index === 4 ? 'hidden md:block' : ''}`} aria-label={t('seeInstagram')}><img className="h-full w-full object-cover transition duration-700 group-hover:scale-105" src={post} alt={language === 'fr' ? 'Aperçu du profil Instagram Aerys Village' : 'Aerys Village Instagram preview'} loading="lazy"/><div className="absolute inset-0 grid place-items-center bg-forest/0 text-white opacity-0 transition group-hover:bg-forest/35 group-hover:opacity-100"><ArrowUpRight className="h-7 w-7"/></div></a>)}
      </div>
    </section>
  )
}
