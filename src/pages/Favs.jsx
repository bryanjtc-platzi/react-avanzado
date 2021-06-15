import React from 'react'
import { FavsWithQuery } from '../container/FavsWithQuery'

export const Favs = (props) => {
  const {
    match: {
      params: { id }
    }
  } = props
  return (
    <>
      <h1>Favs</h1>
      <FavsWithQuery id={id} />
    </>
  )
}
