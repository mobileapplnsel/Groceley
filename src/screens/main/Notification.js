import React, { Fragment, useEffect, useState } from 'react';
import {
    View,
    SafeAreaView,
    Text,
    TouchableOpacity,
    KeyboardAvoidingView,
    Platform,
    Keyboard,
    ScrollView,
    Image,
    ImageBackground,
    StatusBar,
    Alert,
    TextInput,
    FlatList,
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
import Layout from '../../components/Layout';
import DrawerMenuAdminexpanded from '../../components/DrawerMenuAdminexpanded';

export default function Notification(props)
{
    const [name, setName] = useState('');
    const [mobilenumber, setMobileNumber] = useState('');
    const [emailaddress, setEmailaddress] = useState('');
    const [choosepassword, setChoosepassword] = useState('');
    const [confirmpassword, setConfirmpassword] = useState('');
    const [modalVisible, setModalVisible] = useState(false);





    const DATA = [{
        id: "0",
        categories: "Bedcovers",
        pic: ICONS.bedcover,
        description: "King Size Bed Sheet (with pillow cover) is Dispatched",
        realprice: "4999",
        discountedprice: "1690",
        quantity:1 

    },

    {
        id: "1",
        categories: "Bedsheets",
        pic: ICONS.bedcover,
        description: "King Size Bed Sheet (with pillow cover) is Shipped",

        realprice: "4999",
        discountedprice: "1690",
        quantity:1 


    },

    {
        id: "2",
        categories: 'Blankets',
        pic: ICONS.bedcover,
        description: "King Size Bed Sheet (with pillow cover) is in-Transit",
        realprice: "4999",
        discountedprice: "1690",
        quantity:1 

    }



    ]

    const DATA2 = [{
        id: "0",
        categories: "Bedcovers",
        pic: ICONS.bedsheet,
        description: "King Size Bed Sheet (with pillow cover)",
        realprice: "4999",
        discountedprice: "2150"


    },

    {
        id: "1",
        categories: "Bedsheets",
        pic: ICONS.bedsheet,
        description: "King Size Bed Sheet (with pillow cover)",
        realprice: "4999",
        discountedprice: "2150"


    },

    {
        id: "2",
        categories: 'Blankets',
        pic: ICONS.bedsheet,
        description: "King Size Bed Sheet (with pillow cover)",
        realprice: "4999",
        discountedprice: "2150"
    }



    ]











    const regex =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const renderItem1 = ({ item, index }) => (
        <View style={{

            height: normalize(130),
            width: '90%',
            backgroundColor: item.id % 2 == '0' ? '#F6F6F6' : '#FFF3F4',
            marginVertical: normalize(5),
            marginLeft: normalize(10),
            borderRadius: normalize(15)
        }}>




           









            <View style={{
                flexDirection: 'row',

            }}
            >


                <View style={{
                    height: normalize(110),
                    width: normalize(90),
                    backgroundColor: 'white',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginLeft: normalize(10),
                    borderRadius: normalize(5),
                    marginTop: normalize(-12)
                }}>
                    <Image
                        source={item.pic}
                        style={{
                            height: normalize(100),
                            width: normalize(80),
                            alignSelf: 'center',
                          
                            marginRight: normalize(5),
                            borderRadius: normalize(25)
                        }}
                        resizeMode={'contain'}
                    ></Image>

                </View>

                <View style={{
                    width: '50%',
                    marginLeft: normalize(10)
                }}>
                    <Text
                        style={{
                            fontSize: normalize(12),
                            color: "#222222",
                            marginTop:20,
                            fontWeight:'600'
                        }}
                    >{item.description}</Text>

                  


              

                </View>



            </View>


                        







        </View>
    );

    const renderItem2 = ({ item, index }) => (
        <View style={{

            height: normalize(200),

            backgroundColor: item.id % 2 == '0' ? '#F6F6F6' : '#FFF3F4',
            marginVertical: normalize(5),

            borderRadius: normalize(15)
        }}>





            <Image
                source={item.pic}
                style={{
                    height: normalize(100),
                    width: normalize(80),
                    alignSelf: 'center',
                    marginTop: normalize(-18),
                    marginRight: normalize(5),
                    borderRadius: normalize(25)
                }}
                resizeMode={'contain'}
            ></Image>





            <Text
                numberOfLines={2}
                style={{
                    color: 'black',
                    fontSize: normalize(10),
                    fontWeight: '600',
                    marginTop: normalize(5),
                    alignSelf: 'center',
                    width: '60%'
                }}
            >{item.description}
            </Text>


            <View style={{
                flexDirection: 'row',
            }}>

                <Image
                    source={ICONS.rupee}
                    style={{
                        height: normalize(10),
                        width: normalize(10),
                        marginTop: normalize(8),
                        marginLeft: normalize(20),
                        tintColor: "#9E9E9E"
                    }}
                    resizeMode={'contain'}
                    tintColor={"#9E9E9E"}

                ></Image>
                <Text
                    style={{
                        color: '#9E9E9E',
                        fontSize: normalize(10),
                        fontWeight: '600',
                        marginTop: normalize(5),
                        alignSelf: 'center'
                    }}
                >{item.realprice}
                </Text>

                <View style={{
                    flexDirection: 'row',
                    marginLeft: normalize(2)
                }}>

                    <Image
                        source={ICONS.rupee}
                        style={{
                            height: normalize(13),
                            width: normalize(15),
                            marginTop: normalize(8),
                            // marginLeft: normalize(20),

                        }}
                        resizeMode={'contain'}

                    />

                    <Text style={{
                        color: '#222222',
                        fontSize: normalize(13),
                        fontWeight: '600',
                        marginTop: normalize(5),
                        alignSelf: 'center',
                        fontWeight: '700'
                    }}>{item.discountedprice}
                    </Text>
                </View>

                <View
                    style={{
                        height: normalize(1),
                        width: normalize(40),
                        backgroundColor: "#9E9E9E",
                        position: 'absolute',
                        top: 15,
                        left: 20

                    }}
                />

            </View>


        </View>
    );


    return (


        <Fragment>

            <Layout Home={true} {...props}>
                <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>


                    <KeyboardAvoidingView
                        style={{ flex: 1 }}
                        behavior={Platform.OS == 'ios' ? 'padding' : "height"}>



                        {/* <ScrollView showsVerticalScrollIndicator={false} bounces={false} > */}






                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',

                            height: normalize(50)
                        }}>

                            <TouchableOpacity
                                style={{
                                    width: '20%',
                                    height: '90%',

                                }}

                                onPress={() => {

                                    setModalVisible(!modalVisible)

                                }}>
                                <Image
                                    source={ICONS.menu}
                                    style={{
                                        height: normalize(15),
                                        width: normalize(15),
                                        marginTop: normalize(15),
                                        marginLeft: normalize(20)
                                    }}
                                    resizeMode={'contain'}
                                ></Image>
                            </TouchableOpacity>


                            <View style={{
                                flexDirection: 'row',

                                justifyContent: 'center',
                                alignItems: 'center',
                                marginRight: normalize(5)
                            }}>
                                <Image
                                    source={ICONS.search}
                                    style={{
                                        height: normalize(15),
                                        width: normalize(15),
                                        marginLeft: normalize(2)


                                    }}
                                    resizeMode={'contain'}
                                ></Image>


<TouchableOpacity onPress={()=> props.navigation.navigate("Cart")}>
                                <Image
                                    source={ICONS.bag}
                                    style={{
                                        height: normalize(20),
                                        width: normalize(20),

                                        marginLeft: normalize(20)
                                    }}
                                    resizeMode={'contain'}
                                ></Image>
</TouchableOpacity>
                                
                            </View>
                        </View>





                        <ScrollView showsVerticalScrollIndicator={false} bounces={false} >


                            <View style={{
                                justifyContent: 'center'
                            }}>
                                <Text


                                    style={{

                                        color: 'black',
                                        fontSize: normalize(14),
                                        fontWeight: '600',

                                        textAlign: 'left',
                                        marginLeft: normalize(20)



                                    }}
                                >

                                    Notification



                                </Text>

                                <View style={{
                                    height: normalize(1),
                                    width: '90%',
                                    backgroundColor: 'black',
                                    marginTop: normalize(10),
                                    marginLeft: normalize(10)
                                }}
                                />

                            </View>
                            <View style={{
                                flexDirection: 'row',
                                flex: 1,
                                //width: '100%',
                                justifyContent: 'center',
                                alignItems: 'center',

                            }}>
                                <FlatList
                                    data={DATA}
                                    renderItem={renderItem1}
                                    keyExtractor={item => item.id}
                                    showsHorizontalScrollIndicator={false}


                                    style={{


                                        marginLeft: normalize(10),

                                        marginTop: normalize(20),

                                        width: '50%'

                                    }}

                
                                />



                                </View>
                        </ScrollView>




                        {/* </ScrollView> */}

                        <DrawerMenuAdminexpanded
                            modalVisible={modalVisible}
                            onBackdropPress={() => setModalVisible(false)}
                            onPress={() => {
                                Keyboard.dismiss();
                            }}
                            onPressCross={() => setModalVisible(false)}
                            onpress={() => {
                                setModalVisible(false);
                            }}
                            onbackPress={() => setModalVisible(false)}
                            onPressLeft={() => {
                                setModalVisible(false);

                            }}
                        />
                    </KeyboardAvoidingView>

                </SafeAreaView>
            </Layout>

        </Fragment>


    );



}