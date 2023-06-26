/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-tabs */
import { useContext } from 'react'
import Project from './Project'
import { GlobalContext } from '../context/GlobalContext'
import Titles from './Titles'
import MoreProjects from './MoreProjects'
import { StyledGridLine } from './ui/StyledGridLine'
import { useTranslation } from 'react-i18next'

export default function ListOfProjects () {
  const { projects } = useContext(GlobalContext)
  const [t, i18n] = useTranslation('global')

  return (
    <>
      <section className={i18n.language === 'en' ? 'ListOfProjects' : 'ListOfProjects--margin'} id='projects'>
        <Titles title={t('projects.title')} subtitle={t('projects.subtitle')} />
        <StyledGridLine />
        {/** Falta linea grid */}
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
