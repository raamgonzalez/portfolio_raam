import NavBar from './NavBar'
import ButtonLenguaje from './ui/ButtonLenguaje'
import ButtonResume from './ui/ButtonResume'

export default function Header () {
  return (
    <>
      <section className='Header'>
        <ButtonLenguaje />
        <NavBar />
        <ButtonResume />
      </section>

    </>
  )
}
