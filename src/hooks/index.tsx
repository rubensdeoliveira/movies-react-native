import React from 'react'
import { CategorieProvider } from './categorie'

import { MovieProvider } from './movie'

const AppProvider: React.FC = ({ children }) => (
  <CategorieProvider>
    <MovieProvider>{children}</MovieProvider>
  </CategorieProvider>
)

export default AppProvider
