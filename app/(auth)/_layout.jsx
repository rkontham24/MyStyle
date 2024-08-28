import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'

//Creates stack layout of two stack screens; one for each in (auth) directory

const _authlayout = () => {
  return (
    <>
      <Stack>
        <Stack.Screen
          name = "signup"
          options = {{
            headerShown: false
          }}
        />
        <Stack.Screen
          name = "login"
          options = {{
            headerShown: false
          }}
        />

      </Stack>

      <StatusBar backgroundColor='#202834' style = 'light'/>
    </>
  )
}

export default _authlayout