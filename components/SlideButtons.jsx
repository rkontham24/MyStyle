//TODO: Economize menus by instantiating here using conditional statements and functions

import { TouchableOpacity, Text, Image } from 'react-native'
import React from 'react'
import icons from '../constants/icons';
import { isIndex } from '../helpers'

const SlideButtons = ({style, index}) => {
  return (
    <TouchableOpacity
        handlePress = {() => router.navigate(' ')}
        style = {{position: 'absolute', top: 746, left: -117}}
    >
        <Image
            //source = {icons.{...isIndex(1, index) ? 'orange_menu' : 'white_menu'}}
            style = {style}
        />
    </TouchableOpacity>
  )
}

export default SlideButtons