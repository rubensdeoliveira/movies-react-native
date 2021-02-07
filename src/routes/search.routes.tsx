import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'

import SearchMovies from '../pages/SearchMovies'

const App = createStackNavigator()

const SearchRoutes: React.FC = () => (
  <App.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: '#fafafa' },
    }}
  >
    <App.Screen name="SearchMovies" component={SearchMovies} />
  </App.Navigator>
)

export default SearchRoutes
