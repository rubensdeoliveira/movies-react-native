import * as React from 'react'
import Icon from 'react-native-vector-icons/AntDesign'
import { Container, RatingNumber } from './styles'

interface RatingProps {
  rating: number
  ratingLabel?: boolean
}

const Rating: React.FC<RatingProps> = ({ rating, ratingLabel = true }) => {
  const filledStars = Math.floor(rating / 2)
  const maxStars = Array(5 - filledStars).fill('staro')
  const r = [...Array(filledStars).fill('star'), ...maxStars]

  return (
    <Container>
      {ratingLabel ? <RatingNumber>{rating}</RatingNumber> : null}
      {r.map((type, index) => {
        return <Icon key={String(index)} name={type} size={12} color="tomato" />
      })}
    </Container>
  )
}

export default Rating
