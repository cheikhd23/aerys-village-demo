import { gallery } from '../data'
import { localize, useLanguage } from '../i18n'

export default function Gallery() {
  const { language, t } = useLanguage()
  return (
    <section id="galerie" className="section-pad bg-cream">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10 lg:px-14">
        <div className="reveal flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div><p className="eyebrow">{t('galleryEyebrow')}</p><h2 className="section-title mt-5">{t('galleryTitleA')}<br/><em>{t('galleryTitleB')}</em></h2></div>
          <p className="max-w-sm text-sm font-light leading-7 text-ink/60">{t('galleryText')}</p>
        </div>
        <div className="mt-12 grid auto-rows-[280px] grid-cols-2 gap-3 md:auto-rows-[340px] md:grid-cols-4">
          {gallery.map((image, index) => <figure key={image.src} className={`reveal group relative overflow-hidden ${image.className || ''} ${index === 1 || index === 4 ? 'translate-y-5' : ''}`}>
            <img src={image.src} alt={localize(image.alt, language)} className="h-full w-full object-cover transition duration-1000 group-hover:scale-105" loading="lazy" />
            <div className="absolute inset-0 bg-forest/0 transition group-hover:bg-forest/10" />
          </figure>)}
        </div>
        <p className="mt-8 text-center text-[9px] uppercase tracking-[.2em] text-ink/45">{t('galleryNote')}</p>
      </div>
    </section>
  )
}
