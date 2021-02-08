import React from 'react'
import { useCategorie } from '../../hooks/categorie'
import { Container, Button, Menu } from './styles'

const Header: React.FC = () => {
  const { changeSelectedCategorie } = useCategorie()
  return (
    <Container>
      <Button
        onPress={() => {
          changeSelectedCategorie('movie')
        }}
      >
        <Menu>Filmes</Menu>
      </Button>
      <Button
        onPress={() => {
          changeSelectedCategorie('tv')
        }}
      >
        <Menu>Séries</Menu>
      </Button>
    </Container>
  )
}

export default Header
