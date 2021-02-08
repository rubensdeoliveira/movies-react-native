import { useNavigation, useRoute } from '@react-navigation/native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
import {
  Container,
  Poster,
  Title,
  RowContainer,
  Body1,
  ButtonPlay,
  ButtonPlayText,
  Description,
} from './styles'
import { useMovie } from '../../hooks/movie'
import { useFetch } from '../../hooks/useFetch'
import Rating from '../../components/Rating'
import Genres from '../../components/Genres'
import { useCategorie } from '../../hooks/categorie'
import Loading from '../../components/Loading'

interface Params {
  movie_id: string
}

const DetailMovie: React.FC = () => {
  const navigation = useNavigation()
  const { transformToMovieDetail } = useMovie()
  const { selectedCategorie } = useCategorie()

  const { params } = useRoute()
  const { movie_id } = params as Params

  const { data } = useFetch(`${selectedCategorie}/${movie_id}`)

  if (!data) return <Loading />

  const movie = transformToMovieDetail(data)

  return (
    <Container>
      <Poster source={{ uri: movie.poster }} />
      <Title numberOfLines={1}>{movie.title}</Title>
      <RowContainer>
        <Body1>
          {movie.releaseDate ? new Date(movie.releaseDate).getFullYear() : null}
        </Body1>
        {movie.runtime ? <Body1>{movie.runtime}min</Body1> : null}
        {movie.rating ? (
          <Rating rating={movie.rating} ratingLabel={false} />
        ) : null}
      </RowContainer>
      {movie.genres ? <Genres genres={movie.genres} /> : null}
      <ButtonPlay>
        <Icon name="play" size={18} color="#fff" />
        <ButtonPlayText
          onPress={() => {
            navigation.navigate('WatchPage', {
              movie_id: movie.key,
            })
          }}
        >
          Assistir
        </ButtonPlayText>
      </ButtonPlay>
      <Description numberOfLines={3}>{movie.description}</Description>
    </Container>
  )
}

export default DetailMovie
