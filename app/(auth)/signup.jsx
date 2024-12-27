import { View, Text, ScrollView, Image, TouchableOpacity, KeyboardAvoidingView } from 'react-native'
import React from 'react'
import { Redirect, router } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context';
import images from "../../constants";
import icons from '../../constants/icons';
import TypeField from '../../components/TypeField';
import { useState } from 'react';
import DefaultButton from '../../components/DefaultButton';
import { FIREBASE_AUTH } from './firebase_config';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const signup = () => {
  const [field, setField] = useState({
    username: '',
    email: '',
    password: '',
    confirm_password: ''
  })

  const [loading, setLoading] = useState({
      loading: false,
      setLoading: false,
  })

  const auth = FIREBASE_AUTH;

  // Checks for matching passwords before creating account and routing to wardrobe
  
  const signUp = async () => {
    setLoading(true);
    if (field.password == field.confirm_password) {
      try {
        const response = await createUserWithEmailAndPassword(auth, field.email, field.password);
        console.log(response);
        //Future: Add email verification step with API call
        router.push('../wardrobe');
      }
      catch (error) {
        console.log(error);
        alert("Login failed.\nError: " + error.message);
      }
      finally {
        setLoading(false);
      }
    }
    else {
      alert("Passswords do not match.\nPlease try again.");
    }
  }

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

          <DefaultButton
            title = "Sign up"
            //handlePress = {() => router.push('../signup')}
            handlePress = {() => signUp()}
            containerStyles = "w-full mt-7"
            image = {icons.lets_go}
            position_top = {35}
          />

          <View className = "justify-center pt-12 flex-row gap-3">
              <Text 
                className = "font-popregular justify-left"
                style = {{color: 'white'}}
              >
                  Have an account?{' '}
                <TouchableOpacity onPress = {() => router.push('/login')}>
                  <Text className = "font-popbold text-orange" style = {{textDecorationLine: 'underline'}}>Sign in.</Text>
                </TouchableOpacity>
              </Text>
          </View>

        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default signup