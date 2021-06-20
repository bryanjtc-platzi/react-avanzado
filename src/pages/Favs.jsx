import React from 'react'
import { FavsWithQuery } from '../container/FavsWithQuery'
import { Layout } from '../components/Layout'

export const Favs = (props) => {
  const {
    match: {
      params: { id }
    }
  } = props
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
