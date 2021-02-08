import React, { createContext, useContext, useState, useCallback } from 'react'

interface ICategorieContextData {
  categorieChanged: boolean
  selectedCategorie: 'movie' | 'tv'
  changeSelectedCategorie: (categorieName: 'movie' | 'tv') => void
  restoreCategorieChanged: () => void
}

interface ICategorieProviderProps {
  children: React.ReactNode
}

const CategorieContext = createContext({} as ICategorieContextData)

export const CategorieProvider = ({ children }: ICategorieProviderProps) => {
  const [selectedCategorie, setSelectedCategorie] = useState<'movie' | 'tv'>(
    'movie',
  )
  const [categorieChanged, setCategorieChanged] = useState<boolean>(false)

  const restoreCategorieChanged = useCallback(() => {
    setCategorieChanged(false)
  }, [])

  const changeSelectedCategorie = useCallback((categorie: 'movie' | 'tv') => {
    setCategorieChanged(true)
    setSelectedCategorie(categorie)
  }, [])

  return (
    <CategorieContext.Provider
      value={{
        restoreCategorieChanged,
        categorieChanged,
        selectedCategorie,
        changeSelectedCategorie,
      }}
    >
      {children}
    </CategorieContext.Provider>
  )
}

export const useCategorie = () => {
  const categorieContext = useContext(CategorieContext)
  return categorieContext
}
