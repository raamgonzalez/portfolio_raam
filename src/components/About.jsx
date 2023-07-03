
import Titles from './Titles'
import { StyledGridLine } from './ui/StyledGridLine'
import { useTranslation } from 'react-i18next'

// import { gsap } from 'gsap'
// import SplitType from 'split-type'

export default function About () {
  const [t] = useTranslation('global')

  return (
    <>
      <div id='about' />
      <section className='About'>
        <Titles title={t('about.title')} subtitle={t('about.subtitle')} />
        <StyledGridLine />
        <section className='About-container'>
          <img className='About-img' src='./media/about/profile_picture_v2.jpg' alt='Imagen de frente del desarrollador llamado Ramsés González' />
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
