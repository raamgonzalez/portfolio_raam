import React from 'react'
import Titles from './Titles'
import SkillsSofts from './SkillsSofts'
import SkillsLight from './SkillsLight'
import { StyledGridLine } from './ui/StyledGridLine'
import { useTranslation } from 'react-i18next'

export default function Skills () {
  const [t] = useTranslation('global')

  return (
    <>
      <div id='skills' />
      <section className='Skills'>
        <Titles title={t('skills.title')} subtitle={t('skills.subtitle')} />
        <StyledGridLine />
      </section>
      <SkillsSofts />
      <SkillsLight />
    </>
  )
}
