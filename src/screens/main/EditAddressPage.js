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
  const [delivery, setDelivery] = useState(0);
  const isFocused = useIsFocused();



  const regex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

   function add_delivery_instructions_clicked(){
        setDelivery(1)
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



<View style={{
  flexDirection: 'row'
}}>
          

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
                  textAlign: 'left',
                  fontFamily: FONTS.Hind,
                  marginTop: normalize(20),
                  color: 'black',
                  marginLeft: normalize(20)

                }}>
             Edit Delivery Address
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


<TouchableOpacity onPress={()=> add_delivery_instructions_clicked()}
          style={{
            height: normalize(40),
            width: '90%',
            marginTop: normalize(10),
            alignSelf: 'center',
            borderWidth: normalize(1),
            borderRadius: normalize(15),
            backgroundColor: 'white',
            borderColor: '#D3D3D3'
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
            Edit Delivery Instructions(optional)
            </Text>
            
            </TouchableOpacity>


            {delivery == 1 ? (     <View 
           
            
           style={{


width: '90%',


alignSelf: 'center',
borderRadius: normalize(10),
backgroundColor: 'white',
borderColor: '#B8B8B8',
borderWidth: normalize(1),

marginTop: normalize(5),
           }}>
          

    

<View style = {{
 marginLeft: normalize(10)
}}
>
<Text
                                       style={{
                                           fontSize: normalize(12),
                                           
                                           color: 'black',
                                           fontFamily: FONTS.Hind,
                                           marginTop: normalize(10),
                                           
                                       }}
                                       >
                                    Landmark - RDB, Sector 5, Saltlake
                                       </Text>

                                       <Text
                                       style={{
                                           fontSize: normalize(12),
                                           fontWeight: '700',
                                           color: 'black',
                                           fontFamily: FONTS.Hind,
                                           marginTop: normalize(10),
                                           
                                       }}
                                       >
                                  Open to Deliver on Weekends?
                                       </Text>

                                       <Text
                                       style={{
                                           fontSize: normalize(12),
                                           
                                           color: 'black',
                                           fontFamily: FONTS.Hind,
                                           marginTop: normalize(10),
                                           
                                       }}
                                       >
                                   Saturday - Yes , Sunday -  Yes
                                       </Text>


                                       <Text
                                       style={{
                                           fontSize: normalize(12),
                                           
                                           color: 'black',
                                           fontFamily: FONTS.Hind,
                                           marginTop: normalize(10),
                                           
                                       }}
                                       >
                                  Preferred time - 8.00 AM to 10.00 AM
                                       </Text>



                                      








                                     










                                  


<View style={{
  flexDirection: 'row',
  marginTop: normalize(10)
}}>

                                       <TouchableOpacity 
                                       onPress={()=>props.navigation.navigate("Membership")}
                                       style={{
                                         height: normalize(30),
                                         width: '30%',
                                         backgroundColor: '#69BE53',
                                         borderRadius: normalize(5),
                                         justifyContent: 'center',
                                         alignItems: 'center',
                                         marginBottom: normalize(10)
                                       }}>
                                         <Text
                                         
                                         style={{
                                           fontSize: normalize(12),
                                           fontFamily: FONTS.Hind,
                                           color: 'white'
                                         }}
                                         >Edit</Text>
                                          </TouchableOpacity>


                                          <TouchableOpacity 
                                       onPress={()=>props.navigation.navigate("Membership")}
                                       style={{
                                         height: normalize(30),
                                         width: '30%',
                                         backgroundColor: 'white',
                                         borderRadius: normalize(5),
                                         borderWidth: normalize(1),
                                         justifyContent: 'center',
                                         alignItems: 'center',
                                         marginBottom: normalize(10),
                                         marginLeft: normalize(10)
                                       }}>
                                         <Text
                                         
                                         style={{
                                           fontSize: normalize(12),
                                           fontFamily: FONTS.Hind,
                                           color: 'black'
                                         }}
                                         > Cancel</Text>
                                          </TouchableOpacity>


</View>
                                       </View>


                                       

                                       
                                       
             

           </View>
        
  ) : (null)}


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