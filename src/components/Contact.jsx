import ArrowButton from './ui/ArrowButton'

export default function Contact () {
  return (
    <div className='Contact'>
      <ArrowButton />
      <div className='Contact-links'>
        <a className='Contact-a mt-3' href='https://www.linkedin.com/in/ramsesoctaviogonzalez/' target='_blank' rel='noreferrer'>LINKEDIN</a>
        <a className='Contact-a mt-3' href='mailto:gz.ramses.oc@gmail.com' target='_blank' rel='noreferrer'>EMAIL</a>
      </div>
    </div>
  )
}
