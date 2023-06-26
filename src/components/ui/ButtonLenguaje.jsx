import { useTranslation } from 'react-i18next'

export default function ButtonLenguaje () {
  const [t, i18n] = useTranslation('global')
  return (
    <div className='Button_Language'>
      <button className='Button_Language-button' onClick={() => i18n.changeLanguage('es')}>ES</button>
      <span> / </span>
      <button className='Button_Language-button' onClick={() => i18n.changeLanguage('en')}>EN</button>
    </div>
  )
}
