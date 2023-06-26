import { useTranslation } from 'react-i18next'

export default function Project (props) {
  const [t, i18n] = useTranslation('global')
  const { name, descriptionEN, descriptionES, media, soft, urlgit, urldeploy } = props.project

  return (
    <>
      <section className='Project'>
        <img className='Project-img' src={media} />
        <section className='Project-content'>
          <h4 className='Project-name'>{name.toUpperCase()}</h4>
          <p className='Project-description'>{i18n.language === 'en' ? descriptionEN : descriptionES}</p>
          <secction className='Project-soft'>
            {soft.map((software, index) => (
              <p key={index}>{software.toUpperCase()}</p>))}
          </secction>
          <section className='Project-links'>
            <a className='Project-link' href={urldeploy} target='_blank' rel='noreferrer'>{i18n.language === 'en' ? 'View Project' : 'Ver Proyecto'}</a>
            <a className={urlgit ? 'Project-link' : 'Project-link--disabled'} href={urlgit || null} target='_blank' rel='noreferrer'>{i18n.language === 'en' ? 'View code' : 'Ver Código'}</a>
            {/* urlgit ? 'Ver código' : 'Private' */}
          </section>
        </section>
      </section>
    </>
  )
}
