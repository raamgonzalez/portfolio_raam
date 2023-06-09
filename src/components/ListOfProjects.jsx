/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-tabs */
import { useContext } from 'react'
import Project from './Project'
import { GlobalContext } from '../context/GlobalContext'
import IconsSoft from './IconsSoft'

export default function ListOfProjects () {
  const { projects } = useContext(GlobalContext)

  return (
    <>
      <section className='ListOfProjects' id='projects'>
        <h2 className='ListOfProjects-title'>PROJECTS</h2>
        <section className='ListOfProjects-container'>
          {
  			projects.map((project) => (
  			  project.state && project.important
  			  	? <Project key={project.id} project={project} />
  			    : null
  			))
  		}
        </section>
      </section>
      <IconsSoft />
    </>
  )
}
