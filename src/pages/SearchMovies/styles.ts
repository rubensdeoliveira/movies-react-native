import styled from 'styled-components/native'
import { SearchBar as SearchBarComponent } from 'react-native-elements'
import { Dimensions, FlatList } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import IMovie from '../../interfaces/IMovie'

export const Container = styled.View`
  flex: 1;
  background-color: #000;
  padding-top: 30px;
`

export const SearchBar = styled(SearchBarComponent)``

export const MoviesList = styled(FlatList as new () => FlatList<IMovie>)``

export const MoviesContainer = styled(RectButton)``

export const MovieCard = styled.View`
  padding: 4.5px;
`

export const MoviePoster = styled.Image`
  width: ${Math.round((Dimensions.get('window').width * 31) / 100)}px;
  height: 150px;
`
