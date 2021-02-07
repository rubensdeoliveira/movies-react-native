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

interface IApiData {
  page: number
  results: IApiMovie[]
  total_pages: number
  total_results: number
}

interface IGenre {
  id: number
  name: string
}

interface IApiGenre {
  genres: IGenre[]
}

interface IMovieContextData {
  transformToMoviesList(movieData: IApiData): IMovie[]
}

interface IMovieProviderProps {
  children: React.ReactNode
}

const MovieContext = createContext({} as IMovieContextData)

export const MovieProvider = ({ children }: IMovieProviderProps) => {
  const transformToMoviesList = useCallback((movieData: IApiData) => {
    const emptyList: IMovie[] = []

    if (!movieData || !movieData.results.length) return emptyList

    const { results } = movieData

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
    <MovieContext.Provider value={{ transformToMoviesList }}>
      {children}
    </MovieContext.Provider>
  )
}

export const useMovie = () => {
  const movieContext = useContext(MovieContext)
  return movieContext
}
