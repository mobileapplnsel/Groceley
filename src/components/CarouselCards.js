import React from 'react'
import { View } from "react-native"
import Carousel, { Pagination } from 'react-native-snap-carousel'
import CarouselCardItem, { SLIDER_WIDTH, ITEM_WIDTH } from './CarouselCardItem'
import { COLORS, FONTS, ICONS } from '../themes/Themes';
import { ViewPropTypes } from 'deprecated-react-native-prop-types'
import data from './data'
import normalize from '../utils/helpers/normalize';


const CarouselCards = () => {
  const [index, setIndex] = React.useState(0)
  const isCarousel = React.useRef(null)

  return (
    <View style={{
        marginTop: normalize(20)
    }} >
      <Carousel
        autoplay={true}
        enableMomentum= {false}
        lockScrollWhileSnapping ={false}
        layout="default"
       // layoutCardOffset={9}
        ref={isCarousel}
        data={data}
        renderItem={CarouselCardItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        onSnapToItem={(index) => setIndex(index)}
        useScrollView={true}
/>      
      <Pagination 
        dotsLength={data.length}
        activeDotIndex={index}
        carouselRef={isCarousel}
        dotStyle={{
          width: normalize(10),
          height: normalize(10),
          borderRadius: normalize(5),
          marginHorizontal: -5,
          marginTop: normalize(-5),
          backgroundColor:"#E31C23",
          justifyContent: 'center',
          //marginHorizontal: normalize(-5)
        }}
        inactiveDotOpacity={0.4}
        inactiveDotStyle={{

          backgroundColor: "#909090",

        }}
      
        inactiveDotScale={0.6}
        tappableDots={true}
      />
      
    </View>
  )
}

export default CarouselCards