export default function Titles ({ title, subtitle }) {
  return (
    <>
      <h3 className='Titles-h3'>{subtitle}</h3>
      <h2 className='Titles-h2'>*{title}</h2>
    </>
  )
}
