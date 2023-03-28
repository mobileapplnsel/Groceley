import React from 'react'
import { View } from "react-native"
import Carousel, { Pagination } from 'react-native-snap-carousel'
import CarouselCardItem, { SLIDER_WIDTH, ITEM_WIDTH } from './CarouselCardItem'
import { COLORS, FONTS, ICONS } from '../themes/Themes';
import { ViewPropTypes } from 'deprecated-react-native-prop-types'
import data2 from './data2'
import normalize from '../utils/helpers/normalize';
import CarouselCardItem2 from './CarouselCardItem2';


const CarouselCards2 = () => {
  const [index, setIndex] = React.useState(0)
  const isCarousel = React.useRef(null)

  return (
    <View style={{
        marginTop: normalize(10),
       
    }} >
      <Carousel
        autoplay={true}
        enableMomentum= {false}
        lockScrollWhileSnapping ={false}
        layout="default"
       // layoutCardOffset={9}
        ref={isCarousel}
        data={data2}
        renderItem={CarouselCardItem2}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        onSnapToItem={(index) => setIndex(index)}
        useScrollView={true}
/>      
     
      
    </View>
  )
}

export default CarouselCards2