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
        pic: ICONS.bread,
        description: "Your order Hovis Farmhouse Wholemeal has been dispatched",
        realprice: "4999",
        discountedprice: "1690",
        quantity:1 

    },

    {
        id: "1",
        categories: "Bedsheets",
        pic: ICONS.cornflakes,
        description: "Your order Kellogg's Corn Flakes Cereal is shipped",

        realprice: "4999",
        discountedprice: "1690",
        quantity:1 


    },

    {
        id: "2",
        categories: 'Blankets',
        pic: ICONS.milk,
        description: "Your order Amul Moti Homogenized Toned Milk is in-Transit",
        realprice: "4999",
        discountedprice: "1690",
        quantity:1 

    },

    {
        id: "3",
        categories: 'Blankets',
        pic: ICONS.cornflakes2,
        description: "Your order Kellogg's Corn Flakes Cereal will be delivered today",
        realprice: "4999",
        discountedprice: "1690",
        quantity:1 

    },
    {
        id: "4",
        categories: 'Blankets',
        pic: ICONS.milk,
        description: "Your ordered Amul Moti Homogenized Toned Milk on 14/12/2023",
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
        <>
        <View style={{

            height: normalize(60),
            width: '93%',
            
            marginVertical: normalize(5),
            marginLeft: normalize(10),
            borderRadius: normalize(15)
        }}>




           









            <View style={{
                flexDirection: 'row',

            }}
            >


                <View style={{
                    height: normalize(60),
                    width: normalize(50),
                    backgroundColor: 'white',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginLeft: normalize(10),
                    borderRadius: normalize(5),
                    
                }}>
                    <Image
                        source={item.pic}
                        style={{
                            height: normalize(80),
                            width: normalize(40),
                            alignSelf: 'center',
                          
                            marginRight: normalize(5),
                            borderRadius: normalize(25)
                        }}
                        resizeMode={'contain'}
                    ></Image>

                </View>

                <View style={{
                    width: '70%',
                    marginLeft: normalize(10)
                }}>
                    <Text
                    numberOfLines={3}
                        style={{
                            fontSize: normalize(12),
                            color: "black",
                            marginTop: normalize(10),
                            fontWeight:'600'
                        }}
                    >{item.description}</Text>

                  


              

                </View>



            </View>


                        







        </View>

        <View
        style={{
            height: normalize(1),
            width: '95%',
            backgroundColor: '#69BE53'
        }}
        />
        </>
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
              marginTop: normalize(20),
              marginRight: normalize(10),
              height: normalize(40)
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
                    height: normalize(20),
                    width: normalize(20),
                    
                    marginLeft: normalize(20)
                  }}
                  resizeMode={'contain'}
                ></Image>
              </TouchableOpacity>


<View>
              <Text style={{
                color: 'black',
                fontSize: normalize(14),
                fontWeight: '600'

              }}>
Notifications
              </Text>





              </View>





              <TouchableOpacity onPress = {() => props.navigation.navigate("Profile")}
                style={{
                  width: normalize(30),
                  height: normalize(30),
                  borderRadius: normalize(15),
                  backgroundColor: '#F36E35',
                  marginTop: normalize(-5)
                }}

              >
                <Image
                  source={ICONS.user}
                  style={{
                    height: normalize(15),
                    width: normalize(15),
                    marginTop: normalize(7),
                    alignSelf: 'center'
                  }}
                  resizeMode={'contain'}
                  tintColor= {'white'}
                ></Image>
              </TouchableOpacity>




           
            </View>





                        <ScrollView showsVerticalScrollIndicator={false} bounces={false} >


                          
                          
                                <View
        style={{
            height: normalize(1),
            width: '93%',
            backgroundColor: '#69BE53',
            marginLeft: normalize(10),
        }}
        />
                                <FlatList
                                    data={DATA}
                                    renderItem={renderItem1}
                                    keyExtractor={item => item.id}
                                    showsHorizontalScrollIndicator={false}


                                    style={{


                                        marginLeft: normalize(10),

                                        marginTop: normalize(10),

                                        width: '96%'

                                    }}

                
                                />



                             
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