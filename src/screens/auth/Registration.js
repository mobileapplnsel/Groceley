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

  
  const [oldpassword, setOldpassword] = useState('');
  const [newpassword, setNewpassword] = useState('');
  const [confirmpassword, setConfirmpassword] = useState('');
  const [userId, setUserId] = useState('');
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

<View style={{
   flex: 1,
   backgroundColor: '#1F3365'
}}>




<View style={{
  
  width: '100%',
  height: normalize(230),
  backgroundColor: "#1F3365",
  
  marginRight: normalize(10),
  
}} />


                <Image
                  source={ICONS.logo_company}
                  style={{
                    height: normalize(72),
                    width: normalize(220),
                    alignSelf: 'center',
                    top: -150,
                   // zIndex: 1,
                    position: 'relative'
                  }}
                   //tintColor='white'
                  resizeMode="contain"></Image>




<View style ={{
    
    backgroundColor: 'white',
    width: '100%',
    height: '100%',
   
  borderTopRightRadius: normalize(60),
    
   marginTop: normalize(-70)
}}>
                <View
                  style={{
                    paddingHorizontal: normalize(25),
                   
                    alignSelf: 'center'
                  }}>
                 <Text
                    style={{
                      fontSize: normalize(18),
                    
                     fontWeight: '700',
                      textAlign: 'center',
                      marginTop: normalize(40),
                      color: 'black',
                      
                    }}>
                    REGISTER
                  </Text>

                  
                  <TextInputItem
                    value={oldpassword}
                    onChangeText={_ => setOldpassword(_)}
                    marginTop={normalize(40)}
                    keyboardType={'email-address'}
                    fontSize={normalize(14)}
                    width={normalize(250)}
                    placeholder={'Old Password'}
                    borderRadius={normalize(30)}
                    backgroundColor={'#D3D3D3'}
                   
                  />

<TextInputItem
                    value={newpassword}
                    onChangeText={_ => setNewpassword(_)}
                    marginTop={normalize(10)}
                    keyboardType={'email-address'}
                    fontSize={normalize(14)}
                    width={normalize(250)}
                    placeholder={'New Password'}
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
                  
                 
 {/* <TouchableOpacity
              style={{
                flexDirection: 'row',
                
              }}
            //   onPress={() => {
            //     setShow(!show);
            //     Keyboard.dismiss()
            //   }}
            >
              <TextInputItem
                isText={true}
               
                marginTop={normalize(5)}
                paddingRight={normalize(15)}
                height={normalize(45)}
                color={COLORS.lightBlack}
                
              />
              <View
                style={{
                  position: 'absolute',
                  height: '100%',
                  right: normalize(10),
                  alignItems: 'center',
                  justifyContent: 'center',
                  paddingHorizontal: normalize(15),
                }}
              >
                <Image
                  source={ICONS.downchevron}
                  style={{
                    height: normalize(15),
                    width: normalize(15),
                    marginTop: normalize(17),
                    position: 'absolute',
                    right: 2,
                    top: 5
                  }}
                  resizeMode="contain"
                />
              </View>
            </TouchableOpacity> */}
                  
                   


                    <View style={{
                        marginTop: normalize(30),
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop: normalize(2)
                    }}>

             


</View>
                   
                  
                </View>
                </View>
                   
         </View>
         
         
         
         
         </ScrollView>
         </KeyboardAvoidingView>
         
        </SafeAreaView>
      
      
       </Fragment>
     

    );
  }