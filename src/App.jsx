import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './components/Home'
import ListOfProjects from './components/ListOfProjects'
import Marquee from './components/Marquee'
import Skills from './components/Skills'
// import ToolTip from './components/ui/ToolTip'
import GlobalContext from './context/GlobalContext'
import { Provider } from 'react-wrap-balancer'

function App () {
  return (
    <>
      <Provider>
        <GlobalContext>
          <Marquee />
          <section className='wrapper'>
            <Header />
            <Home />
            {/* <ToolTip /> */}
            <About />
            <ListOfProjects />
            <Skills />
            <Contact />
            <Footer />
          </section>
        </GlobalContext>
      </Provider>
    </>
  )
}

export default App
