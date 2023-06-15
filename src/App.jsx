import './App.css'
import About from './components/About'
import Header from './components/Header'
import Home from './components/Home'
import ListOfProjects from './components/ListOfProjects'
import Marquee from './components/Marquee'
import Skills from './components/Skills'
// import Test from './components/Test'
import GlobalContext from './context/GlobalContext'

function App () {
  return (
    <>
      <GlobalContext>
        <Marquee />
        <section className='wrapper'>
          <Header />
          <Home />
          {/* <Test /> */}
          <About />
          <ListOfProjects />
          <Skills />
        </section>
      </GlobalContext>
    </>
  )
}

export default App
