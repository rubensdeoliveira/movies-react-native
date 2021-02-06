import React from 'react'

import { StatusBar } from 'react-native'
import AppProvider from './hooks'
import Movies from './pages/Movies'

const App: React.FC = () => (
  <AppProvider>
    {/* <StatusBar barStyle="light-content" backgroundColor="#312e38" /> */}

    <Movies />
  </AppProvider>
)

export default App
