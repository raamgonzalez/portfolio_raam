/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-tabs */
import { useContext } from 'react'
import Project from './Project'
import { GlobalContext } from '../context/GlobalContext'
// import IconsSoft from './IconsSoft'
import Titles from './Titles'
import MoreProjects from './MoreProjects'

export default function ListOfProjects () {
  const { projects } = useContext(GlobalContext)

  return (
    <>
      <section className='ListOfProjects' id='projects'>
        <Titles title='PROJECTS' subtitle='LIBRARY' />
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
      {/* <IconsSoft /> */}
      <MoreProjects />
    </>
  )
}