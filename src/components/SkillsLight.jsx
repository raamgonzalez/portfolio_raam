import Titles from './Titles'
import { StyledGridLine } from './ui/StyledGridLine'

export default function SkillsLight () {
  return (
    <>
      <Titles title='*SOFTSKILLS' subtitle={null} />
      <section className='Light'>
        <div className='Light-01'>
          <StyledGridLine variant='vertical' />
          <p>Comunicación efectiva, colaboré en coordinación de proyectos</p>
        </div>
        <div className='Light-02'>
          <StyledGridLine variant='vertical' />
          <p>Trabajo en equipo, trabaje en equipos de diseño y proyecto unificados</p>
        </div>
        <div className='Light-03'>
          <p>Resolución de problemas, participe en mesas participativas en los barrios</p>
          <StyledGridLine variant='verticalcorrection' />
        </div>
      </section>
    </>
  )
}
