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
        categories: "Bedcovers",
        pic: ICONS.bedcover,
        description: "King Size Bedsheet 108×108",
        realprice: "4999",
        discountedprice: "1690"


    },

    {
        id: "1",
        categories: "Bedsheets",
        pic: ICONS.bedcover,
        description: "King Size Bedsheet 108×108",
        realprice: "4999",
        discountedprice: "1690"


    },

    {
        id: "2",
        categories: 'Blankets',
        pic: ICONS.bedcover,
        description: "King Size Bedsheet 108×108",
        realprice: "4999",
        discountedprice: "1690"
    }



    ]

    const DATA2 = [{
        id: "0",
        categories: "Bedcovers",
        pic: ICONS.cornflakes
      },
    
      {
        id: "1",
        categories: "Bedsheets",
        pic: ICONS.cornflakes
    
    
      },
    
      {
        id: "2",
        categories: 'Blankets',
        pic: ICONS.cornflakes
    
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










    const regex =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const renderItem1 = ({ item, index }) => (

        <TouchableOpacity 
          onPress={()=> submit(item)}
        
        style={{

            height: normalize(70),
            width: '70%',
            backgroundColor: item.id % 2 == '0' ? '#F6F6F6' : '#FFF3F4',
            marginVertical: normalize(5),
            borderRadius: normalize(5),
            borderWidth: productselect1==1  ? normalize(1) : normalize(0),
            borderColor: 'red'
        }}>





            <Image
                source={item.pic}
                style={{
                    height: normalize(100),
                    width: normalize(40),
                    alignSelf: 'center',
                    marginTop: normalize(-20),
                    marginRight: normalize(5),
                    borderRadius: normalize(25)
                }}
                resizeMode={'contain'}
            ></Image>






        </TouchableOpacity>
    );

    const renderItem2 = ({ item, index }) => (
        <TouchableOpacity
          //onPress={(item) => selectItem(item)}
          style={{
    
            height: normalize(145),
            width: normalize(130),
            backgroundColor: item.id % 2 == '0' ? '#F6F6F6' : '#FFF3F4',
    
            marginLeft: normalize(10),
            borderRadius: normalize(15),
            
          }}>
    
          <Image
            source={item.pic}
            style={{
              height: normalize(100),
              width: normalize(80),
              alignSelf: 'center',
              marginTop: normalize(20),
              marginRight: normalize(5),
              borderRadius: normalize(25)
            }}
            resizeMode={'contain'}
          ></Image>
    
    
    
          <Text
            style={{
              color: 'black',
              fontSize: normalize(10),
              fontWeight: '600',
              marginTop: normalize(5),
              alignSelf: 'center'
            }}
          >{item.categories}
          </Text>
    
    
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



                            {/* <View style={{
                                // flexDirection: 'row',

                                // justifyContent: 'space-around',


                            }}> */}
                                

                                {/* <View>
<TouchableOpacity 
         onPress={()=> submit1()}
        
        style={{

            height: normalize(70),
            width: '80%',
            backgroundColor: '#F6F6F6' ,//'#FFF3F4',
            marginVertical: normalize(5),
            marginLeft: normalize(20),
            borderRadius: normalize(5),
            marginRight: normalize(10),
            borderWidth: productselect1==1  ? normalize(1) : normalize(0),
            borderColor: 'red'
        }}>





            <Image
                source={ICONS.cornflakes}
                style={{
                    height: normalize(100),
                    width: normalize(40),
                    alignSelf: 'center',
                    marginTop: normalize(-20),
                    marginRight: normalize(5),
                    borderRadius: normalize(25)
                }}
                resizeMode={'contain'}
            ></Image>






        </TouchableOpacity>



        <TouchableOpacity 
         onPress={()=> submit2()}
        
        style={{

            height: normalize(70),
            width: '80%',
            backgroundColor: '#F6F6F6' ,//'#FFF3F4',
            marginVertical: normalize(5),
            marginLeft: normalize(20),
            borderRadius: normalize(5),
            marginRight: normalize(10),
            borderWidth: productselect2==1  ? normalize(1) : normalize(0),
            borderColor: 'red'
        }}>





            <Image
                source={ICONS.cornflakes}
                style={{
                    height: normalize(100),
                    width: normalize(40),
                    alignSelf: 'center',
                    marginTop: normalize(-20),
                    marginRight: normalize(5),
                    borderRadius: normalize(25)
                }}
                resizeMode={'contain'}
            ></Image>






        </TouchableOpacity>


        <TouchableOpacity 
         onPress={()=> submit3()}
        
        style={{

            height: normalize(70),
            width: '80%',
            backgroundColor: '#F6F6F6' ,//'#FFF3F4',
            marginVertical: normalize(5),
            marginLeft: normalize(20),
            borderRadius: normalize(5),
            marginRight: normalize(10),
            borderWidth: productselect3==1  ? normalize(1) : normalize(0),
            borderColor: 'red'
        }}>





            <Image
                source={ICONS.cornflakes}
                style={{
                    height: normalize(100),
                    width: normalize(40),
                    alignSelf: 'center',
                    marginTop: normalize(-20),
                    marginRight: normalize(5),
                    borderRadius: normalize(25)
                }}
                resizeMode={'contain'}
            ></Image>






        </TouchableOpacity>

        </View> */}

                                <View style={{
                                    height: normalize(240),
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
   
   <Image
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
                                    ></Image>


                                    
   
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
                                        source={ICONS.favourities}
                                        style={{
                                            height: normalize(18),
                                            width: normalize(18),
                                            alignSelf: 'center',
                                            
                                            position: 'absolute',
                                            top:5,
                                            right:20,
                                            tintColor: 'white',
                                           
                                            
                                        }}
                                        resizeMode={'contain'}
                                        tintColor= {'white'}
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
                                            height: normalize(18),
                                            
                                            width: normalize(18),
                                            alignSelf: 'center',
                                            
                                            position: 'absolute',
                                            top:5,
                                            right:20,
                                            tintColor: '#E10808'
                                        }}
                                        resizeMode={'contain'}
                                        tintColor= {'#E10808'}
                                    ></Image>

                                    </TouchableOpacity>

                                    )}


</View>


                                    
                                    <Image
                                        source={ICONS.cornflakes}
                                        style={{
                                            height: normalize(190),
                                            width: normalize(150),
                                            alignSelf: 'center',
                                           
                                            marginLeft: normalize(10),
                                            borderRadius: normalize(25)
                                        }}
                                        resizeMode={'contain'}
                                    ></Image>

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
                                        bottom: -10,
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
                                        bottom: -10,
                                        right: 30

                                    }}>
 <Text
                                        style={{
                                            fontSize: normalize(12),
                                            
                                            color: 'black'
                                        }}
                                        >
                                            -
                                        </Text>

                                        <Text
                                        style={{
                                            fontSize: normalize(12),
                                            
                                            color: 'black'
                                        }}
                                        >
                                            02
                                        </Text>

                                        <Text
                                        style={{
                                            fontSize: normalize(12),
                                            
                                            color: 'black'
                                        }}
                                        >
                                            +
                                        </Text>

                                    </View>
                                </View>


                            {/* </View> */}


                            <View style={{
                                marginLeft: normalize(20),
                                marginTop: normalize(10)
                            }}>
                                <Text
                                    style={{
                                        color: '#222222',
                                        fontSize: normalize(16),
                                        fontWeight: '600',
                                        
                                        textAlign: 'left',

                                    }}
                                >King Size Bedsheet 108×108
                                </Text>


                                <View style={{
                                    flexDirection: 'row'
                                }}>

<Text style={{
                                            color: '#9E9E9E',
                                            fontSize: normalize(16),
                                            fontWeight: '600',
                                            marginTop: normalize(5),
                                            alignSelf: 'center',
                                            fontWeight: '700'
                                        }}
                                        >{'\u20B9'}</Text>
                                    
                                    <Text
                                        style={{
                                            color: '#9E9E9E',
                                            fontSize: normalize(16),
                                            fontWeight: '600',
                                            marginTop: normalize(5),
                                            alignSelf: 'center'
                                        }}
                                    >4999
                                    </Text>

                                    <View style={{
                                        flexDirection: 'row',
                                        marginLeft: normalize(2)
                                    }}>

                                        <Text style={{
                                            color: '#222222',
                                            fontSize: normalize(16),
                                            fontWeight: '600',
                                            marginTop: normalize(5),
                                            alignSelf: 'center',
                                            fontWeight: '700',
                                            marginLeft: normalize(2)
                                        }}
                                        >{'\u20B9'}</Text>

                                        <Text style={{
                                            color: '#222222',
                                            fontSize: normalize(16),
                                            fontWeight: '600',
                                            marginTop: normalize(5),
                                            alignSelf: 'center',
                                            fontWeight: '700'
                                        }}>1690
                                        </Text>
                                    </View>

                                    <View
                                        style={{
                                            height: normalize(1),
                                            width: normalize(40),
                                            backgroundColor: "#9E9E9E",
                                            position: 'absolute',
                                            top: 20,
                                            

                                        }}
                                    />




                                </View>
<Text
style={{
    color: '#575757',
                                            fontSize: normalize(12),
                                            width: '85%',
                                        //     fontWeight: '600',
                                            marginTop: normalize(10),
                                            alignSelf: 'flex-start',
                                            fontWeight: '700', 
}}

>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas interdum diam neque, sed vehicula turpis vestibulum quis.</Text>
                            </View>

                            <View style={{
                        flexDirection: "row",
                        marginLeft: normalize(20),
                        marginTop: normalize(10)
                    }}>

<Text
                        style={{
                            fontSize: normalize(12),
                            color: "#222222",
                            fontWeight: '700',
                    
                        }}
                    >Quantity</Text>

                    <View style={{
                        height: normalize(20),
                        width: normalize(70),
                        backgroundColor: '#575757',
                        marginLeft: normalize(10),
                       
                        borderRadius: normalize(15)
                    }}>
                     <View
                     
                     style={{
                        width: '95%',
                        height: normalize(20),
                        flexDirection: 'row',
                     
                        justifyContent: 'space-between'
                     }}
                     >

                        <TouchableOpacity
                        style={{
                            alignSelf: 'center',
                            marginLeft: normalize(2),
                            height: normalize(20),
                            width: normalize(20),
                            
                            justifyContent: 'center'
               }}
                        
                        >

<Image
                    source={ICONS.cornflakes}
                    style={{
                        height: normalize(8),
                        width: normalize(8),
                        alignSelf: 'center',
                        
                   
                       
                        tintColor: 'white',
                    }}
                    resizeMode={'contain'}
                ></Image>

</TouchableOpacity>

                        <Text
                        style={{
                            color: 'white',
                            fontSize: normalize(10),
                            fontWeight: '700',
                            textAlign: 'center',

                            marginTop: normalize(2)
                        }}
                        
                        >1</Text>
    <TouchableOpacity
                        style={{
                            alignSelf: 'center',
                            marginLeft: normalize(2),
                            height: normalize(20),
                            width: normalize(20),
                            justifyContent: 'center'
               }}
                        
                        >
<Image
                    source={ICONS.downward_arrow}
                    style={{
                        height: normalize(8),
                        width: normalize(8),
                        alignSelf: 'center',
                      
                   
                       
                        tintColor: 'white',
                    }}
                    resizeMode={'contain'}
                ></Image>
</TouchableOpacity>
                        

                        {/* <Image
                    source={ICONS.upbutton}
                    style={{
                        height: normalize(8),
                        width: normalize(8),
                        alignSelf: 'flex-start',
                      
                        marginLeft: normalize(10),
                       
                        tintColor: 'white',
                    }}
                    resizeMode={'contain'}
                ></Image>
<Image
                    source={ICONS.downbutton}
                    style={{
                        height: normalize(8),
                        width: normalize(8),
                        alignSelf: 'flex-start',
                      
                        marginLeft: normalize(10),
                        borderRadius: normalize(25),
                        tintColor: 'white',
                    }}
                    resizeMode={'contain'}
                ></Image> */}





                        
                     </View>


                     

                    </View>
                </View>

                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    marginLeft: normalize(20),
                    marginTop: normalize(10)
                }}
                >

                <View style={{
                                        height: normalize(30),
                                        width: normalize(120),
                                        backgroundColor: '#E31C23',
                                        borderRadius: normalize(20),
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        
                                        marginTop: normalize(10)

                                    }}>
                                        <Text
                                        style={{
                                            fontSize: normalize(12),
                                            fontWeight: '700',
                                            color: 'white'
                                        }}
                                        >
                                            Add To Cart
                                        </Text>

                                    </View>

                <View style={{
                                        height: normalize(30),
                                        width: normalize(120),
                                        backgroundColor: '#222222',
                                        borderRadius: normalize(20),
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                         marginLeft: normalize(10),
                                        marginTop: normalize(10)

                                    }}>
                                        <Text
                                        style={{
                                            fontSize: normalize(12),
                                            fontWeight: '700',
                                            color: 'white'
                                        }}
                                        >
                                            Buy Now
                                        </Text>

                                    </View>


                                    </View>

                                    <Text style={{
              color: "#767676",
              fontFamily: FONTS.RubikBold,
              fontSize: normalize(12),
              marginLeft: normalize(30),
              marginTop: normalize(10)
            }}>Explore</Text>

            <Text style={{
              color: "#767676",
              fontFamily: FONTS.RubikBold,
              fontSize: normalize(13),
              fontWeight: '700',
              marginLeft: normalize(30)
            }}>Recent Categories</Text>


<View>
              <FlatList
                data={DATA2}
                renderItem={renderItem2}
                keyExtractor={item => item.id}
                showsHorizontalScrollIndicator={false}

                horizontal={true}
                style={{


                  marginLeft: normalize(25),

                  marginTop: normalize(20),
                  marginBottom: normalize(20)


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