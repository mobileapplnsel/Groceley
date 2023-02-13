import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {COLORS, FONTS} from '../themes/Themes';
import normalize from '../utils/helpers/normalize';
import PropTypes from 'prop-types';

export default function ButtonComponent(props) {
  console.log(props.disabled);
  function onPress() {
    if (props.onPress) {
      props.onPress();
    }
  }

  return (
    <TouchableOpacity
      disabled={props.disabled}
      style={{
        height: props.height,
        width: props.width ? props.width : '100%',
        borderRadius: props.borderRadius,
        backgroundColor: props.backgroundColor,
        borderColor: props.borderColor,
        borderWidth: props.borderWidth,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: props.alignSelf,
        marginTop: props.marginTop,
        marginBottom: props.marginBottom,
        marginHorizontal: props.marginHorizontal,
        marginVertical: props.marginVertical,
        marginLeft: props.marginLeft,
        marginRight: props.marginRight,
        opacity: props.disabled == true ? 0.5 : 1,
      }}
      onPress={() => {
        onPress();
      }}>
      <Text
        style={{
          color: props.textColor,
          fontSize: props.fontSize,

          marginTop: props.textMarginTop,
          fontWeight: props.fontWeight,
          fontFamily: props.fontFamily,
          textAlign: 'center',
        }}
        numberOfLines={2}>
        {props.title}
      </Text>
    </TouchableOpacity>
  );
}

ButtonComponent.propTypes = {
  height: PropTypes.number,
  width: PropTypes.any,
  backgroundColor: PropTypes.string,
  borderColor: PropTypes.string,
  borderWidth: PropTypes.number,
  borderRadius: PropTypes.number,
  textColor: PropTypes.string,
  fontSize: PropTypes.number,
  title: PropTypes.string,
  onPress: PropTypes.func,
  alignSelf: PropTypes.string,
  marginTop: PropTypes.number,
  marginBottom: PropTypes.number,
  marginHorizontal: PropTypes.number,
  marginVertical: PropTypes.number,
  marginLeft: PropTypes.number,
  marginRight: PropTypes.number,
  fontWeight: PropTypes.string,
  fontFamily: PropTypes.any,
  disabled: PropTypes.bool,
};

ButtonComponent.defaultProps = {
  height: normalize(50),
  //width: '50%',

  backgroundColor: 'green',
  borderRadius: normalize(10),
  textColor: 'black',
  fontSize: normalize(14),

  borderWidth: 0,
  title: '',
  onPress: null,
  alignSelf: 'center',
  marginTop: 0,
  marginBottom: 0,
  marginHorizontal: 0,
  marginVertical: 0,
  fontFamily: FONTS.OpenSansRegular,
  disabled: false,
};