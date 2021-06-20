import React from 'react'
import { ListOfCategories } from '../components/ListOfCategories'
import { ListOfPhotoCards } from '../components/ListOfPhotoCards'
import { Layout } from '../components/Layout'

const HomePage = (props) => {
  const {
    match: {
      params: { id }
    }
  } = props
  return (
    <Layout
      title='Tu app de fotos de mascotas'
      subtitle='Con Petgram puedes encontrar fotos de animales domésticos muy bonitos'
    >
      <ListOfCategories />
      <ListOfPhotoCards categoryId={id} />
    </Layout>
  )
}

export const Home = React.memo(HomePage, (prevProps, props) => {
  const {
    match: {
      params: { id }
    }
  } = props
  const {
    match: {
      params: { id: previousID }
    }
  } = prevProps
  return previousID === id
})
