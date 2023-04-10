import React from 'react';
import {ActivityIndicator, SafeAreaView, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import {COLORS} from '../../themes/Themes';
import LottieView from 'lottie-react-native';


import normalize from './normalize';

export default function Loader(props) {
  return props.visible ? (
    <SafeAreaView
      style={{
        ...StyleSheet.absoluteFillObject,
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        zIndex: 10,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      {/* <ActivityIndicator size="large" color={COLORS.white} /> */}
      <LottieView 
          source={{uri:'https://assets3.lottiefiles.com/packages/lf20_ovwsvehd.json'}}
         autoPlay 
         
          style={{
            height: normalize(300),
            width: normalize(300)
          }}
         
           />

           
    </SafeAreaView>
  ) : null;
}

Loader.propTypes = {
  visible: PropTypes.bool,
};

Loader.defaultProps = {
  visible: true,
};