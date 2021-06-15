import React from 'react'
import { useGetFavorites } from '../hooks/useGetFavorites'
import { ListOfFavs } from '../components/ListOfFavs'

export const renderProp = ({ id }) => {
  const { loading, data, error } = useGetFavorites(id)
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error...</p>
  const { favs } = data

  return <ListOfFavs favs={favs} />
}

export const FavsWithQuery = ({ id }) => renderProp({ id })
