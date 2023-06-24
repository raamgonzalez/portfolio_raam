import Titles from './Titles'
import { StyledGridLine } from './ui/StyledGridLine'
import { gsap } from 'gsap'
import SplitType from 'split-type'

export default function About () {
  // const ourText = new SplitType('p.About-p', { types: 'chars' })
  // const chars = ourText.chars

  // gsap.fromTo(
  //   chars,
  //   {
  //     y: 100,
  //     opacity: 0
  //   },
  //   {
  //     y: 0,
  //     opacity: 1,
  //     stagger: 0.05,
  //     duration: 0.5,
  //     ease: 'power4.out'
  //   }
  // )

  return (
    <>
      <div id='about' />
      <section className='About'>
        <Titles title='ABOUT' subtitle='FRONT END & ARCHITECT' />
        <StyledGridLine />
        <section className='About-container'>
          <img className='About-img' src='./media/about/profile_picture_v2.jpg' />
          <p className='About-p'>
            HI THERE! MY NAME IS RAMSÉS BUT SOME PEOPLE CALL ME RAAM.
            I'M AN ARCHITECT WITH A PASSION FOR PROGRAMMING.
            I'M EXCITED TO START MY CAREER IN THIS FIELD.
            THROUGH <span>MY EXPERIENCE</span> IN <span>ARCHITECTURE</span>,
            I HAVE ACQUIRED SKILLS IN <span>DESIGN</span>, <span>PLANNING</span>,
            AND <span>SOLVING COMPLEX PROBLEMS</span>
          </p>
        </section>
      </section>
    </>
  )
}
