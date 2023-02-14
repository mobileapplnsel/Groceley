import React, { useState } from 'react';
import { TextInput, View, Image, TouchableOpacity, Text } from 'react-native';
import normalize from '../utils/helpers/normalize';
import PropTypes from 'prop-types';
import { COLORS, FONTS, ICONS, IMAGES } from '../themes/Themes';

export default function TextInputItem(props) {
  const [secure, setSecure] = useState(props.isSecure);
  const [isFocussed, setIsFocussed] = useState(false);

  function onChangeText(text) {
    if (props.onChangeText) {
      props.onChangeText(text);
    }
  }

  function onSubmitEditing() {
    if (props.onSubmitEditing) {
      props.onSubmitEditing();
    }
  }


  return (
    <View
      style={{
        flexDirection: 'row',
       // borderWidth: normalize(0.3),
        borderColor:
          props.borderColor == COLORS.lightBlack && isFocussed == true
            ? props.colorGreenVisible ? COLORS.green : COLORS.black
            : props.borderColor,

        borderRadius: props.borderRadius,
        width: props.width,
        height: props.height,
        marginTop: props.marginTop,
        marginBottom: props.marginBottom,
        backgroundColor: props.backgroundColor,
        alignItems: 'center',
        marginleft: props.marginleft,
        marginRight: props.marginRight,
      }}>
      {props.isStick &&
        (isFocussed == true || COLORS.yamahaRed == props.borderColor) ? (
        <View
          style={{
            height: normalize(40),
            width: normalize(4),
            backgroundColor:
              props.borderColor == COLORS.lightBlack && isFocussed
                ? COLORS.green
                : props.borderColor,
            position: 'absolute',
            left: -normalize(12),
            top: 0,
          }}
        />
      ) : null}

      {props?.isText ? (
        <Text
          numberOfLines={1}
          style={{
            paddingLeft: normalize(12),
            paddingRight: normalize(35),
            letterSpacing: props.letterSpacing,
            width: '100%',
            fontFamily: props.fontFamily,
            fontSize: props.fontSizes,
            color: props?.color,

          }}>{props?.value}</Text>
      ) : (
        <TextInput
          style={[
            {
              paddingLeft: normalize(12),
              paddingRight: normalize(25),
              textAlign: props.textAlign,
              letterSpacing: props.letterSpacing,
              width: '98%',
              fontFamily: props.fontFamily,
              fontSize: props.fontSizes,
              justifyContent: 'center',
              alignItems: 'center',
              alignSelf: 'center',
              // backgroundColor: 'red',
              //height: props?.inputheight
              // position: 'absolute',
              // height: '150%'
            },
          ]}
          color={COLORS.lightBlack}
          //maxLength={props.maxLength}
          //secureTextEntry={secure ? true : false}
          secureTextEntry={props.secureTextEntry}
          multiline={props.multiline}
          autoCapitalize={props.autoCapitalize}
          placeholder={props.placeholder}
          editable={props.editable}
          placeholderTextColor={props.placeholderTextColor}
          keyboardType={props.keyboardType}
          numberOfLines={1}
          value={props.value}
          autoCorrect={false}
          onFocus={() => {
            setIsFocussed(true);
            props?.onFocus();
          }}
          onBlur={() => {
            setIsFocussed(false);
            props?.onFocusOut();
          }}
          onChangeText={text => {
            onChangeText(text);
          }}
          returnKeyType={props?.returnKeyType}
          onSubmitEditing={() => onSubmitEditing()}
        />
      )}
    </View>
  );
}

TextInputItem.propTypes = {
  isText: PropTypes.bool,
  marginLeft: PropTypes.number,
  marginTop: PropTypes.number,
  maxLength: PropTypes.number,
  isSecure: PropTypes.bool,
  multiline: PropTypes.bool,
  autoCapitalize: PropTypes.string,
  placeholder: PropTypes.string,
  placeholderTextColor: PropTypes.string,
  keyboardType: PropTypes.string,
  value: PropTypes.string,
  onChangeText: PropTypes.func,
  onSubmitEditing: PropTypes.func,
  color: PropTypes.string,
  letterSpacing: PropTypes.number,
  fontSizes: PropTypes.number,
  editable: PropTypes.bool,
  textAlign: PropTypes.string,
  onPress: PropTypes.func,
  search: PropTypes.bool,
  borderRadius: PropTypes.any,
  borderRadiusLeftRadius: PropTypes.any,
  borderBottomRadiusRightRadius: PropTypes.any,
  icon: PropTypes.any,
  iconleft: PropTypes.any,
  iconright: PropTypes.any,
  fontFamily: PropTypes.any,
  backgroundColor: PropTypes.any,
  width: PropTypes.any,
  height: PropTypes.any,
  marginBottom: PropTypes.any,
  paddingRight: PropTypes.number,
  inputheight: PropTypes.number,

  right_icon_visible: PropTypes.any,
  right_icon: PropTypes.any,
  rights_icon: PropTypes.any,
  borderColor: PropTypes.any,
  marginRight: PropTypes.any,
  marginleft: PropTypes.any,
  iconHeight: PropTypes.number,
  iconWidth: PropTypes.number,
  isStick: PropTypes.bool,
  isValid: PropTypes.any,
  textInputWidth: PropTypes.any,
  colorGreenVisible: PropTypes.bool,
  onFocus: PropTypes.func,
  onFocusOut: PropTypes.func,
  returnKeyType: PropTypes.string,
};

TextInputItem.defaultProps = {
  isText: false,
  marginTop: 0,
  isSecure: true,
  multiline: false,
  inputheight: normalize(45),
  autoCapitalize: 'none',
  placeholder: '',
  placeholderTextColor: COLORS.lightBlack,
  keyboardType: 'default',
  value: '',
  onChangeText: null,
  onSubmitEditing: () => { },
  color: COLORS.black,
  editable: true,
  onFocus: () => { },
  onFocusOut: () => { },
  onBlur: null,
  letterSpacing: 0,
  textAlign: 'left',
  caretHidden: false,
  paddingRight: 0,
  borderRadius: normalize(5),
  icon: null,
  backgroundColor: '',
  search: false,
  width: normalize(250),
  height: normalize(42),
  borderRadiusRightRadius: normalize(10),
  borderBottomRadiusRightRadius: normalize(10),
  marginBottom: 0,
  right_icon_visible: true,
  right_icon: '',
  rights_icon: '',
  fontSizes: normalize(13),
 
  iconHeight: normalize(20),
  iconWidth: normalize(20),
  isStick: false,
  isValid: '',
  textInputWidth: normalize(200),
  colorGreenVisible: true,
  returnKeyType: 'default',
  borderColor: 'black'
};