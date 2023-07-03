/* eslint-disable no-unused-vars */
import { useState } from 'react'
import { useTranslation } from 'react-i18next'

export default function ButtonLenguaje () {
  const [activeLink, setActiveLink] = useState('EN')
  const [t, i18n] = useTranslation('global')

  const handleChangeActiveLink = (event) => {
    setActiveLink(event.target.innerText)
  }

  return (
    <div className='Button_Language'>
      <button aria-label='Button Spanish' onClick={(event) => { i18n.changeLanguage('es'); handleChangeActiveLink(event) }} className={activeLink === 'ES' ? 'Button_Language-button active' : 'Button_Language-button blur-[1px]'}>ES</button>
      <span> / </span>
      <button aria-label='Button English' onClick={(event) => { i18n.changeLanguage('en'); handleChangeActiveLink(event) }} className={activeLink === 'EN' ? 'Button_Language-button active' : 'Button_Language-button blur-[1px]'}>EN</button>
    </div>
  )
}
