import React from 'react'

import { MovieProvider } from './movie'

const AppProvider: React.FC = ({ children }) => (
  <MovieProvider>{children}</MovieProvider>
)

export default AppProvider
