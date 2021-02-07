import React from 'react'

import AppProvider from './hooks'
import Home from './pages/Home'
import PopularMovies from './pages/PopularMovies'

const App: React.FC = () => (
  <AppProvider>
    {/* <StatusBar barStyle="light-content" backgroundColor="#312e38" /> */}

    <Home />
  </AppProvider>
)

export default App
