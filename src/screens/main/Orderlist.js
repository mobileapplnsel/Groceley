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

var status = '';
export default function Orderlist(props) {


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






    const DATA = [

    {
        id: "1",
        
        pic: ICONS.milk,
        description: "Amul Moti Homogenized Toned Milk",
        realprice: "Ordered on 15-Jan-2023",
        
       


    },

    {
        id: "2",
       
        pic: ICONS.cornflakes,
        description: "Kellogg's Corn Flakes Cereal",
        realprice: "Ordered on 15-Jan-2023",
       
       

    },

    {
        id: "3",
       
        pic: ICONS.cornflakes2,
        description: "Kellogg's Muesli Cereal Crunchy Nut, cereals & fruits",
        realprice: "Ordered on 15-Jan-2023",
       
       

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

      




      
const renderItem2 = ({ item, index }) => (



    <TouchableOpacity
    
    style={{
        flexDirection: 'row',
    height: normalize(100),
    width: normalize(200),
    borderRadius: normalize(10),
    backgroundColor: '#F0F0F0',
    marginHorizontal: normalize(5)
    }}
    >
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

<View style={{
   
    width: '65%'
}}>
<Text
      numberOfLines={2}
        style={{
          color: 'black',
          fontSize: normalize(10),
          marginLeft: normalize(10),
          marginTop: normalize(10),
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
  marginTop: normalize(-20)
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
     </View>



    </TouchableOpacity>
  );


        
        
    



 function selectItem(item){
    props.navigation.navigate("Productdetails")
 }






    const regex =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        const renderItem1 = ({ item, index }) => (
            <>
        
    
    
    
    
               
    
    
    
    
    
    
    
    
    
                <TouchableOpacity onPress={()=> props.navigation.navigate("Orderdetails")}
                
                style={{
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
                        backgroundColor: '#F0F0F0',
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
                       
                        marginLeft: normalize(10),
                        paddingRight: normalize(10)
                    }}>
                        <Text
                        numberOfLines={2}
                            style={{
                                fontSize: normalize(12),
                                color: "black",
                                marginTop: normalize(10),
                                
                            }}
                        >{item.description}</Text>
    <Text
                        
                            style={{
                                fontSize: normalize(10),
                                color: "black",
                                
                            }}
                        >{item.realprice}</Text>
    
                      
    
    
                  
    
                    </View>


                    <View style={{
                        marginTop: normalize(8),
                       alignSelf: 'center',
                       marginLeft: normalize(-10)
                    }}>

                    <TouchableOpacity style={{
                        backgroundColor: '#E76229',
                        height: normalize(25),
                        width: normalize(20),
                        borderRadius: normalize(5),
                        
                    }}>
                    <Image
                  source={ICONS.right_arrow}
                  style={{
                    height: normalize(10),
                    width: normalize(10),
                    tintColor: 'white',
                    marginTop: normalize(5),
                    alignSelf: 'center'
                    
                  }}
                  resizeMode={'contain'}
                  tintColor= {'white'}
                ></Image>
                    
                    </TouchableOpacity>
                

                    
                    </View>
    
    
                </TouchableOpacity>
    
    
                            
    
    
    
    
    
    
    
           
    
          
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
                                     
                                    width: '100%',
                                    marginTop: normalize(20),
                                    marginRight: normalize(10),
                                  
                                }}>






                                        <Text
                                        style={{
                                            fontSize: normalize(14),
                                            fontFamily: FONTS.Hind,
                                            marginLeft: normalize(20),
                                            color: 'black',
                                            fontWeight: '700'
                                            
                                        }}
                                        >
                                       Your Orders
                                        </Text> 

                                        <View style={{
                                            flexDirection: 'row',
                                            justifyContent: 'center',
                                            marginTop: normalize(10),
                                            marginLeft: normalize(25),
                                        }}>

<TouchableOpacity style={{
    height: normalize(36),
    width: normalize(36),
    marginTop: normalize(6),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: normalize(5),
    borderColor: '#D6D6D6',
    borderWidth: normalize(1)
}}>
    <Image
                  source={ICONS.filter}
                  style={{
                    height: normalize(15),
                    width: normalize(15),
                   
                    
                  }}
                  resizeMode={'contain'}
                  tintColor= {'black'}
                ></Image>

</TouchableOpacity>

                                        <TouchableOpacity style={{
  flexDirection: 'row',
  justifyContent: 'flex-end',
  marginTop: normalize(-10),
  marginLeft: normalize(10)
}}>
       <TextInput
                                value={name}
                                onChangeText={_ => setName(_)}
                                marginTop={normalize(15)}
                                marginRight={normalize(20)}
                                height={normalize(40)}
                                keyboardType={'email-address'}
                                fontSize={normalize(14)}
                                width={normalize(230)}
                                placeholder={'Search all Orders'}
                                placeholderTextColor={'#3F3F3F'}
                                borderRadius={normalize(30)}
                                borderWidth={normalize(1)}
                                borderColor={'#DADADA'}
                                style={{
                                  paddingHorizontal: normalize(20)
                                }}
                            />
            
            <Image
                  source={ICONS.search}
                  style={{
                    height: normalize(20),
                    width: normalize(18),
                    
                    position: 'absolute',
                    right: 35,
                    bottom: 15
                  }}
                  resizeMode={'contain'}
                  tintColor= {'black'}
                ></Image>

</TouchableOpacity>


</View>
<Text
                                        style={{
                                            fontSize: normalize(12),
                                            fontFamily: FONTS.Hind,
                                            marginLeft: normalize(100),
                                            color: 'black',
                                            marginTop: normalize(10),
                                            alignSelf: 'center',
                                        }}
                                        >
Past Three months                                        </Text> 

<View
style={{
    height: normalize(1),
    width: '80%',
    alignSelf: 'center',
    marginTop: normalize(10),
    backgroundColor: 'black'
}}
/>
                                    
                                        <View>
              <FlatList
                data={DATA}
                renderItem={renderItem1}
                keyExtractor={item => item.id}
                showsHorizontalScrollIndicator={false}

                
                style={{


                 

                  marginTop: normalize(10),
                 

                }}


              />

            </View> 

          
<View style={{
    height: normalize(40),
    width: '90%',
    backgroundColor: '#EDEDED',
    marginTop: normalize(10),
    marginLeft: normalize(20),
    borderRadius: normalize(20)
}}>
<Text
                                        style={{
                                            fontSize: normalize(10),
                                            fontFamily: FONTS.Hind,
                                            
                                            color: 'black',
                                            marginTop: normalize(10),
                                            alignSelf: 'center',
                                        }}
                                        >
You have reached the end of your orders                                       

 </Text> 



</View>

<View style={{
    flexDirection: 'row',
    justifyContent: 'space-between',

}}>
<Text
                                        style={{
                                            fontSize: normalize(14),
                                            fontFamily: FONTS.Hind,
                                            marginLeft: normalize(20),
                                            color: 'black',
                                            fontWeight: '700',
                                            marginTop: normalize(20)
                                        }}
                                        >
                                       Buy Again</Text>

                                       <TouchableOpacity onPress={()=> props.navigation.navigate("Productlist")}>
<Text style={{
              color: "#69BE53",
              fontFamily: FONTS.RubikBold,
              fontSize: normalize(14),
              marginRight: normalize(20),
              marginTop: normalize(20)
            }}>See All</Text>
            
</TouchableOpacity>
</View>


<FlatList
                data={DATA2}
                renderItem={renderItem2}
                keyExtractor={item => item.id}
                showsHorizontalScrollIndicator={false}

                horizontal={true}
                style={{

                  width: '100%',
                  marginLeft: normalize(12),
                  marginTop: normalize(15),
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