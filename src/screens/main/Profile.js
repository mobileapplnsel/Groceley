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
  Alert,
  TextInput
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
export default function Profile(props) {


  const [name, setName] = useState('');
  const [mobilenumber, setMobileNumber] = useState('');
  const [emailaddress, setEmailaddress] = useState('');
  const [address, setAddress] = useState('');
  
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



          <Image
                source={ICONS.ellipse}
                style={{
                  height: normalize(80),
                  width: normalize(80),
                  marginRight: normalize(-15),
                  marginTop: normalize(-5),
                  
                  alignSelf: 'flex-end',
                  position: 'relative'
                }}
                resizeMode={'contain'}
            />

<Image
                source={ICONS.ellipse2}
                style={{
                  height: normalize(50),
                  width: normalize(50),
                  alignSelf: 'flex-end',
                  marginRight: normalize(-10),
                  alignSelf: 'flex-end',
                  position: 'relative',
                  top: -6
                }}
                resizeMode={'contain'}
            />







            <View
              style={{

                marginTop: normalize(-40),
                alignSelf: 'center'
              }}>


<TouchableOpacity onPress = {() => props.navigation.navigate("Profile")}
                style={{
                  width: normalize(90),
                  height: normalize(90),
                  borderRadius: normalize(45),
                  backgroundColor: '#D0D0D0',
                  alignSelf: 'center',
                 
                }}

              >
                <Image
                  source={ICONS.user}
                  style={{
                    height: normalize(40),
                    width: normalize(40),
                    marginTop: normalize(20),
                    alignSelf: 'center'
                  }}
                  resizeMode={'contain'}
                  tintColor= {'white'}
                ></Image>

<Image
                  source={ICONS.camera}
                  style={{
                    height: normalize(17),
                    width: normalize(17),
                    marginTop: normalize(20),
                    alignSelf: 'center',
                    position: 'absolute',
                    bottom: 15,
                    right: 22
                  }}
                  resizeMode={'contain'}
                  tintColor= {'white'}
                ></Image>


              </TouchableOpacity>



              <Text
                style={{
                  fontSize: normalize(14),
                  letterSpacing: 3,
                  fontWeight: '700',
                  textAlign: 'center',
                  marginTop: normalize(10),
                  color: 'black',

                }}>
                EDIT PROFILE
              </Text>
            
<View style={{
    marginVertical: normalize(20)
}}>

              <TextInputItem
                maxLength={30}
                value={name}
                onChangeText={_ => setName(_)}
                marginTop={normalize(10)}
                keyboardType={'email-address'}
                fontSize={normalize(14)}
                width={normalize(250)}
                placeholder={'Lee and Nee Software Exports'}
                borderRadius={normalize(30)}
                backgroundColor={'#D3D3D3'}

              />

              <TextInputItem
                value={mobilenumber}
                onChangeText={_ => setMobileNumber(_)}
                marginTop={normalize(10)}
                keyboardType={'numeric'}
                fontSize={normalize(14)}
                width={normalize(250)}
                placeholder={'8913247247742'}
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
                placeholder={'abc@yopmail.com'}
                borderRadius={normalize(30)}
                backgroundColor={'#D3D3D3'}

              />

{/* <TextInput
                multiline={true}
                numberOfLines={5}
                maxLength={150}
                height={normalize(100)}
                style={{
                    borderRadius : normalize(15),
                    padding: normalize(10)
                }}
                value={address}
                onChangeText={_ => setAddress(_)}
                marginTop={normalize(10)}
                keyboardType={'email-address'}
                fontSize={normalize(14)}
                width={normalize(250)}
                placeholder={'Lee & Nee Software Exports Limited, SDF Building, Salt Lake Sector 5'}
              //  borderRadius={normalize(30)}
                backgroundColor={'#D3D3D3'}

              /> */}


</View>
            

              <TouchableOpacity

                style={{
                  height: normalize(35),
                  width: normalize(100),
                  marginTop: normalize(20),
                  backgroundColor: '#69BE53',
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
                >SUBMIT</Text>


              </TouchableOpacity>




            </View>


            <View style={{
              flexDirection: 'row',

            }}>

              

             

            


            </View>

           


            <View style={{
              marginTop: normalize(5),
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: normalize(20),
            }}>


            

             



            </View>

            






          </ScrollView>
        </KeyboardAvoidingView>

      </SafeAreaView>


    </Fragment>


  );
}