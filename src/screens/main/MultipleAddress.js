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

export default function MultipleAddress(props)
{
    const [name, setName] = useState('');
    const [mobilenumber, setMobileNumber] = useState('');
    const [emailaddress, setEmailaddress] = useState('');
    const [choosepassword, setChoosepassword] = useState('');
    const [confirmpassword, setConfirmpassword] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
    const [house, setHouse] = useState('');
    const [house1, setHouse1] = useState('');
    const [house2, setHouse2] = useState('');




    const DATA = [{
        id: "0",
        categories: "Bedcovers",
        pic: ICONS.bread,
        description: "Hovis Farmhouse Wholemeal",
        realprice: "4999",
        discountedprice: "1690",
        quantity:1 

    },

    {
        id: "1",
        categories: "Bedsheets",
        pic: ICONS.cornflakes,
        description: "Kellogg's Corn Flakes Cereal",
         realprice: "4999",
        discountedprice: "1690",
        quantity:1 


    },

    {
        id: "2",
        categories: 'Blankets',
        pic: ICONS.milk,
        description: "Amul Moti Homogenized Toned Milk",
        realprice: "4999",
        discountedprice: "1690",
        quantity:1 

    },

    {
        id: "3",
        categories: 'Blankets',
        pic: ICONS.cornflakes2,
        description: "Kellogg's Corn Flakes Cereal",
        realprice: "4999",
        discountedprice: "1690",
        quantity:1 

    },
    {
        id: "4",
        categories: 'Blankets',
        pic: ICONS.milk,
        description: "Amul Moti Homogenized Toned Milk",
        realprice: "4999",
        discountedprice: "1690",
        quantity:1 

    }




    ]





    const regex =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const renderItem1 = ({ item, index }) => (
        <>
        <View style={{

            height: normalize(190),
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
                    height: normalize(80),
                    width: normalize(60),
                    backgroundColor: 'white',
                    justifyContent: 'center',
                    alignItems: 'center',
                    
                    borderColor:"#69BE53",
                    borderWidth: normalize(1),
                    borderRadius: normalize(5),
                    
                }}>
                    <Image
                        source={item.pic}
                        style={{
                            height: normalize(180),
                            width: '90%',
                            alignSelf: 'center',
                              
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
                            fontWeight:'600',
                            marginLeft:normalize(2)
                        }}
                    >{item.description}</Text>
                     <Text
                   
                        style={{
                            fontSize: normalize(10),
                            color: "red",
                           
                            fontWeight:'600'
                        }}
                    > Price: {'\u20B9'}{item.realprice}</Text>
                       <Text
                   
                   style={{
                       fontSize: normalize(10),
                       color: "gray",
                      
                       fontWeight:'600'
                   }}
               > Quantity: {item.quantity}</Text>

              

                </View>



            </View>



            <View style ={{borderColor:'#D3D3D3',borderRadius:10,width:'100%',borderWidth:1,height:normalize(60),marginTop:normalize(10)}}>

<TextInput
 //value={house}
 //onChangeText={_ => setHouse(_)}
 numberOfLines={5}
 style={{paddingLeft:normalize(10)}}
 multiline={true}
 fontSize={normalize(12)}
 width={'90%'}

 placeholder={'Please Enter the Address'}
 color={'black'}

 placeholderTextColor={'gray'}
 secureTextEntry={false}
/>


    </View>



    <View style ={{width:'95%',height:normalize(60),marginTop:normalize(10),justifyContent:'space-between',flexDirection:'row'}}>
       <View style ={{backgroundColor:'#69BE53',width:'50%',height:normalize(30),borderColor:'#D3D3D3',alignItems:'center',borderRadius:10,borderWidth:1}}>
        <Text style={{color:'white',alignSelf:'center',marginTop:5,fontWeight:'600'}}>
            Submit
        </Text>
       </View>
     
       <View style ={{backgroundColor:'#E76229',marginLeft:15,width:'50%',height:normalize(30),borderColor:'#D3D3D3',alignItems:'center',borderRadius:10,borderWidth:1}}>
        <Text style={{color:'white',alignSelf:'center',marginTop:5,fontWeight:'600'}}>
            Delete
        </Text>
       </View>
     

    </View>


        </View>

        



        <View
        style={{
            height: normalize(1),
            width: '97%',
            marginTop: normalize(10),
            backgroundColor: '#69BE53',
            marginLeft: normalize(5)
        }}
        />
        </>
    );

   

    return (


        <Fragment>

          
                <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>


                    <KeyboardAvoidingView
                        style={{ flex: 1 }}
                        behavior={Platform.OS == 'ios' ? 'padding' : "height"}>



                        {/* <ScrollView showsVerticalScrollIndicator={false} bounces={false} > */}






                        <View style={{
              flexDirection: 'row',
              
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


<View style={{  alignItems:'center'}}>
              <Text style={{
                color: 'black',
                fontSize: normalize(14),
            
                fontWeight: '700'

              }}>
                Select Shipping Address
              </Text>

              </View>

           
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

                                       
                                        width: '96%'

                                    }}

                
                                />

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
            

        </Fragment>


    );



}