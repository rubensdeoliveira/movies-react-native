import React from 'react'
import { Container, Menu } from './styles'

const Header: React.FC = () => {
  return (
    <Container>
      <Menu>Filmes</Menu>
      <Menu>Séries</Menu>
    </Container>
  )
}

export default Header
