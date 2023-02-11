import React, { useEffect } from 'react';
import { Image, View, SafeAreaView, Text } from 'react-native';


import { ICONS, IMAGES, COLORS, FONTS } from '../themes/Themes';
import normalize from '../utils/helpers/normalize';
export default function Splash(props) {
  // useEffect(() => {
  //   setTimeout(() => {
  //     props.navigation.navigate('Login');
  //   }, 2500);
  // }, []);

  return (
    <>
      <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>

        <View style={{
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <Image
            source={IMAGES.logo}
            resizeMode="cover"
            style={{
            
              width: '100%',
              height: '100%',
             
             
             
            }}
          />
        </View>
        
      </SafeAreaView>
    </>
  );
}
