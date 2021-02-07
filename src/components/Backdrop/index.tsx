import React from 'react'
import { Animated, Dimensions, FlatList } from 'react-native'
import IMovie from '../../interfaces/IMovie'
import { Gradient } from '../../pages/Home/styles'
import { AnimatedView, BackdropImage, Container } from './styles'

const { width, height } = Dimensions.get('window')
const BACKDROP_HEIGHT = height * 0.65

interface BackdropProps {
  movies: IMovie[]
  scrollX: Animated.Value
  itemSize: number
}

const Backdrop: React.FC<BackdropProps> = ({ movies, scrollX, itemSize }) => {
  const ITEM_SIZE = itemSize

  return (
    <Container>
      <FlatList
        data={movies.reverse()}
        keyExtractor={(item) => `${item.key}-backdrop`}
        removeClippedSubviews={false}
        contentContainerStyle={{ width, height: BACKDROP_HEIGHT }}
        renderItem={({ item, index }) => {
          if (!item.backdrop) {
            return null
          }
          const translateX = scrollX.interpolate({
            inputRange: [(index - 2) * ITEM_SIZE, (index - 1) * ITEM_SIZE],
            outputRange: [0, width],
          })
          return (
            <AnimatedView
              removeClippedSubviews={false}
              style={{
                width: translateX,
              }}
            >
              <BackdropImage source={{ uri: item.backdrop }} />
            </AnimatedView>
          )
        }}
      />
      <Gradient
        colors={['rgba(0, 0, 0, 0)', 'white']}
        style={{
          position: 'absolute',
        }}
      />
    </Container>
  )
}

export default Backdrop
