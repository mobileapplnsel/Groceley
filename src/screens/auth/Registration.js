import React, { Fragment, useEffect, useState } from 'react';
import {
  View,
  SafeAreaView,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Image,
  ImageBackground,
  StatusBar,
  Alert
} from 'react-native';


import TextInputItem from '../../components/TextInputItem';
import { COLORS, ICONS, FONTS, IMAGES } from '../../themes/Themes';

import normalize from '../../utils/helpers/normalize';
import { useIsFocused } from '@react-navigation/native';
import Toast from '../../utils/helpers/Toast';
import isInternetConnected from '../../utils/helpers/NetInfo';
import Loader from '../../utils/helpers/Loader';
import MyStatusBar from '../../utils/helpers/MyStatusBar';
import AsyncStorage from '@react-native-async-storage/async-storage';
import constants from '../../utils/helpers/constants';




var status = '';
export default function Registration(props) {


  const [name, setName] = useState('');
  const [mobilenumber, setMobileNumber] = useState('');
  const [emailaddress, setEmailaddress] = useState('');
  const [choosepassword, setChoosepassword] = useState('');
  const [confirmpassword, setConfirmpassword] = useState('');
  const isFocused = useIsFocused();













  const regex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;



  return (


    <Fragment>


      <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>


        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS == 'ios' ? 'padding' : "height"}>



          <ScrollView showsVerticalScrollIndicator={false} bounces={false} >













            <View
              style={{


                alignSelf: 'center'
              }}>


              <Image
                source={ICONS.home}
                style={{
                  height: normalize(50),
                  width: normalize(50),
                  alignSelf: 'center',
                }}
                resizeMode={'contain'}
              >



              </Image>
              <Text
                style={{
                  fontSize: normalize(18),

                  fontWeight: '700',
                  textAlign: 'center',
                  marginTop: normalize(10),
                  color: 'black',

                }}>
                REGISTER
              </Text>


              <TextInputItem
                value={name}
                onChangeText={_ => setName(_)}
                marginTop={normalize(40)}
                keyboardType={'email-address'}
                fontSize={normalize(14)}
                width={normalize(250)}
                placeholder={'Name'}
                borderRadius={normalize(30)}
                backgroundColor={'#D3D3D3'}

              />

              <TextInputItem
                value={mobilenumber}
                onChangeText={_ => setMobileNumber(_)}
                marginTop={normalize(10)}
                keyboardType={'email-address'}
                fontSize={normalize(14)}
                width={normalize(250)}
                placeholder={'Mobile Number'}
                borderRadius={normalize(30)}
                backgroundColor={'#D3D3D3'}

              />
              <TextInputItem
                value={emailaddress}
                onChangeText={_ => setEmailaddress(_)}
                marginTop={normalize(10)}
                keyboardType={'email-address'}
                fontSize={normalize(14)}
                width={normalize(250)}
                placeholder={'Email Address'}
                borderRadius={normalize(30)}
                backgroundColor={'#D3D3D3'}

              />

              <TextInputItem
                value={choosepassword}
                onChangeText={_ => setChoosepassword(_)}
                marginTop={normalize(10)}
                keyboardType={'email-address'}
                fontSize={normalize(14)}
                width={normalize(250)}
                placeholder={'Choose Password'}
                borderRadius={normalize(30)}
                backgroundColor={'#D3D3D3'}

              />

              <TextInputItem
                value={confirmpassword}
                onChangeText={_ => setConfirmpassword(_)}
                marginTop={normalize(10)}
                keyboardType={'email-address'}
                fontSize={normalize(14)}
                width={normalize(250)}
                placeholder={'Confirm Password'}
                borderRadius={normalize(30)}
                backgroundColor={'#D3D3D3'}

              />


              <TouchableOpacity

                style={{
                  height: normalize(35),
                  width: normalize(100),
                  marginTop: normalize(20),
                  backgroundColor: '#D80000',
                  alignSelf: 'center',
                  borderRadius: normalize(20)
                }}
              >
                <Text
                  style={{
                    color: 'white',
                    textAlign: 'center',
                    marginTop: normalize(9),
                    fontSize: normalize(10),
                    fontWeight: '800'
                  }}
                >REGISTER</Text>


              </TouchableOpacity>




            </View>


            <View style={{
              flexDirection: 'row',

            }}>

              <View
                style={{
                  width: '25%',
                  height: normalize(1),
                  backgroundColor: '#D9D9D9',

                  marginLeft: normalize(30),
                  marginTop: normalize(30)
                }}

              />

              <Text
                style={{

                  fontSize: normalize(11),
                  color: '#1D1D1B',

                  marginLeft: normalize(5),
                  marginTop: normalize(22),
                  fontWeight: '700'
                }}
              >or Register with</Text>

              <View
                style={{
                  width: '25%',
                  height: normalize(1),
                  backgroundColor: '#D9D9D9',

                  marginRight: normalize(30),
                  marginLeft: normalize(5),
                  marginTop: normalize(30)
                }}

              />



            </View>

            <View style={{
              marginTop: normalize(20),
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center'
            }}>

              <Image
                source={ICONS.facebook}
                style={{
                  height: normalize(40),
                  width: normalize(40),
                  alignSelf: 'center',
                }}
                resizeMode={'contain'}
              ></Image>

              <View

                style={{
                  height: normalize(40),
                  width: normalize(40),
                  borderRadius: normalize(20),
                  backgroundColor: '#E31C23',
                  justifyContent: 'center',
                  marginLeft: normalize(10)
                }}>


                <Image
                  source={ICONS.google}
                  style={{
                    height: normalize(20),
                    width: normalize(20),
                    alignSelf: 'center',
                  }}
                  resizeMode={'contain'}
                ></Image>


              </View>



            </View>


            <View style={{
              marginTop: normalize(5),
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center'
            }}>

<Text
                style={{

                  fontSize: normalize(11),
                  color: '#1D1D1B',

                  marginLeft: normalize(5),
                  marginTop: normalize(22),
                  fontWeight: '700'
                }}
              >Already have an account ? </Text>
            


            <Text
                style={{

                  fontSize: normalize(11),
                  color: '#E31C23',

                 
                  marginTop: normalize(22),
                  fontWeight: '700'
                }}
              >Click here to login</Text>


             



            </View>




          </ScrollView>
        </KeyboardAvoidingView>

      </SafeAreaView>


    </Fragment>


  );
}