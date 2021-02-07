import * as React from 'react'
import { Container, Genre, GenreText } from './styles'

interface GenreProps {
  genres: string[]
}

const Genres: React.FC<GenreProps> = ({ genres }) => {
  return (
    <Container>
      {genres.map((genre) => {
        return (
          <Genre key={genre}>
            <GenreText>{genre}</GenreText>
          </Genre>
        )
      })}
    </Container>
  )
}

export default Genres
