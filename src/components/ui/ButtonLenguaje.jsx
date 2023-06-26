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
      <button onClick={(event) => { i18n.changeLanguage('es'); handleChangeActiveLink(event) }} className={activeLink === 'ES' ? 'Button_Language-button active' : 'Button_Language-button blur'}>ES</button>
      <span> / </span>
      <button onClick={(event) => { i18n.changeLanguage('en'); handleChangeActiveLink(event) }} className={activeLink === 'EN' ? 'Button_Language-button active' : 'Button_Language-button blur'}>EN</button>
    </div>
  )
}
