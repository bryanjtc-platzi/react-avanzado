import { useMutation, gql } from '@apollo/client'
const MUTATION_LIKE_PHOTO = gql`
  mutation likeAnonymousPhoto($input: LikePhoto!) {
    likeAnonymousPhoto(input: $input) {
      id
      liked
      likes
    }
  }
`
export const useToogleLike = () => {
  const [toggleLike, loading, error] = useMutation(MUTATION_LIKE_PHOTO)
  return { toggleLike, loading, error }
}
