import Titles from './Titles'
import { animate, motion } from 'framer-motion'

const softskills = [
  'Comunicación efectiva, colaboré en coordinación de proyectos',
  'Trabajo en equipo, trabaje en equipos de diseño y proyecto unificados',
  'Resolución de problemas, participe en mesas participativas en los barrios'
]

const container = {
  hidden: { opacity: 1, x: -200 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      delayChildren: 0.5,
      staggerChildren: 0.1
    }
  }
}

const item = {
  hidden: { y: 20, opacity: 0, x: -200 },
  visible: {
    x: 0,
    y: 0,
    opacity: 1
  }
}

export default function SkillsLight () {
  return (
    <>
      <Titles title='SOFTSKILLS' subtitle={null} />
      <motion.section
        variants={container}
        initial='hidden'
        whileInView='visible'
        className='Light'
      >
        {softskills.map((softskill, index) => (
          <motion.div key={index}>
            <span>→</span><p variants={item}>{softskill}</p>
          </motion.div>
        ))}
      </motion.section>
    </>
  )
}
