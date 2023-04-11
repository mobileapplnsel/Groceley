/**
 * @format
 */

 import React, { useEffect } from 'react';
 import {AppRegistry, LogBox, Platform} from 'react-native';
 import PushNotification from "react-native-push-notification";
 import App from './App';
 import {name as appName} from './app.json';
 import {Provider, useDispatch} from 'react-redux';
import Store from './src/redux/store';

 
 LogBox.ignoreAllLogs();
 
 const Grocley = () => {
 

  // Must be outside of any component LifeCycle (such as `componentDidMount`).
  PushNotification.configure({
    // (optional) Called when Token is generated (iOS and Android)
   
    // (required) Called when a remote is received or opened, or local notification is opened
    onNotification: function (notification) {
      console.log("NOTIFICATION:", notification);
  
      // process the notification
  
      // (required) Called when a remote is received or opened, or local notification is opened
     
    },
    requestPermissions: Platform.OS === 'ios'
  })
   return (
    <Provider store={Store}>
       <App />
       </Provider>
   );
 };
 
 AppRegistry.registerComponent(appName, () => Grocley );
