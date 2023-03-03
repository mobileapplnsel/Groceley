import React, { useEffect } from 'react';
import { Image, View, SafeAreaView, Text, ImageBackground } from 'react-native';


import { ICONS, IMAGES, COLORS, FONTS } from '../themes/Themes';
import normalize from '../utils/helpers/normalize';
export default function Splash(props) {
  useEffect(() => {
    setTimeout(() => {
     // props.navigation.navigate('Introduction');
    }, 2500);
  }, []);

  return (
    <>
      <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>

        <View style={{
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <ImageBackground
            source={ICONS.Splash_image}
            resizeMode="cover"
            style={{
            
              width: '100%',
              height: '100%',
             
             
             
            }}

          >

           <Image
           
           
           source={ICONS.logo}
            resizeMode="contain"
            style={{
            
              width: '50%',
              height: '50%',
              alignSelf: 'center',
              marginTop: normalize(140)
             
            }}/>


          </ImageBackground>
        </View>
        
      </SafeAreaView>
    </>
  );
}
