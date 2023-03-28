import React from 'react'
import { View, Text, StyleSheet, Dimensions, Image, ImageBackground } from "react-native"
import { COLORS, FONTS, ICONS } from '../themes/Themes';
import normalize from '../utils/helpers/normalize';
import data2 from './data2'
export const SLIDER_WIDTH = Dimensions.get('window').width 
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH) * 1.02

const CarouselCardItem3 = ({ item, index }) => {
  return (
    
    <View style={{
     
      width: ITEM_WIDTH,
      height: normalize(30),
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
      
    }}>

<Image
                  source={item.img3}
                  style={{
                    height: normalize(30),
                    width: normalize(30),
                    alignSelf: 'center',
                    
                   marginTop: normalize(-10)
                  }}
                  resizeMode={'contain'}
                ></Image>


                  <Text style={{
                    color: '#F36E35',
                    fontSize: normalize(10),
                    fontWeight: '700',
                   
                   marginTop: normalize(-10)
                  }}>
   {item.body3}
                  </Text>
</View>    
      

  )
}

const styles = StyleSheet.create({
  container: {
   // backgroundColor: 'yellow',
   // borderRadius: 8,
    height: normalize(140),
    width: ITEM_WIDTH,
   
    
  },
  image: {
    width: ITEM_WIDTH,
    height: normalize(120),
  },
  

})

export default CarouselCardItem3