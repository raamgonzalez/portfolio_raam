import { useContext, useRef } from 'react'
import { GlobalContext } from '../context/GlobalContext'
import { motion } from 'framer-motion'

export default function SkillsSofts () {
  const { softwares } = useContext(GlobalContext)
  const constraintsRef = useRef(null)

  return (
    <motion.section
      ref={constraintsRef}
      className='Skills-container'
    >
      {softwares.map(({ id, img, title, state }) => (
        state === true &&
          <div
            className='Skills-icon' key={id}
          >
            <div>
              <motion.img
                whileHover={{ scale: 1.2 }}
                whileDrag={{ scale: 1.2 }}
                drag
                dragConstraints={constraintsRef}
                dragMomentum
                dragPropagation
                dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
                className='Skills-img' data-tip={title} src={img} alt={`Icono de software ${title}`}
              />
            </div>
          </div>
      ))}
    </motion.section>
  )
}
