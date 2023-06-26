
import Titles from './Titles'
import { StyledGridLine } from './ui/StyledGridLine'
import { useTranslation } from 'react-i18next'

// import { gsap } from 'gsap'
// import SplitType from 'split-type'

export default function About () {
  const [t] = useTranslation('global')
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
        <Titles title={t('about.title')} subtitle={t('about.subtitle')} />
        <StyledGridLine />
        <section className='About-container'>
          <img className='About-img' src='./media/about/profile_picture_v2.jpg' />
          <p className='About-p'>
            {t('about.description.p01')}
            <span>{t('about.description.p02')}</span>
            {t('about.description.p03')}
            <span>{t('about.description.p04')}</span>
          </p>
        </section>
      </section>
    </>
  )
}
