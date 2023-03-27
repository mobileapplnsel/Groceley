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
  const isFocused = useIsFocused();


  const regex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;








    
   
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
             Payment Options
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
    alignItems:'center',
    marginRight: normalize(5),
    marginLeft: normalize(28),
    backgroundColor:"#69BE53"
   
}}>

<Image
                        source={ICONS.check}
                        style={{
                            height: normalize(15),
                            width: '100%',
                            alignSelf: 'center',
                              
                        }}
                        resizeMode={'contain'}
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
                height: normalize(60),
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
                       Pay Only {'\u20B9'}3,000 for Membership, Active and get rewards of {'\u20B9'}900
                </Text>

                

            </TouchableOpacity>




            <TouchableOpacity
            style={{
                height: normalize(40),
                width: '90%',
                backgroundColor: '#69BE53',
                alignSelf: 'center',
                marginTop: normalize(20),
                borderRadius: normalize(15)
            }}
            
            >
                <Text style={{
                     fontSize: normalize(12),
                     
                    
                     textAlign: 'center',
                     fontFamily: FONTS.Hind,
                     marginTop: normalize(10),
                     color: 'white',
                }}>
                       Continue
                </Text>

                

            </TouchableOpacity>


            <Text style={{
                     fontSize: normalize(12),
                     marginLeft:20,
                     fontFamily: FONTS.Hind,
                     marginTop: normalize(10),
                     color: 'black',
                }}>
                     More Ways To Pay  
                </Text>

           

<View style={{
    
}}>
           
           <View style={{
                flexDirection: 'row',
                height: normalize(50),
                width: '93%',
                backgroundColor:'#F5F5F5',
                marginVertical: normalize(5),
                marginLeft: normalize(10),
                borderRadius: normalize(12),
                borderColor:"gray",
                borderWidth:1

            }}
            >

              {/* {this.state.show ? <Modal /> : null} */}
               
              <TouchableOpacity style={{alignSelf:'center',marginLeft:10}} onPress ={()=> NetBanking()}>

{netbanking==1 ?
 <View style={{ alignSelf:'center',borderColor:'green',width:18,height:18,borderRadius:10,borderWidth:2,backgroundColor:'green'}}>
 <View style={{ alignSelf:'center',borderRadius:10,padding:5,backgroundColor:'white',marginTop:normalize(1.2)}}></View>
</View> 
 :  <View style={{ alignSelf:'center',borderColor:'gray',width:18,height:18,borderRadius:10,borderWidth:1,}}></View> 
}
 </TouchableOpacity>
                          
                
                  
                    <Text
                    
                        style={{
                            fontSize: normalize(12),
                            color: "black",
                           marginLeft:normalize(10),
                            fontWeight:'600',
                            alignSelf:'center'
                        }}
                    >Net Banking</Text>

                

            </View>

                  
                   
           <View style={{
                flexDirection: 'row',
                height: normalize(50),
                width: '93%',
                backgroundColor:'#F5F5F5',
                marginVertical: normalize(5),
                marginLeft: normalize(10),
                borderRadius: normalize(12),
                borderColor:"gray",
                borderWidth:1

            }}
            >

              {/* {this.state.show ? <Modal /> : null} */}
               
              
              <TouchableOpacity style={{alignSelf:'center',marginLeft:10}} onPress ={()=> CardPay()}>

{card==1 ?
 <View style={{ alignSelf:'center',borderColor:'green',width:18,height:18,borderRadius:10,borderWidth:2,backgroundColor:'green'}}>
 <View style={{ alignSelf:'center',borderRadius:10,padding:5,backgroundColor:'white',marginTop:normalize(1.2)}}></View>
</View> 
 :  <View style={{ alignSelf:'center',borderColor:'gray',width:18,height:18,borderRadius:10,borderWidth:1,}}></View> 
}
 </TouchableOpacity>
                          
                
                  
                    <Text
                    
                        style={{
                            fontSize: normalize(12),
                            color: "black",
                           marginLeft:normalize(10),
                            fontWeight:'600',
                            alignSelf:'center'
                        }}
                    >Pay with Debit/Credit/ATM Cards</Text>

                

            </View>

              
           <View style={{
                flexDirection: 'row',
                height: normalize(50),
                width: '93%',
                backgroundColor:'#F5F5F5',
                marginVertical: normalize(5),
                marginLeft: normalize(10),
                borderRadius: normalize(12),
                borderColor:"gray",
                borderWidth:1

            }}
            >

              {/* {this.state.show ? <Modal /> : null} */}
               
              
              <TouchableOpacity style={{alignSelf:'center',marginLeft:10}} onPress ={()=> EmiPay()}>

{emi==1 ?
 <View style={{ alignSelf:'center',borderColor:'green',width:18,height:18,borderRadius:10,borderWidth:2,backgroundColor:'green'}}>
 <View style={{ alignSelf:'center',borderRadius:10,padding:5,backgroundColor:'white',marginTop:normalize(1.2)}}></View>
</View> 
 :  <View style={{ alignSelf:'center',borderColor:'gray',width:18,height:18,borderRadius:10,borderWidth:1,}}></View> 
}
 </TouchableOpacity>
                          
                
                  
                    <Text
                    
                        style={{
                            fontSize: normalize(12),
                            color: "black",
                           marginLeft:normalize(10),
                            fontWeight:'600',
                            alignSelf:'center'
                        }}
                    >EMI</Text>

                

            </View>


             
           <View style={{
                flexDirection: 'row',
                height: normalize(50),
                width: '93%',
                backgroundColor:'#F5F5F5',
                marginVertical: normalize(5),
                marginLeft: normalize(10),
                borderRadius: normalize(12),
                borderColor:"gray",
                borderWidth:1

            }}
            >

              {/* {this.state.show ? <Modal /> : null} */}
               
              
              <TouchableOpacity style={{alignSelf:'center',marginLeft:10}} onPress ={()=> UpiPay()}>

{upi==1 ?
 <View style={{ alignSelf:'center',borderColor:'green',width:18,height:18,borderRadius:10,borderWidth:2,backgroundColor:'green'}}>
 <View style={{ alignSelf:'center',borderRadius:10,padding:5,backgroundColor:'white',marginTop:normalize(1.2)}}></View>
</View> 
 :  <View style={{ alignSelf:'center',borderColor:'gray',width:18,height:18,borderRadius:10,borderWidth:1,}}></View> 
}
 </TouchableOpacity>
                          
                
                  
                    <Text
                    
                        style={{
                            fontSize: normalize(12),
                            color: "black",
                           marginLeft:normalize(10),
                            fontWeight:'600',
                            alignSelf:'center'
                        }}
                    >Other UPI Apps</Text>

                

            </View>

             
           <View style={{
                flexDirection: 'row',
                height: normalize(50),
                width: '93%',
                backgroundColor:'#F5F5F5',
                marginVertical: normalize(5),
                marginLeft: normalize(10),
                borderRadius: normalize(12),
                borderColor:"gray",
                borderWidth:1

            }}
            >

              {/* {this.state.show ? <Modal /> : null} */}
               
              <TouchableOpacity style={{alignSelf:'center',marginLeft:10}} onPress ={()=> CashPay()}>

{cash==1 ?
 <View style={{ alignSelf:'center',borderColor:'green',width:18,height:18,borderRadius:10,borderWidth:2,backgroundColor:'green'}}>
 <View style={{ alignSelf:'center',borderRadius:10,padding:5,backgroundColor:'white',marginTop:normalize(1.2)}}></View>
</View> 
 :  <View style={{ alignSelf:'center',borderColor:'gray',width:18,height:18,borderRadius:10,borderWidth:1,}}></View> 
}
 </TouchableOpacity>
                          
                
                  
                    <Text
                    
                        style={{
                            fontSize: normalize(12),
                            color: "black",
                           marginLeft:normalize(10),
                            fontWeight:'600',
                            alignSelf:'center'
                        }}
                    >Cash on Delivery/Pay On Delivery</Text>

                

            </View>

















       

        

          
           
           
</View>

          
<TouchableOpacity
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
           Continue
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