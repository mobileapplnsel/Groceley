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
export default function DepositCoinsPage(props) {


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
        marginBottom: normalize(20),
        marginLeft:normalize(10)
        
    }}>


             
              <Text
                style={{
                  fontSize: normalize(14),
                  letterSpacing: 1,
                  fontWeight: '700',
                  marginLeft:normalize(20),
                  fontFamily: FONTS.Hind,
                  marginTop: normalize(20),
                  color: 'black',
                  

                }}>
              Recharge
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



            <Text style={{
                     fontSize: normalize(12),  
                     textAlign: 'left',
                     fontFamily: FONTS.Hind,
                     marginTop: normalize(30),
                     marginLeft:normalize(15),
                     color: 'black',
                }}>
                       Deposit Amount
                </Text>

           

<View style={{
    
}}>

            
            <View style={{flexDirection:'row', borderRadius:normalize(10),
                backgroundColor:'#E8E8E8', width:'90%',marginLeft:10
}}>
             <Text style={{marginLeft:10,alignSelf:'center'}}>{'\u20B9'}</Text>

      
              <TextInput
                value={name}
                onChangeText={_ => setName(_)}
                width= '90%'
                keyboardType='numeric'
                fontSize={normalize(14)}
              
                placeholder={'0'}
                secureTextEntry={false}
               
              />

             </View>

           
           
           
</View>



              <View
              style={{
                height: normalize(1),
                width: '90%',
                marginTop:40,
                alignSelf: 'center',
                flexDirection:'row',
               
              }}
              >

<TouchableOpacity
          style={{
            height: normalize(30),
            width: '20%',
            marginTop: normalize(10),
            alignSelf: 'center',
            borderWidth: normalize(1),
            borderRadius: normalize(8),
            backgroundColor: 'white',
            borderColor: '#D3D3D3'
          }}
          
        > 
        
        <Text style={{
        fontSize: normalize(12),           
        textAlign: 'center',
        fontFamily: FONTS.Hind,
        marginTop:8,
        color: 'black'
    }}
        >
           +250
            </Text>
            </TouchableOpacity>

            <TouchableOpacity
          style={{
            height: normalize(30),
            width: '20%',
            marginTop: normalize(10),
            alignSelf: 'center',
            borderWidth: normalize(1),
            borderRadius: normalize(8),
            marginLeft:10,
            backgroundColor: 'white',
            borderColor: '#D3D3D3'
          }}
          
        > 
        
        <Text style={{
        fontSize: normalize(12),           
        textAlign: 'center',
        fontFamily: FONTS.Hind,
        marginTop:8,
        color: 'black'
    }}
        >
           +500
            </Text>
            
        
            
            </TouchableOpacity>

            <TouchableOpacity
          style={{
            height: normalize(30),
            width: '20%',
            marginTop: normalize(10),
            alignSelf: 'center',
            borderWidth: normalize(1),
            borderRadius: normalize(8),
            marginLeft:10,
            backgroundColor: 'white',
            borderColor: '#D3D3D3'
          }}
          
        > 
        
        <Text style={{
        fontSize: normalize(12),           
        textAlign: 'center',
        fontFamily: FONTS.Hind,
        marginTop:8,
        color: 'black'
    }}
        >
           +1000
            </Text>
            </TouchableOpacity>
            </View>


            <TouchableOpacity onPress={()=> props.navigation.navigate("Cart")}
          style={{
            height: normalize(40),
            width: '90%',
            marginTop: normalize(50),
            alignSelf: 'center',
            borderWidth: normalize(1),
            borderRadius: normalize(10),
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
           Recharge
            </Text>
            
            </TouchableOpacity>
</View>


         

            

            


            

            






          </ScrollView>
        </KeyboardAvoidingView>

      </SafeAreaView>


    </Fragment>


  );
}