import React from 'react'
import { View, Text, StyleSheet, Dimensions, Image, ImageBackground } from "react-native"
import { COLORS, FONTS, ICONS } from '../themes/Themes';
import normalize from '../utils/helpers/normalize';
import data from './data'
export const SLIDER_WIDTH = Dimensions.get('window').width 
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH)

const CarouselCardItem = ({ item, index }) => {
  return (
    
      <ImageBackground
        source={ICONS.carouselone}
        style={styles.image}
        resizeMode={"contain"}
      />
      

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

export default CarouselCardItem