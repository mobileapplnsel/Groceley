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
export default function Login(props) {


    const [name, setName] = useState('');
    const [mobilenumber, setMobileNumber] = useState('');
    const [emailaddress, setEmailaddress] = useState('');
    const [choosepassword, setChoosepassword] = useState('');
    const [confirmpassword, setConfirmpassword] = useState('');
    const isFocused = useIsFocused();













    const regex =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;



    return (


        <Fragment>


            <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>


                



                    {/* <ScrollView showsVerticalScrollIndicator={false} bounces={false} > */}



                   
<Image
                source={ICONS.ellipse}
                style={{
                  height: normalize(80),
                  width: normalize(80),
                  marginRight: normalize(-15),
                  marginTop: normalize(-5),
                  
                  alignSelf: 'flex-end',
                  position: 'relative'
                }}
                resizeMode={'contain'}
            />

<Image
                source={ICONS.ellipse2}
                style={{
                  height: normalize(50),
                  width: normalize(50),
                  alignSelf: 'flex-end',
                  marginRight: normalize(-10),
                  alignSelf: 'flex-end',
                  position: 'relative',
                  top: -6
                }}
                resizeMode={'contain'}
            />


                    <View
                        style={{

                            marginTop: normalize(-60),
                            alignSelf: 'center'
                        }}>


                        <Image
                            source={ICONS.logo1}
                            style={{
                                height: normalize(100),
                                width: normalize(50),
                                alignSelf: 'center',
                            }}
                            resizeMode={'contain'}
                        >



                        </Image>
                        <Text
                            style={{
                                fontSize: normalize(14),
                                letterSpacing: 3,
                                fontWeight: '700',
                                textAlign: 'center',
                                marginTop: normalize(10),
                                color: 'black',

                            }}>
                            FORGOT PASSWORD
                        </Text>

                        <View style={{
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <TextInputItem
                                value={name}
                                onChangeText={_ => setName(_)}
                                marginTop={normalize(40)}
                                alignSelf={'center'}
                                keyboardType={'email-address'}
                                fontSize={normalize(14)}
                                width={normalize(250)}
                                placeholder={'Enter Username'}
                                borderRadius={normalize(30)}
                                backgroundColor={'#D3D3D3'}

                            />

                        </View>






                        <TouchableOpacity

                            style={{
                                height: normalize(35),
                                width: normalize(100),
                                marginTop: normalize(20),
                                backgroundColor: '#69BE53',
                                alignSelf: 'center',
                                borderRadius: normalize(20)
                            }}
                        >
                            <Text
                                style={{
                                    color: 'white',
                                    textAlign: 'center',
                                    marginTop: normalize(9),
                                    fontSize: normalize(10),
                                    fontWeight: '800'
                                }}
                            >SUBMIT</Text>


                        </TouchableOpacity>




                    </View>











<View style={{
    height: '20.5%',
    width: '100%',
   
    position: 'absolute',
   bottom: 0,
 
   
}}>

                

                  
</View>



                    {/* </ScrollView> */}
             

            </SafeAreaView>


        </Fragment>


    );
}

