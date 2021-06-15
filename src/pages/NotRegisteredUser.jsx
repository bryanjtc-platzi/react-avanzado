import React from 'react'
import { useAuthContext } from '../Context'
import { UserForm } from '../components/UserForm'
import { useRegister } from '../hooks/useRegister'
import { useLogin } from '../hooks/useLogin'

export const NotRegisteredUser = () => {
  const { activateUser } = useAuthContext()
  const { handleRegister, loadingRegister, errorMsgRegister } = useRegister()
  const { handleLogin, loadingLogin, errorMsgLogin } = useLogin()
  const onSubmitRegister = (formData) => {
    handleRegister(formData).then(({ data }) => {
      const { signup } = data
      activateUser(signup)
    })
  }
  const onSubmitLogin = (formData) => {
    handleLogin(formData).then(({ data }) => {
      const { login } = data
      activateUser(login)
    })
  }

  return (
    <>
      <UserForm
        disabled={loadingRegister}
        error={errorMsgRegister}
        title='Registrarse'
        onSubmit={onSubmitRegister}
      />
      <UserForm
        disabled={loadingLogin}
        error={errorMsgLogin}
        title='Iniciar Sesion'
        onSubmit={onSubmitLogin}
      />
    </>
  )
}
