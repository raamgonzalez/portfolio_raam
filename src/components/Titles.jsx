import { StyledGridLine } from './ui/GridLine'

export default function Titles ({ title, subtitle }) {
  return (
    <>
      <h2 className='Titles-h2'>*{title}</h2>
      <h3 className='Titles-h3'>{subtitle}</h3>
      <StyledGridLine />
    </>
  )
}
