import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView, Text, View, Image, ImageBackground, TouchableOpacity } from 'react-native';
import { Redirect, router, Link } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import images from "../constants";
import icons from '../constants/icons';

export default function App() {
  return (
    <SafeAreaView className = "bg-nav h-full">
      <ScrollView contentContainerStyle = {{ height: '100%'}}>
        <View className = "w-full items-center justify-center min-h[85vh] px-2">
          
          <Image
            source = {images.images.logo}
            style = {{position: 'absolute', top: 10}}
            className = "w-[190px] h-[95px]"
            resizeMode = 'contain'
          />

          <Image 
            source = {images.images.lens} 
            className = "w-[248px] h-[380px]" 
            style = {{position: 'absolute', top: 100}}
            resizeMode='contain'
          />

          <Image
            source = {images.images.effects_splash}
            style = {{position: 'absolute', top: 140}}
            className = "w-[370px] h-[310px]"
            resizeMode = 'contain'
          />
          
          
          <Text 
            className = "text-3xl font-intersemibold text-center justify-center"
            style={{color: 'white', position: 'absolute', top: 475}}>
            Refresh your fits with {' '}
            <Text className = "text-orange">MyStyle.</Text>
          </Text>
          
          <Image
            source = {images.images.underline_splash}
            style = {{position: 'absolute', top: 552, left: 138}}
          />
          

          <Text 
            className = "text-16 font-interregular text-center"
            style = {{color: 'white',
                      position: 'absolute',
                      top: 638}}>
            Welcome to your personal wardrobe.
          </Text>

         
          <Image
            source = {icons.orange_menu}
            style = {{position: 'absolute', top: 746, left: 90}}
          />

          <Image
              source = {icons.white_menu}
              style = {{position: 'absolute', top: 746, left: 145}}
          />


          <Image
            source = {icons.white_menu}
            style = {{position: 'absolute', top: 746, left: 201}}
          />

          <Image
            source = {icons.white_menu}
            style = {{position: 'absolute', top: 746, left: 257}}
          />

          <Image
            source = {icons.white_menu}
            style = {{position: 'absolute', top: 746, left: 313}}
          />
          

        </View>
      </ScrollView>

      <StatusBar backgroundColor='#FFFFFF' style='light'/>
    </SafeAreaView>
  );
}