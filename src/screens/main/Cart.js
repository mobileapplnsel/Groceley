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
    Share
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
import CarouselCards from '../../components/CarouselCards'
import CarouselCards3 from '../../components/CarouselCards3'
import { needsOffscreenAlphaCompositing, tintColor } from 'deprecated-react-native-prop-types/DeprecatedImagePropType';
import Modal from "react-native-modal";

var status = '';
export default function Cart(props) {


    const [name, setName] = useState('');
    const [mobilenumber, setMobileNumber] = useState('');
    const [emailaddress, setEmailaddress] = useState('');
    const [choosepassword, setChoosepassword] = useState('');
    const [confirmpassword, setConfirmpassword] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
    const [productselect1, setProductselect1] = useState(0);
    const [productselect2, setProductselect2] = useState(0);
    const [productselect3, setProductselect3] = useState(0);
    const [itemselected, setItemselected] = useState(0);
    const [isModalFilterVisible, setModalFilterVisible] = useState(false);





    const DATA = [

    {
        id: "1",
        categories: "Bedsheets",
        pic: ICONS.milk,
        description: "Amul Moti Homogenized Toned Milk",
        realprice: "40",
        share: ICONS.community_share,
        quantity:2,
        info: ICONS.info2

    },

    {
        id: "2",
        categories: 'Blankets',
        pic: ICONS.cornflakes,
        description: "Kellogg's Corn Flakes Cereal",
        realprice: "50",
        share: ICONS.community_share,
        quantity:2,
        info: ICONS.info2

    },

    {
        id: "3",
        categories: 'Blankets',
        pic: ICONS.cornflakes2,
        description: "Kellogg's Muesli Cereal Crunchy Nut, cereals & fruits",
        realprice: "80",
        share: ICONS.community_share,
        quantity:2,
        info: ICONS.info2
    },
   




    ]

   

      

function favourite(){
    setItemselected(1)
}


      

function toggleModal(){
    setModalFilterVisible(!isModalFilterVisible);
}

        
        
    



 function selectItem(item){
    props.navigation.navigate("Productdetails")
 }






    const regex =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        const renderItem1 = ({ item, index }) => (
            <>
        
    
    
    
    
               
    
    
    
    
    
    
    
    
    
                <View style={{
                    flexDirection: 'row',
                   
                width: '93%',
               
                marginVertical: normalize(5),
                marginLeft: normalize(10),
                borderRadius: normalize(15)
    
                }}
                >
    
    
                    <View style={{
                        height: normalize(70),
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
                                height: normalize(85),
                                width: normalize(45),
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
                                fontSize: normalize(11),
                                color: "black",
                                
                                
                            }}
                        >{item.description}</Text>
    <Text
                        
                            style={{
                                fontSize: normalize(11),
                                color: "black",
                                //marginTop: normalize(10),
                                fontWeight: '700'
                            }}
                        >{'\u20B9'}{item.realprice} x {item.quantity}</Text>
    
    <TouchableOpacity onPress={()=>toggleModal()}
    
    style={{
        flexDirection: 'row',
      
        alignItems: 'center',
        marginTop: normalize(5)
    }}>
    <Image
                  source={item.share}
                  style={{
                    height: normalize(15),
                    width: normalize(15),
                    
                  }}
                  resizeMode={'contain'}
                ></Image>
     <Text style={{
                        color: 'black',
                        fontSize: normalize(12),
                        
                        fontFamily: FONTS.Hind
                    }}
                    >Buy Together</Text>
    <Image
                  source={item.info}
                  style={{
                    height: normalize(10),
                    width: normalize(10),
                    tintColor: '#F36E35',
                    marginTop: normalize(-8),
                    marginLeft: normalize(2)
                  }}
                  resizeMode={'contain'}
                  tintColor={'#F36E35'}
                ></Image>
    </TouchableOpacity>    
    
                    </View>


                    <View style={{
                        marginTop: normalize(8),
                        marginLeft: normalize(-5)
                    }}>

                    <TouchableOpacity style={{
                        backgroundColor: '#E76229',
                        height: normalize(20),
                        width: normalize(20),
                        borderTopLeftRadius: normalize(5),
                        borderTopRightRadius: normalize(5),
                        marginBottom: normalize(5)
                    }}>
                    <Text style={{
                        color: 'white',
                        fontSize: normalize(12),
                        alignSelf: 'center',
                        
                    }}
                    >+</Text>
                 
                    </TouchableOpacity>
                    <TouchableOpacity style={{
                        backgroundColor: '#F36E35',
                        height: normalize(20),
                        width: normalize(20),
                        borderBottomRightRadius: normalize(5),
                        borderBottomLeftRadius: normalize(5)
                    }}>
                    <Text style={{
                        color: 'white',
                        fontSize: normalize(12),
                        alignSelf: 'center',
                       
                    }}
                    >-</Text>
                 
                    </TouchableOpacity>

                    
                    </View>
    
    
                </View>
    
    
                            
    
    
    
    
    
    
    
           
    
          
            </>
        );

   

   
    


    return (


        <Fragment>

            <Layout Cart={true} {...props}>
                <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>


                    <KeyboardAvoidingView
                        style={{ flex: 1 }}
                        behavior={Platform.OS == 'ios' ? 'padding' : "height"}>



                        {/* <ScrollView showsVerticalScrollIndicator={false} bounces={false} > */}






                        





                        <ScrollView showsVerticalScrollIndicator={false} bounces={false} style={{
                            backgroundColor: '#FFF2F0'
                        }} >



                            
                                <View style={{
                                    height: normalize(400),
                                    width: '100%',
                                    backgroundColor: '#FFF2F0',
                                    marginRight: normalize(10),
                                  
                                }}>


<View style={{
    flexDirection: 'row',
    justifyContent: 'space-between'
}}>
      <TouchableOpacity onPress={()=>props.navigation.goBack()}
                                    style={{
                                        height: normalize(30),
                                        width: normalize(30),
                                       
                                        
                                        alignSelf: 'flex-start',
                                       
                                        marginTop: normalize(5),
                                        marginLeft: normalize(10)
                                    }}
                                    
                                    />
   


                                    
   
               
                
                <TouchableOpacity onPress={()=>favourite()}
                                    style={{
                                        height: normalize(30),
                                        width: normalize(30),
                                       
                                        
                                        
                                        marginRight: normalize(10),
                                        marginTop: normalize(5)

                                    }}
                                    
                                    >
                
                
                <Image
                                        source={ICONS.delete}
                                        style={{
                                            height: normalize(15),
                                            width: normalize(15),
                                            alignSelf: 'center',
                                            
                                            position: 'absolute',
                                            top:20,
                                           
                                            tintColor: 'black',
                                           
                                            
                                        }}
                                        resizeMode={'contain'}
                                        tintColor= {'black'}
                                    ></Image> 
                                    
                                    </TouchableOpacity>
                                   

                                                    



                                   


</View>

<Text
                                        style={{
                                            fontSize: normalize(14),
                                            fontFamily: FONTS.Hind,
                                            marginLeft: normalize(20),
                                            color: 'black',
                                            
                                        }}
                                        >
                                            My
                                        </Text> 

                                        <Text
                                        style={{
                                            fontSize: normalize(14),
                                            fontFamily: FONTS.Hind,
                                            marginLeft: normalize(20),
                                            color: 'black',
                                            fontWeight: '700'
                                            
                                        }}
                                        >
                                        Cart List
                                        </Text> 
                                    
                                        <View>
              <FlatList
                data={DATA}
                renderItem={renderItem1}
                scrollEnabled={true}
                keyExtractor={item => item.id}
                showsHorizontalScrollIndicator={false}

                
                style={{


                 

                  marginTop: normalize(10),
                 
                

                }}


              />

            </View> 

             <TouchableOpacity onPress={()=> props.navigation.navigate("Coupon")}
             
             style={{
                flexDirection: 'row',
                marginTop: normalize(10),
                marginLeft: normalize(30),
                height: normalize(40),
                borderRadius: normalize(10),
                backgroundColor: 'white',
                width: '70%',
                justifyContent: 'center',
                alignItems: 'center',
              
             }}>                 
            <Image
                source={ICONS.discount}
                style={{
                    height: normalize(18),
                    width: normalize(18),
                    
                   
                    marginRight: normalize(10),
                   
                }}
                resizeMode={'contain'}
            ></Image>


            <Text style={{
                fontFamily: FONTS.Hind,
                fontSize: normalize(12),
                color: '#515151',
                

            }}>Do you have any discount code?</Text>



            
</TouchableOpacity>   




<View style={{
    height: normalize(1),
    width: '90%',
    backgroundColor: '#A9A9A9',
    marginTop: normalize(10),
    marginLeft: normalize(20)
}}/>

                                </View>


                           

                   



                      
               <View style={{
               
                backgroundColor: 'white',
                borderTopLeftRadius: normalize(25),
                borderTopRightRadius: normalize(25),
                
               }}>

               <View style={{
                flexDirection: 'row',
                marginTop: normalize(10),
                marginLeft: normalize(30),
                justifyContent: 'space-between',
                alignItems: 'center'
               }}>
                <Text style={{
                    fontFamily: FONTS.Hind,
                    fontSize: normalize(12),
                    color: 'black'
                }}>Subtotal</Text>
                 <Text style={{
                    fontFamily: FONTS.Hind,
                    fontSize: normalize(12),
                    color: 'black',
                    marginRight: normalize(30)
                }}>{'\u20B9'}340</Text>
               </View>


               <View style={{
                flexDirection: 'row',
                marginTop: normalize(10),
                marginLeft: normalize(30),
                justifyContent: 'space-between',
                alignItems: 'center'
               }}>
                <Text style={{
                    fontFamily: FONTS.Hind,
                    fontSize: normalize(12),
                    color: 'black'
                }}>GST (18%)</Text>
                 <Text style={{
                    fontFamily: FONTS.Hind,
                    fontSize: normalize(12),
                    color: 'black',
                    marginRight: normalize(30)
                }}>{'\u20B9'}61</Text>
               </View>

               <View style={{
                flexDirection: 'row',
                marginTop: normalize(10),
                marginLeft: normalize(30),
                justifyContent: 'space-between',
                alignItems: 'center'
               }}>
                <Text style={{
                    fontFamily: FONTS.Hind,
                    fontSize: normalize(12),
                    color: 'black'
                }}>Delivery</Text>
                 <Text style={{
                    fontFamily: FONTS.Hind,
                    fontSize: normalize(12),
                    color: '#69BE53',
                    marginRight: normalize(30)
                }}>FREE</Text>
               </View>

              <View style={{
                flexDirection: 'row',
                marginLeft: normalize(5),
                marginTop: normalize(5)
              }}>
                <View style={{
                    height: normalize(1),
                    width: normalize(10),
                    backgroundColor: '#646464',
                    marginLeft: normalize(10),
                    marginTop: normalize(10)
                }}/>
                <View style={{
                    height: normalize(1),
                    width: normalize(10),
                    backgroundColor: '#646464',
                    marginLeft: normalize(10),
                    marginTop: normalize(10)
                }}/>
                 <View style={{
                    height: normalize(1),
                    width: normalize(10),
                    backgroundColor: '#646464',
                    marginLeft: normalize(10),
                    marginTop: normalize(10)
                }}/>
                 <View style={{
                    height: normalize(1),
                    width: normalize(10),
                    backgroundColor: '#646464',
                    marginLeft: normalize(10),
                    marginTop: normalize(10)
                }}/>
                 <View style={{
                    height: normalize(1),
                    width: normalize(10),
                    backgroundColor: '#646464',
                    marginLeft: normalize(10),
                    marginTop: normalize(10)
                }}/>
                 <View style={{
                    height: normalize(1),
                    width: normalize(10),
                    backgroundColor: '#646464',
                    marginLeft: normalize(10),
                    marginTop: normalize(10)
                }}/>
                 <View style={{
                    height: normalize(1),
                    width: normalize(10),
                    backgroundColor: '#646464',
                    marginLeft: normalize(10),
                    marginTop: normalize(10)
                }}/>
                 <View style={{
                    height: normalize(1),
                    width: normalize(10),
                    backgroundColor: '#646464',
                    marginLeft: normalize(10),
                    marginTop: normalize(10)
                }}/>
                 <View style={{
                    height: normalize(1),
                    width: normalize(10),
                    backgroundColor: '#646464',
                    marginLeft: normalize(10),
                    marginTop: normalize(10)
                }}/>
                 <View style={{
                    height: normalize(1),
                    width: normalize(10),
                    backgroundColor: '#646464',
                    marginLeft: normalize(10),
                    marginTop: normalize(10)
                }}/>
                 <View style={{
                    height: normalize(1),
                    width: normalize(10),
                    backgroundColor: '#646464',
                    marginLeft: normalize(10),
                    marginTop: normalize(10)
                }}/>
                 <View style={{
                    height: normalize(1),
                    width: normalize(10),
                    backgroundColor: '#646464',
                    marginLeft: normalize(10),
                    marginTop: normalize(10)
                }}/>
                 <View style={{
                    height: normalize(1),
                    width: normalize(10),
                    backgroundColor: '#646464',
                    marginLeft: normalize(10),
                    marginTop: normalize(10)
                }}/>
                 <View style={{
                    height: normalize(1),
                    width: normalize(10),
                    backgroundColor: '#646464',
                    marginLeft: normalize(10),
                    marginTop: normalize(10)
                }}/>
              </View>

              <View style={{
                flexDirection: 'row',
                marginTop: normalize(10),
                marginLeft: normalize(30),
                justifyContent: 'space-between',
                alignItems: 'center'
               }}>
                <Text style={{
                    fontFamily: FONTS.Hind,
                    fontSize: normalize(12),
                    color: 'black'
                }}>Total</Text>
                 <Text style={{
                    fontFamily: FONTS.Hind,
                    fontSize: normalize(12),
                    color: 'black',
                    marginRight: normalize(30)
                }}>{'\u20B9'}401</Text>
               </View>



                <TouchableOpacity onPress={()=> props.navigation.navigate("Select_delivery_address")}
                
                style={{
                                        height: normalize(40),
                                        width: '85%',
                                        backgroundColor: '#69BE53',
                                        borderRadius: normalize(20),
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        alignSelf: 'center',
                                        marginBottom: normalize(20),
                                        marginTop: normalize(20)
                                       

                                    }}>
                                         

                                        <Text
                                        style={{
                                            fontSize: normalize(12),
                                            fontWeight: '700',
                                            color: 'white',
                                            fontFamily: FONTS.Hind
                                        }}
                                        >
                                         Checkout
                                        </Text>

                                    </TouchableOpacity>

                                    </View>


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
 >Buy Together</Text>

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
         fontSize: normalize(10),
         
         fontFamily: FONTS.Hind,
         alignSelf: 'flex-start',
         paddingHorizontal: normalize(15),
         marginTop: normalize(-10)
     }}
 > If the customer chooses for Buy Together option, He/She shares the deal through whats app.Those who chooses the link and jumps on the team buy option the customer gets extra discount.The link would be valid for sixty minutes only and the team discount would be applicable only if members within the time line only buys the product.
 </Text>

<Text
     style={{
         color: '#A9A9A9',
         fontSize: normalize(10),
         fontWeight: '600',
         fontFamily: FONTS.Hind,
         alignSelf: 'flex-start',
         marginLeft: normalize(15),
 
     }}
 ></Text>







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
                                            fontSize: normalize(10),
                                            marginRight: normalize(15),
                                            color: 'black',
                                            fontFamily: FONTS.Hind
                                        }}
                                        >
                                     We offer 1 coin against each new member.
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
                                            fontSize: normalize(10),
                                            paddingRight: normalize(15),
                                            color: 'black',
                                            fontFamily: FONTS.Hind
                                        }}
                                        >
                                     Members can be invited through Whatsapp. 
                                        </Text>



                                        </View>


                         <View style={{
                            flexDirection: 'row',
                            justifyContent: 'space-evenly'
                         }}     >        
                                        <TouchableOpacity
                
                style={{
                                        height: normalize(40),
                                        width: '25%',
                                        backgroundColor: '#69BE53',
                                        borderRadius: normalize(5),
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        
                                        marginTop: normalize(10),
                                        flexDirection: 'row'

                                    }}>
                                         

                                        <Text
                                        style={{
                                            fontSize: normalize(12),
                                            fontWeight: '700',
                                            color: 'white',
                                            fontFamily: FONTS.Hind
                                        }}
                                        >
                                        Share
                                        </Text>

                                    </TouchableOpacity>

                                       
                                    <TouchableOpacity
                
                style={{
                                        height: normalize(40),
                                        width: '25%',
                                        backgroundColor: 'white',
                                        borderRadius: normalize(5),
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        borderWidth: normalize(1),
                                        borderColor: '#A0A0A0',
                                        marginTop: normalize(10),
                                        flexDirection: 'row'

                                    }}>
                                         

                                        <Text
                                        style={{
                                            fontSize: normalize(12),
                                            fontWeight: '700',
                                            color: 'black',
                                            fontFamily: FONTS.Hind
                                        }}
                                        >
                                        Cancel
                                        </Text>

                                    </TouchableOpacity>
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
                <CarouselCards3/>
            </Layout>

        </Fragment>


    );
}