import { useState } from 'react'
import { ArrowUpRight } from './Icons'
import { useLanguage } from '../i18n'

export default function BookingInquiry() {
  const { t } = useLanguage()
  const [sent, setSent] = useState(false)
  const fields = [
    { label: t('fullName'), name: 'name', type: 'text', placeholder: t('yourName') },
    { label: t('email'), name: 'email', type: 'email', placeholder: 'you@email.com' },
    { label: t('phone'), name: 'phone', type: 'tel', placeholder: '+221 …' },
    { label: t('desiredDates'), name: 'dates', type: 'text', placeholder: t('datesExample') },
    { label: t('guestCount'), name: 'guests', type: 'number', placeholder: '2' },
  ]
  const onSubmit = (event) => {
    event.preventDefault()
    setSent(true)
  }

  return (
    <section id="reservation" className="section-pad relative overflow-hidden bg-[#315c4d] text-white">
      <div className="absolute -right-32 top-12 h-[420px] w-[420px] rounded-full border border-white/10"/><div className="absolute -right-10 top-28 h-[260px] w-[260px] rounded-full border border-gold/20"/>
      <div className="relative mx-auto grid max-w-[1320px] gap-14 px-5 md:px-10 lg:grid-cols-[.75fr_1.25fr] lg:gap-24 lg:px-14">
        <div className="reveal">
          <p className="eyebrow text-sand">{t('inquiryEyebrow')}</p>
          <h2 className="section-title mt-5 text-white">{t('inquiryTitleA')}<br/><em className="text-sand">{t('inquiryTitleB')}</em></h2>
          <p className="mt-7 max-w-md text-sm font-light leading-7 text-white/70">{t('inquiryText')}</p>
          <div className="mt-10 border-t border-white/10 pt-8">
            <p className="text-xs leading-6 text-white/55">{t('whatsappPrompt')}</p>
            <a className="mt-4 inline-flex items-center gap-3 font-display text-2xl text-sand" href="https://wa.me/221711186767" target="_blank" rel="noreferrer">{t('whatsappBook')} <ArrowUpRight /></a>
          </div>
        </div>
        <form className="reveal reveal-delay rounded-sm bg-cream p-6 text-ink md:p-10" onSubmit={onSubmit}>
          <div className="grid gap-x-6 gap-y-7 sm:grid-cols-2">
            {fields.map((field) => <label key={field.name} className="form-label">{field.label}<input className="form-input" name={field.name} type={field.type} placeholder={field.placeholder} required /></label>)}
            <label className="form-label">{t('stayType')}<select className="form-input" name="stay" defaultValue=""><option value="" disabled>{t('choose')}</option><option>{t('stayCouple')}</option><option>{t('stayFamily')}</option><option>{t('stayPool')}</option><option>{t('stayWellness')}</option><option>{t('stayTeam')}</option><option>{t('stayEvent')}</option><option>{t('stayRemote')}</option></select></label>
            <label className="form-label sm:col-span-2">{t('message')}<textarea className="form-input min-h-28 resize-none" name="message" placeholder={t('messagePlaceholder')} /></label>
          </div>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-xs text-[10px] leading-5 text-ink/45">{t('demoForm')}</p>
            <button className="button-dark" type="submit">{t('sendRequest')} <ArrowUpRight /></button>
          </div>
          {sent && <p role="status" className="mt-5 border-l-2 border-gold pl-4 text-sm text-forest">{t('formSuccess')}</p>}
        </form>
      </div>
    </section>
  )
}
