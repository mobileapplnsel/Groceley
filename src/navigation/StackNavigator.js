import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import Splash from '../screens/Splash';
import Introduction from '../screens/auth/Introduction';
import Registration from '../screens/auth/Registration';
import Login from '../screens/auth/Login';
import ForgotPassword from '../screens/auth/ForgotPassword';
import Home from '../screens/main/Home';
import Otppage from '../screens/auth/Otppage';
import Reset_Password from '../screens/auth/Reset_Password';
import { useSelector } from 'react-redux';
import Profile from '../screens/main/Profile';
import ChangePassword from '../screens/auth/ChangePassword';
import Productlist from '../screens/main/Productlist';
import Discountpage from '../screens/main/Discountpage';
import Productdetails from '../screens/main/Productdetails';
import Notification from '../screens/main/Notification';
import Cart from '../screens/main/Cart';
import Orderlist from '../screens/main/Orderlist';
import Orderdetails from '../screens/main/Orderdetails';
import Helpandsupport from '../screens/main/Helpandsupport';
import Recipe from '../screens/main/Recipe';
import Wallet from '../screens/main/Wallet';
import Recipe_list from '../screens/main/Recipe_list';
import Orderdetails2 from '../screens/main/Orderdetails2';
const Stack = createStackNavigator();

export default function StackNavigator() {
 
  
  
  const allWelScreens =

   
      {
        
        Splash: Splash,
        Introduction : Introduction,
        Registration: Registration,
        Login: Login,
        ForgotPassword : ForgotPassword,
        Home : Home,
        Otppage : Otppage,
        Reset_Password: Reset_Password,
        Profile: Profile,
        ChangePassword: ChangePassword,
        Productlist : Productlist,
        Discountpage: Discountpage,
        Productdetails: Productdetails,
        Notification: Notification,
        Cart: Cart,
        Orderlist: Orderlist,
        Orderdetails: Orderdetails,
        Helpandsupport: Helpandsupport,
        Recipe: Recipe,
        Wallet: Wallet,
        Recipe_list: Recipe_list,
        Orderdetails2: Orderdetails2,
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
