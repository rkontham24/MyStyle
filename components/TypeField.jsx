import { View, Text } from 'react-native'
import React from 'react'

const TypeField = ({title, value, handleChangeText, otherStyle, keyboardType, style, ...props}) => {
  return (
    <View className = {`space-y-2 ${otherStyle}`}>
      <Text className = "text-base text-white font-popregular">{title}</Text>

      <View className = "border-4 border-sky_blue w-full h-14 px-5 bg-dark_fill">

      </View>
    </View>
  )
}

export default TypeField