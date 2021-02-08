import { useNavigation } from '@react-navigation/native'
import React from 'react'
import Icon from 'react-native-vector-icons/AntDesign'
import FAIcon from 'react-native-vector-icons/FontAwesome'
import IMovie from '../../interfaces/IMovie'
import {
  Button,
  Container,
  MenuHero,
  MenuTag,
  ButtonPlay,
  Separator,
  Tags,
  TextButton,
  TextButtonPlay,
} from './styles'

interface HeroProps {
  selectedMovie: IMovie
}

const Hero: React.FC<HeroProps> = ({ selectedMovie }) => {
  const navigation = useNavigation()

  return (
    <Container style={{ position: 'absolute' }}>
      <Tags>
        {selectedMovie.genres && selectedMovie.genres.length && (
          <MenuTag>{selectedMovie.genres[0]}</MenuTag>
        )}
        {selectedMovie.genres && selectedMovie.genres.length > 1 && (
          <>
            <Separator />
            <MenuTag>{selectedMovie.genres[1]}</MenuTag>
          </>
        )}
      </Tags>
      <MenuHero>
        <ButtonPlay>
          <FAIcon name="play" size={23} />
          <TextButtonPlay>Assistir</TextButtonPlay>
        </ButtonPlay>

        <Button
          onPress={() => {
            navigation.navigate('DetailMovie', {
              movie_id: selectedMovie.key,
            })
          }}
        >
          <Icon name="infocirlceo" size={22} color="#FFF" />
          <TextButton>Saiba mais</TextButton>
        </Button>
      </MenuHero>
    </Container>
  )
}

export default Hero
