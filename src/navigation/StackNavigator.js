import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import Splash from '../screens/Splash';



import { useSelector } from 'react-redux';
const Stack = createStackNavigator();

export default function StackNavigator() {
 
  
  
  const allWelScreens =

   
      {
        
        Splash: Splash,
        
        
      }
     

  

    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {Object.entries({
            ...allWelScreens,
          }).map(([wel, com]) => (
            <Stack.Screen
              name={wel}
              component={com}
             // options={horizontalAnimation}
            />
          ))}
        </Stack.Navigator>
      </NavigationContainer>
    );
  
}
