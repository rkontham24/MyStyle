import { View, Text, ScrollView, Image } from 'react-native'
import React from 'react'
import { Redirect, router } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context';
import images from "../../constants";
import WhiteButton from '../../components/WhiteButton';
import OrangeButton from '../../components/OrangeButton';


const Scan = () => {
  return (
    <SafeAreaView className = "bg-nav h-full">
      <ScrollView contentContainerStyle = {{height: '100%'}}>
        <View className = "w-full items-center justify-center min-h[85vh] px-2">

          <Image
            source = {images.images.effects_scan}
            style = {{position: 'absolute', top: 25}}
            className = "w-[370px]"
            resizeMode = 'contain'
          />

          <Image
            source = {images.images.dress}
            style = {{position: 'absolute', top: 60, left: 225}}
            className = "w-[150px]"
            resizeMode = 'contain'
          />

          <Image
            source = {images.images.shoes_scan}
            style = {{position: 'absolute', top: 93, left: 39}}
            className = "w-[214px]"
            resizeMode = 'contain'
          />

          <Image
            source = {images.images.shirt_scan}
            style = {{position: 'absolute', top: 251, left: 52}}
            className = "w-[212px]"
            resizeMode = 'contain'
          />

          <Text
            className = "text-3xl font-intersemibold text-center justify-center"
            style = {{color: 'white', position: 'absolute', top: 458}}>
            <Text className = "text-orange">Scan{' '}</Text>
            your favorite clothes.
          </Text>

          <Image
            source = {images.images.underline_scan}
            style = {{position: 'absolute', top: 492, left: 58}}
          />

          <WhiteButton
            handlePress={() => router.navigate('')}
            style = {{position: 'absolute', top: 746, left: -117}}
          />

          <OrangeButton
            style = {{position: 'absolute', top: 746, left: -62}}
          />

          <WhiteButton
            handlePress={() => router.push('/save')}
            style = {{position: 'absolute', top: 746, left: -6}}
          />
          
          <WhiteButton
            handlePress={() => router.push('/fod')}
            style = {{position: 'absolute', top: 746, left: 50}}
          />

          <WhiteButton
            handlePress={() => router.push('/confirm')}
            style = {{position: 'absolute', top: 746, left: 106}}
          />
          
          
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Scan