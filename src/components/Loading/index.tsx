import React from 'react'
import { ActivityIndicator, View } from 'react-native'

const Loading: React.FC = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <ActivityIndicator size={60} color="#fff" />
    </View>
  )
}

export default Loading
