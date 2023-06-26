import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'

export default function NavBar () {
  const [t] = useTranslation('global')
  const [activeLink, setActiveLink] = useState(null)

  const handleClick = (event) => {
    // Actualizar el estado del enlace activo
    setActiveLink(event.target.getAttribute('href'))
  }

  return (
    <ul className='NavBar'>
      <li className='NavBar-li'><a onClick={handleClick} className={activeLink === '#about' ? 'active' : ''} href='#about'>{t('navbar.about')}</a></li>
      <li className='NavBar-li'><a onClick={handleClick} className={activeLink === '#projects' ? 'active ' : ''} href='#projects'>{t('navbar.projects')}</a></li>
      <li className='NavBar-li'><a a onClick={handleClick} className={activeLink === '#skills' ? 'active ' : ''} href='#skills'>{t('navbar.skills')}</a></li>
    </ul>
  )
}
