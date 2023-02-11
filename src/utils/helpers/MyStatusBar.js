// //import liraries
// import React from 'react';
// import { StatusBar, Platform, StyleSheet, SafeAreaView } from 'react-native';
// import PropTypes from 'prop-types';
// import { COLORS } from '../../themes/Themes';

// const MyStatusBar = props => (
//   <SafeAreaView style={Platform.OS === 'ios' && [props.backgroundColor]}>
//     <StatusBar
//       translucent={props.translucent}
//       backgroundColor={props.backgroundColor}
//       barStyle={props.barStyle}
//       hidden={false}
//     />
//   </SafeAreaView>
// );

// export default MyStatusBar;
// MyStatusBar.propTypes = {
//   backgroundColor: PropTypes.string,
//   barStyle: PropTypes.string,
//   height: PropTypes.number,
//   translucent: PropTypes.bool,
// };

// MyStatusBar.defaultProps = {
//   backgroundColor: COLORS.white,
//   barStyle: 'light-content',
//   translucent: false,
// };

//import liraries
import React from 'react';
import { StatusBar, Platform, StyleSheet, SafeAreaView } from 'react-native';
import PropTypes from 'prop-types';
import { COLORS } from '../../themes/Themes'
const STATUSBAR_HEIGHT = StatusBar.currentHeight;

const MyStatusBar = ({ backgroundColor, barStyle, ...props }) => (
  <SafeAreaView style={Platform.OS === 'ios' && [{ backgroundColor }]}>
    <StatusBar
      translucent={false}
      backgroundColor={backgroundColor}
      barStyle={barStyle}
      hidden={false}
    />
  </SafeAreaView>
);

export default MyStatusBar;
MyStatusBar.propTypes = {
  backgroundColor: PropTypes.string,
  barStyle: PropTypes.string,
  height: PropTypes.number,
};

MyStatusBar.defaultProps = {
  backgroundColor: COLORS.white,
  barStyle: 'light-content',
};