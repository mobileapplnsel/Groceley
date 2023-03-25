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
export default function Add_delivery_instructions(props) {


  const [default_address, setDefault_address] = useState(0);
  const [recent_address, setRecent_address] = useState(0);
  const [delivery_instructions, setDelivery_instructions] = useState('');
  const [fromtime, setFromtime] = useState('');
  const [totime, setTotime] = useState('');
  const isFocused = useIsFocused();













  const regex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

function default_address_clicked(){
  setDefault_address(1)
  setRecent_address(0)
  console.log("Default Address ==== ", default_address)
}

function recent_address_clicked(){
  setDefault_address(0)
  setRecent_address(1)
  console.log("Recent Address ==== ", recent_address)
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
            Add Delivery Instructions
              </Text>






             
        
           



              
<View
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
                marginLeft: normalize(20)

              
            }}>

        
               LNSEL

          
               </Text>

               <Text style={{
                fontSize: normalize(12),
                letterSpacing: 1,
                textAlign: 'left',
                marginLeft: normalize(20),
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

            <Text style={{
                fontSize: normalize(12),
                letterSpacing: 1,
                fontWeight: '700',
                textAlign: 'left',
                color: 'black',
                marginTop: normalize(10),
                fontFamily: FONTS.Hind,
                marginLeft: normalize(20)

              
            }}>

        
              
            Select Address Type
          
               </Text>

<View style={{
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    
}}>
            <TouchableOpacity 
          style={{
            height: normalize(40),
            width: '40%',
            marginTop: normalize(10),
           
            borderWidth: normalize(1),
            borderRadius: normalize(5),
            backgroundColor: 'white',
            borderColor: '#69BE53'
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
           House
            </Text>
            
            </TouchableOpacity>

            <TouchableOpacity 
          style={{
            height: normalize(40),
            width: '40%',
            marginTop: normalize(10),
            alignSelf: 'center',
            borderWidth: normalize(1),
            borderRadius: normalize(5),
            backgroundColor: 'white',
            borderColor: '#69BE53'
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
           Apartment
            </Text>
            
            </TouchableOpacity>
         
            </View>
            <View style={{
    flexDirection: 'row',
    
    justifyContent: 'space-evenly',
}}>
            <TouchableOpacity 
          style={{
            height: normalize(40),
            width: '40%',
            marginTop: normalize(10),
           
            borderWidth: normalize(1),
            borderRadius: normalize(5),
            backgroundColor: 'white',
            borderColor: '#69BE53'
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
           Office
            </Text>
            
            </TouchableOpacity>
            <TouchableOpacity 
          style={{
            height: normalize(40),
            width: '40%',
            marginTop: normalize(10),
            alignSelf: 'center',
            borderWidth: normalize(1),
            borderRadius: normalize(5),
            backgroundColor: 'white',
            borderColor: '#69BE53'
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
          Others
            </Text>
            
            </TouchableOpacity>

</View>


         

          
        
        
            
            </View>

            <View
          style={{
           
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
                marginTop: normalize(20),
                fontFamily: FONTS.Hind,
                marginLeft: normalize(20)

              
            }}>

        
            Is Weekend Delivery Possible on this address?
          
               </Text>

               

               </View>

               <View style={{
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    
}}>
       <Text style={{
          fontSize: normalize(12),           
          fontWeight: '700',
          fontFamily: FONTS.Hind,
          marginTop: normalize(20),
          color: 'black'
    }}>
Sat
    </Text>
            <TouchableOpacity 
          style={{
            height: normalize(40),
            width: '30%',
            marginTop: normalize(10),
           
            borderWidth: normalize(1),
            borderRadius: normalize(5),
            backgroundColor: 'white',
            borderColor: '#69BE53'
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
           No
            </Text>
            
            </TouchableOpacity>

            <TouchableOpacity 
          style={{
            height: normalize(40),
            width: '30%',
            marginTop: normalize(10),
            alignSelf: 'center',
            borderWidth: normalize(1),
            borderRadius: normalize(5),
            backgroundColor: 'white',
            borderColor: '#69BE53'
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
           Yes
            </Text>
            
            </TouchableOpacity>
         
            </View>
            <View style={{
    flexDirection: 'row',
    
    justifyContent: 'space-evenly',


}}>


    <Text style={{
          fontSize: normalize(12),           
          fontWeight: '700',
          fontFamily: FONTS.Hind,
          marginTop: normalize(20),
          color: 'black'
    }}>
Sun
    </Text>
            <TouchableOpacity 
          style={{
            height: normalize(40),
            width: '30%',
            marginTop: normalize(10),
           
            borderWidth: normalize(1),
            borderRadius: normalize(5),
            backgroundColor: 'white',
            borderColor: '#69BE53'
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
           No
            </Text>
            
            </TouchableOpacity>
            <TouchableOpacity 
          style={{
            height: normalize(40),
            width: '30%',
            marginTop: normalize(10),
            alignSelf: 'center',
            borderWidth: normalize(1),
            borderRadius: normalize(5),
            backgroundColor: 'white',
            borderColor: '#69BE53'
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
          Yes
            </Text>
            
            </TouchableOpacity>

</View>

            
<Text style={{
                fontSize: normalize(12),
                letterSpacing: 1,
                fontWeight: '700',
                textAlign: 'left',
                color: 'black',
                marginTop: normalize(20),
                fontFamily: FONTS.Hind,
                marginLeft: normalize(20)

              
            }}>

        
            Please mention your preferred time
          
               </Text>

               <View style={{
                flexDirection: 'row',
                justifyContent: 'space-evenly'
               }}>

               <TextInput
                                value={fromtime}
                                onChangeText={_ => setFromtime(_)}
                                marginTop={normalize(15)}
                                alignSelf={'center'}
                                keyboardType={'email-address'}
                                fontSize={normalize(12)}
                                width={'30%'}
                               
                                numberOfLines={1}
                                maxLength={100}
                                placeholder={'From time'}
                                placeholderTextColor={'#3F3F3F'}
                                borderRadius={normalize(5)}
                                borderWidth={normalize(1)}
                                borderColor={'#69BE53'}
                                style={{
                                  paddingHorizontal: normalize(10)
                                }}
                            />

                            <Text
                            style={{
                                fontWeight: '700',
                                alignSelf: 'center',
                                marginTop: normalize(10)
                            }}
                            >-</Text>



<TextInput
                                value={totime}
                                onChangeText={_ => setTotime(_)}
                                marginTop={normalize(15)}
                                alignSelf={'center'}
                                keyboardType={'email-address'}
                                fontSize={normalize(12)}
                                width={'30%'}
                               
                                numberOfLines={1}
                                maxLength={100}
                                placeholder={'To time'}
                                placeholderTextColor={'#3F3F3F'}
                                borderRadius={normalize(5)}
                                borderWidth={normalize(1)}
                                borderColor={'#69BE53'}
                                style={{
                                  paddingHorizontal: normalize(10)
                                }}
                            />
</View>

<Text style={{
                fontSize: normalize(12),
                letterSpacing: 1,
                fontWeight: '700',
                textAlign: 'left',
                color: 'black',
                marginTop: normalize(20),
                fontFamily: FONTS.Hind,
                marginLeft: normalize(20)

              
            }}>

        
            Delivery instructions
          
               </Text>
               <TextInput
                                value={delivery_instructions}
                                onChangeText={_ => setDelivery_instructions(_)}
                                marginTop={normalize(15)}
                                alignSelf={'center'}
                                keyboardType={'email-address'}
                                fontSize={normalize(12)}
                                width={'90%'}
                                multiline={true}
                                numberOfLines={3}
                                maxLength={100}
                                placeholder={'Add Delivery Instructions'}
                                placeholderTextColor={'#3F3F3F'}
                            
                                borderRadius={normalize(5)}
                                borderWidth={normalize(1)}
                                borderColor={'#69BE53'}
                                style={{
                                  paddingHorizontal: normalize(20),
                                  marginBottom: normalize(20)
                                }}
                            />

        
       
            
            </View>


          

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
           Cancel
            </Text>
            
            </TouchableOpacity>
</View>


         

            

            


            

            






          </ScrollView>
        </KeyboardAvoidingView>

      </SafeAreaView>


    </Fragment>


  );
}