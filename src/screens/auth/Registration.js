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

<View style={{
   flex: 1,
   backgroundColor: 'white'
}}>







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
                </View>
                   
         </View>
         
         
         
         
         </ScrollView>
         </KeyboardAvoidingView>
         
        </SafeAreaView>
      
      
       </Fragment>
     

    );
  }