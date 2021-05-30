import { gql, useQuery } from '@apollo/client'

export function useGetSinglePhoto (id) {
  const GET_PHOTO = gql`
    query getSinglePhoto($id: ID!) {
      photo(id: $id) {
        id
        categoryId
        src
        likes
        liked
        userId
      }
    }
  `

  const { loading, error, data } = useQuery(GET_PHOTO, {
    variables: { id }
  })

  return { loading, error, data }
}
