import React, { createContext, useContext, useState, useCallback } from 'react'

interface ICategorieContextData {
  selectedCategorie: 'movie' | 'tv'
  changeSelectedCategorie: (categorieName: 'movie' | 'tv') => void
}

interface ICategorieProviderProps {
  children: React.ReactNode
}

const CategorieContext = createContext({} as ICategorieContextData)

export const CategorieProvider = ({ children }: ICategorieProviderProps) => {
  const [selectedCategorie, setSelectedCategorie] = useState<'movie' | 'tv'>(
    'movie',
  )

  const changeSelectedCategorie = useCallback(
    async (categorie: 'movie' | 'tv') => {
      setSelectedCategorie(categorie)
    },
    [],
  )

  return (
    <CategorieContext.Provider
      value={{ selectedCategorie, changeSelectedCategorie }}
    >
      {children}
    </CategorieContext.Provider>
  )
}

export const useCategorie = () => {
  const categorieContext = useContext(CategorieContext)
  return categorieContext
}
