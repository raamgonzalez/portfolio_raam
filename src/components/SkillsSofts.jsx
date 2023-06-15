import { useContext, useRef } from 'react'
import { GlobalContext } from '../context/GlobalContext'
import { motion } from 'framer-motion'

export default function SkillsSofts () {
  const { softwares } = useContext(GlobalContext)
  const constraintsRef = useRef(null)

  // const random = (min, max) => Math.floor(Math.random() * (max - min)) + min
  // const randomX = () => random(0, 40)
  // const randomY = () => random(0, 70)
  // const translateXY = () => random(-50, 50)
  // console.log(randomX(), randomY())

  return (
    <motion.section
      ref={constraintsRef}
      className='Skills-container'
    >
      {softwares.map(({ id, img, title, state }) => (
        state === true &&
          <motion.div
            className='Skills-icons tooltip' data-tip={title.toUpperCase()} key={id}
          >
            <motion.img
              className='Skills-img' data-tip={title} src={img} alt={`Icono de software ${title}`}
            />
          </motion.div>
      ))}
    </motion.section>
  )
}
