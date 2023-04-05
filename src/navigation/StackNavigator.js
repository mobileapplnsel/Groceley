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
import Favourities from '../screens/main/Favourities';
import Add_delivery_address from '../screens/main/Add_delivery_address';
import Select_delivery_address from '../screens/main/Select_delivery_address';
import Subcategorylist from '../screens/main/Subcategorylist';
import Add_delivery_instructions from '../screens/main/Add_delivery_instructions';
import Filter from '../screens/main/Filter';
import Coupon from '../screens/main/Coupon';
import PaymentOptions from '../screens/main/PaymentOptions';
import EditAddressPage from '../screens/main/EditAddressPage';
import MultipleAddress from '../screens/main/MultipleAddress';
import Membership from '../screens/main/Membership';
import DepositCoinsPage from '../screens/main/DepositCoinsPage';
import Transaction_history from '../screens/main/Transaction_history';
import Promotion from '../screens/main/Promotion';
import ReferAndEarn from '../screens/main/ReferAndEarn';
import Edit_Delivery_Instructions from '../screens/main/Edit_Delivery_Instructions';
import Leaderboard from '../screens/main/Leaderboard';

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
        Favourities : Favourities,
        Add_delivery_address: Add_delivery_address,
        Filter: Filter,
        Select_delivery_address: Select_delivery_address,
        Subcategorylist: Subcategorylist,
        Add_delivery_instructions : Add_delivery_instructions,
        Coupon: Coupon,
        PaymentOptions: PaymentOptions,
        EditAddressPage : EditAddressPage,
        MultipleAddress: MultipleAddress,
        Membership: Membership,
        PaymentOptions: PaymentOptions,
        DepositCoinsPage: DepositCoinsPage,
        Transaction_history: Transaction_history,
        Promotion: Promotion,
        ReferAndEarn: ReferAndEarn,
        Edit_Delivery_Instructions: Edit_Delivery_Instructions,
        Leaderboard : Leaderboard
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
