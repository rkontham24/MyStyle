import { View, Text, ScrollView, Image } from 'react-native'
import React from 'react'
import { Redirect, router } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context';
import images from "../../constants";
import icons from '../../constants/icons';
import WhiteButton from '../../components/WhiteButton';
import OrangeButton from '../../components/OrangeButton';
import DefaultButton from '../../components/DefaultButton';
import GreenButton from '../../components/GreenButton';

const Confirm = () => {
  return (
    <SafeAreaView className = "bg-nav h-full">
      <ScrollView contentContainerStyle = {{height: '100%'}}>
        <View className = "w-full items-center justify-center min-h[85vh] px-2">
          
          <Image
            source = {images.images.effects_go}
            style = {{position: 'absolute', top: 55}}
            className = 'w-[400px]'
           
          />
          
          <Text
            className = "text-3xl font-intersemibold text-center justify-center"
            style = {{color: 'white', position: 'absolute', top: 287}}>
            Scan. Save. Style. {' '}
            <Text className = "text-orange">Ready?</Text>
          </Text>

          <Image
            source = {images.images.underline_go}
            style = {{position: 'absolute', top: 363, left: 148}}
          />

          <WhiteButton
            handlePress={() => router.navigate('')}
            style = {{position: 'absolute', top: 746, left: -117}}
          />

          <WhiteButton
            style = {{position: 'absolute', top: 746, left: -62}}
          />

          <WhiteButton
            handlePress = {() => router.push('/save')}
            style = {{position: 'absolute', top: 746, left: -6}}
          />
          
          <WhiteButton
            handlePress = {() => router.push('/fod')}
            style = {{position: 'absolute', top: 746, left: 50}}
          />

          <GreenButton
            style = {{position: 'absolute', top: 746, left: 106}}
          />
          
          <DefaultButton
            title = "Let's Go"
            handlePress = {() => router.push('../signup')}
            containerStyles = "w-full mt-7"
            image = {icons.lets_go}
            position_top = {520}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Confirm