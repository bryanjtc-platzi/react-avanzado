import React from 'react'
import { ImgWrapper, Img, Article } from './styles'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import { useNearScreen } from '../../hooks/useNearScreen'
import { useToogleLike } from '../../hooks/useToogleLike'
import { FavButton } from '../FavButton'
const DEFAULT_IMAGE =
  'https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png'

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
  const [show, element] = useNearScreen()
  const { mutation } = useToogleLike()
  const key = `like-${id}`
  const [liked, setLiked] = useLocalStorage(key, false)
  const handleFavClick = () => {
    !liked &&
      mutation({
        variables: {
          input: { id }
        }
      })
    setLiked(!liked)
  }

  return (
    <Article ref={element}>
      {show && (
        <>
          <a href={`/?detail=${id}`}>
            <ImgWrapper>
              <Img src={src} />
            </ImgWrapper>
          </a>
          <FavButton liked={liked} likes={likes} onClick={handleFavClick} />
        </>
      )}
    </Article>
  )
}
