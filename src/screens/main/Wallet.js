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
import { needsOffscreenAlphaCompositing, tintColor } from 'deprecated-react-native-prop-types/DeprecatedImagePropType';
import Modal from "react-native-modal";

var status = '';
export default function Wallet(props) {


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
        
        quantity:2 


    },

    {
        id: "2",
        categories: 'Blankets',
        pic: ICONS.cornflakes,
        description: "Kellogg's Corn Flakes Cereal",
        realprice: "50",
       
        quantity:2

    },

    {
        id: "3",
        categories: 'Blankets',
        pic: ICONS.cornflakes2,
        description: "Kellogg's Muesli Cereal Crunchy Nut, cereals & fruits",
        realprice: "80",
       
        quantity:2

    },
   




    ]

    const DATA2 = [{
        id: "0",
        pic: ICONS.bread,
        description: "Hovis Farmhouse Wholemeal",
        quantity: '400g',
        discounted_price: '90',
        real_price: '80'
      },
    
      {
        id: "1",
        pic: ICONS.milk,
        description: "Hovis Farmhouse Wholemeal",
        quantity: '450g',
        discounted_price: '50',
        real_price: '40'
      },
    
      {
        id: "2",
        pic: ICONS.cornflakes,
        description: "Amul Moti Homogenized Toned Milk",
        quantity: '400g',
        discounted_price: '70',
        real_price: '50'
      },
    
      {
        id: "3",
        
        pic: ICONS.cornflakes2,
        description: "Kellogg's Corn Flakes Cereal",
        quantity: '400g',
        discounted_price: '90',
        real_price: '80'
      }
    
    
      ]

      

function favourite(){
    setItemselected(1)
}


      



        
        
    



 function selectItem(item){
    props.navigation.navigate("Productdetails")
 }


 const toggleModal = () => {
    setModalFilterVisible(!isModalFilterVisible);
  };



    const regex =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        const renderItem1 = ({ item, index }) => (
            <>
        
    
    
    
    
               
    
    
    
    
    
    
    
    
    
                <View style={{
                    flexDirection: 'row',
                    height: normalize(60),
                width: '93%',
               
                marginVertical: normalize(5),
                marginLeft: normalize(10),
                borderRadius: normalize(15)
    
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
                                fontSize: normalize(11),
                                color: "black",
                                marginTop: normalize(10),
                                
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
                        borderTopRightRadius: normalize(5)
                    }}>
                    <Text style={{
                        color: 'white',
                        fontSize: normalize(12),
                        alignSelf: 'center'
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
                        alignSelf: 'center'
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
                            backgroundColor: 'white'
                        }} >



                            
                                <View style={{
                                    height: normalize(400),
                                    width: '100%',
                                    backgroundColor: 'white', //'#FFF2F0'
                                    marginRight: normalize(10),
                                  
                                }}>






                                        <Text
                                        style={{
                                            fontSize: normalize(14),
                                            fontFamily: FONTS.Hind,
                                            marginLeft: normalize(20),
                                            color: 'black',
                                            fontWeight: '700',
                                            marginTop: normalize(30)
                                        }}
                                        >
                                        My Wallet
                                        </Text> 


                                    
                                       
                                        <View style={{
                            height: normalize(110),
                            width: '90%',
                            flexDirection: 'row',
                            backgroundColor: '#69BE53',
                            alignSelf: 'center',
                            borderRadius: normalize(15),
                            marginTop: normalize(20),
                            justifyContent: 'flex-start',
                           
                           }}>

<Image
                  source={ICONS.wallet_coin}
                  style={{
                    height: normalize(60),
                    width: normalize(60),
                    marginTop: normalize(20),
                    marginLeft: normalize(20)
                  }}
                  resizeMode={'contain'}
                ></Image>

                <View>
                    <Text
                     style={{
                        fontSize: normalize(14),
                        fontFamily: FONTS.Hind,
                        marginLeft: normalize(20),
                        color: 'white',
                        
                        marginTop: normalize(30)
                    }}
                    
                    > My Coins</Text>

                    <View style={{
                        flexDirection: 'row'
                    }}>
                    <Text
                     style={{
                        fontSize: normalize(16),
                        fontFamily: FONTS.Hind,
                        marginLeft: normalize(20),
                        color: 'white',
                        
                        marginTop: normalize(5)
                    }}
                    
                    > 4.7</Text>

                    <TouchableOpacity onPress={() => toggleModal()}>
                    <Image
                  source={ICONS.info}
                  style={{
                    height: normalize(10),
                    width: normalize(10),
                    marginTop: normalize(5),
                    marginLeft: normalize(5)
                  }}
                  resizeMode={'contain'}
                ></Image>
                </TouchableOpacity>
                    </View>
                </View>
                            </View>


                            <View style={{
                            height: normalize(70),
                            width: '90%',
                            flexDirection: 'row',
                            backgroundColor: '#F0F0F0',
                            alignSelf: 'center',
                            borderRadius: normalize(15),
                            marginTop: normalize(20),
                            justifyContent: 'flex-start',
                           
                           }}>

<Image
                  source={ICONS.buyandearn}
                  style={{
                    height: normalize(30),
                    width: normalize(30),
                    marginTop: normalize(20),
                    marginLeft: normalize(20)
                  }}
                  resizeMode={'contain'}
                ></Image>

                <View>
                    <Text
                     style={{
                        fontSize: normalize(12),
                        fontFamily: FONTS.Hind,
                        marginLeft: normalize(20),
                        color: 'black',
                        
                        marginTop: normalize(20)
                    }}
                    
                    > Buy & earn Coins</Text>

                    <View style={{
                        flexDirection: 'row'
                    }}>
                    <Text
                     style={{
                        fontSize: normalize(12),
                        fontFamily: FONTS.Hind,
                        marginLeft: normalize(20),
                        color: 'black',
                        
                       // marginTop: normalize(5)
                    }}
                    
                    > 0.0 </Text>
                    
                    </View>
                </View>
<View style={{
    justifyContent: 'center',
    marginLeft: normalize(70)
}}>
                <Image
                  source={ICONS.right_arrow}
                  style={{
                    height: normalize(10),
                    width: normalize(10),
                    
                    marginLeft: normalize(20),
                    tintColor: 'black'
                  }}
                  resizeMode={'contain'}
                  tintColor={'black'}
                ></Image>


</View>

                            </View>



                            <View style={{
                            height: normalize(70),
                            width: '90%',
                            flexDirection: 'row',
                            backgroundColor: '#F0F0F0',
                            alignSelf: 'center',
                            borderRadius: normalize(15),
                            marginTop: normalize(20),
                            justifyContent: 'flex-start',
                           
                           }}>

<Image
                  source={ICONS.deposit}
                  style={{
                    height: normalize(30),
                    width: normalize(30),
                    marginTop: normalize(20),
                    marginLeft: normalize(20)
                  }}
                  resizeMode={'contain'}
                ></Image>

                <View>
                    <Text
                     style={{
                        fontSize: normalize(12),
                        fontFamily: FONTS.Hind,
                        marginLeft: normalize(20),
                        color: 'black',
                        
                        marginTop: normalize(20)
                    }}
                    
                    > Deposit Coins</Text>

                    <View style={{
                        flexDirection: 'row'
                    }}>
                    <Text
                     style={{
                        fontSize: normalize(12),
                        fontFamily: FONTS.Hind,
                        marginLeft: normalize(20),
                        color: 'black',
                        
                       // marginTop: normalize(5)
                    }}
                    
                    > 0.0 </Text>
                    
                    </View>
                </View>
<View style={{
    justifyContent: 'center',
    marginLeft: normalize(90)
}}>
                <Image
                  source={ICONS.right_arrow}
                  style={{
                    height: normalize(10),
                    width: normalize(10),
                    
                    marginLeft: normalize(20),
                    tintColor: 'black'
                  }}
                  resizeMode={'contain'}
                  tintColor={'black'}
                ></Image>


</View>

                            </View>

                            <View style={{
                            height: normalize(70),
                            width: '90%',
                            flexDirection: 'row',
                            backgroundColor: '#F0F0F0',
                            alignSelf: 'center',
                            borderRadius: normalize(15),
                            marginTop: normalize(20),
                            justifyContent: 'flex-start',
                           
                           }}>

<Image
                  source={ICONS.referandearn}
                  style={{
                    height: normalize(30),
                    width: normalize(30),
                    marginTop: normalize(20),
                    marginLeft: normalize(20)
                  }}
                  resizeMode={'contain'}
                ></Image>

                <View>
                    <Text
                     style={{
                        fontSize: normalize(12),
                        fontFamily: FONTS.Hind,
                        marginLeft: normalize(20),
                        color: 'black',
                        
                        marginTop: normalize(20)
                    }}
                    
                    >Refer & Earn Coins </Text>

                    <View style={{
                        flexDirection: 'row'
                    }}>
                    <Text
                     style={{
                        fontSize: normalize(12),
                        fontFamily: FONTS.Hind,
                        marginLeft: normalize(20),
                        color: 'black',
                        
                       // marginTop: normalize(5)
                    }}
                    
                    > 0.0 </Text>
                    
                    </View>
                </View>
<View style={{
    justifyContent: 'center',
    marginLeft: normalize(70)
}}>
                <Image
                  source={ICONS.right_arrow}
                  style={{
                    height: normalize(10),
                    width: normalize(10),
                    
                    marginLeft: normalize(20),
                    tintColor: 'black'
                  }}
                  resizeMode={'contain'}
                  tintColor={'black'}
                ></Image>


</View>

                            </View>

                                </View>


                          

                   



                      
               <View style={{
                height: normalize(110),
                backgroundColor: '#FFF2F0',
                borderTopLeftRadius: normalize(25),
                borderTopRightRadius: normalize(25),
                marginTop: normalize(80)
                
               }}>

               <View style={{
                flexDirection: 'row',
                marginTop: normalize(30),
                marginLeft: normalize(40),
                justifyContent: 'flex-start',
                alignItems: 'center'
               }}>

<Image
                  source={ICONS.transaction_history}
                  style={{
                    height: normalize(30),
                    width: normalize(30),
                    
                    
                    
                  }}
                  resizeMode={'contain'}
                  
                ></Image>


<View style={{
    marginLeft: normalize(10)
}}>
                <Text style={{
                    fontFamily: FONTS.Hind,
                    fontSize: normalize(12),
                    color: 'black',
                    
                }}>Transaction history </Text>

<Text style={{
                    fontFamily: FONTS.Hind,
                    fontSize: normalize(10),
                    color: '#646464'
                }}>For All Coins </Text>
</View>

                <Image
                  source={ICONS.right_arrow}
                  style={{
                    height: normalize(10),
                    width: normalize(10),
                    tintColor: 'black',
                   marginLeft: normalize(90)
                    
                  }}
                  resizeMode={'contain'}
                  tintColor= {'black'}
                  
                ></Image>
               </View>


               


             

              



               

                                    </View>


                        </ScrollView>


                        <Modal isVisible={isModalFilterVisible}


animationType={"slide"}
transparent={true}
onBackdropPress={() => setModalFilterVisible(false)}
>
<View style={{

  
  width: '100%',
  backgroundColor: 'white',
  marginTop: normalize(15),
  borderRadius: normalize(10)

}}>


  <View style={{
    height: normalize(40),
    width: '60%',

    flexDirection: 'row',

  }}>
    <Text
      style={{
        color: '#69BE53',
        fontSize: normalize(14),
        fontWeight: '700',
        marginTop: normalize(20),

        marginLeft: normalize(20),

      }}
    >
      My Coins
      </Text>



    <TouchableOpacity
      style={{
        width: '18%',
        height: normalize(30),
        backgroundColor: '#F36E35',
        borderRadius: normalize(5),
        position: 'absolute',
        left: Platform.OS == 'android' ? 290 : 295

      }}

      onPress={() => {
        console.log("kshbfhwb")
        setModalFilterVisible(false)

      }}>
      <Image
        source={ICONS.cross}
        style={{
          height: normalize(10),
          width: normalize(10),
          marginTop: normalize(10),
          alignSelf: 'center',
          tintColor: 'white'
        }}
        resizeMode={'contain'}
        tintColor={'white'}
      ></Image>
    </TouchableOpacity>
  </View>



  <View style={{
    width: '90%',
    backgroundColor: 'black',
    height: 1,
    marginLeft: normalize(10),
    marginRight: normalize(10),
    marginTop: normalize(10)
  }}></View>



  <View
    style={{ marginLeft: normalize(20), 
    
    width: '90%'
    }}>

<Text
      style={{
        color: 'black',
        fontSize: normalize(15),
        fontFamily: FONTS.Hind,
        marginBottom: normalize(20),
        marginTop: normalize(10),




      }}
    >It displays the number of coins left in your wallet</Text>


    


    
    



   
    
 


    




    

    
    
    
    



   

  




    






       



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