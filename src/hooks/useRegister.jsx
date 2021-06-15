import { useMutation, gql } from '@apollo/client'

const REGISTER = gql`
  mutation signup($input: UserCredentials!) {
    signup(input: $input)
  }
`
export const useRegister = () => {
  const [register, { loading: loadingRegister, error }] = useMutation(REGISTER)

  function handleRegister ({ email, password }) {
    const input = { email, password }
    const variables = { input }
    return register({ variables })
  }

  const errorMsgRegister =
    error && 'La contraseña no es correcta o el usuario no existe'

  return {
    handleRegister,
    loadingRegister,
    errorMsgRegister
  }
}
