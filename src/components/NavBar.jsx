import React, { useState } from 'react'

export default function NavBar () {
  const [activeLink, setActiveLink] = useState(null)

  const handleClick = (event) => {
    // Actualizar el estado del enlace activo
    setActiveLink(event.target.getAttribute('href'))
  }

  return (
    <ul className='NavBar'>
      <li className='NavBar-li'><a onClick={handleClick} className={activeLink === '#about' ? 'active' : 'blur'} href='#about'>ABOUT ME</a></li>
      <li className='NavBar-li'><a onClick={handleClick} className={activeLink === '#projects' ? 'active ' : 'blur'} href='#projects'>PROJECTS</a></li>
      <li className='NavBar-li'><a a onClick={handleClick} className={activeLink === '#skills' ? 'active ' : 'blur'} href='#skills'>SKILLS</a></li>
    </ul>
  )
}
