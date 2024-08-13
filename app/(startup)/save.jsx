import { View, Text, ScrollView, Image } from 'react-native'
import React from 'react'
import { Redirect, router } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context';
import images from "../../constants";
import icons from '../../constants/icons';
import WhiteButton from '../../components/WhiteButton';
import OrangeButton from '../../components/OrangeButton';

const Save = () => {
  return (
    <SafeAreaView className = "bg-nav h-full">
      <ScrollView contentContainerStyle = {{height: '100%'}}>
        <View className = "w-full items-center justify-center min-h[85vh] px-2">
          
          <Image
            source = {images.images.effects_save}
            style = {{position: 'absolute', top: 55}}
            className = "w-[374px]"
            resizeMode = 'contain'
          />

          <Image
            source = {images.images.line_one}
            style = {{position: 'absolute', top: 98}}
            className = "justify-center"
            resizeMode = 'contain'
          />

          <Image
            source = {icons.categories}
            style = {{position: 'absolute', top: 187, left: 43}}
            className = "w-[137px]"
            resizeMode = 'contain'
          />

          <Image
            source = {images.images.shoe_blue}
            style = {{position: 'absolute', top: 83, left: 250}}
            className = "w-[104px]"
            resizeMode = 'contain'
          />

          <Image
            source = {images.images.shoe_bw}
            style = {{position: 'absolute', top: 220, left: 237}}
            className = "w-[129px]"
            resizeMode = 'contain'
          />

          <Image
            source= {images.images.shoe_cream}
            style = {{position: 'absolute', top: 350, left: 246}}
            className = "w-[112px]"
            resizeMode = 'contain'
          />

          <Text
            className = "text-3xl font-intersemibold text-center justify-center"
            style = {{color: 'white', position: 'absolute', top: 458}}>
            <Text className = "text-orange">Save and browse{' '}</Text>
            your wardrobe at your fingertips.
          </Text>

          <Image
            source = {images.images.underline_save}
            style = {{position: 'absolute', top: 492, left: 25}}
          />

          <WhiteButton
            handlePress={() => router.navigate('')}
            style = {{position: 'absolute', top: 746, left: -117}}
          />

          <WhiteButton
            handlePress = {() => router.push('/scan')}
            style = {{position: 'absolute', top: 746, left: -62}}
          />

          <OrangeButton
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

export default Save