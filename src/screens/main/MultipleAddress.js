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
    RefreshControl,
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
import { onPress } from 'deprecated-react-native-prop-types/DeprecatedTextPropTypes';

export default function MultipleAddress(props)
{
    const [name, setName] = useState('');
    const [mobilenumber, setMobileNumber] = useState('');
    const [emailaddress, setEmailaddress] = useState('');
    const [choosepassword, setChoosepassword] = useState('');
    const [confirmpassword, setConfirmpassword] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
    const [house, setHouse] = useState([]);
    const [refreshing, setRefreshing] = useState(false);



    const DATA = [{
        id: "0",
        categories: "Bedcovers",
        pic: ICONS.bread,
        description: "Hovis Farmhouse Wholemeal",
        realprice: "4999",
        discountedprice: "1690",
        quantity:1,
        address:''

    },

    {
        id: "1",
        categories: "Bedsheets",
        pic: ICONS.cornflakes,
        description: "Kellogg's Corn Flakes Cereal",
         realprice: "4999",
        discountedprice: "1690",
        quantity:1,
        address:''


    },

    {
        id: "2",
        categories: 'Blankets',
        pic: ICONS.milk,
        description: "Amul Moti Homogenized Toned Milk",
        realprice: "4999",
        discountedprice: "1690",
        quantity:1,
        address:'' 

    },

    {
        id: "3",
        categories: 'Blankets',
        pic: ICONS.cornflakes2,
        description: "Kellogg's Corn Flakes Cereal",
        realprice: "4999",
        discountedprice: "1690",
        quantity:1, 
         address:'' 

    },
    {
        id: "4",
        categories: 'Blankets',
        pic: ICONS.milk,
        description: "Amul Moti Homogenized Toned Milk",
        realprice: "4999",
        discountedprice: "1690",
        quantity:1,
        address:'' 

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


    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        setTimeout(() => {
          setRefreshing(false);
        }, 2000);
      }, []);

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

onChangeText={text => {
   
    //  setHouse(newArray)
   
    
    house[index] = text;
    setHouse(house)

  
  }}
 // value={house[index]}
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



    <View style ={{marginTop:normalize(10),flexDirection:'row'}}>
        <TouchableOpacity style={{width:'50%',height:normalize(60)}} onPress={()=>{
                   //for new array...................
      let newArray = [...DATA];
      newArray[index].address = house[index]
        console.log(DATA);
        }}>
       <View style ={{backgroundColor:'#69BE53',height:normalize(30),borderColor:'#D3D3D3',alignItems:'center',borderRadius:10,borderWidth:1}}>
        <Text style={{color:'white',alignSelf:'center',marginTop:5,fontWeight:'600'}}>
            Submit
        </Text>
       </View>
       </TouchableOpacity>
     <TouchableOpacity style={{width:'50%',height:normalize(60),marginLeft:normalize(5)}} onPress ={()=>
    {
    //                  //for new array...................
    //   let newArray = [...DATA];
    //   newArray[index].address = ""
    //     console.log(DATA);
       
        }}>
    
       <View style ={{backgroundColor:'#E76229',height:normalize(30),borderColor:'#D3D3D3',alignItems:'center',borderRadius:10,borderWidth:1}}>
        <Text style={{color:'white',alignSelf:'center',marginTop:5,fontWeight:'600'}}>
            Delete
        </Text>
       </View>
       </TouchableOpacity>
     

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

                  props.navigation.goBack()
                }}>
                <Image
                  source={ICONS.previous}
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





                        <ScrollView showsVerticalScrollIndicator={false} bounces={false}  refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }>


                          
                          
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
{/* <Loader/>   */}
                </SafeAreaView>
            

        </Fragment>


    );



}