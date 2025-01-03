// Author: Raj Swami Kontham
// Imports relevant fonts and creates main structure of the app UI

import { StyleSheet, Text, View } from 'react-native'
import { useEffect } from 'react'
import { SplashScreen, Stack } from 'expo-router';   
import { useFonts } from 'expo-font'
import { StatusBar } from 'expo-status-bar';

SplashScreen.preventAutoHideAsync();

// RootLayout indicates the base design of the system
// Imports main fonts from assets

const RootLayout = () => {
  const [fontsLoaded, error] = useFonts({
    "Poppins-Black": require("../assets/fonts/Poppins/Poppins-Black.ttf"),
    "Poppins-Bold": require("../assets/fonts/Poppins//Poppins-Bold.ttf"),
    "Poppins-ExtraBold": require("../assets/fonts/Poppins/Poppins-ExtraBold.ttf"),
    "Poppins-ExtraLight": require("../assets/fonts/Poppins/Poppins-ExtraLight.ttf"),
    "Poppins-Light": require("../assets/fonts/Poppins/Poppins-Light.ttf"),
    "Poppins-Medium": require("../assets/fonts/Poppins/Poppins-Medium.ttf"),
    "Poppins-Regular": require("../assets/fonts/Poppins/Poppins-Regular.ttf"),
    "Poppins-SemiBold": require("../assets/fonts/Poppins/Poppins-SemiBold.ttf"),
    "Poppins-Thin": require("../assets/fonts/Poppins/Poppins-Thin.ttf"),

    "Inter-Black": require("../assets/fonts/Inter/static/Inter-Black.ttf"),
    "Inter-Bold": require("../assets/fonts/Inter/static/Inter-Bold.ttf"),
    "Inter-ExtraBold": require("../assets/fonts/Inter/static/Inter-ExtraBold.ttf"),
    "Inter-ExtraLight": require("../assets/fonts/Inter/static/Inter-ExtraLight.ttf"),
    "Inter-Light": require("../assets/fonts/Inter/static/Inter-Light.ttf"),
    "Inter-Medium": require("../assets/fonts/Inter/static/Inter-Medium.ttf"),
    "Inter-Regular": require("../assets/fonts/Inter/static/Inter-Regular.ttf"),
    "Inter-SemiBold": require("../assets/fonts/Inter/static/Inter-SemiBold.ttf"),
    "Inter-Thin": require("../assets/fonts/Inter/static/Inter-Thin.ttf"),
  });

  // Hides native splash screen while the page is loading
  // fontsLoaded and error are parameters for when useEffect should be called
  // (think: "execute when ____ or ____ occurs")

  useEffect(() => {
    if (error) throw error;
    if (fontsLoaded) SplashScreen.hideAsync();
  }, [fontsLoaded, error])

  if (!fontsLoaded && !error) return null;

  return (
    <Stack>
        <Stack.Screen name = "index" options = {{ headerShown: false}}/>
        <Stack.Screen name = "(auth)" options = {{ headerShown: false}}/>
        <Stack.Screen name = "(startup)" options = {{ headerShown: false}}/>
        <Stack.Screen name = "(tabs)" options = {{ headerShown: false}}/>
    </Stack>
  )
}

// Exportable as library and package to use in other fields

export default RootLayout