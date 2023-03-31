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
  TextInput,
  Share,
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
export default function Promotion(props) {


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



    const onShare = async () => {
        try {
          const result = await Share.share({
            message:
              "Simply Share Anything across all social media platforms, isn't it awesome",
          });
          if (result.action === Share.sharedAction) {
            if (result.activityType) {
              // shared with activity type of result.activityType
            } else {
              // shared
            }
          } else if (result.action === Share.dismissedAction) {
            // dismissed
          }
        } catch (error) {
          alert(error.message);
        }
      };

  return (


  


      <SafeAreaView style={{flex:1, backgroundColor: 'white' }}>


        <KeyboardAvoidingView
          style={{flex:1,}}
          behavior={Platform.OS == 'ios' ? 'padding' : "height"}>



          

   
<ScrollView showsVerticalScrollIndicator={true} bounces={false} >

    



      

             <View style={{backgroundColor:'#69BE53',width:'100%',flexDirection:'row'}}>
              <Text
                style={{
                  fontSize: normalize(19),
                  letterSpacing: 1,
                  fontWeight: '700',
                  marginLeft:normalize(20),
                  fontFamily: FONTS.Hind,
                  marginTop: normalize(20),
                  color: 'white',
                  width:'60%'
                  

                }}>
             Earn upto {'\u20B9'}200 on every invite
              </Text>
           
              <Image
                source={ICONS.giftbox}
                style={{
                  height: normalize(60),
                  width: normalize(60),
                 marginTop:normalize(20),
                 marginBottom:normalize(20)
                
                }}
                resizeMode={'contain'}
               
              ></Image>

            </View>


            
            
<View
            style={{
                height:normalize(120),
                width: '90%',
                marginTop:20,
               
                        
            }}
            >
                <View  style={{flexDirection:'row',
                borderRadius:normalize(10),
                
                justifyContent:'space-between',backgroundColor:'#FFD580', marginLeft:20,height:'62%',alignItems:'center'}}>
                <View style={{marginLeft:20}}>
                <Text style={{color:'black'}}>
                    Your Code
                </Text>
                <Text style={{height:normalize(20),fontSize:18, fontWeight:'700',color:'black'}}>
                    759s8v
                </Text>
                </View>
                <TouchableOpacity onPress={onShare}>
                <View style={{width:normalize(80),marginRight:15,height:35,borderRadius:normalize(10),alignItems:'center', backgroundColor:'black'}}>
                    <Text style={{color:'white',alignSelf:'center',marginTop:6}}>Invite Now</Text>
                </View>
                </TouchableOpacity>
                </View>
               


            </View>
            <View style={{marginLeft:20}}>
                <Text style={{fontWeight:'700',color:'black',fontSize:normalize(14)}}>How it Works</Text>

                <View style={{flexDirection:'row'}}>

                    
              <Image
                source={ICONS.whatsapp}
                style={{
                  height: normalize(25),
                  width: normalize(25),
                 marginTop:normalize(10)
                
                }}
                resizeMode={'contain'}
               
              ></Image>
              <Text style={{ marginTop:normalize(10),marginLeft:10,fontSize:normalize(13),color:'gray',}}>
                Invite your friends to Groceley
              </Text>

                </View>
                <View style={{marginTop:13}}>
                    <Text style={{fontSize:normalize(14),fontWeight:'600',color:'black'}}> Rules</Text>
                         
               
              
              <View style={{flexDirection:'row'}}>

                    <Text style={{fontWeight:'700',marginTop:normalize(7),color:'gray',}}>1.</Text>
                  <Text style={{color:'gray', marginTop:normalize(7),marginLeft:10,fontSize:normalize(13),marginRight:10,}}>
                  A cashback offers along with extra 2% discount on MRP for our Members for all new customers if they enrolled for a new membership. As such we offer minimum 5% discount in MRP but for our members discount would be minimum 7% discount for members.
                     </Text>
                    

                       </View>
                       <View style={{flexDirection:'row'}}>

                       <Text style={{fontWeight:'700',marginTop:normalize(7),color:'gray',}}>2.</Text>
                      <Text style={{color:'gray', marginTop:normalize(7),marginLeft:10,fontSize:normalize(13),marginRight:10,}}>
                       All customer will get Rs.200 instant discount through coins which can be reimbursed from the app purchases.
                        </Text>


                           </View>              
                      
                      <View style={{flexDirection:'row'}}>

                          <Text style={{color:'gray',color:'gray',fontWeight:'700',marginTop:normalize(7)}}>3.</Text>
                        <Text style={{color:'gray', marginTop:normalize(7),marginLeft:10,fontSize:normalize(13),marginRight:10,}}>
                         Additionally, Rs.300 cashback will be given to all Club Members through in-built Wallet as coins which can be used on their next visit.
                           </Text>


                       </View>

                       <View style={{flexDirection:'row'}}>

<Text style={{fontWeight:'700',marginTop:normalize(7),color:'gray',}}>4.</Text>
<Text style={{ color:'gray',marginTop:normalize(7),marginLeft:10,fontSize:normalize(13),marginRight:10,}}>
Rs.150 each in three instalments through in-built wallet as coins wallet which would be credited on 1st of second month on the registered mobile number or registered card. For Instance if someone buys the membership on 1st January the first 150 Rs coins would be credited on the app on 1st February the second 150 Rs coins would be credited on 1st March and third 150rs coins would be credited on 1st April 2023.
 </Text>


</View>
<View style={{flexDirection:'row',marginRight:10,marginBottom:10}}>

<Text style={{fontWeight:'700',marginTop:normalize(7),color:'gray',}}>5.</Text>
<Text style={{ marginTop:normalize(7),marginLeft:10,fontSize:normalize(13),color:'gray',}}>
The Instant coupon code of Rs 200 should be redeemed on the same day of enrolment/ renewal in a single transaction. The differential amount above Rs 200 to be paid by the customer at the time of billing.
 </Text>


</View>
                     

                </View>
            </View>
          
         

        
           
           







            </ScrollView>
         
        </KeyboardAvoidingView>

      </SafeAreaView>




  );
}