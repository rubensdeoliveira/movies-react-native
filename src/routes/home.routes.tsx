import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'

import Home from '../pages/Home'
import DetailMovie from '../pages/DetailMovie'
import WatchPage from '../pages/WatchPage'

const App = createStackNavigator()

const HomeRoutes: React.FC = () => (
  <App.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: '#fafafa' },
    }}
  >
    <App.Screen name="Home" component={Home} />
    <App.Screen name="DetailMovie" component={DetailMovie} />
    <App.Screen name="WatchPage" component={WatchPage} />
  </App.Navigator>
)

export default HomeRoutes
