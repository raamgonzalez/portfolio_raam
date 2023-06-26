import Titles from './Titles'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

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
  const [t] = useTranslation('global')

  const softskills = [
  `${t('softskills.phrase01')}`,
  `${t('softskills.phrase02')}`,
  `${t('softskills.phrase03')}`
  ]

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
