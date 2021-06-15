import React from 'react'
import { useAuthContext } from '../Context'
import { SubmitButton } from '../components/SubmitButton'
import { useApolloClient } from '@apollo/client'

export const User = () => {
  const { removeAuth } = useAuthContext()
  const client = useApolloClient()
  function remove () {
    client.resetStore()
    removeAuth()
  }
  return (
    <>
      <h1>User</h1>
      <SubmitButton onClick={remove}>Cerrar Sesion</SubmitButton>
    </>
  )
}
