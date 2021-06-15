import { useMutation, gql } from '@apollo/client'

const LOGIN = gql`
  mutation login($input: UserCredentials!) {
    login(input: $input)
  }
`
export const useLogin = () => {
  const [login, { loading: loadingLogin, error }] = useMutation(LOGIN)

  function handleLogin ({ email, password }) {
    const input = { email, password }
    const variables = { input }
    return login({ variables })
  }

  const errorMsgLogin =
    error && 'La contraseña no es correcta o el usuario no existe'

  return { handleLogin, loadingLogin, errorMsgLogin }
}
