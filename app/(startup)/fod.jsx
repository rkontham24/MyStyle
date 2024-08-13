import { View, Text, ScrollView, Image } from 'react-native'
import React from 'react'
import { Redirect, router } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context';
import images from "../../constants";
import icons from '../../constants/icons';
import WhiteButton from '../../components/WhiteButton';
import OrangeButton from '../../components/OrangeButton';

const FOD = () => {
  return (
    <SafeAreaView className = "bg-nav h-full">
      <ScrollView contentContainerStyle = {{height: '100%'}}>
        <View className = "w-full items-center justify-center min-h[85vh] px-2">

          <Image
            source = {images.images.effects_fod}
            style = {{position: 'absolute', top: 137}}
            className = "w-[370px]"
            resizeMode = 'contain'
          />

          <Image
            source = {images.images.shirt_fod}
            style = {{position: 'absolute', top: 145, left: 80}}
            className = "w-[131px]"
            resizeMode = 'contain'
          />

          <Image
            source = {images.images.shoe_fod}
            style = {{position: 'absolute', top: 151, left: 227}}
            className = "w-[113px]"
            resizeMode = 'contain'
          />

          <Image
            source = {images.images.left_arrow}
            style = {{position: 'absolute', top: 222, left: 110}}
            className = "w-[56.35px]"
            resizeMode = 'contain'
          />

          <Image
            source ={images.images.right_arrow}
            style = {{position: 'absolute', top: 228, left: 246}}
            className = "w-[62.76px]"
            resizeMode='contain'
          />

          <Image
            source = {icons.fod}
            style = {{position: 'absolute', top: 322}}
            className = "w-[90px] h-[82px]"
            resizeMode='contain'
          />

          <Text
            className = "text-3xl font-intersemibold text-center justify-center"
            style = {{color: 'white', position: 'absolute', top: 458}}>
            Get
            <Text className = "text-orange">{' '}Fits of the Day (FODs) styled{' '}</Text>
            to you.
          </Text>

          <Image
            source = {images.images.underline_fod}
            style = {{position: 'absolute', top: 534}}
          />

          <WhiteButton
            handlePress={() => router.navigate('')}
            style = {{position: 'absolute', top: 746, left: -117}}
          />

          <WhiteButton
            handlePress = {() => router.push('/scan')}
            style = {{position: 'absolute', top: 746, left: -62}}
          />

          <WhiteButton
            handlePress = {() => router.push('/save')}
            style = {{position: 'absolute', top: 746, left: -6}}
          />
          
          <OrangeButton
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

export default FOD