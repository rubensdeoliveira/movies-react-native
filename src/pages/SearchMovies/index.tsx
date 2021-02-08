import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { StatusBar } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import Error from '../../components/Error'
import { useCategorie } from '../../hooks/categorie'
import { useMovie } from '../../hooks/movie'
import { useFetch } from '../../hooks/useFetch'
import IMovie from '../../interfaces/IMovie'

import {
  Container,
  MoviePoster,
  SearchBar,
  MovieCard,
  MoviesList,
  MoviesContainer,
} from './styles'

const SearchMovies: React.FC = () => {
  const [search, setSearch] = useState('')

  const navigation = useNavigation()

  const { transformToMoviesList } = useMovie()
  const { selectedCategorie } = useCategorie()

  const { data, error } = useFetch(
    search
      ? `/search/${selectedCategorie}?query=${search}`
      : `discover/${selectedCategorie}`,
  )

  if (error)
    return (
      <Error
        title="Erro ao carregar página"
        description="Ocorreu um erro inesperado ao carregar a página, tente novamente mais tarde"
      />
    )

  const movies: IMovie[] = transformToMoviesList(data)

  return (
    <Container>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <SearchBar
        placeholder="Pesquise por título..."
        placeholderTextColor="#999"
        onChangeText={(text) => setSearch(text)}
        value={search}
        containerStyle={{ backgroundColor: 'black' }}
        clearIcon={<Icon name="close" size={20} color="#999" />}
        searchIcon={
          <Icon
            name="search"
            size={20}
            color="#999"
            style={{ marginLeft: 5 }}
          />
        }
      />
      {movies && movies.length ? (
        <MoviesList
          data={movies}
          keyExtractor={(movie) => movie.key}
          numColumns={3}
          renderItem={({ item: movie }) => (
            <MoviesContainer
              key={movie.key}
              onPress={() => {
                navigation.navigate('DetailMovie', {
                  movie_id: movie.key,
                })
              }}
            >
              <MovieCard>
                <MoviePoster
                  resizeMode="cover"
                  source={{
                    uri: movie.poster,
                  }}
                />
              </MovieCard>
            </MoviesContainer>
          )}
        />
      ) : null}
    </Container>
  )
}

export default SearchMovies
