import { Animated, Dimensions } from 'react-native'
import styled from 'styled-components/native'
import LinearGradient from 'react-native-linear-gradient'

const { width, height } = Dimensions.get('window')
const BACKDROP_HEIGHT = height * 0.65

export const Container = styled.View`
  height: ${BACKDROP_HEIGHT}px;
  width: ${width}px;
  position: absolute;
`

export const AnimatedView = styled(Animated.View)`
  position: absolute;
  height: ${height}px;
  overflow: hidden;
`

export const BackdropImage = styled.Image`
  width: ${width}px;
  height: ${BACKDROP_HEIGHT}px;
  position: absolute;
`

export const Gradient = styled(LinearGradient)`
  height: ${BACKDROP_HEIGHT}px;
  width: ${width}px;
  bottom: 0;
`
