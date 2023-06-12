export default function Project (props) {
  const { name, description, media, soft } = props.project
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
        </section>
      </section>
    </>
  )
}
