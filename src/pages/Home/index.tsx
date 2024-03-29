import React, { useCallback, useEffect, useState } from 'react'
import { Animated, StatusBar } from 'react-native'
import Movies from '../../components/Movies'
import PosterActions from '../../components/PosterActions'
import Header from '../../components/Header'
import { useMovie } from '../../hooks/movie'
import { useFetch } from '../../hooks/useFetch'
import IMovie from '../../interfaces/IMovie'
import { Container, Poster, Gradient, AnimatedImage } from './styles'
import { getGenresList } from '../../constants/genresList'
import { useCategorie } from '../../hooks/categorie'
import Loading from '../../components/Loading'
import Error from '../../components/Error'

const Home: React.FC = () => {
  const [selectedMovie, setSelectedMovie] = useState<IMovie | null>(null)
  const [movieNumber, setMovieNumber] = useState<number>(0)
  const [firstRender, setFirstRender] = useState(true)
  const [opacity] = useState(new Animated.Value(0))

  const { transformToMoviesList } = useMovie()
  const {
    selectedCategorie,
    categorieChanged,
    restoreCategorieChanged,
  } = useCategorie()

  const { data: discoverMovies, error: discoverMoviesError } = useFetch(
    `discover/${selectedCategorie}`,
  )
  const { data: trendingMovies, error: trendingMoviesError } = useFetch(
    `trending/${selectedCategorie}/day`,
  )

  const setMovie = useCallback(() => {
    if (trendingMovies) {
      const trending: IMovie[] = transformToMoviesList(trendingMovies)
      if (trending.length - 1 > movieNumber) {
        setSelectedMovie(trending[movieNumber + 1])
        setMovieNumber(movieNumber + 1)
      } else {
        setSelectedMovie(trending[0])
        setMovieNumber(0)
      }
    }
  }, [movieNumber, trendingMovies, transformToMoviesList])

  useEffect(() => {
    if (categorieChanged) {
      const trending: IMovie[] = transformToMoviesList(trendingMovies)
      setSelectedMovie(trending[0])
      setMovieNumber(0)
      restoreCategorieChanged()
    }

    if (firstRender && trendingMovies) {
      setMovie()
      setFirstRender(false)
    }

    const timer = setTimeout(() => {
      setMovie()
    }, 5000)

    return () => {
      clearTimeout(timer)
    }
  }, [
    setMovie,
    firstRender,
    trendingMovies,
    transformToMoviesList,
    categorieChanged,
    restoreCategorieChanged,
  ])

  const onLoad = useCallback(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 4000,
      useNativeDriver: true,
    }).start(() => {
      Animated.timing(opacity, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
      }).start()
    })
  }, [opacity])

  const trending: IMovie[] = transformToMoviesList(trendingMovies)
  const movies: IMovie[] = transformToMoviesList(discoverMovies)

  if (discoverMoviesError || trendingMoviesError)
    return (
      <Error
        title="Erro ao carregar página"
        description="Ocorreu um erro inesperado ao carregar a página, tente novamente mais tarde"
      />
    )
  if (!selectedMovie || !trending || !movies) return <Loading />

  return (
    <Container>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <Poster>
        <>
          <AnimatedImage
            style={[{ opacity }, { position: 'absolute' }]}
            source={{ uri: selectedMovie.poster }}
            onLoad={onLoad}
          />
          <Gradient
            locations={[0, 0.2, 0.6, 0.93]}
            colors={[
              'rgba(0,0,0,0.5)',
              'rgba(0,0,0,0.0)',
              'rgba(0,0,0,0.0)',
              'rgba(0,0,0,1)',
            ]}
          >
            <Header />
            <PosterActions selectedMovie={selectedMovie} />
          </Gradient>
        </>
      </Poster>
      {getGenresList(selectedCategorie).map((genre) => (
        <Movies key={genre.id} genre={genre} movies={movies} />
      ))}
    </Container>
  )
}

export default Home
