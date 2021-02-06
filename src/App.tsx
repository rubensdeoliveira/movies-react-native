import React from 'react'

import { StatusBar } from 'react-native'
import Movies from './pages/Movies'

const App: React.FC = () => (
  <>
    <StatusBar barStyle="light-content" backgroundColor="#312e38" />

    <Movies />
  </>
)

export default App
