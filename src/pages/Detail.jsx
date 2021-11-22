import React from 'react'
import { PhotoCardWithQuery } from '../container/PhotoCardWithQuery'
import { useParams } from 'react-router-dom'

export const Detail = (props) => {
  const { id } = useParams(props)

  return (<PhotoCardWithQuery id={id} />)
}
