import React from 'react'
import { PhotoCard } from '../components/PhotoCard'
import { useGetSinglePhoto } from '../hooks/useGetSinglePhoto'

const renderProp = ({ id }) => {
  const { loading, error, data } = useGetSinglePhoto(id)
  if (error) {
    return <p>Internal Server Error</p>
  }
  if (loading) {
    return <p>Loading...</p>
  }
  return <PhotoCard {...data.photo} />
}
export const PhotoCardWithQuery = ({ id }) => renderProp({ id })
