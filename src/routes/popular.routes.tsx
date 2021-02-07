import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'

import PopularMovies from '../pages/PopularMovies'

const App = createStackNavigator()

const PopularRoutes: React.FC = () => (
  <App.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: '#fafafa' },
    }}
  >
    <App.Screen name="PopularMovies" component={PopularMovies} />
  </App.Navigator>
)

export default PopularRoutes
