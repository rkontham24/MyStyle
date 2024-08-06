import { View, Text, Image } from 'react-native';
import React from 'react';
import { Tabs, Redirect } from 'expo-router'; 
import { Colors } from 'react-native/Libraries/NewAppScreen';
import icons from '../../constants';

const TabIcon = ({ icon, color, name, focused}) => {
  return (
    <View className = "items-center justify-center">
      <Image 
        source = {icon}
        resizeMode = "contain"
        tintColor = {color}
        className = "w-7 h-6"
      />
      <Text className = {`${focused ? 'font-popbold' : 'font-popmedium'} text-xs`} style = {{color: color}}>
      {name}
      </Text>
    </View>
  )
}


const TabsLayout = () => {
  return (
    <>
      <Tabs
        screenOptions = {{
          tabBarShowLabel : false,
          tabBarActiveTintColor: '#EE6C4D',
          tabBarInactiveTintColor: '#FFFFFF',
          tabBarStyle: {
            backgroundColor: "#202834",
            borderTopWidth: 2,
            borderTopColor: '#39404A',
            heigth: 80

          }
        }}
      >
        <Tabs.Screen 
          name = "wardrobe"
          options = {{
            title: 'Wardrobe',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon = {icons.icons.wardrobe_icon}
                color = {color}
                name = "Wardrobe"
                focused = {focused}
              />
            )
          }}
        />
        <Tabs.Screen 
          name = 'scan'
          options = {{
            title: 'Scan',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon = {icons.icons.scan_icon}
                color = {color}
                name = "Scan"
                focused = {focused}
              />
            )
          }}
        />
        <Tabs.Screen
          name = 'settings'
          options = {{
            title: 'Settings',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon 
                icon = {icons.icons.settings_icon}
                color = {color}
                name = "Settings"
                focused = {focused}
              />
            )
          }}
        />
      </Tabs>
    </>
  )
}

export default TabsLayout 