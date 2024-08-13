import { TouchableOpacity, Text, Image } from 'react-native'
import React from 'react'
import icons from '../constants/icons';

const DefaultButton = ({title, handlePress, containerStyles, isLoading, image, position_top}) => {
  return (
    <TouchableOpacity
        onPress = {handlePress}
        className = {`rounded-xl min-h-[70px] justify-center
        items-center ${containerStyles} ${isLoading ? 'opacity-60' : ""}`}
        disabled = {isLoading}
    >
        <Image 
            source={image}
            style = {{position: 'absolute', top: position_top}}
        />
        <Text 
            className = "text-2xl font-popsemibold text-center justify-center items-center"
            style = {{color: 'white', position: 'absolute', top: position_top + 8}}
        >
            {title}
        </Text>
    </TouchableOpacity>
  )
}

export default DefaultButton