export default function Project (props) {
  const { name, description, media, soft } = props.project
  return (
    <>
      <section className='Project'>
        <img className='Project-img' src={media} />
        <section className='Project-description'>
          <h4>{name.toUpperCase()}</h4>
          <p>{description.toUpperCase()}</p>
          <secction className='Project-soft'>
            {soft.map((software, index) => (
              <p key={index}>{software.toUpperCase()}</p>))}
          </secction>
        </section>
      </section>
    </>
  )
}
