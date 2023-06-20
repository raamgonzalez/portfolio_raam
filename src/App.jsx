import './App.css'
import About from './components/About'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './components/Home'
import ListOfProjects from './components/ListOfProjects'
import Marquee from './components/Marquee'
import Skills from './components/Skills'
// import ToolTip from './components/ui/ToolTip'
import GlobalContext from './context/GlobalContext'

function App () {
  return (
    <>
      <GlobalContext>
        <Marquee />
        <section className='wrapper'>
          <Header />
          <Home />
          {/* <ToolTip /> */}
          <About />
          <ListOfProjects />
          <Skills />
          <Footer />
        </section>
      </GlobalContext>
    </>
  )
}

export default App
