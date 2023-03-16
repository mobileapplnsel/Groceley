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
import { tintColor } from 'deprecated-react-native-prop-types/DeprecatedImagePropType';

var status = '';
export default function Productdetails(props) {


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






    const DATA = [{
        id: "0",
        
        pic: ICONS.cornflakes,
        

    },

    {
        id: "1",
        
        pic: ICONS.cornflakes,
        


    },

    {
        id: "2",
        
        pic: ICONS.cornflakes2,
       
    }



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

function favourite1(){
    setItemselected(0)
}
      

    function submit1(){

       
       setProductselect1(1);
       setProductselect2(0);
       setProductselect3(0);

       } 

    function submit2(){
            setProductselect1(0);
            setProductselect2(1);
            setProductselect3(0);

        } 
        
        
        
    function submit3(){
        setProductselect1(0);
        setProductselect2(0);
        setProductselect3(1);
        
    }



 function selectItem(item){
    props.navigation.navigate("Productdetails")
 }






    const regex =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const renderItem = ({ item, index }) => (

        <TouchableOpacity 
         
        
        style={{

            
        }}>





<Image
                                        source={item.pic}
                                        style={{
                                            height: normalize(130),
                                            width: normalize(140),
                                            alignSelf: 'center',
                                            
                                            marginLeft: normalize(-20),
                                            borderRadius: normalize(25)
                                        }}
                                        resizeMode={'contain'}
                                    ></Image>






        </TouchableOpacity>
    );

    const renderItem2 = ({ item, index }) => (
        <TouchableOpacity
          onPress={(item) => selectItem(item)}
          style={{
    
            height: normalize(180),
            width: normalize(120),
            backgroundColor: '#F0F0F0' ,
    
            marginLeft: normalize(7),
            borderRadius: normalize(15),
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            
            <View >
            <Image
                      source={item.pic}
                      style={{
                        height: normalize(60),
                        width: normalize(60),
                        alignSelf: 'center',
                        marginTop: normalize(5),
                        //marginLeft: normalize(20)
                      }}
                      resizeMode={'contain'}
                    ></Image>
                    </View>
    
    <>
          <Text
          numberOfLines={2}
            style={{
              color: 'black',
              fontSize: normalize(10),
              marginLeft: normalize(10),
              marginTop: normalize(5),
              alignSelf: 'flex-start'
            }}
          >{item.description}
          </Text>
    
    
          <Text
            style={{
              color: 'black',
              fontSize: normalize(10),
              marginLeft: normalize(10),
              marginTop: normalize(5),
              alignSelf: 'flex-start'
                    }}
          >{item.quantity}
          </Text>
    
        <View style={{
      flexDirection: 'row',
      alignSelf: 'flex-start',
      marginLeft: normalize(10),
      marginTop: normalize(10)
    }}>
          <Text
            style={{
              
              fontSize: normalize(10),
              color: '#A9A9A9',
              
              
                    }}
          >{'\u20B9'} {item.discounted_price}
          </Text>
        <View style={{
      height: normalize(1),
      width: '20%',
      backgroundColor: '#A9A9A9',
      marginTop: normalize(7),
      position: 'absolute'
    }}/>
         </View>
    
         <View style={{
      flexDirection: 'row',
     justifyContent: 'center',
      marginLeft: normalize(10),
    }}>
      <View>
          <Text
            style={{
              
              fontSize: normalize(10),
              color: 'black',
              fontWeight: '600'
              
                    }}
          >{'\u20B9'} {item.real_price}
          </Text>
          </View>
    
    
    
    <TouchableOpacity style={{
      height: normalize(30),
      width: normalize(50),
      backgroundColor: 'white',
      borderWidth: normalize(2),
      borderColor: '#69BE53',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: normalize(5),
      marginLeft: normalize(30),
      marginEnd: normalize(10),
      marginTop: normalize(-10)
    }}>
          <Text
            style={{
              
              fontSize: normalize(10),
              color: '#69BE53',
              alignSelf: 'center'
              
                    }}
          >ADD
          </Text>
          </TouchableOpacity>
    
    
    
    
         </View>
    
         </>
    
    
        </TouchableOpacity>
      );

   
    


    return (


        <Fragment>

            <Layout Home={true} {...props}>
                <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>


                    <KeyboardAvoidingView
                        style={{ flex: 1 }}
                        behavior={Platform.OS == 'ios' ? 'padding' : "height"}>



                        {/* <ScrollView showsVerticalScrollIndicator={false} bounces={false} > */}






                        





                        <ScrollView showsVerticalScrollIndicator={false} bounces={false} >



                            
                                <View style={{
                                    height: normalize(210),
                                    width: '100%',
                                    backgroundColor: '#FFF2F0',
                                    marginRight: normalize(10),
                                   borderBottomLeftRadius: normalize(20),
                                   borderBottomRightRadius: normalize(20)
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
   
   {/* <Image
                                        source={ICONS.left_arrow}
                                        style={{
                                            height: normalize(15),
                                            width: normalize(15),
                                            alignSelf: 'center',
                                            
                                            position: 'absolute',
                                            top:15,
                                            left:20,
                                            tintColor: 'black'
                                        }}
                                        resizeMode={'contain'}
                                        tintColor= {'black'}
                                    ></Image> */}


                                    
   
               {itemselected == 0 ?   (   
                
                <TouchableOpacity onPress={()=>favourite()}
                                    style={{
                                        height: normalize(30),
                                        width: normalize(30),
                                       
                                        
                                        
                                        marginRight: normalize(10),
                                        marginTop: normalize(5)

                                    }}
                                    
                                    >
                
                
                <Image
                                        source={ICONS.heart}
                                        style={{
                                            height: normalize(15),
                                            width: normalize(15),
                                            alignSelf: 'center',
                                            
                                            position: 'absolute',
                                            top:10,
                                            right:20,
                                            tintColor: 'black',
                                           
                                            
                                        }}
                                        resizeMode={'contain'}
                                        tintColor= {'black'}
                                    ></Image> 
                                    
                                    </TouchableOpacity>
                                    ) : (


                                        <TouchableOpacity onPress={()=>favourite1()}
                                    style={{
                                        height: normalize(30),
                                        width: normalize(30),
                                       
                                        
                                        
                                        marginRight: normalize(10),
                                        marginTop: normalize(5)

                                    }}
                                    
                                    >


 <Image
                                        source={ICONS.favourities}
                                        style={{
                                            height: normalize(15),
                                            width: normalize(15),
                                            alignSelf: 'center',
                                            
                                            position: 'absolute',
                                            top:10,
                                            right:20,
                                            
                                            tintColor: '#E10808'
                                        }}
                                        resizeMode={'contain'}
                                        tintColor= {'#E10808'}
                                    ></Image>

                                    </TouchableOpacity>

                                    )}


</View>


                                    
                                    {/* <Image
                                        source={ICONS.cornflakes}
                                        style={{
                                            height: normalize(160),
                                            width: normalize(140),
                                            alignSelf: 'center',
                                            
                                            marginLeft: normalize(10),
                                            borderRadius: normalize(25)
                                        }}
                                        resizeMode={'contain'}
                                    ></Image> */}
                                    <View>
              <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                showsHorizontalScrollIndicator={false}

                horizontal={true}
                style={{


                  marginLeft: normalize(10),

                  marginTop: normalize(10),
                  marginBottom: normalize(20)


                }}


              />

            </View>

                                    

<View style={{
                                        height: normalize(30),
                                        width: normalize(60),
                                        backgroundColor: 'white',
                                        borderRadius: normalize(20),
                                        justifyContent: 'space-evenly',
                                        alignItems: 'center',
                                        flexDirection: 'row',
                                        shadowColor: '#171717',
                                        shadowOffset: {width: -2, height: 4},
                                        shadowOpacity: 0.2,
                                        
                                        position: 'absolute',
                                        elevation: 3,
                                        bottom: -15,
                                        left: 30

                                    }}>
<Image
                                        source={ICONS.star}
                                        style={{
                                            height: normalize(10),
                                            width: normalize(10),
                                            alignSelf: 'center',
                                           
                                          
                                            borderRadius: normalize(25),
                                            tintColor: '#F36E35'
                                        }}
                                        resizeMode={'contain'}
                                        tintColor={'#F36E35'}
                                    ></Image>


                                        <Text
                                        style={{
                                            fontSize: normalize(12),
                                            
                                            color: 'black'
                                        }}
                                        >
                                            4.5
                                        </Text>

                                    </View>

                                    <View style={{
                                        height: normalize(30),
                                        width: normalize(60),
                                        backgroundColor: '#F36E35',
                                        borderRadius: normalize(20),
                                        justifyContent: 'space-evenly',
                                        alignItems: 'center',
                                        flexDirection: 'row',
                                        shadowColor: '#171717',
                                        shadowOffset: {width: -2, height: 4},
                                        shadowOpacity: 0.2,
                                        
                                        position: 'absolute',
                                        elevation: 3,
                                        bottom: -15,
                                        right: 30

                                    }}>
 <Text
                                        style={{
                                            fontSize: normalize(12),
                                            
                                            color: 'white'
                                        }}
                                        >
                                            -
                                        </Text>

                                        <Text
                                        style={{
                                            fontSize: normalize(12),
                                            
                                            color: 'white'
                                        }}
                                        >
                                            02
                                        </Text>

                                        <Text
                                        style={{
                                            fontSize: normalize(12),
                                            
                                            color: 'white'
                                        }}
                                        >
                                            +
                                        </Text>

                                    </View>
                                </View>


                            {/* </View> */}


                            <View style={{
                                marginLeft: normalize(20),
                                marginTop: normalize(30)
                            }}>
                                <Text
                                    style={{
                                        color: '#222222',
                                        fontSize: normalize(16),
                                        fontWeight: '600',
                                        fontStyle: FONTS.Hind,
                                        textAlign: 'left',

                                    }}
                                >Kellogg's Muesli Cereal Crunchy Nut, cereals & fruits
                                </Text>


                               
<Text
style={{
    color: '#646464',
                                            fontSize: normalize(12),
                                            width: '85%',
                                           fontWeight: '300',
                                            marginTop: normalize(10),
                                            alignSelf: 'flex-start',
                                           fontStyle: FONTS.Hind
}}

>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas interdum diam neque, sed vehicula turpis vestibulum quis.</Text>
                            </View>

                            <View style={{
                                flexDirection: 'row',
                                justifyContent: 'flex-start',
                                marginLeft: normalize(20)

                            }}>

                            <Text style={{
    color: '#646464',
                                            fontSize: normalize(12),
                                           
                                           fontWeight: '300',
                                            marginTop: normalize(10),
                                           
                                           fontStyle: FONTS.Hind,
                                           
}}>Manufactured by :</Text>

<Text style={{
    color: '#646464',
                                            fontSize: normalize(12),
                                            marginLeft: normalize(5),
                                           
                                            marginTop: normalize(10),
                                            
                                           fontStyle: FONTS.Hind,
                                          
                                           fontWeight: '700'
}}>ABC Company</Text>

</View>           



<View style={{
                                flexDirection: 'row',
                                justifyContent: 'flex-start',
                                marginLeft: normalize(20)

                            }}>

                            <Text style={{
    color: '#646464',
                                            fontSize: normalize(12),
                                           
                                           fontWeight: '300',
                                            marginTop: normalize(10),
                                           
                                           fontStyle: FONTS.Hind,
                                           
}}>Expiry date :</Text>

<Text style={{
    color: '#646464',
                                            fontSize: normalize(12),
                                            marginLeft: normalize(5),
                                           
                                            marginTop: normalize(10),
                                            
                                           fontStyle: FONTS.Hind,
                                          
                                           fontWeight: '700'
}}>15/04/2023</Text>

</View>           


                        <Text style={{
                            fontFamily: FONTS.Hind,
                            color: '#646464',
                            fontSize: normalize(10),
                            marginLeft: normalize(20),
                            marginTop: normalize(10)
                        }}> TOTAL PRICE</Text>
     <Text style={{
                            fontFamily: FONTS.Hind,
                            color: 'black',
                            fontSize: normalize(14),
                            marginLeft: normalize(25),
                            fontWeight: '700',
                            marginTop: normalize(5)
                        }}>{'\u20B9'}160</Text>



                      
                <TouchableOpacity onPress={()=> props.navigation.navigate("Cart")} 
                
                style={{
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    marginLeft: normalize(20),
                    marginTop: normalize(10)
                }}
                >

                <View style={{
                                        height: normalize(30),
                                        width: normalize(120),
                                        backgroundColor: '#69BE53',
                                        borderRadius: normalize(20),
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        flexDirection: 'row',

                                       

                                    }}>
                                         <Image
                source={ICONS.cart1}
                style={{
                    height: normalize(18),
                    width: normalize(18),
                    alignSelf: 'center',
                   
                    marginRight: normalize(10),
                    borderRadius: normalize(25)
                }}
                resizeMode={'contain'}
            ></Image>

                                        <Text
                                        style={{
                                            fontSize: normalize(12),
                                            fontWeight: '700',
                                            color: 'white'
                                        }}
                                        >
                                         Go To Cart
                                        </Text>

                                    </View>

                

                                    </TouchableOpacity>

                                    <Text style={{
              color: "#767676",
              fontFamily: FONTS.RubikBold,
              fontSize: normalize(12),
              marginLeft: normalize(20),
              marginTop: normalize(10)
            }}>Toping for you</Text>


<View>
              <FlatList
                data={DATA2}
                renderItem={renderItem2}
                keyExtractor={item => item.id}
                showsHorizontalScrollIndicator={false}

                horizontal={true}
                style={{


                  marginLeft: normalize(10),

                  marginTop: normalize(10),
                  marginBottom: normalize(20)


                }}


              />

            </View>


            <View style={{
            justifyContent: 'center',
            marginTop: normalize(-20)
           }}>

            <CarouselCards />

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