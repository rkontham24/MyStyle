import { View, Text, ScrollView, Image } from 'react-native'
import React from 'react'
import { Redirect, router } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context';
import images from "../../constants";
import icons from '../../constants/icons';
import TypeField from '../../components/TypeField';
import { useState } from 'react';

const signup = () => {
  const [field, setField] = useState({
    username: '',
    email: '',
    password: '',
    confirm_password: ''
  })

  return (
    <SafeAreaView className = "bg-nav h-full">
      <ScrollView contentContainerStyke = {{height: '100%'}}>
        <View className = "w-full justify-center min-h[85px] px-6">

          <Image
            source = {images.images.logo}
            className = "w-[190px] h-[95px]"
            resizeMode = 'contain'
          />

          <Text
            className = "text-2xl font-popsemibold"
            style = {{color: 'white'}}
            resizeMode = 'contain'
          >
            Welcome.
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
            title = "Email address"
            value = {field.email}
            handleChangeText = {(e) => setField({ ...field,
              email: e})}
            otherStyle = "mt-8"
            keyboardType = "email"
          />

          <TypeField
            title = "Password"
            value = {field.password}
            handleChangeText = {(e) => setField({ ...field,
              password: e})}
            otherStyle = "mt-8"
            keyboardType = "password"
          />

          <TypeField
            title = "Confirm Password"
            value = {field.confirm_password}
            handleChangeText = {(e) => setField({ ...field,
              confirm_password: e})}
            otherStyle = "mt-8"
            keyboardType = "password"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default signup