import * as React from 'react'
import Icon from 'react-native-vector-icons/AntDesign'
import { Container, RatingNumber } from './styles'

export default function Rating({ rating }) {
  const filledStars = Math.floor(rating / 2)
  const maxStars = Array(5 - filledStars).fill('staro')
  const r = [...Array(filledStars).fill('star'), ...maxStars]

  return (
    <Container>
      <RatingNumber>{rating}</RatingNumber>
      {r.map((type, index) => {
        return <Icon key={index} name={type} size={12} color="tomato" />
      })}
    </Container>
  )
}
