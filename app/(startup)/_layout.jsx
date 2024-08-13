import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'

//Stack creates a list of views containing the views in the origin file strcuture

const SetupNavigation = () => {
  return (
    <>
      <Stack>
        <Stack.Screen
          name = "scan"
          options = {{
            headerShown: false
          }}
        />
        <Stack.Screen
          name = "save"
          options = {{
            headerShown: false
          }}
        />
        <Stack.Screen
          name = "fod"
          options = {{
            headerShown: false
          }}
        />
        <Stack.Screen
          name = "confirm"
          options = {{
            headerShown: false
          }}
        />
      </Stack>

      <StatusBar backgroundColor='#202834' style = 'light'/>
    </>
  )
}

export default SetupNavigation