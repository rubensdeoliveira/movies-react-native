import React, { createContext, useContext, useCallback } from 'react'
import IMovie from '../interfaces/IMovie'
import api from '../services/api'

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
  const transformToMoviesList = useCallback(({ results }: IApiData) => {
    const emptyList: IMovie[] = []

    if (!results.length) return emptyList

    const genresList = [
      {
        id: 28,
        name: 'Action',
      },
      {
        id: 12,
        name: 'Adventure',
      },
      {
        id: 16,
        name: 'Animation',
      },
      {
        id: 35,
        name: 'Comedy',
      },
      {
        id: 80,
        name: 'Crime',
      },
      {
        id: 99,
        name: 'Documentary',
      },
      {
        id: 18,
        name: 'Drama',
      },
      {
        id: 10751,
        name: 'Family',
      },
      {
        id: 14,
        name: 'Fantasy',
      },
      {
        id: 36,
        name: 'History',
      },
      {
        id: 27,
        name: 'Horror',
      },
      {
        id: 10402,
        name: 'Music',
      },
      {
        id: 9648,
        name: 'Mystery',
      },
      {
        id: 10749,
        name: 'Romance',
      },
      {
        id: 878,
        name: 'Science Fiction',
      },
      {
        id: 10770,
        name: 'TV Movie',
      },
      {
        id: 53,
        name: 'Thriller',
      },
      {
        id: 10752,
        name: 'War',
      },
      {
        id: 37,
        name: 'Western',
      },
    ]

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
