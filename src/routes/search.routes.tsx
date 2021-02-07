import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'

import SearchMovies from '../pages/SearchMovies'
import DetailMovie from '../pages/DetailMovie'

const App = createStackNavigator()

const SearchRoutes: React.FC = () => (
  <App.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: '#fafafa' },
    }}
  >
    <App.Screen name="SearchMovies" component={SearchMovies} />
    <App.Screen name="DetailMovie" component={DetailMovie} />
  </App.Navigator>
)

export default SearchRoutes
