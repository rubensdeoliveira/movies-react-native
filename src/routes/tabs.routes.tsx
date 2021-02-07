import React from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/FontAwesome'

import HomeRoutes from './home.routes'
import PopularRoutes from './popular.routes'
import SearchMovies from '../pages/SearchMovies'

const Tab = createBottomTabNavigator()

const TabRouter: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => {
          let iconName

          if (route.name === 'Home') {
            iconName = 'home'
          } else if (route.name === 'Populares') {
            iconName = 'question-circle'
          } else {
            iconName = 'search'
          }

          return <Icon name={iconName} size={20} color={color} />
        },
      })}
      tabBarOptions={{
        activeTintColor: 'red',
        inactiveTintColor: 'white',
        showLabel: true,
        inactiveBackgroundColor: 'black',
        activeBackgroundColor: 'black',
      }}
    >
      <Tab.Screen name="Search" component={SearchMovies} />
      <Tab.Screen name="Home" component={HomeRoutes} />
      <Tab.Screen name="Populares" component={PopularRoutes} />
    </Tab.Navigator>
  )
}

export default TabRouter
