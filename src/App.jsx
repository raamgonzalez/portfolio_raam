import './App.css'
import About from './componentss/About'
import Header from './componentss/Header'
import Home from './componentss/Home'
import Marquee from './componentss/Marquee'

function App () {
  return (
    <>
      <Marquee />
      <section className='wrapper'>
        <Header />
        <Home />
        <About />
      </section>
    </>
  )
}

export default App
