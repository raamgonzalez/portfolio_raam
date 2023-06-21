import React, { useContext } from 'react'

import { GlobalContext } from '../context/GlobalContext'

export default function Contact () {
  const { rrss } = useContext(GlobalContext)
  console.log(rrss)
  return (
    <div className='Contact'>
      {/* <p className='Contact-p'>CONTACT ME</p>
      <StyledGridLine /> */}
      <div className='Contact-links'>
        <a className='Contact-a' href='https://www.linkedin.com/in/ramsesoctaviogonzalez/' target='_blank' rel='noreferrer'>LINKEDIN</a>
        <a className='Contact-a' href='mailto:gz.ramses.oc@gmail.com' target='_blank' rel='noreferrer'>EMAIL</a>
      </div>
    </div>
  )
}
