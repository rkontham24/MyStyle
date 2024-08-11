import { TouchableOpacity, Text, Image } from 'react-native'
import React from 'react'
import icons from '../constants/icons';


const OrangeButton = ({style}) => {
  return (
    <TouchableOpacity>
        <Image
            source = {icons.orange_menu}
            style = {style}
        />
    </TouchableOpacity>
  )
}

export default OrangeButton