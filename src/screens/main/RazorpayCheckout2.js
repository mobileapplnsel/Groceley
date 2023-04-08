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
export default function RazorpayCheckout2(props) {


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



          <TouchableOpacity 
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            height: normalize(30),
            width: '60%',
            backgroundColor: 'red'
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


   </TouchableOpacity>



          </ScrollView>
        </KeyboardAvoidingView>

      </SafeAreaView>


    </Fragment>


  );
}