import React from 'react'
import { FavsWithQuery } from '../container/FavsWithQuery'
import { Layout } from '../components/Layout'
import { useParams } from 'react-router-dom'

export const Favs = (props) => {
  const { id } = useParams(props)
  return (
    <Layout
      title='Tus favoritos'
      subtitle='Aquí puedes encontrar tus favoritos'
    >
      <h1>Favs</h1>
      <FavsWithQuery id={id} />
    </Layout>
  )
}
