import React from 'react'
import { useCategorie } from '../../hooks/categorie'
import { Container, Button, Menu } from './styles'

const Header: React.FC = () => {
  const { changeSelectedCategorie, selectedCategorie } = useCategorie()
  return (
    <Container>
      <Button
        onPress={() => {
          changeSelectedCategorie('movie')
        }}
      >
        <Menu
          style={{
            opacity: selectedCategorie === 'movie' ? 1 : 0.4,
            fontSize: selectedCategorie === 'movie' ? 20 : 15,
          }}
        >
          Filmes
        </Menu>
      </Button>
      <Button
        onPress={() => {
          changeSelectedCategorie('tv')
        }}
      >
        <Menu
          style={{
            opacity: selectedCategorie === 'tv' ? 1 : 0.4,
            fontSize: selectedCategorie === 'tv' ? 20 : 15,
          }}
        >
          Séries
        </Menu>
      </Button>
    </Container>
  )
}

export default Header
