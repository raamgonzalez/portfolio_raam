/* eslint-disable no-tabs */
/* eslint-disable no-mixed-spaces-and-tabs */
import { useContext, useState } from 'react'
import { StyledGridLine } from './ui/GridLine'
import { GlobalContext } from '../context/GlobalContext'
import { LinkedStyled } from './ui/LinksStyled'

function Projects () {
  const { projects } = useContext(GlobalContext)
  const [isOpen, setIsOpen] = useState(false)

  const handleClickOpen = () => {
    return setIsOpen(!isOpen)
  }

  return (
    <>
      <div class='Projects'>
        <h4 className='Projects-h4'>MORE PROJECTS</h4>
        <button onClick={handleClickOpen} className={`Projects-button ${isOpen ? 'Projects-button-open' : null}`}><img src='./media/ui/ArrowDown.png' /></button>
      </div>
      <div className={`${isOpen ? 'Projects-container--open' : 'Projects-container--close'}`}>
        {
				projects.map(project => (
				  project.state && !project.important
				  ? (
  <section key={project.id} className='Projects-project'>
    <h4>{project.name.toUpperCase()}</h4>
    <p>{project.description}</p>
    <img src={project.media} />
    <section className='Projects-project-buttons'>
      <LinkedStyled href={project.urldeploy} target='_blank' rel='noreferrer'>Demo</LinkedStyled>
      <LinkedStyled href={project.urlgit} target='_blank' rel='noreferrer'>Github</LinkedStyled>
    </section>
  </section>)
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
