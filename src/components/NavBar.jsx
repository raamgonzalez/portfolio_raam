import { useState } from 'react'
import { useTranslation } from 'react-i18next'

export default function NavBar () {
  const [t] = useTranslation('global')
  const [activeLink, setActiveLink] = useState(null)

  const handleClick = (event) => {
    // Actualizar el estado del enlace activo
    setActiveLink(event.target.getAttribute('href'))
  }

  activeLink === null && setActiveLink('#about')

  return (
    <ul className='NavBar'>
      <li className='NavBar-li'>
        <a onClick={handleClick} className={activeLink === '#about' ? 'NavBar-a active' : 'NavBar-a blur-[1px]'} href='#about'>
          {t('navbar.about')}
        </a>
      </li>
      <li className='NavBar-li'>
        <a onClick={handleClick} className={activeLink === '#projects' ? 'NavBar-a active' : 'NavBar-a blur-[1px]'} href='#projects'>
          {t('navbar.projects')}
        </a>
      </li>
      <li className='NavBar-li'>
        <a a onClick={handleClick} className={activeLink === '#skills' ? 'NavBar-a active' : 'NavBar-a blur-[1px]'} href='#skills'>
          {t('navbar.skills')}
        </a>
      </li>
    </ul>
  )
}
