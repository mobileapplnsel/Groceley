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
import { useDispatch, useSelector } from 'react-redux';
import { loginRequest} from '../../redux/reducer/ProfileReducer'



var status = '';
export default function Login(props) {


  const [name, setName] = useState('');
  const [mobilenumber, setMobileNumber] = useState('');
  const [emailaddress, setEmailaddress] = useState('');
  const [phoneno, setPhoneNo] = useState('');
  const [confirmpassword, setConfirmpassword] = useState('');
  const isFocused = useIsFocused();

  const dispatch = useDispatch();
  const AuthReducer = useSelector(state => state.AuthReducer);

  const regex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (status == '' || AuthReducer.status != status) {
      switch (AuthReducer.status) {
          case 'Auth/loginRequest':
              status = ProfileReducer.status;
              break;
    
          case 'Auth/loginSuccess':
              status = ProfileReducer.status;
              console.log("Subcategory response === ", ProfileReducer?.loginResponse)
              
             // setCarouseldata(ProfileReducer?.homeResponse?.respData?.banner)
             setData2(ProfileReducer?.loginResponse?.respData)
              break;
    
          case 'Auth/loginFailure':
    
              status = ProfileReducer.status;
              break;  
    
    
    
           
      }
    }

    function login(){
      props.navigation.navigate("VerifyOTP")

    }

  return (


    <Fragment>


      <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>


        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS == 'ios' ? 'padding' : "height"}>



          {/* <ScrollView showsVerticalScrollIndicator={false} bounces={false} > */}



         


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

                marginTop: normalize(-20),
                alignSelf: 'center'
              }}>


              <Image
                source={ICONS.logo1}
                style={{
                  height: normalize(100),
                  width: normalize(50),
                  alignSelf: 'center',
                }}
                resizeMode={'contain'}
              >



              </Image>
              <Text
                style={{
                  fontSize: normalize(14),
                  letterSpacing: 3,
                  fontWeight: '700',
                  textAlign: 'center',
                  marginTop: normalize(10),
                  color: 'black',

                }}>
                LOGIN
              </Text>


   
             
             

<TextInput
                value={phoneno}
              
                placeholder={'Enter mobile no.'}
                onChangeText={_ => setPhoneNo()}
                style={{
                marginTop: normalize(20),
                fontSize: normalize(14),
                color:'black',
                width: normalize(250),
                 borderRadius : normalize(30),
                backgroundColor: '#D3D3D3',
                paddingLeft: normalize(20)
                }}
                keyboardType={"numeric"}
              />

             


              <TouchableOpacity onPress={()=> login()}

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
                >LOGIN</Text>


              </TouchableOpacity>




            </View>


            <View style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center'
            }}>

             

              

            </View>

            <View style={{
              marginTop: normalize(20),
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center'
            }}>


            



            </View>


            <View style={{
              //marginTop: normalize(5),
              flexDirection: 'row',
              alignSelf: 'center',
              marginBottom: normalize(20),
            }}>

{/* <Text
                style={{

                  fontSize: normalize(11),
                  color: '#1D1D1B',

                 
                  marginTop: normalize(5),
                 
                  fontWeight: '700'
                }}
              >Forgot Your Password ?</Text> */}
            

{/* <TouchableOpacity onPress={()=> props.navigation.navigate("ForgotPassword") }>
            <Text
                style={{

                  fontSize: normalize(11),
                  color: '#FF6205',

                  marginLeft: normalize(2),
                  marginTop: normalize(5),
                  fontWeight: '700'
                }}
              >Click Here</Text>

</TouchableOpacity> */}
             



            </View>



            <View style={{
             
              flexDirection: 'row',
              marginLeft: normalize(50),
              marginBottom: normalize(10),
            }}>





            </View>
          


          {/* </ScrollView> */}
        </KeyboardAvoidingView>

      </SafeAreaView>


    </Fragment>


  );
}