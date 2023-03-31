import React, { useState } from 'react';

import {
  Image,
  Platform,
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';

import { ICONS, COLORS, Fonts } from '../themes/Themes';
import normalize from '../utils/helpers/normalize';

import PropTypes from 'prop-types';

export default function Layout(props) {
  const [nav, setNav] = useState([
    {
      icon: ICONS.home,
      name: 'Home',
      link: 'Home',
     
      
    },
    {
      icon: ICONS.wallet,
      name: 'Wallet',
      link: 'Wallet',
    },
    {
      icon: ICONS.favourities,
      name: 'Favourities',
      link: 'Favourities',
    },
    {
      icon: ICONS.notifications,
      name: 'Notification',
      link: 'Notification',
    },
    {
        icon: ICONS.cart,
        name: 'Cart',
        link: 'Registration',
      },
   
   
  ]);
  const hg = name => {
    if (props[name] == true) {
      return true;
    } else {
      return false;
    }
  };
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      
      behavior={Platform.OS == 'ios' ? 'padding' : 'height'}>
      {props.children}
      <View
        style={{
       
          flexDirection: 'row',
          backgroundColor: 'white',
          paddingBottom: Platform.OS == 'ios' ? normalize(10) : normalize(8),
          backgroundColor: '#69BE53',
          
         
          marginRight: normalize(10),
          width: '100%',
       
         
        }}>
        {nav.map((item, i) => (
          <TouchableOpacity
            key={i}
            onPress={() => {
              props.navigation.navigate(item.link);
            }}
            style={{ flex: 1 }}>
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                paddingTop:
                  Platform.OS === 'ios' ? normalize(10) : normalize(10),
              }}>
              <Image
                source={item.icon}
                style={{
                  height: normalize(18),
                  width: normalize(18),
                  marginVertical: normalize(2),
                  marginBottom: normalize(4),
                  tintColor: hg(item.link) == true ? '#F36E35' : 'white',
                 // tintColor: 'white'
                }}
                resizeMode="contain"
              />
               
               <Text
               style={{
                color: 'white',
                fontSize: normalize(8)
               }}
               >{item.name}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </KeyboardAvoidingView>
  );
}

Layout.propTypes = {
  Personaldetails: PropTypes.bool,
  Employee_details: PropTypes.bool,
  Qualification: PropTypes.bool,
  Professionaldetails: PropTypes.bool,
  Experience: PropTypes.bool,
  Promotion: PropTypes.bool,
};
Layout.defaultProps = {
  Personaldetails: false,
  Employee_details: false,
  Qualification: false,
  Professionaldetails: false,
  Experience: false,
  Promotion: false,
};