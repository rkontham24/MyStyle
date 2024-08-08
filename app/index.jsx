import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView, Text, View, Image, ImageBackground } from 'react-native';
import { Link } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import images from "../constants";
import icons from '../constants/icons';

export default function App() {
  return (
    <SafeAreaView className = "bg-nav h-full">
      <ScrollView contentContainerStyle = {{ height: '100%'}}>
        <View className = "w-full items-center justify-center h-full px-2">
          
          <Image
            source = {images.images.logo}
            className = "w-[190px] h-[95px]"
            resizeMode = 'contain'
          />

          <Image 
            source = {images.images.lens} 
            className = "w-[248px] h-[380px]" 
            resizeMode='contain'
          />

          <Image
            source = {images.images.effects_splash}
            style = {{position: 'absolute', top: 140}}
            className = "w-[370px] h-[310px]"
            resizeMode = 'contain'
          />
          
          <View className = "relative mt-5">
            <Text 
              className = "text-3xl font-intersemibold text-center"
              style={{color: 'white'}}>
              Refresh your fits with {' '}
              <Text className = "text-orange">MyStyle.</Text>
            </Text>
            
            <Image
              source = {images.images.underline_splash}
              style = {{position: 'absolute', top: 78, left: 115}}
            />
          </View>

          <Text 
            className = "text-16 font-interregular text-center"
            style = {{color: 'light_white',
                      position: 'absolute',
                      top: 638}}>
            Welcome to your personal wardrobe.
          </Text>

          <Image
            source = {icons.menu_splash}
            style = {{position: 'absolute', top: 736}}
          />

        </View>
      </ScrollView>

      <StatusBar backgroundColor='#FFFFFF' style='light'/>
    </SafeAreaView>
  );
}