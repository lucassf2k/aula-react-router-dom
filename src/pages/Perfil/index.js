import { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

export default function Perfil() {
  const { id } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    setTimeout(() => {
      navigate('/')
    }, 2000) // 2s
  })

  return (
    <>
      <h1>Perfil</h1>
      <img src={`https://github.com/${id}.png`} alt="ddd" />
    </>
  )
}