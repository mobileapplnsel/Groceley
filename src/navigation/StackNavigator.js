import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import Splash from '../screens/Splash';
import Introduction from '../screens/auth/Introduction';
import Registration from '../screens/auth/Registration';
import Login from '../screens/auth/Login';
import ForgotPassword from '../screens/auth/ForgotPassword';


import { useSelector } from 'react-redux';
const Stack = createStackNavigator();

export default function StackNavigator() {
 
  
  
  const allWelScreens =

   
      {
        
        Splash: Splash,
        Introduction : Introduction,
        Registration: Registration,
        Login: Login,
        ForgotPassword : ForgotPassword,
        
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
