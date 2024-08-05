import { View, Text, Image } from 'react-native';
import React from 'react';
import { Tabs, Redirect } from 'expo-router'; 
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { icons } from '../../imports';

const TabIcon = ({ icon, color, name, focused }) => {
  return (
    <View>
      <Image 
        source = { icon }
      />
    </View>
  )
}

const TabsLayout = () => {
  return (
    <>
      <Tabs>
        <Tabs.Screen
          name = 'wardrobe'
          options = {{
            title: 'Wardrobe',
            headerShown: false,

          // tabBarIcon is a property containing the color and 
          // the property boolean to display om the app tabs
          // it is connected to the constant value TabIcon shown above
          
            tabBarIcon: ({ color, focused }) => (
              <TabIcon 
                icon={icons.wardrobe_icon}
                color = {color}
                name = "Wardrobe"
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