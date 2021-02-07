import 'react-native-gesture-handler'

import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import AppProvider from './hooks'

import Routes from './routes'

const App: React.FC = () => (
  <SafeAreaProvider>
    <NavigationContainer>
      <AppProvider>
        <Routes />
      </AppProvider>
    </NavigationContainer>
  </SafeAreaProvider>
)

export default App
