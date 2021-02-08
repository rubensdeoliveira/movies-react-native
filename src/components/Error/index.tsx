import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
import { Container, Description, Title } from './styles'

interface ErrorProps {
  title: string
  description: string
}

const Error: React.FC<ErrorProps> = ({ title, description }) => {
  return (
    <Container>
      <Icon name="warning" size={100} color="tomato" />
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Container>
  )
}

export default Error
