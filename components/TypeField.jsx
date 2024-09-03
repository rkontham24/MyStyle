import { View, Text, TextInput } from 'react-native'
import React from 'react'

const TypeField = ({title, value, handleChangeText, otherStyle, keyboardType, style, placeholder, ...props}) => {
  return (
    <View className = {`space-y-2 ${otherStyle}`}>
      <Text className = "text-base text-white font-popregular">{title}</Text>

      <View className = "border-4 border-sky_blue w-full h-14 px-5 bg-dark_fill rounded-xl focus:border-orange">
        <TextInput
          className = "flex-1 text-white font-popregular text-base"
          value = {value}
          placeholder = {placeholder}
          placeholderTextColor = "B0B0B0"
          onChangeText={handleChangeText}
          secureTextEntry={title === 'Password' || title === 'Confirm Password'}
        />
      </View>
    </View>
  )
}

export default TypeField