import { useRoute } from '@react-navigation/native'
import React from 'react'
import { WebView } from 'react-native-webview'
import Loading from '../../components/Loading'
import { useCategorie } from '../../hooks/categorie'
import { useFetch } from '../../hooks/useFetch'

interface Params {
  movie_id: string
}

const WatchPage: React.FC = () => {
  const { selectedCategorie } = useCategorie()

  const { params } = useRoute()
  const { movie_id } = params as Params

  const { data } = useFetch(`${selectedCategorie}/${movie_id}/watch/providers`)

  if (!data) return <Loading />

  return (
    <WebView
      source={{
        uri: data.results.BR
          ? data.results.BR.link
          : 'https://www.themoviedb.org/',
      }}
      style={{ marginTop: 20 }}
    />
  )
}

export default WatchPage
