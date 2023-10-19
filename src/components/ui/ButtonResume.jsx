import { useTranslation } from 'react-i18next'

export default function ButtonResume () {
  const [t] = useTranslation('global')
  return (
    <div className='Button_Resume'>
      <a href='https://drive.google.com/drive/folders/1gq0y2bh9FNEKOcVpbHzWSxbL9VTl4Z4d?usp=sharing' target='_noblank' className='Button_Resume-button'>{t('navbar.resume')}</a>
    </div>
  )
}
