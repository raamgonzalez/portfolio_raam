/* eslint-disable no-tabs */
/* eslint-disable no-mixed-spaces-and-tabs */
import { useContext, useState } from 'react'
import { StyledGridLine } from './ui/StyledGridLine'
import { GlobalContext } from '../context/GlobalContext'
import { motion } from 'framer-motion'

function Projects () {
  const { projects } = useContext(GlobalContext)
  const [isOpen, setIsOpen] = useState(false)

  const scrollingProjects = {
    hidden: {
      y: -100
    },
    visible: {
      y: 0,
      x: 0,
      transition: {
        type: 'bounce',
        duration: 0.3
      }
    }
  }

  const handleClickOpen = () => {
    return setIsOpen(!isOpen)
  }

  const filterProjects = projects.filter((project) => project.state && !project.important)

  return (
    <>
      <div class='Projects'>
        <h4 className='Projects-h4'>MORE PROJECTS</h4>
        <button onClick={handleClickOpen} className={`Projects-button ${isOpen ? 'Projects-button-open' : null}`}><img src='./media/ui/ArrowDown.png' /></button>
      </div>
      <div className={`${isOpen ? 'Projects-container--open' : 'Projects-container--close'}`}>
        <section className='Projects_project-description'>
          <p>INDEX</p>
          <p>PROJECT</p>
          <p>DESCRIPTION</p>
          <p>IMAGE</p>
          <p>LINKS</p>
        </section>
        {
				filterProjects.map((project, index) => (
				  project.state && !project.important
				  ? (
  <motion.section
    variants={scrollingProjects}
    initial='hidden'
    whileInView='visible'
    key={project.id} className='Projects_project'
  >
    <span className=''>{(index + 1).toString().padStart(2, '0')}</span>
    <h4>{project.name.toUpperCase()}</h4>
    <p>{project.description}</p>
    <img src={project.media} />
    <section className='Projects_project-buttons'>
      <a className='Projects_project-link' href={project.urldeploy} target='_blank' rel='noreferrer'>Ver proyecto</a>
      <a className='Projects_project-link' href={project.urlgit} target='_blank' rel='noreferrer'>{project.urlgit ? 'Ver código' : 'Private'}</a>
    </section>
  </motion.section>)
				    : null
				))
		}
      </div>
    </>
  )
}

export default function MoreProjects () {
  return (
    <>
      <section className='More_Projects'>
        <Projects />
      </section>
      <StyledGridLine />
    </>
  )
}
