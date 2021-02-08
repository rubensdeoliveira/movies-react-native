import { useNavigation } from '@react-navigation/native'
import React from 'react'
import IMovie from '../../interfaces/IMovie'
import { Container, Label, MovieCard, MoviePoster, MovieScroll } from './styles'

interface Genre {
  id: number
  name: string
}

interface HomeProps {
  genre: Genre
  movies: IMovie[]
}

const Movies: React.FC<HomeProps> = ({ genre, movies }) => {
  const navigation = useNavigation()

  const moviesCategorized = movies.filter(
    (movie) =>
      movie.genres &&
      movie.genres.find((movieGenre) => movieGenre === genre.name),
  )

  return (
    <>
      {moviesCategorized.length ? (
        <Container>
          <Label>{genre.name}</Label>
          <MovieScroll horizontal>
            {moviesCategorized.map((movie) => (
              <MovieCard
                key={movie.key}
                onPress={() => {
                  navigation.navigate('DetailMovie', {
                    movie_id: movie.key,
                  })
                }}
              >
                <MoviePoster
                  resizeMode="cover"
                  source={{ uri: movie.poster }}
                />
              </MovieCard>
            ))}
          </MovieScroll>
        </Container>
      ) : null}
    </>
  )
}

export default Movies
