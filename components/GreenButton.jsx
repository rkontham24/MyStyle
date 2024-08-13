import { TouchableOpacity, Text, Image } from 'react-native'
import React from 'react';
import icons from '../constants/icons';


const GreenButton = ({handlePress, style}) => {
  return (
    <TouchableOpacity onPress = {handlePress}>
        <Image
            source = {icons.green_menu}
            style = {style}
        />
    </TouchableOpacity>
  )
}

export default GreenButton