export default function Project (props) {
  const { name, description, media, soft, urlgit, urldeploy } = props.project
  return (
    <>
      <section className='Project'>
        <img className='Project-img' src={media} />
        <section className='Project-content'>
          <h4 className='Project-name'>{name.toUpperCase()}</h4>
          <p className='Project-description'>{description}</p>
          <secction className='Project-soft'>
            {soft.map((software, index) => (
              <p key={index}>{software.toUpperCase()}</p>))}
          </secction>
          <section className='Project-links'>
            <a className='Project-link' href={urldeploy} target='_blank' rel='noreferrer'>Ver proyecto</a>
            <a className={urlgit ? 'Project-link' : 'Project-link--disabled'} href={urlgit || null} target='_blank' rel='noreferrer'>{urlgit ? 'Ver código' : 'Private'}</a>
          </section>
        </section>
      </section>
    </>
  )
}
