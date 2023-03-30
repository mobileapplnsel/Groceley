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
export default function EditAddressPage(props) {


  const [name, setName] = useState('');
  const [mobilenumber, setMobileNumber] = useState('');
  const [house, setHouse] = useState('');
  const [street, setStreet] = useState('');
  const [landmark, setLandmark] = useState('');
  const [town, setTown] = useState('');
  const [states, setStates] = useState('');
  const [country, setCountry] = useState('');
  const [pincode, setPincode] = useState('');

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
        marginBottom: normalize(20)
    }}>






             
              <Text
                style={{
                  fontSize: normalize(14),
                  letterSpacing: 1,
                  fontWeight: '700',
                  textAlign: 'left',
                  fontFamily: FONTS.Hind,
                  marginTop: normalize(20),
                  color: 'black',
                  marginLeft: normalize(25)

                }}>
             Edit Delivery Address
              </Text>




              <View
            style={{
                height: normalize(1),
                width: '90%',
                backgroundColor: '#69BE53',
                alignSelf: 'center',
                marginTop: normalize(10)
            }}
            />





        

        

        
         <View
            style={{
                height: normalize(1),
                width: '90%',
                alignSelf: 'center',
                marginTop: normalize(10)
          
            }}
            />

            
            
           

<View style={{
    alignSelf: 'center'
}}>
              <TextInputItem
                value={name}
                onChangeText={_ => setName(_)}
                marginTop={normalize(10)}
                keyboardType={'email-address'}
                fontSize={normalize(12)}
                width={'90%'}
                placeholder={'Awantika Maurya'}
                placeholderTextColor={'black'}
                
                secureTextEntry={false}
                borderRadius={normalize(10)}
                backgroundColor={'#E8E8E8'}

              />

              <TextInputItem
                value={mobilenumber}
                onChangeText={_ => setMobileNumber(_)}
                marginTop={normalize(10)}
                keyboardType={'numeric'}
                fontSize={normalize(14)}
                width={'90%'}
                placeholder={'9453285281'}
                borderRadius={normalize(10)}
                placeholderTextColor={'black'}
                backgroundColor={'#E8E8E8'}
                secureTextEntry={false}

              />
              <TextInputItem
                value={house}
                onChangeText={_ => setHouse(_)}
                marginTop={normalize(10)}
               
                fontSize={normalize(14)}
                width={'90%'}
                placeholder={'Floor 4th, SDF building'}
                borderRadius={normalize(10)}
                backgroundColor={'#E8E8E8'}
                placeholderTextColor={'black'}
                secureTextEntry={false}
              />
               <TextInputItem
                value={street}
                onChangeText={_ => setStreet(_)}
                marginTop={normalize(10)}

                fontSize={normalize(14)}
                width={'90%'}
                placeholder={'SDF Building'}
                placeholderTextColor={'black'}
                borderRadius={normalize(10)}
                backgroundColor={'#E8E8E8'}
                secureTextEntry={false}
              />

<TextInputItem
                value={landmark}
                onChangeText={_ => setLandmark(_)}
                marginTop={normalize(10)}

                fontSize={normalize(14)}
                width={'90%'}
                placeholder={'RDB more'}
                placeholderTextColor={'black'}
                borderRadius={normalize(10)}
                backgroundColor={'#E8E8E8'}
                secureTextEntry={false}
              />
              

              <TextInputItem
                value={town}
                onChangeText={_ => setTown(_)}
                marginTop={normalize(10)}

                fontSize={normalize(14)}
                width={'90%'}
                placeholder={'Bidhanagar, Kolkata'}
                placeholderTextColor={'black'}
                borderRadius={normalize(10)}
                backgroundColor={'#E8E8E8'}
                secureTextEntry={false}
              />
              <TextInputItem
                value={states}
                onChangeText={_ => setStates(_)}
                marginTop={normalize(10)}

                fontSize={normalize(14)}
                width={'90%'}
                placeholder={'West Bengal'}
                placeholderTextColor={'black'}
                borderRadius={normalize(10)}
                backgroundColor={'#E8E8E8'}
                secureTextEntry={false}
              />
              <TextInputItem
                value={country}
                onChangeText={_ => setCountry(_)}
                marginTop={normalize(10)}

                fontSize={normalize(14)}
                width={'90%'}
                placeholder={'India'}
                placeholderTextColor={'black'}
                borderRadius={normalize(10)}
                backgroundColor={'#E8E8E8'}
                secureTextEntry={false}
              />
               <TextInputItem
                value={pincode}
                onChangeText={_ => setPincode(_)}
                marginTop={normalize(10)}

                fontSize={normalize(14)}
                width={'90%'}
                placeholder={'700091'}
                placeholderTextColor={'black'}
                borderRadius={normalize(10)}
                backgroundColor={'#E8E8E8'}
                secureTextEntry={false}
              />




            <View
            style={{
                height: normalize(30),
                width: '90%',
                backgroundColor: 'green'
            }}
            />
           
           
</View>

              <View
              style={{
                height: normalize(1),
                width: '90%',
                backgroundColor: '#69BE53',
                alignSelf: 'center',
                marginTop: normalize(-10)
              }}
              />


            <TouchableOpacity
          style={{
            height: normalize(40),
            width: '90%',
            marginTop: normalize(10),
            alignSelf: 'center',
            borderWidth: normalize(1),
            borderRadius: normalize(15),
            backgroundColor: '#F36E35',
            borderColor: '#D3D3D3'
          }}
          
        > 
        
        <Text style={{
        fontSize: normalize(12),           
        textAlign: 'center',
        fontFamily: FONTS.Hind,
        marginTop: normalize(10),
        color: 'white'
    }}
        >
           Save
            </Text>
            
            </TouchableOpacity>

            <TouchableOpacity onPress={()=> props.navigation.navigate("Cart")}
          style={{
            height: normalize(40),
            width: '90%',
            marginTop: normalize(10),
            alignSelf: 'center',
            borderWidth: normalize(1),
            borderRadius: normalize(15),
            backgroundColor: '#69BE53',
            borderColor: '#D3D3D3'
          }}
          
        > 
        
        <Text style={{
        fontSize: normalize(12),           
        textAlign: 'center',
        fontFamily: FONTS.Hind,
        marginTop: normalize(10),
        color: 'white'
    }}
        >
           Back to Cart
            </Text>
            
            </TouchableOpacity>
</View>


         

            

            


            

            






          </ScrollView>
        </KeyboardAvoidingView>

      </SafeAreaView>


    </Fragment>


  );
}