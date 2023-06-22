import { useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext'
import { motion } from 'framer-motion'

export default function SkillsSofts () {
  const { softwares } = useContext(GlobalContext)

  // const random = (min, max) => Math.floor(Math.random() * (max - min)) + min
  // const randomX = () => random(0, 40)
  // const randomY = () => random(0, 70)
  // const translateXY = () => random(-50, 50)
  // console.log(randomX(), randomY())

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.1
      }
    }
  }

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  }

  return (
    <motion.section
      variants={container}
      initial='hidden'
      whileInView='visible'
      className='Skills-container'
    >
      {softwares.map(({ id, img, title, state }) => (
        state === true &&
          <motion.div
            className='Skills-icons tooltip' data-tip={title.toUpperCase()} key={id}
          >
            <motion.img
              className='Skills-img' variants={item} data-tip={title} src={img} alt={`Icono de software ${title}`}
            />
          </motion.div>
      ))}
    </motion.section>
  )
}
