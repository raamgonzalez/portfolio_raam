import { useTranslation } from 'react-i18next'
import Balancer from 'react-wrap-balancer'

export default function Project (props) {
  const [t, i18n] = useTranslation('global')
  const { name, descriptionEN, descriptionES, media, mediavideo, soft, urlgit, urldeploy } = props.project

  return (
    <>
      <section className='Project'>
        {
        mediavideo
          ? (
            <video className='Project-video' autoPlay loop muted>
              <source src={mediavideo} type='video/mp4' />
            </video>
            )
          : (<img className='Project-img' src={media} alt={`Imagen de proyecto de nombre ${name}`} />)
        }
        <section className='Project-content'>
          <h4 className='Project-name'>{name.toUpperCase()}</h4>
          <Balancer className='Project-description'>{i18n.language === 'en' ? descriptionEN : descriptionES}</Balancer>
          <secction className='Project-soft'>
            {soft.map((software, index) => (
              <p key={index}>{software.toUpperCase()}</p>))}
          </secction>
          <section className='Project-links'>
            <a className='Project-link' href={urldeploy} target='_blank' rel='noreferrer'>{i18n.language === 'en' ? 'View Project' : 'Ver Proyecto'}</a>
            <a className={urlgit ? 'Project-link' : 'Project-link--disabled'} href={urlgit || '#'} target='_blank' rel='noreferrer'>{i18n.language === 'en' ? 'View code' : 'Ver Código'}</a>
          </section>
        </section>
      </section>
    </>
  )
}
