import React from 'react'
import useFormUser from '../../hooks/useFormUser'
import { Error, Form, Input } from './styles'
import { SubmitButton } from '../SubmitButton'

export const UserForm = ({ error, disabled, onSubmit, title }) => {
  const initialState = {
    email: '',
    password: ''
  }
  const [value, onChange] = useFormUser(initialState)
  const { email, password } = value
  const handleSubmit = (event) => {
    event.preventDefault()
    onSubmit({ email, password })
  }

  return (
    <>
      <h2>{title}</h2>
      <Form disabled={disabled} onSubmit={handleSubmit}>
        <Input
          disabled={disabled}
          placeholder='Email'
          name='email'
          value={email}
          onChange={onChange}
        />
        <Input
          disabled={disabled}
          type='password'
          placeholder='Password'
          name='password'
          value={password}
          onChange={onChange}
        />
        <SubmitButton disabled={disabled} type='submit'>
          {title}
        </SubmitButton>
      </Form>
      {error && <Error>{error}</Error>}
    </>
  )
}
