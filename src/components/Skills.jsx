import React from 'react'
import Titles from './Titles'
import SkillsSofts from './SkillsSofts'
import SkillsLight from './SkillsLight'
import { StyledGridLine } from './ui/StyledGridLine'

export default function Skills () {
  return (
    <>
      <div id='skills' />
      <section className='Skills'>
        <Titles title='SKILLS' subtitle='SOFT & SOFT' />
        <StyledGridLine />
      </section>
      <SkillsSofts />
      <SkillsLight />
    </>
  )
}
