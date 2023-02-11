/**
 * @format
 */

 import React, { useEffect } from 'react';
 import {AppRegistry, LogBox} from 'react-native';

 import App from './App';
 import {name as appName} from './app.json';
 import {Provider, useDispatch} from 'react-redux';
import Store from './src/redux/store';

 
 LogBox.ignoreAllLogs();
 
 const AjantaHandloom = () => {
   // const dispatch = useDispatch()
   // useEffect(() => {
   //     setTimeout(() => {
   //     dispatch(getTokenRequest());
   //    }, 2000);
   // }, []);
   return (
    <Provider store={Store}>
       <App />
       </Provider>
   );
 };
 
 AppRegistry.registerComponent(appName, () =>  AjantaHandloom);
