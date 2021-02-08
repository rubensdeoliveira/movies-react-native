import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { useCategorie } from '../../hooks/categorie'
import { useMovie } from '../../hooks/movie'
import { useFetch } from '../../hooks/useFetch'
import IMovie from '../../interfaces/IMovie'
import Loading from '../Loading'
import { Container, Label, MovieCard, MoviePoster, MovieScroll } from './styles'

interface Genre {
  id: number
  name: string
}

interface HomeProps {
  genre: Genre
}

const Movies: React.FC<HomeProps> = ({ genre }) => {
  const navigation = useNavigation()

  const { transformToMoviesList } = useMovie()
  const { selectedCategorie } = useCategorie()

  const { data } = useFetch(
    `discover/${selectedCategorie}?with_genres=${genre.id}`,
  )

  const movies: IMovie[] = transformToMoviesList(data)

  if (!movies) return <Loading />

  return (
    <Container>
      <Label>{genre.name}</Label>
      <MovieScroll horizontal>
        {movies.map((movie) => (
          <MovieCard
            key={movie.key}
            onPress={() => {
              navigation.navigate('DetailMovie', {
                movie_id: movie.key,
              })
            }}
          >
            <MoviePoster resizeMode="cover" source={{ uri: movie.poster }} />
          </MovieCard>
        ))}
      </MovieScroll>
    </Container>
  )
}

export default Movies
