import * as React from 'react'
import { Container, Genre, GenreText } from './styles'

export default function Genres({ genres }) {
  return (
    <Container>
      {genres.map((genre, i) => {
        return (
          <Genre key={genre}>
            <GenreText>{genre}</GenreText>
          </Genre>
        )
      })}
    </Container>
  )
}
