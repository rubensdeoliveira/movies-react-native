import React, { createContext, useContext, useCallback } from 'react'
import { genresList } from '../constants/genresList'
import IMovie from '../interfaces/IMovie'

interface IApiMovie {
  adult: boolean
  backdrop_path: string
  genre_ids: Array<number>
  id: number
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  release_date: Date
  title: string
  video: boolean
  vote_average: number
  vote_count: number
}

interface IApiMoviesData {
  page: number
  results: IApiMovie[]
  total_pages: number
  total_results: number
}

interface IApiMovieData {
  adult: boolean
  backdrop_path: string
  genres: Array<IGenre>
  id: number
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  release_date: Date
  title: string
  video: boolean
  vote_average: number
  vote_count: number
  runtime: number
}

interface IGenre {
  id: number
  name: string
}

interface IApiGenre {
  genres: IGenre[]
}

interface IMovieContextData {
  transformToMovieDetail(movieData: IApiMovieData): IMovie
  transformToMoviesList(moviesData: IApiMoviesData): IMovie[]
}

interface IMovieProviderProps {
  children: React.ReactNode
}

const MovieContext = createContext({} as IMovieContextData)

export const MovieProvider = ({ children }: IMovieProviderProps) => {
  const transformToMovieDetail = useCallback((movieData: IApiMovieData) => {
    const movie: IMovie = {
      key: String(movieData.id),
      title: movieData.original_title,
      poster: `https://image.tmdb.org/t/p/w440_and_h660_face${movieData.poster_path}`,
      backdrop: `https://image.tmdb.org/t/p/w370_and_h556_multi_faces${movieData.backdrop_path}`,
      rating: movieData.vote_average,
      description: movieData.overview,
      releaseDate: movieData.release_date,
      genres: movieData.genres.map((genre) => genre.name),
      runtime: movieData.runtime,
    }

    return movie
  }, [])

  const transformToMoviesList = useCallback((moviesData: IApiMoviesData) => {
    const emptyList: IMovie[] = []

    if (!moviesData || !moviesData.results.length) return emptyList

    const { results } = moviesData

    const movies = results.map(
      ({
        id,
        original_title,
        poster_path,
        backdrop_path,
        vote_average,
        overview,
        release_date,
        genre_ids,
      }) => {
        const genres = genre_ids.map((genre_id) => {
          const findGenre = genresList.find(
            (genreItem) => genreItem.id === genre_id,
          )

          return findGenre ? findGenre.name : ''
        })

        return {
          key: String(id),
          title: original_title,
          poster: `https://image.tmdb.org/t/p/w440_and_h660_face${poster_path}`,
          backdrop: `https://image.tmdb.org/t/p/w370_and_h556_multi_faces${backdrop_path}`,
          rating: vote_average,
          description: overview,
          releaseDate: release_date,
          genres,
        }
      },
    )

    return movies
  }, [])

  return (
    <MovieContext.Provider
      value={{ transformToMovieDetail, transformToMoviesList }}
    >
      {children}
    </MovieContext.Provider>
  )
}

export const useMovie = () => {
  const movieContext = useContext(MovieContext)
  return movieContext
}
