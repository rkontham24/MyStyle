import { TouchableOpacity, Text, Image } from 'react-native'
import React from 'react';
import icons from '../constants/icons';


const WhiteButton = ({handlePress, style}) => {
  return (
    <TouchableOpacity onPress = {handlePress}>
        <Image
            source = {icons.white_menu}
            style = {style}
        />
    </TouchableOpacity>
  )
}

export default WhiteButton