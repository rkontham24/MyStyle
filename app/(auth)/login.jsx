import { View, Text, ScrollView, Image, TouchableOpacity, KeyboardAvoidingView } from 'react-native'
import React from 'react'
import { Redirect, router } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context';
import images from "../../constants";
import icons from '../../constants/icons';
import TypeField from '../../components/TypeField';
import { useState } from 'react';
import DefaultButton from '../../components/DefaultButton';

const login = () => {

  const [field, setField] = useState({
    username: '',
    password: '',
  })

  return (
    <SafeAreaView className = "bg-nav h-full">
      <KeyboardAvoidingView className = "w-full justify-center min-h[85px] px-6" behavior = "padding">
        <ScrollView contentContainerStyke = {{height: '100%'}}>

          <Image
            source = {images.images.logo}
            className = "w-[190px] h-[95px]"
            resizeMode = 'contain'
          />

          <Text
            className = "text-2xl font-popsemibold padding-4"
            style = {{color: 'white'}}
            resizeMode = 'contain'
          >
            Welcome back.
          </Text>

          <TypeField
            title = "Username"
            value = {field.username}
            handleChangeText = {(e) => setField({ ...field,
              username: e})}
            otherStyle = "mt-5"
            keyboardType = "username"
          />

          <TypeField
            title = "Password"
            value = {field.password}
            handleChangeText = {(e) => setField({ ...field,
              password: e})}
            otherStyle = "mt-8"
            keyboardType = "password"
          />

          <DefaultButton
            title = "Sign in"
            handlePress = {() => router.push('../login')}
            containerStyles = "w-full mt-7"
            image = {icons.lets_go}
            position_top = {35}
          />

          <View className = "justify-center pt-12 flex-row gap-3">
              <Text 
                className = "font-popregular justify-left"
                style = {{color: 'white'}}
              >
                  Don't have an account?{' '}
                <TouchableOpacity onPress = {() => router.push('/signup')}>
                  <Text className = "font-popbold text-orange" style = {{textDecorationLine: "underline"}}>
                    Sign up.
                  </Text>
                </TouchableOpacity>
              </Text>
          </View>

        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default login