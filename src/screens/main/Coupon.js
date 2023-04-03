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
import Modal from "react-native-modal";

export default function Coupon(props)
{
    const [name, setName] = useState('');
    const [mobilenumber, setMobileNumber] = useState('');
    const [emailaddress, setEmailaddress] = useState('');
    const [choosepassword, setChoosepassword] = useState('');
    const [confirmpassword, setConfirmpassword] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
    const [coupon, setCoupon] = useState(false);
    const [isModalFilterVisible, setModalFilterVisible] = useState(false);
    const [isModalFilterVisible2, setModalFilterVisible2] = useState(false);
    const [offerclicked, setOfferclicked] = useState(0);


    const DATA = [{
        id: "0",
        
        pic: ICONS.paytm,
        description: "Paytm",
        cashback: "25 cashback"

    },

    {
        id: "1",
        
        pic: ICONS.mobikwik,
        description: "Mobikwik",
        cashback: "100 cashback"
    },

    {
        id: "2",
       
        pic: ICONS.standard_chatered,
        description: "Standard Chatered Bank",
        cashback: "14 savings with this code"

    },

    {
        id: "3",
        
        pic: ICONS.phonepe,
        description: "Phone Pe",
        cashback: "50 cashback"
    },
  


    ]





function toggleModal(){
    setModalFilterVisible(!isModalFilterVisible);
}

function toggleModal2(){
    setModalFilterVisible2(!isModalFilterVisible2);
}



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
                    width: normalize(40),
                    backgroundColor: 'white',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginLeft: normalize(10),
                    
                    
                }}>
                    <Image
                        source={item.pic}
                        style={{
                            height: normalize(30),
                            width: normalize(40),
                            alignSelf: 'center',
                            borderRadius: normalize(5),
                            marginRight: normalize(5),
                            
                        }}
                        resizeMode={'contain'}
                    ></Image>

                </View>

                <View style={{
                    width: '70%',
                    marginLeft: normalize(10)
                }}>
                    <Text
                       numberOfLines={1}
                        style={{
                            fontSize: normalize(12),
                            color: "black",
                            marginTop: normalize(10),
                            fontWeight:'600',
                            fontFamily: FONTS.Hind
                        }}
                    >{item.description}</Text>

<Text
                   
                   style={{
                       fontSize: normalize(12),
                       color: "black",
                       marginTop: normalize(5),
                       fontFamily: FONTS.Hind,
                       color: '#69BE53'
                   }}
               >{'\u20B9'} {item.cashback}</Text>


              

                </View>


                <TouchableOpacity onPress={()=>toggleModal2()}
                
                style={{
                    height: normalize(40),
                    width: '30%',
                    
                    marginLeft: -normalize(45),
                    marginRight: normalize(10),
                    justifyContent: 'center',
                    flexDirection: 'row',
                    justifyContent: 'space-evenly'
                }}>
                    <Text
                   
                        style={{
                            fontSize: normalize(12),
                            color: "#F36E35",
                            marginTop: normalize(10),
                            fontWeight:'600',
                            fontFamily: FONTS.Hind
                        }}
                    >OFFERS</Text>

<Image
                        source={ICONS.info2}
                        style={{
                            height: normalize(10),
                            width: normalize(10),
                            alignSelf: 'center',
                            
                            marginRight: normalize(5),
                            
                        }}
                        resizeMode={'contain'}
                    ></Image>


              

                </TouchableOpacity>
                



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

            <Layout  {...props}>
                <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>


                    <KeyboardAvoidingView
                        style={{ flex: 1 }}
                        behavior={Platform.OS == 'ios' ? 'padding' : "height"}>



                        {/* <ScrollView showsVerticalScrollIndicator={false} bounces={false} > */}






                        <View style={{
             
              marginTop: normalize(20),
              marginRight: normalize(10),
              height: normalize(30),
              alignSelf: 'flex-start',
              marginLeft: normalize(30)
            }}>

                <View style={{
                    flexDirection: 'row'
                }}>

<TouchableOpacity 
             onPress={()=> props.navigation.goBack()}
             >

          
<Image
                  source={ICONS.previous}
                  style={{
                   height: normalize(20),
                    width: normalize(20),
                    marginLeft: -normalize(10)
                    
                  }}
                  resizeMode={'contain'}
                 
                ></ Image>
</TouchableOpacity>



              <Text style={{
                color: 'black',
                fontSize: normalize(14),
                fontWeight: '600',
                fontFamily: FONTS.Hind,
                marginLeft: normalize(20)
              }}>
Coupons
              </Text>


              </View>


             





             




           
            </View>





                        <ScrollView showsVerticalScrollIndicator={false} bounces={false} >


                          
                          
                                <View
        style={{
            height: normalize(1),
            width: '95%',
            backgroundColor: '#69BE53',
            marginLeft: normalize(10),
           
        }}
        />

        <View style={{
            flexDirection: 'row',
            justifyContent: 'center'
        }}>
                 <TextInput
                value={coupon}
                
                placeholder={'Type coupon code here'}
                onChangeText={_ => setCoupon(_)}
                style={{
                marginTop: normalize(10),
                alignSelf: 'center',
                fontSize: normalize(14),
                width: normalize(190),
               
                
                borderRadius : normalize(10),
                backgroundColor: 'white',
                paddingLeft: normalize(10),
                
                borderWidth: normalize(1),
                borderColor: '#D3D3D3'
                }}
                keyboardType={"default"}
              />


<TouchableOpacity onPress={()=> props.navigation.navigate("Select_delivery_address")}
                
                style={{
                                        height: normalize(40),
                                        width: '20%',
                                        backgroundColor: '#69BE53',
                                        borderRadius: normalize(10),
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        alignSelf: 'center',
                                        marginLeft: normalize(20),
                                        marginTop: normalize(10)
                                       

                                    }}>
                                         

                                        <Text
                                        style={{
                                            fontSize: normalize(12),
                                            fontWeight: '700',
                                            color: 'white',
                                            fontFamily: FONTS.Hind
                                        }}
                                        >
                                        Apply
                                        </Text>

                                    </TouchableOpacity>

                                    </View>



                                    <Text style={{
                color: 'black',
                fontSize: normalize(14),
                fontWeight: '600',
                marginLeft: normalize(30),    
                marginTop: normalize(20)                  
              }}>
Available coupons              
</Text>

<View style={{
            height: normalize(170),
            width: '95%',
            backgroundColor: 'white',
            justifyContent: 'center',
            borderRadius: normalize(10),
            alignSelf: 'center',
            marginTop: normalize(10),
            borderWidth: normalize(1),
            borderColor: '#69BE53'
        }}>


<Text style={{
                color: 'black',
                fontSize: normalize(12),
                fontWeight: '600',
                    
                marginTop: normalize(5),
                alignSelf: 'center'
                                 
              }}>
20% OFF upto purchase worth {'\u20B9'} 50              
</Text>



<View style={{
    flexDirection: 'row',
    justifyContent: 'center',
    marginLeft: normalize(10)
}}>
                 <TextInput
                value={coupon}
                
                placeholder={'DKasASJKadjn'}
                placeholderTextColor={'#F36E35'}
                onChangeText={_ => setCoupon(_)}
                style={{
                marginTop: normalize(10),
                alignSelf: 'center',
                fontSize: normalize(14),
                width: normalize(190),
               
                
                borderRadius : normalize(10),
                backgroundColor: 'white',
                paddingLeft: normalize(10),
                
                borderWidth: normalize(1),
                borderColor: '#D3D3D3'
                }}
                keyboardType={"default"}
              />

              <TouchableOpacity onPress={()=> toggleModal()}
              style={{
                height: normalize(30),
                width: normalize(30),
                
                marginLeft: normalize(5),
                justifyContent: 'center',
                alignItems: 'center'
              }}
              >

<Image
                        source={ICONS.info2}
                        style={{
                            height: normalize(15),
                            width: normalize(15),
                            marginTop: normalize(8),
                            
                        }}
                        resizeMode={'contain'}
                        
                    />
                    </TouchableOpacity>

</View>
<TouchableOpacity onPress={()=> props.navigation.navigate("Select_delivery_address")}
                
                style={{
                                        height: normalize(40),
                                        width: '20%',
                                        backgroundColor: '#69BE53',
                                        borderRadius: normalize(10),
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        alignSelf: 'center',
                                        marginLeft: normalize(20),
                                        marginTop: normalize(10)
                                       

                                    }}>
                                         

                                        <Text
                                        style={{
                                            fontSize: normalize(12),
                                            fontWeight: '700',
                                            color: 'white',
                                            fontFamily: FONTS.Hind
                                        }}
                                        >
                                        Apply
                                        </Text>

                                    </TouchableOpacity>

                                    </View>

                                    
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


                        <Modal isVisible={isModalFilterVisible}
         
         style={{
             justifyContent: 'center',
             alignItems: 'center'
         }}
          animationType={"slide"}
   
       onBackdropPress = { () => setModalFilterVisible(false)}
          >
          <View style={{
 
 height: normalize(380),
 width: '95%',
 backgroundColor: 'white',
 
 borderRadius: normalize(10),
 
 }}>
 
    
 
 
 
 
 <TouchableOpacity
                                 style={{
                                     width: '12%',
                                     height: '10%',
                                     backgroundColor: 'orange',
                                     borderRadius: normalize(5),
                                     alignSelf: 'flex-end',
                                     justifyContent: 'center',
                                    
                                 }}
 
                                 onPress={() => {
                                     console.log("kshbfhwb")
                                     setModalFilterVisible(false)
 
                                 }}>
                                 <Image
                                     source={ICONS.cross}
                                     style={{
                                         height: normalize(11),
                                         width: normalize(10),
                                         
                                         alignSelf: 'center'
                                     }}
                                     resizeMode={'contain'}
                                     tintColor={'white'}
                                 ></Image>
                             </TouchableOpacity>
 
 
 <Text
     style={{
         color: 'black',
         fontSize: normalize(14),
         fontWeight: '600',
         fontFamily: FONTS.Hind,
         alignSelf: 'flex-start',
         marginLeft: normalize(15),
 
     }}
 >Coupon details</Text>

 <View style={{
    height: normalize(1),
    width:'100%',
    backgroundColor: '#69BE53',
    marginTop: normalize(10)
 }}/>

<Image
                        source={ICONS.logo}
                        style={{
                            height: normalize(80),
                            width: normalize(80),
                            alignSelf: 'flex-start',
                            marginLeft: normalize(20),
                            marginTop: normalize(-15)
                            
                        }}
                        resizeMode={'contain'}
                    ></Image>
 <Text
     style={{
         color: 'black',
         fontSize: normalize(14),
         fontWeight: '600',
         fontFamily: FONTS.Hind,
         alignSelf: 'flex-start',
         marginLeft: normalize(15),
         marginTop: normalize(-10)
     }}
 >Get 20% OFF up to {'\u20B9'} 50 on being a Member</Text>

<Text
     style={{
         color: '#A9A9A9',
         fontSize: normalize(10),
         fontWeight: '600',
         fontFamily: FONTS.Hind,
         alignSelf: 'flex-start',
         marginLeft: normalize(15),
 
     }}
 >Valid on total value of products worth {'\u20B9'} 400 or more</Text>



<View style={{
    flexDirection: 'row',
    justifyContent: 'center',
   // marginLeft: normalize(10)
}}>
                 <TextInput
                value={coupon}
                
                placeholder={'DKasASJKadjn'}
                placeholderTextColor={'#F36E35'}
                onChangeText={_ => setCoupon(_)}
                style={{
                marginTop: normalize(10),
                alignSelf: 'center',
                fontSize: normalize(14),
                width: normalize(190),
               
                
                borderRadius : normalize(10),
                backgroundColor: 'white',
                paddingLeft: normalize(10),
                
                borderWidth: normalize(1),
                borderColor: '#D3D3D3'
                }}
                keyboardType={"default"}
              />

<TouchableOpacity onPress={()=> props.navigation.navigate("Select_delivery_address")}
                
                style={{
                                        height: normalize(40),
                                        width: '20%',
                                        backgroundColor: '#69BE53',
                                        borderRadius: normalize(10),
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        alignSelf: 'center',
                                        marginLeft: normalize(5),
                                        marginTop: normalize(10)
                                       

                                    }}>
                                         

                                        <Text
                                        style={{
                                            fontSize: normalize(12),
                                            fontWeight: '700',
                                            color: 'white',
                                            fontFamily: FONTS.Hind
                                        }}
                                        >
                                        Apply
                                        </Text>

                                    </TouchableOpacity>


 
                                    

</View>



<View style={{
    flexDirection: 'row',
    marginLeft: normalize(10),
    marginTop: normalize(10)
}}>
<Image
                        source={ICONS.dot}
                        style={{
                            height: normalize(20),
                            width: normalize(20),
                            alignSelf: 'center',
                            
                            
                            tintColor: '#69BE53'
                        }}
                        resizeMode={'contain'}
                        tintColor= {'#69BE53'}
                    ></Image>


<Text
                                        style={{
                                            fontSize: normalize(12),
                                            
                                            color: 'black',
                                            fontFamily: FONTS.Hind
                                        }}
                                        >
                                      This offer is personalised for you.
                                        </Text>



                                        </View>



                                        <View style={{
    flexDirection: 'row',
    marginLeft: normalize(10),
   
}}>
<Image
                        source={ICONS.dot}
                        style={{
                            height: normalize(20),
                            width: normalize(20),
                            alignSelf: 'center',
                            
                            
                            tintColor: '#69BE53'
                        }}
                        resizeMode={'contain'}
                        tintColor= {'#69BE53'}
                    ></Image>


<Text
                                        style={{
                                            fontSize: normalize(12),
                                            
                                            color: 'black',
                                            fontFamily: FONTS.Hind
                                        }}
                                        >
                                      Maximum discount upto {'\u20B9'} 50
                                        </Text>



                                        </View>


                                        <View style={{
    flexDirection: 'row',
    marginLeft: normalize(10),
    
}}>
<Image
                        source={ICONS.dot}
                        style={{
                            height: normalize(20),
                            width: normalize(20),
                            alignSelf: 'center',
                            
                            
                            tintColor: '#69BE53'
                        }}
                        resizeMode={'contain'}
                        tintColor= {'#69BE53'}
                    ></Image>


<Text
                                        style={{
                                            fontSize: normalize(12),
                                            
                                            color: 'black',
                                            fontFamily: FONTS.Hind
                                        }}
                                        >
                                      Applicable only for selected products
                                        </Text>



                                        </View>


                                        <View style={{
    flexDirection: 'row',
    marginLeft: normalize(10),
    
}}>
<Image
                        source={ICONS.dot}
                        style={{
                            height: normalize(20),
                            width: normalize(20),
                            alignSelf: 'center',
                            
                            
                            tintColor: '#69BE53'
                        }}
                        resizeMode={'contain'}
                        tintColor= {'#69BE53'}
                    ></Image>


<Text
                                        style={{
                                            fontSize: normalize(12),
                                            
                                            color: 'black',
                                            fontFamily: FONTS.Hind
                                        }}
                                        >
                                      Applicable one time
                                        </Text>



                                        </View>


                                        <View style={{
    flexDirection: 'row',
    marginLeft: normalize(10),
    
}}>
<Image
                        source={ICONS.dot}
                        style={{
                            height: normalize(20),
                            width: normalize(20),
                            alignSelf: 'center',
                            
                            
                            tintColor: '#69BE53'
                        }}
                        resizeMode={'contain'}
                        tintColor= {'#69BE53'}
                    ></Image>


<Text
                                        style={{
                                            fontSize: normalize(12),
                                            
                                            color: 'black',
                                            fontFamily: FONTS.Hind
                                        }}
                                        >
                                     Other T&C may apply
                                        </Text>



                                        </View>
 </View>
        </Modal>


        <Modal isVisible={isModalFilterVisible2}
         
         style={{
             justifyContent: 'center',
             alignItems: 'center'
         }}
          animationType={"slide"}
   
       onBackdropPress = { () => setModalFilterVisible2(false)}
          >
          <View style={{
 
 height: normalize(380),
 width: '95%',
 backgroundColor: 'white',
 
 borderRadius: normalize(10),
 
 }}>
 
    
 
 
 
 
 <TouchableOpacity
                                 style={{
                                     width: '12%',
                                     height: '10%',
                                     backgroundColor: 'orange',
                                     borderRadius: normalize(5),
                                     alignSelf: 'flex-end',
                                     justifyContent: 'center',
                                    
                                 }}
 
                                 onPress={() => {
                                     console.log("kshbfhwb")
                                     setModalFilterVisible2(false)
 
                                 }}>
                                 <Image
                                     source={ICONS.cross}
                                     style={{
                                         height: normalize(11),
                                         width: normalize(10),
                                         
                                         alignSelf: 'center'
                                     }}
                                     resizeMode={'contain'}
                                     tintColor={'white'}
                                 ></Image>
                             </TouchableOpacity>
 
 
 <Text
     style={{
         color: 'black',
         fontSize: normalize(14),
         fontWeight: '600',
         fontFamily: FONTS.Hind,
         alignSelf: 'flex-start',
         marginLeft: normalize(15),
 
     }}
 >Coupon details</Text>

 <View style={{
    height: normalize(1),
    width:'100%',
    backgroundColor: '#69BE53',
    marginTop: normalize(10)
 }}/>

<Image
                        source={ICONS.paytm}
                        style={{
                            height: normalize(80),
                            width: normalize(80),
                            alignSelf: 'flex-start',
                            marginLeft: normalize(20),
                            marginTop: normalize(-5)
                            
                        }}
                        resizeMode={'contain'}
                    ></Image>
 <Text
     style={{
         color: 'black',
         fontSize: normalize(14),
         fontWeight: '600',
         fontFamily: FONTS.Hind,
         alignSelf: 'flex-start',
         marginLeft: normalize(15),
         marginTop: normalize(-10)
     }}
 >Get 40% OFF up to {'\u20B9'} 80 </Text>

<Text
     style={{
         color: '#A9A9A9',
         fontSize: normalize(10),
         fontWeight: '600',
         fontFamily: FONTS.Hind,
         alignSelf: 'flex-start',
         marginLeft: normalize(15),
 
     }}
 >Valid on total value of products worth {'\u20B9'} 400 or more</Text>



<View style={{
    flexDirection: 'row',
    justifyContent: 'center',
   // marginLeft: normalize(10)
}}>
                 <TextInput
                value={coupon}
                
                placeholder={'DKasASJKadjn'}
                placeholderTextColor={'#F36E35'}
                onChangeText={_ => setCoupon(_)}
                style={{
                marginTop: normalize(10),
                alignSelf: 'center',
                fontSize: normalize(14),
                width: normalize(190),
               
                
                borderRadius : normalize(10),
                backgroundColor: 'white',
                paddingLeft: normalize(10),
                
                borderWidth: normalize(1),
                borderColor: '#D3D3D3'
                }}
                keyboardType={"default"}
              />

<TouchableOpacity onPress={()=> props.navigation.navigate("Select_delivery_address")}
                
                style={{
                                        height: normalize(40),
                                        width: '20%',
                                        backgroundColor: '#69BE53',
                                        borderRadius: normalize(10),
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        alignSelf: 'center',
                                        marginLeft: normalize(5),
                                        marginTop: normalize(10)
                                       

                                    }}>
                                         

                                        <Text
                                        style={{
                                            fontSize: normalize(12),
                                            fontWeight: '700',
                                            color: 'white',
                                            fontFamily: FONTS.Hind
                                        }}
                                        >
                                        Apply
                                        </Text>

                                    </TouchableOpacity>


 
                                    

</View>



<View style={{
    flexDirection: 'row',
    marginLeft: normalize(10),
    marginTop: normalize(10)
}}>
<Image
                        source={ICONS.dot}
                        style={{
                            height: normalize(20),
                            width: normalize(20),
                            alignSelf: 'center',
                            
                            
                            tintColor: '#69BE53'
                        }}
                        resizeMode={'contain'}
                        tintColor= {'#69BE53'}
                    ></Image>


<Text
                                        style={{
                                            fontSize: normalize(12),
                                            
                                            color: 'black',
                                            fontFamily: FONTS.Hind
                                        }}
                                        >
                                      This offer is personalised for you.
                                        </Text>



                                        </View>



                                        <View style={{
    flexDirection: 'row',
    marginLeft: normalize(10),
   
}}>
<Image
                        source={ICONS.dot}
                        style={{
                            height: normalize(20),
                            width: normalize(20),
                            alignSelf: 'center',
                            
                            
                            tintColor: '#69BE53'
                        }}
                        resizeMode={'contain'}
                        tintColor= {'#69BE53'}
                    ></Image>


<Text
                                        style={{
                                            fontSize: normalize(12),
                                            
                                            color: 'black',
                                            fontFamily: FONTS.Hind
                                        }}
                                        >
                                      Maximum discount upto {'\u20B9'} 80
                                        </Text>



                                        </View>


                                        <View style={{
    flexDirection: 'row',
    marginLeft: normalize(10),
    
}}>
<Image
                        source={ICONS.dot}
                        style={{
                            height: normalize(20),
                            width: normalize(20),
                            alignSelf: 'center',
                            
                            
                            tintColor: '#69BE53'
                        }}
                        resizeMode={'contain'}
                        tintColor= {'#69BE53'}
                    ></Image>


<Text
                                        style={{
                                            fontSize: normalize(12),
                                            
                                            color: 'black',
                                            fontFamily: FONTS.Hind
                                        }}
                                        >
                                      Applicable only for selected products
                                        </Text>



                                        </View>


                                        <View style={{
    flexDirection: 'row',
    marginLeft: normalize(10),
    
}}>
<Image
                        source={ICONS.dot}
                        style={{
                            height: normalize(20),
                            width: normalize(20),
                            alignSelf: 'center',
                            
                            
                            tintColor: '#69BE53'
                        }}
                        resizeMode={'contain'}
                        tintColor= {'#69BE53'}
                    ></Image>


<Text
                                        style={{
                                            fontSize: normalize(12),
                                            
                                            color: 'black',
                                            fontFamily: FONTS.Hind
                                        }}
                                        >
                                      Applicable one time
                                        </Text>



                                        </View>


                                        <View style={{
    flexDirection: 'row',
    marginLeft: normalize(10),
    
}}>
<Image
                        source={ICONS.dot}
                        style={{
                            height: normalize(20),
                            width: normalize(20),
                            alignSelf: 'center',
                            
                            
                            tintColor: '#69BE53'
                        }}
                        resizeMode={'contain'}
                        tintColor= {'#69BE53'}
                    ></Image>


<Text
                                        style={{
                                            fontSize: normalize(12),
                                            
                                            color: 'black',
                                            fontFamily: FONTS.Hind
                                        }}
                                        >
                                     Other T&C may apply
                                        </Text>



                                        </View>
 </View>
        </Modal>

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