import styled from 'styled-components/native'

import { Dimensions } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'

export const Container = styled.View`
  padding: 20px 0;
`

export const Label = styled.Text`
  color: #fff;
  font-size: 16px;
  margin: 0 0 5px 10px;
`
export const MovieScroll = styled.ScrollView`
  padding-left: 10px;
`

export const MoviePoster = styled.Image`
  width: ${Math.round((Dimensions.get('window').width * 28) / 100)}px;
  height: 150px;
`

export const MovieCard = styled(RectButton)`
  padding-right: 9px;
`
