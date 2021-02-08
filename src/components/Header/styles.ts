import { RectButton } from 'react-native-gesture-handler'
import styled from 'styled-components/native'

export const Container = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  padding: 50px 25px 0 25px;
  width: 100%;
`

export const Button = styled(RectButton)``

export const Menu = styled.Text`
  font-size: 18px;
  color: #fff;
  letter-spacing: 0.1px;
`
