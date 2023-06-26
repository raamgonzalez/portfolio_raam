import { useTranslation } from 'react-i18next'

export default function ButtonResume () {
  const [t] = useTranslation('global')
  return (
    <div className='Button_Resume'>
      <a href='https://drive.google.com/file/d/1aI-hshr_2jV2ZgWau88vC3uiy1FWOhbb/view?usp=sharing' target='_noblank' className='Button_Resume-button'>{t('navbar.resume')}</a>
    </div>
  )
}
