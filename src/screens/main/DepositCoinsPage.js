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
import RazorpayCheckout from 'react-native-razorpay';




var status = '';
export default function DepositCoinsPage(props) {


  const [amount, setAmount] = useState('');
  const [mobilenumber, setMobileNumber] = useState('');
  const [house, setHouse] = useState('');
  const [street, setStreet] = useState('');
  const [landmark, setLandmark] = useState('');
  const [town, setTown] = useState('');
  const [states, setStates] = useState('');
  const [country, setCountry] = useState('');
  const [pincode, setPincode] = useState('');
  const [flag1, setFlag1] = useState(0);
  const [flag2, setFlag2] = useState(0);
  const [flag3, setFlag3] = useState(0);

  const isFocused = useIsFocused();


  const regex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


     function deposit1()
     {
         setFlag1(1);
         setFlag2(0);
         setFlag3(0);

         setAmount("250")    
     }

    // 
     function deposit2()
     {

      setFlag1(0);
      setFlag2(1);
      setFlag3(0);
      setAmount("500")  

     }


     function deposit3()
     {
      setFlag1(0);
      setFlag2(0);
      setFlag3(1);
      setAmount("1000")
     }

    

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

      <View style={{flexDirection: 'row'}}>

<TouchableOpacity 
             onPress={()=> props.navigation.goBack()}
             
             >

          
<Image
                  source={ICONS.previous}
                  style={{
                   height: normalize(20),
                    width: normalize(20),
                    marginTop: normalize(20),
                    marginLeft: normalize(20),
                    
                  }}
                  resizeMode={'contain'}
                 
                ></ Image>
</TouchableOpacity>
             
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

              </View>


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
             <Text style={{marginLeft:10,alignSelf:'center',color:'black'}}>{'\u20B9'}</Text>

      
              <TextInput
                value={amount}
                onChangeText={_ => setAmount(_)}
                width= '90%'
                keyboardType='numeric'
                fontSize={normalize(14)}
                 style={{color:'black'}}
                placeholderTextColor='gray'
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
            borderColor: flag1 == 1 ?'#69BE53':'#D3D3D3'
          }}  onPress ={()=>
          {
            deposit1()
          }}> 
        
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
            borderColor: flag2 == 1 ?'#69BE53':'#D3D3D3'
          }}  onPress ={()=>
          {
            deposit2()
          }}> 
        
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
            borderColor: flag3 == 1 ?'#69BE53':'#D3D3D3'
          }}  onPress ={()=>
          {
            deposit3()
          }}> 
        
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


            <TouchableOpacity 
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
          onPress={() => {
            var options = {
            description: 'Credits towards consultation',
            //image: 'https://i.imgur.com/3g7nmJC.jpg',
            currency: 'INR',
            key: 'rzp_test_0s2czqBDNUnnff',
            amount: '5000',
            name: 'Grocley',
            
            order_id: 'order_LbCgLUBUpL8ulJ',//Replace this with an order_id created using Orders API.
            prefill: {
              email: 'gaurav.kumar@example.com',
              contact: '9191919191',
              name: 'Gaurav Kumar'
            },
            
            theme: {color: '#69BE53'}
          }
          RazorpayCheckout.open(options).then((data) => {
            // handle success
            alert(`Success: ${data.razorpay_payment_id}`);
          }).catch((error) => {
            // handle failure
           // alert(`Error: ${error.code} | ${error.description}`);
           alert(`Payment gateway closed`);
          });
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