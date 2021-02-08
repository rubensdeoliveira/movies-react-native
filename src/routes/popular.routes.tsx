import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'

import PopularMovies from '../pages/PopularMovies'
import DetailMovie from '../pages/DetailMovie'
import WatchPage from '../pages/WatchPage'

const App = createStackNavigator()

const PopularRoutes: React.FC = () => (
  <App.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: '#fafafa' },
    }}
  >
    <App.Screen name="PopularMovies" component={PopularMovies} />
    <App.Screen name="DetailMovie" component={DetailMovie} />
    <App.Screen name="WatchPage" component={WatchPage} />
  </App.Navigator>
)

export default PopularRoutes
