import { Dimensions } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import styled from 'styled-components/native'

export const Container = styled.ScrollView`
  flex: 1;
  background: #000;
`

export const Poster = styled.ImageBackground`
  width: 100%;
  height: ${(Dimensions.get('window').height * 60) / 100}px;
`

export const Title = styled.Text`
  font-size: 36px;
  color: #fff;
  font-weight: bold;
  margin-top: 5px;
  margin-left: 7px;
`

export const RowContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-left: 10px;
  margin-top: 5px;
  margin-bottom: 10px;
`

export const Body1 = styled.Text`
  font-size: 13px;
  color: #fff;
  margin-right: 15px;
`

export const ButtonPlay = styled(RectButton)`
  height: 42px;
  background: #444;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  flex-direction: row;
  margin: 15px 20px;
`

export const ButtonPlayText = styled.Text`
  font-size: 18px;
  color: #fff;
  font-weight: bold;
  margin-left: 10px;
`

export const Description = styled.Text`
  font-size: 15px;
  color: #fff;
  font-weight: bold;
  margin: 0 10px;
  margin-bottom: 20px;
`
