import { useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext'

export default function IconsSoft () {
  const { projects, softwares } = useContext(GlobalContext)

  const mapProjectsSoft = projects.map((project) => (
    project.soft.map((software) => (
      { software, id: project.id }
    )
    )))

  // const filterSofts = softwares.map((software) => (
  //   mapProjectsSoft.filter((project) => (project.software === software.title) ? { ...project.software, software } : null)))

  return (
    <div>IconsSoft</div>
  )
}
