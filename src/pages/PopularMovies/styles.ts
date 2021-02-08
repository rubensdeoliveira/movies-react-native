import { Dimensions, Platform } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import styled from 'styled-components/native'

const { width } = Dimensions.get('window')
const ITEM_SIZE = Platform.OS === 'ios' ? width * 0.72 : width * 0.74

export const Container = styled.View`
  flex: 1;
  background: #000;
`

export const ContainerButton = styled(RectButton)``

export const PosterImage = styled.Image`
  width: 100%;
  height: ${ITEM_SIZE * 1.2}px;
  resize-mode: cover;
  border-radius: 24px;
  margin: 0;
  margin-bottom: 10px;
`
