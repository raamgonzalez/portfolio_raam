/* eslint-disable no-tabs */
/* eslint-disable no-mixed-spaces-and-tabs */
import { useContext, useState } from 'react'
import { StyledGridLine } from './ui/StyledGridLine'
import { GlobalContext } from '../context/GlobalContext'
import { motion } from 'framer-motion'
import ArrowButton from './ui/ArrowButton'
import { useTranslation } from 'react-i18next'
import Balancer from 'react-wrap-balancer'

function Projects () {
  const { projects } = useContext(GlobalContext)
  const [isOpen, setIsOpen] = useState(false)
  const [t, i18n] = useTranslation('global')

  const scrollingProjects = {
    hidden: {
      opacity: 0,
      y: -100
    },
    visible: {
      opacity: 1,
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
      <div className='Projects'>
        <h4 className='Projects-h4'>{t('projects.moreprojects')}</h4>
        <button aria-label='Button Arrow' onClick={handleClickOpen} className={`Projects-button ${isOpen ? 'Projects-button-open' : null}`}><ArrowButton /></button>
      </div>
      <div className={`${isOpen ? 'Projects-container--open' : 'Projects-container--close'}`}>
        <section className='Projects_project-description'>
          <p>{t('projects.description.index')}</p>
          <p>{t('projects.description.project')}</p>
          <p className='Projects_project-description--displaydescrip'>{t('projects.description.description')}</p>
          <p className='Projects_project-description--displayimage'>{t('projects.description.image')}</p>
          <p className='Projects_project-description--displaylinks'>LINKS</p>
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
    <Balancer className='Projects_project-p'>{i18n.language === 'en' ? project.descriptionEN : project.descriptionES}</Balancer>
    {
        project.mediavideo
          ? (
            <video className='Project-project-video' poster={project.media} autoPlay loop muted>
              <source src={project.mediavideo} type='video/mp4' />
            </video>
            )
          : (<img className='Project-project-img' src={project.media} alt={`Imagen de proyecto de nombre ${project.name}`} />)
    }
    <section className='Projects_project-buttons'>
      <a className='Projects_project-link' href={project.urldeploy} target='_blank' rel='noreferrer'>{i18n.language === 'en' ? 'View Project' : 'Ver Proyecto'}</a>
      <a className='Projects_project-link' href={project.urlgit} target='_blank' rel='noreferrer'>{i18n.language === 'en' ? 'View code' : 'Ver Código'}</a>
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
