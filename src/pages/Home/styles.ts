import { Animated, Dimensions } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import styled from 'styled-components/native'

export const Container = styled.ScrollView`
  flex: 1;
  background-color: #000;
`

export const Poster = styled.View`
  width: 100%;
  height: ${(Dimensions.get('window').height * 81) / 100}px;
`

export const AnimatedImage = styled(Animated.Image)`
  width: 100%;
  height: ${(Dimensions.get('window').height * 81) / 100}px;
`

export const Gradient = styled(LinearGradient)`
  height: 100%;
`
