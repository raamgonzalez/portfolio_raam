import { useContext } from 'react'
import { StyledGridLine } from './ui/StyledGridLine'
import { GlobalContext } from '../context/GlobalContext'

export default function Footer () {
  const { rrss } = useContext(GlobalContext)

  console.log(rrss)

  return (
    <>
      <StyledGridLine />
      <section className='Footer'>
        <img className='Footer-img' src='./media/about/portfolio_brand.svg' alt='Imagen del logo del desarollador Ramsés González' />
        <div className='Footer-socials'>
          {rrss.map(({ name, state, href, id }) => state && <a className='Footer-a' key={id} href={href}>{name.toUpperCase()}</a>)}
        </div>
      </section>
    </>
  )
}
