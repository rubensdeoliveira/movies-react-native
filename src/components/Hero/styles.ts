import { RectButton } from 'react-native-gesture-handler'
import styled from 'styled-components/native'

export const Container = styled.View`
  /* position: absolute; */
  width: 100%;
  align-items: center;
  bottom: 8px;
`

export const Banner = styled.Image`
  height: 100px;
`

export const Tags = styled.View`
  justify-content: center;
  margin-top: 20px;
  flex-direction: row;
`

export const MenuTag = styled.Text`
  color: #fff;
  padding: 0 8px;
  font-size: 13px;
`

export const Separator = styled.View`
  width: 3px;
  height: 3px;
  background-color: #e8e8e8;
  margin: 6px 0;
  border-radius: 3px;
`

export const MenuHero = styled.View`
  width: 90%;
  margin-top: 15px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const Button = styled(RectButton)`
  align-items: center;
`

export const TextButton = styled.Text`
  color: #fff;
  font-size: 13px;
  margin-top: 3px;
`

export const ButtonPlay = styled(RectButton)`
  flex-direction: row;
  background-color: #fff;
  width: 142px;
  height: 32px;
  border-radius: 2px;
  align-items: center;
  justify-content: center;
`

export const TextButtonPlay = styled.Text`
  font-size: 15px;
  font-weight: bold;
  padding-left: 5px;
`
