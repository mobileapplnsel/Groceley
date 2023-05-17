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
export default function PaymentOptions(props) {


  const [name, setName] = useState('');
  const [mobilenumber, setMobileNumber] = useState('');
  const [house, setHouse] = useState('');
  const [street, setStreet] = useState('');
  const [landmark, setLandmark] = useState('');
  const [town, setTown] = useState('');
  const [states, setStates] = useState('');
  const [country, setCountry] = useState('');
  const [pincode, setPincode] = useState('');
  const [netbanking, setNetbanking] = useState(0);
  const [card, setCard] = useState(0);
  const [emi, setEmi] = useState(0);
  const [upi, setUpi] = useState(0);
  const [cash, setCash] = useState(0);
  const [coupon_clicked, setCoupon_clicked] = useState(false);

  const isFocused = useIsFocused();


  const regex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;






function coupon(){
  setCoupon_clicked(!coupon_clicked)
}

    
   
  function NetBanking () {

    {
     
        setUpi(0),
        setNetbanking(1),
        setCard(0),
        setEmi(0),
        setCash(0)
    }
  
  console.log("Flag status === ", netbanking)
  }


  
   
  function CardPay () {

    {
     
        setUpi(0),
        setNetbanking(0),
        setCard(1),
        setEmi(0),
        setCash(0)
    }
  
  console.log("Flag status === ", card)
  }
   
  function EmiPay () {

    {
     
        setUpi(0),
        setNetbanking(0),
        setCard(0),
        setEmi(1),
        setCash(0)
    }
  
  console.log("Flag status === ", emi)
  }

  function UpiPay () {

    {
     
        setUpi(1),
        setNetbanking(0),
        setCard(0),
        setEmi(0),
        setCash(0)
    }
  
  console.log("Flag status === ", upi)
  }

  function CashPay () {

    {
     
        setUpi(0),
        setNetbanking(0),
        setCard(0),
        setEmi(0),
        setCash(1)
    }
  
  console.log("Flag status === ", cash)
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
}}
>
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
             Payment Options
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
    alignItems:'center',
    marginRight: normalize(5),
    marginLeft: normalize(28),
    backgroundColor:"#69BE53"
   
}}>

<Image
                        source={ICONS.tick}
                        style={{
                            height: normalize(10),
                            width: '90%',
                            alignSelf: 'center',
                            tintColor: 'white'
                        }}
                        resizeMode={'contain'}
                        tintColor= {'white'}
                    ></Image>



</View>
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
    backgroundColor: '#F36E35'
    
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

{/* <Image
                  source={ICONS.tick}
                  style={{
                    height: normalize(20),
                    width: normalize(20),
                    marginTop: normalize(20),
                    marginLeft: normalize(20)
                  }}
                  resizeMode={'contain'}
                ></Image> */}
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
                
            }}
            />


<TouchableOpacity
            style={{
                //height: normalize(60),
                width: '90%',
                backgroundColor: '#FFD580',
                alignSelf: 'center',
                marginTop: normalize(20),
                borderRadius: normalize(5)
            }}
            
            >
                <Text style={{
                     fontSize: normalize(12),
                     
                    
                     textAlign: 'center',
                     fontFamily: FONTS.Hind,
                     marginTop: normalize(10),
                     color: 'black',
                }}>
                       Pay Only {'\u20B9'}999 for Membership, and get {'\u20B9'}200 cashback and 7% discount
                </Text>

                <TouchableOpacity 
                                        onPress={()=>props.navigation.navigate("Membership")}
                                        style={{
                                          height: normalize(30),
                                          width: '70%',
                                          backgroundColor: '#69BE53',
                                          borderRadius: normalize(5),
                                          justifyContent: 'center',
                                          alignItems: 'center',
                                          marginBottom: normalize(10),
                                         alignSelf: 'center',
                                         marginTop: normalize(10)
                                        }}>
                                          <Text
                                          
                                          style={{
                                            fontSize: normalize(12),
                                            fontFamily: FONTS.Hind,
                                            color: 'white'
                                          }}
                                          > Go to Membership page</Text>
                                           </TouchableOpacity>

            </TouchableOpacity>






            {/* <Text style={{
                     fontSize: normalize(12),
                     marginLeft:20,
                     fontFamily: FONTS.Hind,
                     marginTop: normalize(10),
                     color: 'black',
                }}>
                     More Ways To Pay  
                </Text> */}

           


          
{/* <TouchableOpacity onPress={()=> coupon()}
          style={{
            height: normalize(40),
            width: '90%',
            marginTop: normalize(10),
            alignSelf: 'center',
            borderWidth: normalize(1),
            borderRadius: normalize(10),
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
            Add Gift Card or Promo Code
            </Text>
            
            </TouchableOpacity>

            {coupon_clicked == 1 ? (     <View 
           
            
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
<TextInput
                                value={name}
                                onChangeText={_ => setName(_)}
                                marginTop={normalize(15)}
                                alignSelf={'center'}
                                keyboardType={'email-address'}
                                fontSize={normalize(14)}
                                width={normalize(250)}
                                placeholder={'Enter promo code'}
                                placeholderTextColor={'#3F3F3F'}
                                borderRadius={normalize(10)}
                                borderWidth={normalize(1)}
                                borderColor={'#DADADA'}
                                height={normalize(40)}
                                style={{
                                  paddingHorizontal: normalize(20)
                                }}
                            />



                                      








                                     











                                  





                                       <TouchableOpacity 
                                      
                                       style={{
                                         height: normalize(30),
                                         width: '60%',
                                         backgroundColor: '#69BE53',
                                         borderRadius: normalize(5),
                                         justifyContent: 'center',
                                         alignItems: 'center',
                                         marginBottom: normalize(10),
                                         alignSelf: 'center',
                                         borderRadius: normalize(10),
                                         marginTop: normalize(10)
                                       }}>
                                         <Text
                                         
                                         style={{
                                           fontSize: normalize(12),
                                           fontFamily: FONTS.Hind,
                                           color: 'white',
                                           alignSelf: 'center'

                                         }}
                                         > Apply</Text>
                                          </TouchableOpacity>

                                       </View>

                                       
                                       
             

           </View>
        
  
  
  ) : (null)} */}


            {/* <TouchableOpacity onPress={()=> props.navigation.navigate("RazorpayCheckout2")}
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
           Continue to Payment Gateway
            </Text>
            
            </TouchableOpacity> */}
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
}}>
 <Text style={{
        fontSize: normalize(12),           
        textAlign: 'center',
        fontFamily: FONTS.Hind,
        marginTop: normalize(10),
        color: 'white'
    }}
        >
           Continue to Payment Gateway
            </Text>

   </TouchableOpacity>

   <TouchableOpacity onPress = {() => props.navigation.navigate("Orderlist")}
          style={{
            height: normalize(40),
            width: '90%',
            marginTop: normalize(10),
            alignSelf: 'center',
            borderWidth: normalize(1),
            borderRadius: normalize(15),
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
         Cash on Delivery
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
{/* <Loader/>   */}
      </SafeAreaView>


    </Fragment>


  );
}