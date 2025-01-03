import { View, Text, ScrollView, Image } from 'react-native'
import React from 'react'
import { Redirect, router } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context';
import images from "../../constants";
import icons from '../../constants/icons';
import WhiteButton from '../../components/WhiteButton';
import OrangeButton from '../../components/OrangeButton';

const Wardrobe = () => {
  return (
    <SafeAreaView className = "bg-nav h-full">
      <ScrollView contentContainerStyle = {{height: '100%'}}>
        <View className = "w-full items-center justify-center min-h[85vh] px-2">

        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Wardrobe