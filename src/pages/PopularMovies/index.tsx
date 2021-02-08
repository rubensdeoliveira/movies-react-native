import { useNavigation } from '@react-navigation/native'
import React, { useRef } from 'react'
import {
  Animated,
  Dimensions,
  Platform,
  StatusBar,
  Text,
  View,
} from 'react-native'
import Backdrop from '../../components/Backdrop'
import Genres from '../../components/Genres'
import Rating from '../../components/Rating'
import { useMovie } from '../../hooks/movie'
import { useFetch } from '../../hooks/useFetch'
import IMovie from '../../interfaces/IMovie'
import { Container, ContainerButton, PosterImage } from './styles'

const { width } = Dimensions.get('window')
const SPACING = 10
const ITEM_SIZE = Platform.OS === 'ios' ? width * 0.72 : width * 0.74
const EMPTY_ITEM_SIZE = (width - ITEM_SIZE) / 2

const PopularMovies: React.FC = () => {
  const navigation = useNavigation()

  const { transformToMoviesList } = useMovie()

  const scrollX = useRef(new Animated.Value(0)).current

  const { data, error } = useFetch('discover/movie')

  if (!data) return <Text>Carregando...</Text>
  if (error) return <Text>Ocorreu um erro</Text>

  const movies: IMovie[] = [
    { key: 'fake-image-left' },
    ...transformToMoviesList(data),
    { key: 'fake-image-right' },
  ]

  return (
    <Container>
      <Backdrop movies={movies} scrollX={scrollX} itemSize={ITEM_SIZE} />
      <StatusBar hidden />
      <Animated.FlatList
        showsHorizontalScrollIndicator={false}
        data={movies}
        keyExtractor={({ key }: IMovie) => key}
        horizontal
        bounces={false}
        decelerationRate={Platform.OS === 'ios' ? 0 : 0.98}
        renderToHardwareTextureAndroid
        contentContainerStyle={{ alignItems: 'center' }}
        snapToInterval={ITEM_SIZE}
        snapToAlignment="start"
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false },
        )}
        scrollEventThrottle={16}
        renderItem={({ item, index }: { item: IMovie; index: number }) => {
          if (!item.poster) {
            return <View style={{ width: EMPTY_ITEM_SIZE }} />
          }

          const inputRange = [
            (index - 2) * ITEM_SIZE,
            (index - 1) * ITEM_SIZE,
            index * ITEM_SIZE,
          ]

          const translateY = scrollX.interpolate({
            inputRange,
            outputRange: [100, 50, 100],
            extrapolate: 'clamp',
          })

          return (
            <View style={{ width: ITEM_SIZE }}>
              <ContainerButton
                onPress={() => {
                  navigation.navigate('DetailMovie', {
                    movie_id: item.key,
                  })
                }}
              >
                <Animated.View
                  style={{
                    marginHorizontal: SPACING,
                    padding: SPACING * 2,
                    alignItems: 'center',
                    transform: [{ translateY }],
                    backgroundColor: '#000',
                    borderRadius: 34,
                  }}
                >
                  <PosterImage source={{ uri: item.poster }} />
                  <Text
                    style={{ fontSize: 24, color: '#fff' }}
                    numberOfLines={1}
                  >
                    {item.title}
                  </Text>
                  <Rating rating={item.rating || 0} />
                  <Genres genres={item.genres || []} />
                  <Text
                    style={{ fontSize: 12, color: '#fff' }}
                    numberOfLines={3}
                  >
                    {item.description}
                  </Text>
                </Animated.View>
              </ContainerButton>
            </View>
          )
        }}
      />
    </Container>
  )
}

export default PopularMovies
