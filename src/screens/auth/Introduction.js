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
export default function Introduction(props) {


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


                <KeyboardAvoidingView
                    style={{ flex: 1 }}
                    behavior={Platform.OS == 'ios' ? 'padding' : "height"}>



                    {/* <ScrollView showsVerticalScrollIndicator={false} bounces={false} > */}





                    <Image
                        source={ICONS.ellipse}
                        style={{
                            height: normalize(80),
                            width: normalize(80),
                            alignSelf: 'flex-end',
                            marginRight: normalize(-17),
                            marginTop: normalize(-5),
                            position: 'relative'
                        }}
                        resizeMode={'contain'}
                    />

                    <Image
                        source={ICONS.ellipse2}
                        style={{
                            height: normalize(50),
                            width: normalize(50),
                            marginRight: normalize(-17),
                            alignSelf: 'flex-end',
                            position: 'relative',
                            top: -10
                        }}
                        resizeMode={'contain'}
                    />








                    <View
                        style={{

                            marginTop: normalize(-60),
                            alignSelf: 'center',
                            marginLeft: normalize(10),
                            marginRight: normalize(10)
                        }}>



                        <Text
                            style={{

                                letterSpacing: 4,
                                fontWeight: '900',
                                textAlign: 'left',
                                marginTop: normalize(10),
                                color: 'black',
                                fontFamily: FONTS.PlayfairDisplayBlack,
                                fontSize: normalize(25)
                            }}>
                            Stay Home

                        </Text>

                        <Text
                            style={{
                                letterSpacing: 4,
                                fontWeight: '900',
                                textAlign: 'left',
                                marginTop: normalize(10),
                                color: 'black',
                                fontFamily: FONTS.PlayfairDisplayBlack,
                                fontSize: normalize(25)

                            }}>

                            We’ll Deliver

                        </Text>

                        <View style={{
                            marginTop: normalize(20)
                        }}>
                            <Text style={{
                                letterSpacing: 1,

                                textAlign: 'left',
                                marginTop: normalize(10),
                                color: 'black',

                                fontFamily: FONTS.PlayfairDisplayBlack,
                                fontSize: normalize(14)

                            }}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque in felis tincidunt, iaculis justo vel, semper lectus.

                            </Text>


                        </View>


                        <TouchableOpacity onPress = {()=> props.navigation.navigate("Home")}

                            style={{
                                height: normalize(35),
                                width: normalize(100),
                                marginTop: normalize(20),
                                marginLeft: normalize(-5),
                                alignSelf: 'flex-start',
                                borderRadius: normalize(20),
                                flexDirection: 'row',
                                justifyContent: 'space-evenly',
                               
                            }}
                        >
                            <Text
                            
                                style={{
                                    letterSpacing:3,
                                    color: 'black',
                                    textAlign: 'center',
                                    marginTop: normalize(9),
                                    fontSize: normalize(10),
                                    fontWeight: '700',
                                   
                                }}
                            >CONTINUE</Text>

<Image
                            source={ICONS.arrow}
                            style={{
                                height: normalize(10),
                                width: normalize(10),
                                alignSelf: 'center',
                                
                            }}
                            resizeMode={'contain'}
                        ></Image>


                        </TouchableOpacity>

                        <Image
                            source={ICONS.intro}
                            style={{
                                height: normalize(250),
                                width: normalize(250),
                                alignSelf: 'center',
                                marginTop: normalize(5)
                            }}
                            resizeMode={'contain'}
                        ></Image>

<Image
                            source={ICONS.logo}
                            style={{
                                height: normalize(120),
                                width: normalize(150),
                                alignSelf: 'center',
                                marginTop: normalize(-40)
                            }}
                            resizeMode={'contain'}
                        ></Image>


                    </View>


                    
                   




                   
                   

                    {/* </ScrollView> */}
                </KeyboardAvoidingView>

            </SafeAreaView>


        </Fragment>


    );
}
