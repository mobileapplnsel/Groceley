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
export default function Add_delivery_address(props) {


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
                  textAlign: 'center',
                  fontFamily: FONTS.Hind,
                  marginTop: normalize(20),
                  color: 'black',
                  

                }}>
             Select Delivery Address
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


              <View style={{
    height: normalize(70),
    width: '90%',
    
    alignSelf: 'center',
    borderRadius: normalize(10)
}}>
         <View style={{
            flexDirection: 'row',
            marginTop: normalize(20),
         }}>

            <View>
<View
style={{
    height: normalize(15),
    width: normalize(15),
    borderRadius: normalize(7.5),
    borderWidth: normalize(1),
    borderColor: 'black',
    marginRight: normalize(5),
    marginLeft: normalize(28),
    backgroundColor: '#69BE53'
}}
/>
</View>
<View
style={{
    height: normalize(1),
    width: '30%',
    alignSelf: 'center',
    backgroundColor: '#A9A9A9'
}}
/>

<View
style={{
    height: normalize(15),
    width: normalize(15),
    borderRadius: normalize(7.5),
    borderWidth: normalize(1),
    borderColor: 'black',
    marginLeft: normalize(5),
    
    backgroundColor: 'white'
}}
/>

<View
style={{
    height: normalize(1),
    width: '30%',
    alignSelf: 'center',
    backgroundColor: '#A9A9A9',
    marginLeft: normalize(5)
}}
/>

<View
style={{
    height: normalize(15),
    width: normalize(15),
    borderRadius: normalize(7.5),
    borderWidth: normalize(1),
    borderColor: 'black',
    marginLeft: normalize(5),
    
    backgroundColor: 'white'
}}
/>
         </View>

         <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: normalize(2)
         }}>
            <Text
            style={{
                fontSize: normalize(12),
                
                fontWeight: '600',
                textAlign: 'center',
                fontFamily: FONTS.Hind,
                marginLeft: normalize(10),
                color: 'black',
                

              }}
            >Address</Text>
            <Text
             style={{
                fontSize: normalize(12),
                
                fontWeight: '600',
                textAlign: 'center',
                fontFamily: FONTS.Hind,
               
                color: 'black',
                

              }}
            >Payment</Text>
            <Text
             style={{
                fontSize: normalize(12),
                
                fontWeight: '600',
                textAlign: 'center',
                fontFamily: FONTS.Hind,
                marginRight: normalize(10),
                color: 'black',
                

              }}
            >Order</Text>
         </View>

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
            height: normalize(300),
            width: '90%',
            marginTop: normalize(10),
            alignSelf: 'center',
            borderWidth: normalize(1),
            borderRadius: normalize(15),
            backgroundColor: 'white',
            borderColor: '#D3D3D3'
          }}
          
        > 

<View >
<Text style={{
                fontSize: normalize(12),
                letterSpacing: 1,
                fontWeight: '700',
                textAlign: 'left',
                color: 'black',
                marginTop: normalize(10),
                fontFamily: FONTS.Hind,
                marginLeft: normalize(40)

               // marginLeft: normalize(5)
            }}>

        
               LNSEL

          
               </Text>

               <Text style={{
                fontSize: normalize(12),
                letterSpacing: 1,
                textAlign: 'left',
                marginLeft: normalize(40),
                color: 'black',
                marginTop: normalize(10),
                fontFamily: FONTS.Hind,
            }}>

        
               Ph: +91 9293829328

          
               </Text>

               </View>

<View style={{
                flexDirection: 'row',
                
                width: '85%',
                
                marginVertical: normalize(5),
                marginLeft: normalize(10),
                borderRadius: normalize(5)

            }}
            >

               
                          
                    <TouchableOpacity style={{
                      marginTop: normalize(7)
                      }} >

                       
                         <View style={{ 
                          alignSelf:'center',
                          borderColor:'green',
                          width: normalize(18),
                          height: normalize(18),
                          borderRadius: normalize(10),
                          borderWidth:2,
                          backgroundColor:'green'
                          }}>
                         <View style={{ 
                          alignSelf:'center',
                          borderRadius:normalize(10),
                          padding:normalize(4),
                          backgroundColor:'white',
                          marginTop:normalize(2)
                          }}></View>
                      </View> 
                      
                    

                   
               </TouchableOpacity>

             
                
                    <Text
                    
                        style={{
                            fontSize: normalize(12),
                            color: "black",
                           marginLeft: normalize(10),
                            fontWeight:'400',
                            alignSelf:'center'
                        }}
                    >SDF Building, 4th Floor, Software Technology Park, GP Block, Sector V, Bidhannagar, Kolkata, West Bengal 700091</Text>

                

            </View>

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
           Use this address
            </Text>
            
            </TouchableOpacity>


            <TouchableOpacity
          style={{
            height: normalize(40),
            width: '90%',
            marginTop: normalize(10),
            alignSelf: 'center',
            borderWidth: normalize(1),
            borderRadius: normalize(15),
            backgroundColor: '#808080',
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
           Edit address
            </Text>
            
            </TouchableOpacity>

            <TouchableOpacity
          style={{
            height: normalize(40),
            width: '90%',
            marginTop: normalize(10),
            alignSelf: 'center',
            borderWidth: normalize(1),
            borderRadius: normalize(15),
            backgroundColor: 'white',
            borderColor: 'green'
          }}
          
        > 
        
        <Text style={{
        fontSize: normalize(12),           
        textAlign: 'center',
        fontFamily: FONTS.Hind,
        marginTop: normalize(10),
        color: 'black'
    }}
        >
          Add Delivery Instructions(optional)
            </Text>
            
            </TouchableOpacity>
        
        {/* <Text style={{
        fontSize: normalize(12),           
        textAlign: 'center',
        fontFamily: FONTS.Hind,
        marginTop: normalize(10),
        color: 'black'
    }}
        >
            Add Delivery Instructions(optional)
            </Text> */}
            
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