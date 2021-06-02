import React from 'react'
import { PhotoCard } from '../components/PhotoCard'
import { useGetSinglePhoto } from '../hooks/useGetSinglePhoto'

const renderProp = ({ id }) => {
  const { loading, error, data } = useGetSinglePhoto(id)
  if (error) {
    return <h2>Internal Server Error</h2>
  }
  if (loading) {
    return <h2>Loading...</h2>
  }
  return data
}
export const PhotoCardWithQuery = ({ id }) => {
  const data = renderProp({ id })
  return <PhotoCard {...data.photo} />
}
