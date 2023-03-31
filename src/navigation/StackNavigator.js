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
import Filters from '../screens/main/Filters';
import Subcategorylist from '../screens/main/Subcategorylist';
import Add_delivery_address from '../screens/main/Add_delivery_address';
import EditAddressPage from '../screens/main/EditAddressPage';
import MultipleAddress from '../screens/main/MultipleAddress';
import PaymentOptions from '../screens/main/PaymentOptions';
import Transaction_history from '../screens/main/Transaction_history';
import Promotion from '../screens/main/Promotion';
import DepositCoinsPage from '../screens/main/DepositCoinsPage';
import Membership from '../screens/main/Membership';
import ReferAndEarn from '../screens/main/ReferAndEarn';


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
        Transaction_history:Transaction_history,
        Add_delivery_address : Add_delivery_address,
        Reset_Password: Reset_Password,
        PaymentOptions:PaymentOptions,
        Profile: Profile,
        ChangePassword: ChangePassword,
        EditAddressPage: EditAddressPage,
        Productlist : Productlist,
        Discountpage: Discountpage,
        Productdetails: Productdetails,
        Notification: Notification,
        Cart: Cart,
        ReferAndEarn:ReferAndEarn,
        Membership:Membership,
        Promotion:Promotion,
        DepositCoinsPage: DepositCoinsPage,
        MultipleAddress:MultipleAddress,
        Orderlist: Orderlist,
        Orderdetails: Orderdetails,
        Helpandsupport: Helpandsupport,
        Recipe: Recipe,
        Wallet: Wallet,
        Recipe_list: Recipe_list,
        Filters: Filters,
        Subcategorylist: Subcategorylist,
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
