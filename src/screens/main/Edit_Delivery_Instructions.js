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
export default function Edit_Delivery_Instructions(props) {


  const [default_address, setDefault_address] = useState(0);
  const [recent_address, setRecent_address] = useState(0);
  const [delivery_instructions, setDelivery_instructions] = useState('');
  const [fromtime, setFromtime] = useState('');
  const [totime, setTotime] = useState('');



  const [houseselected, setHouseselected] = useState(1);
  const [apartment, setApartment] = useState('');
  const [office, setOffice] = useState('');
  const [others, setOthers] = useState('');

  const [nosaturday, setNosaturday] = useState(1);
  const [yessaturday, setYessaturday] = useState(0);
  const [nosunday, setNosunday] = useState(0);
  const [yessunday, setYessunday] = useState(1);


  const isFocused = useIsFocused();




function nosaturdayclicked(){
    setNosaturday(1),
    setYessaturday(0),
    setNosunday(0),
    setYessunday(0)
}

function yessaturdayclicked(){
    setNosaturday(0),
    setYessaturday(1),
    setNosunday(0),
    setYessunday(0)
}

function nosundayclicked(){
    setNosaturday(0),
    setYessaturday(0),
    setNosunday(1),
    setYessunday(0)
}

function yessundayclicked(){
    setNosaturday(0),
    setYessaturday(0),
    setNosunday(0),
    setYessunday(1)
}


function houseselectedclicked(){
    setHouseselected(1),
    setApartment(0),
    setOffice(0),
    setOthers(0)
}

function apartmentclicked(){
    setHouseselected(0),
    setApartment(1),
    setOffice(0),
    setOthers(0)
}

function officeclicked(){
    setHouseselected(0),
    setApartment(0),
    setOffice(1),
    setOthers(0)
}

function othersclicked(){
    setHouseselected(0),
    setApartment(0),
    setOffice(0),
    setOthers(1)
}




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
                  textAlign: 'center',
                  fontFamily: FONTS.Hind,
                  marginTop: normalize(20),
                  color: 'black',
                  marginLeft: normalize(20)

                }}>
            Edit Delivery Instructions
              </Text>

              </View>




             
        
           



              
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

        
              
            Address Type
          
               </Text>

<View style={{
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    
}}>
            <TouchableOpacity onPress={houseselectedclicked}
          style={{
            height: normalize(40),
            width: '40%',
            marginTop: normalize(10),
           
            borderWidth: normalize(1),
            borderRadius: normalize(5),
            backgroundColor: houseselected == 1 ? '#69BE53' : 'white',
            borderColor: '#69BE53'
          }}
          
        > 
        
        <Text style={{
        fontSize: normalize(12),           
        textAlign: 'center',
        fontFamily: FONTS.Hind,
        marginTop: normalize(10),
        color: houseselected == 1 ? 'white' : 'black'
    }}
        >
           House
            </Text>
            
            </TouchableOpacity>

            <TouchableOpacity onPress={apartmentclicked}
          style={{
            height: normalize(40),
            width: '40%',
            marginTop: normalize(10),
            alignSelf: 'center',
            borderWidth: normalize(1),
            borderRadius: normalize(5),
            backgroundColor: apartment == 1 ? '#69BE53' : 'white',
            borderColor: '#69BE53'
          }}
          
        > 
        
        <Text style={{
        fontSize: normalize(12),           
        textAlign: 'center',
        fontFamily: FONTS.Hind,
        marginTop: normalize(10),
        color: apartment == 1 ? 'white' : 'black'
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
            <TouchableOpacity onPress={officeclicked}
          style={{
            height: normalize(40),
            width: '40%',
            marginTop: normalize(10),
           
            borderWidth: normalize(1),
            borderRadius: normalize(5),
            backgroundColor: office == 1 ? '#69BE53' : 'white',
            borderColor: '#69BE53'
          }}
          
        > 
        
        <Text style={{
        fontSize: normalize(12),           
        textAlign: 'center',
        fontFamily: FONTS.Hind,
        marginTop: normalize(10),
        color: office == 1 ? 'white' : 'black'
    }}
        >
           Office
            </Text>
            
            </TouchableOpacity>
            <TouchableOpacity onPress={othersclicked}
          style={{
            height: normalize(40),
            width: '40%',
            marginTop: normalize(10),
            alignSelf: 'center',
            borderWidth: normalize(1),
            borderRadius: normalize(5),
            backgroundColor: others == 1 ? '#69BE53' : 'white',
            borderColor: '#69BE53'
          }}
          
        > 
        
        <Text style={{
        fontSize: normalize(12),           
        textAlign: 'center',
        fontFamily: FONTS.Hind,
        marginTop: normalize(10),
        color:  others == 1 ? 'white' : 'black',
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
           <TouchableOpacity onPress={nosaturdayclicked}
          style={{
            height: normalize(40),
            width: '30%',
            marginTop: normalize(10),
           
            borderWidth: normalize(1),
            borderRadius: normalize(5),
            backgroundColor: nosaturday == 1 ? '#69BE53': 'white',
            borderColor: '#69BE53'
          }}
          
        > 
        
        <Text style={{
        fontSize: normalize(12),           
        textAlign: 'center',
        fontFamily: FONTS.Hind,
        marginTop: normalize(10),
        color: nosaturday == 1 ? 'white' : 'black'
    }}
        >
           No
            </Text>
            
            </TouchableOpacity>

            <TouchableOpacity onPress={yessaturdayclicked}
          style={{
            height: normalize(40),
            width: '30%',
            marginTop: normalize(10),
            alignSelf: 'center',
            borderWidth: normalize(1),
            borderRadius: normalize(5),
            backgroundColor: yessaturday == 1 ? '#69BE53': 'white',
            borderColor: '#69BE53'
          }}
          
        > 
        
        <Text style={{
        fontSize: normalize(12),           
        textAlign: 'center',
        fontFamily: FONTS.Hind,
        marginTop: normalize(10),
        color:  yessaturday == 1 ? 'white' : 'black'
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
            <TouchableOpacity onPress={nosundayclicked}
          style={{
            height: normalize(40),
            width: '30%',
            marginTop: normalize(10),
           
            borderWidth: normalize(1),
            borderRadius: normalize(5),
            backgroundColor: nosunday == 1 ? '#69BE53': 'white',
            borderColor: '#69BE53'
          }}
          
        > 
        
        <Text style={{
        fontSize: normalize(12),           
        textAlign: 'center',
        fontFamily: FONTS.Hind,
        marginTop: normalize(10),
        color:  nosunday == 1 ? 'white' : 'black'
    }}
        >
           No
            </Text>
            
            </TouchableOpacity>
           
           
           
           
            <TouchableOpacity onPress={yessundayclicked}
          style={{
            height: normalize(40),
            width: '30%',
            marginTop: normalize(10),
            alignSelf: 'center',
            borderWidth: normalize(1),
            borderRadius: normalize(5),
            backgroundColor: yessunday == 1 ? '#69BE53': 'white',
            borderColor: '#69BE53'
          }}
          
        > 
        
        <Text style={{
        fontSize: normalize(12),           
        textAlign: 'center',
        fontFamily: FONTS.Hind,
        marginTop: normalize(10),
        color: yessunday == 1 ? 'white' : 'black'
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

        
            Preferred time
          
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
                                
                                fontSize={normalize(12)}
                                width={'30%'}
                               
                                numberOfLines={1}
                                maxLength={100}
                                placeholder={'8.00 AM'}
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
                               
                                fontSize={normalize(12)}
                                width={'30%'}
                               
                                numberOfLines={1}
                                maxLength={100}
                                placeholder={'10.00 AM'}
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
                                placeholder={'Landmark - RDB, Sector 5, Saltlake'}
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


          

            <TouchableOpacity onPress={()=> props.navigation.navigate("EditAddressPage")}
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