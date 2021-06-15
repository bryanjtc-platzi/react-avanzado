import { gql, useQuery } from '@apollo/client'

export function useGetPhotos (categoryId) {
  const GET_PHOTOS = gql`
    query getPhotos($categoryId: ID) {
      photos(categoryId: $categoryId) {
        id
        categoryId
        src
        likes
        liked
        userId
      }
    }
  `

  const { loading, error, data } = useQuery(GET_PHOTOS, {
    variables: { categoryId }
  })

  return { loading, error, data }
}
