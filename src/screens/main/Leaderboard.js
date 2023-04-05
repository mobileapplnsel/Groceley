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
import * as Progress from 'react-native-progress';
import DrawerMenuAdminexpanded from '../../components/DrawerMenuAdminexpanded';
import NativeDialogManagerAndroid from 'react-native/Libraries/NativeModules/specs/NativeDialogManagerAndroid';
import { panGestureHandlerCustomNativeProps } from 'react-native-gesture-handler/lib/typescript/handlers/PanGestureHandler';

export default function Leaderboard(props)
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
        pic: ICONS.photo,
        description: "John Corner",
        rank: "1",
        diff: "3",
        quantity:1 , Referalno: "8",
        status: "NewB",

    },

    {
        id: "1",
        categories: "Bedsheets",
        pic: ICONS.photo,
        description: "Alex Martin",
        rank: "3",
        diff: "5",
        quantity:1 , 
        Referalno: "1",
        status: "Fan",


    },

    {
        id: "2",
        categories: 'Blankets',
        pic: ICONS.photo,
        description: "Keanu Reeves",
        rank: "6",
        diff: "7",
        quantity:1 ,
        Referalno: "2",
        status: "NewB",

    },

    {
        id: "3",
        categories: 'Blankets',
        pic: ICONS.photo,
        description: "Harrison Ford",
        rank: "4",
        diff: "7",
        quantity:1 ,
        Referalno: "9",
        status: "NewB",

    },
    {
        id: "4",
        categories: 'Blankets',
        pic: ICONS.photo,
        description: "Tom Hanks",
        rank: "9",
        diff: "3",
        quantity:1 ,
        Referalno: "8",
        status: "NewB",

    }




    ]

    const DATA2 = [{
        id: "0",
        categories: "Bedcovers",
        pic: ICONS.bedsheet,
        description: "John Corner",
        rank: "5",
        diff: "3",
       

    },

    {
        id: "1",
        categories: "Bedsheets",
        pic: ICONS.bedsheet,
        description: "John Corner",
        rank: "5",
        diff: "3",
    },

    {
        id: "2",
        categories: 'Blankets',
        pic: ICONS.bedsheet,
        description: "John Corner",
        rank: "5",
        diff: "3",
    }

    ]



    function infoAlert() {
        Alert.alert('Information', 'This is description Section.', [
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
          {text: 'OK', onPress: () => console.log('OK Pressed')},
        ]);
    }

    const regex =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const renderItem1 = ({ item, index }) => (
        <>
        <View style={{

            height: index == 0? normalize(120):normalize(80),
            width: '93%',
            backgroundColor:index == 0? '#69BE53':'#E8E8E8',
            marginVertical: normalize(5),
            marginLeft: normalize(10),
            borderRadius: normalize(10),
            borderColor: index == 0? "white":"gray",
            borderWidth: index == 0? normalize(0):normalize(1),
            flexDirection: 'row',
        }}>

      <Image
                        source={item.pic}
                        style={{
                            height: index == 0? normalize(60):normalize(50),
                            width: index == 0? normalize(60):normalize(50),
                            alignSelf: 'center',
                            
                            marginTop:normalize(5),
                            marginLeft: normalize(10),
                            borderRadius: normalize(5)
                          
                            
                        }}
                        resizeMode={'contain'}
                    ></Image>

                

                <View style={{
                    flexDirection: 'row',
                    justifyContent:'space-between',
                    width: index == 0? '50%':'70%',
                    marginLeft: normalize(10),
                    alignSelf:'center'
                }}>
                      <View style={{
                

                   }}
                    >
                    <Text
                    numberOfLines={3}
                        style={{
                            fontSize:index == 0? normalize(17):normalize(12),
                            color: index == 0? "white":"black",
                            marginTop:  index == 0? normalize(5):normalize(15),
                            fontWeight:'700',
                            fontFamily:FONTS.Hind
                        }}
                    >{item.description}</Text>

<Text
                    numberOfLines={3}
                        style={{
                            fontSize: index == 0? normalize(12):normalize(10),
                            color: index == 0? "white":"black",
                            fontFamily:FONTS.Hind,
                            
                        }}
                    >Rank-{item.rank}</Text>

                    <View style={{flexDirection:'row'}}>
                    
<Text
                    numberOfLines={3}
                        style={{
                            fontSize: index == 0? normalize(12):normalize(10),
                            color: index == 0? "white":"black",
                            fontFamily:FONTS.Hind,
                            
                        }}
                    >Difference-{item.diff}</Text>
                   
                    <TouchableOpacity onPress={()=>infoAlert()}>
                      <Image
                        source={ICONS.info}
                        style={{
                            height: index == 0? normalize(10):normalize(10),
                            width: index == 0? normalize(10):normalize(10),
                            alignSelf: 'center',
                           marginLeft:normalize(3),
                           marginTop:normalize(-5)

                            
                        }}
                        resizeMode={'contain'}
                        tintColor= {"#F36E35"}
                    ></Image>
                    </TouchableOpacity>
                  </View>

                     </View>

                     <View
                     style={{marginTop:index == 0? normalize(15): normalize(20),
                        marginLeft:index == 0? normalize(20):normalize(0)}}
                    >
               
                      <Text
                    numberOfLines={3}
                        style={{
                            fontSize: normalize(12),
                            color: index == 0? "white":"black",
                           
                          
                            fontFamily:FONTS.Hind
                        }}
                    >Referred No.-{item.Referalno}</Text>

                        
                <Text
                    numberOfLines={3}
                        style={{
                            fontSize: normalize(12),
                            color: item.status=="NewB"?"#F36E35":"#69BE53",
                            fontFamily:FONTS.Hind,
                            fontWeight:'700',
                            backgroundColor:'white',
                             height:normalize(20),
                             width: normalize(60),
                             textAlign:'center',
                             marginTop:normalize(5),
                            borderRadius:normalize(20)
                        }}
                    >{item.status}</Text>


                    

                    </View>

                     
              

                </View>



            </View>

        
      
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
                    width: '60%',
                    fontFamily:FONTS.Hind
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
                        alignSelf: 'center',
                        fontFamily:FONTS.Hind
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
                        fontWeight: '700',
                        fontFamily:FONTS.Hind
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

            <Layout  {...props}>
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
           <View style={{flexDirection:'row'}}>
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

             



              <Text style={{
                color: 'black',
                fontSize: normalize(14),
                marginLeft:normalize(20),
                fontWeight: '700'

              }}>
        Leaderboard
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

                        <View style={{alignSelf:'center',marginTop:normalize(5)}}>
                        <Text style={{color:'black',fontFamily:FONTS.Hind,
                            fontSize:normalize(12),fontWeight:'700',
                            marginBottom:normalize(5)
                }}>Your Progress</Text>
                            <Progress.Bar progress={0.3} width={normalize(280)} color='#69BE53' height={normalize(10)} borderRadius={normalize(30)}  />
                            <Text style={{color:'black',fontFamily:FONTS.Hind,
                            fontSize:normalize(12),fontWeight:'600',
                            textAlign:'center', marginTop:normalize(5)}}>Your Rank is 20 </Text>
                             <Text style={{color:'black',fontFamily:FONTS.Hind,
                            fontSize:normalize(12),fontWeight:'600',
                            textAlign:'center',color:'#F36E35'}}>Referred Count is 10</Text>
                        </View>
                          
                                <View
        style={{
            height: normalize(1),
            width: '93%',
            
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