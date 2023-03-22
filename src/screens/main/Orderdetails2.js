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
    Share,
    
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
export default function Orderdetails2(props) {

    
    const [modalVisible, setModalVisible] = useState(false);
    const [itemselected, setItemselected] = useState(0);






    const DATA = [{
        id: "0",
        
        pic: ICONS.cornflakes2,
        

    },

    {
        id: "1",
        
        pic: ICONS.cornflakes_backside,
        


    },
{
    id: "2",
        
        pic: ICONS.cornflakes2,
        

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

      

      const ShareExample = async () => {
        try {
          const result = await Share.share({
              message: 'https://www.google.com',
              url:
              'https://www.google.com',
            title:
              'https://www.google.com',
          });
          if (result.action === Share.sharedAction) {
            if (result.activityType) {
              // shared with activity type of result.activityType
            } else {
              // shared
            }
          } else if (result.action === Share.dismissedAction) {
            // dismissed
          }
        } catch (error) {
          Alert.alert(error.message);
        }
      

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



            <TouchableOpacity onPress={()=>props.navigation.navigate("Productdetails")}
            
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

            <Layout {...props}>
                <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>


                    <KeyboardAvoidingView
                        style={{ flex: 1 }}
                        behavior={Platform.OS == 'ios' ? 'padding' : "height"}>



                        {/* <ScrollView showsVerticalScrollIndicator={false} bounces={false} > */}






                        





                        <ScrollView showsVerticalScrollIndicator={false} bounces={false} >



                            
                               


                            {/* </View> */}


                            <View style={{
                                marginLeft: normalize(20),
                                marginTop: normalize(30)
                            }}>
                                <Text
                                    style={{
                                        color: 'black',
                                        fontSize: normalize(14),
                                        fontWeight: '600',
                                        fontStyle: FONTS.Hind,
                                        textAlign: 'left',

                                    }}
                                >View Order details
                                </Text>


                               

                            </View>

               <View style={{
                height: normalize(100),
                width: '90%',
                alignSelf: 'center',
                backgroundColor: 'white',
                borderWidth: normalize(1),
                borderColor: '#69BE53',
                marginTop: normalize(10),
                borderRadius: normalize(5)
               }}>

                <View style={{
                    flexDirection: 'row'
                }}>
                <Text style={{
              color: "black",
              fontFamily: FONTS.Hind,
              fontSize: normalize(12),
              marginLeft: normalize(10),
              marginTop: normalize(10)
            }}>Order date</Text>
            <Text style={{
              color: "black",
              fontFamily: FONTS.Hind,
              fontSize: normalize(12),
              marginLeft: normalize(20),
              marginTop: normalize(10)
            }}>22-Mar-2023</Text>
            </View>

            
            <View style={{
                    flexDirection: 'row'
                }}>
                <Text style={{
              color: "black",
              fontFamily: FONTS.Hind,
              fontSize: normalize(12),
              marginLeft: normalize(10),
              marginTop: normalize(10)
            }}>Order No.</Text>
            <Text style={{
              color: "black",
              fontFamily: FONTS.Hind,
              fontSize: normalize(12),
              marginLeft: normalize(25),
              marginTop: normalize(10)
            }}>405-291342919-329128987</Text>
            </View>


            <View style={{
                    flexDirection: 'row'
                }}>
                <Text style={{
              color: "black",
              fontFamily: FONTS.Hind,
              fontSize: normalize(12),
              marginLeft: normalize(10),
              marginTop: normalize(10)
            }}>Total price</Text>
            <Text style={{
              color: "black",
              fontFamily: FONTS.Hind,
              fontSize: normalize(12),
              marginLeft: normalize(20),
              marginTop: normalize(10)
            }}>{'\u20B9'} 202.00 (1 item)</Text>
            </View>


               </View>
               <View style={{
                                marginLeft: normalize(20),
                                marginTop: normalize(30)
                            }}>
                                <Text
                                    style={{
                                        color: 'black',
                                        fontSize: normalize(14),
                                        fontWeight: '600',
                                        fontStyle: FONTS.Hind,
                                        textAlign: 'left',

                                    }}
                                >Delivery details
                                </Text>


                               

                            </View>

               <View style={{
                height: normalize(200),
                width: '90%',
                alignSelf: 'center',
                backgroundColor: 'white',
                borderWidth: normalize(1),
                borderColor: '#69BE53',
                marginTop: normalize(10),
                borderRadius: normalize(5)
               }}>

                <View>
                <Text style={{
              color: "#69BE53",
              fontFamily: FONTS.Hind,
              fontWeight: '700',
              fontSize: normalize(14),
              marginLeft: normalize(10),
              marginTop: normalize(10)
            }}>Delivered</Text>

            </View>

            <View style={{
                flexDirection: 'row'
            }}>

           
            <Text style={{
             color: "black",
             fontFamily: FONTS.Hind,
             fontSize: normalize(12),
             marginLeft: normalize(10),
             fontWeight: '700',
             marginTop: normalize(10)
            }}>Date:</Text>
                <Text style={{
              color: "black",
              fontFamily: FONTS.Hind,
              fontSize: normalize(12),
              marginLeft: normalize(5),
              fontWeight: '700',
              marginTop: normalize(10)
            }}>Friday, 25-Mar-2023</Text>
             </View>
            
             <TouchableOpacity onPress={()=>props.navigation.navigate("Productdetails")}
            
            style={{
                flexDirection: 'row',
            height: normalize(100),
            width: normalize(275),
            borderRadius: normalize(10),
            backgroundColor: '#F0F0F0',
            marginHorizontal: normalize(5),
            marginTop: normalize(10)
            }}
            >
                 <Image
                          source={ICONS.milk}
                          style={{
                            height: normalize(70),
                            width: normalize(70),
                            alignSelf: 'center',
                            marginTop: normalize(5),
                            marginLeft: normalize(10)
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
                  fontWeight: '700',
                  fontSize: normalize(10),
                  marginLeft: normalize(10),
                  marginTop: normalize(20),
                  alignSelf: 'flex-start'
                }}
              >Amul Moti Homogenized Toned Milk
              </Text>
        
        <View style={{
            flexDirection: 'row'
        }}>
              <Text
                style={{
                  color: 'black',
                  fontSize: normalize(10),
                  marginLeft: normalize(10),
                  marginTop: normalize(5),
                  alignSelf: 'flex-start'
                        }}
              >Qty: 1
              </Text>

              <Text
                style={{
                  color: 'black',
                  fontSize: normalize(10),
                  marginLeft: normalize(10),
                  marginTop: normalize(5),
                  alignSelf: 'flex-start'
                        }}
              >Sold by: ABC Company
              </Text>

</View>
        
            <View style={{
          flexDirection: 'row',
          alignSelf: 'flex-start',
          marginLeft: normalize(10),
          marginTop: normalize(5)
        }}>
              <Text
                style={{
                  
                  fontSize: normalize(10),
                  color: 'black',
                 
                  
                        }}
              >{'\u20B9'} 60
              </Text>
           
             </View>
        
           
             </View>
        
        
        
            </TouchableOpacity>

           


               </View>

           




                      
             

                                    <Text style={{
              color: "black",
              fontFamily: FONTS.Hind,
              fontSize: normalize(14),
              marginLeft: normalize(20),
              marginTop: normalize(20)
            }}>Shipment</Text>


<TouchableOpacity style={{
    height: normalize(40),
    marginTop: normalize(10),
    flexDirection: 'row',
    width: '90%',
    backgroundColor: '#F0F0F0',
    alignSelf: 'center',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: normalize(20)
}}>
             <Text style={{
              color: "black",
              fontFamily: FONTS.Hind,
              fontSize: normalize(12),
              marginLeft: normalize(20),
             
              
            }}>Track shipment</Text>

<Image
                  source={ICONS.right_arrow}
                  style={{
                    height: normalize(10),
                    width: normalize(10),
                    tintColor: '#515151',
                    
                    alignSelf: 'center',
                    marginRight: normalize(10)
                    
                  }}
                  resizeMode={'contain'}
                  tintColor= {'#515151'}
                ></Image>

            </TouchableOpacity>


          

            <Text style={{
             color: "black",
             fontFamily: FONTS.Hind,
             fontSize: normalize(14),
             marginLeft: normalize(20),
             marginTop: normalize(20)
              
            }}>Address</Text>

<View style={{
                height: normalize(90),
                width: '90%',
                alignSelf: 'center',
                backgroundColor: 'white',
                borderWidth: normalize(1),
                borderColor: '#69BE53',
                marginTop: normalize(10),
                borderRadius: normalize(5)
               }}>

                <View>
                <Text 
                numberOfLines={4}
                style={{
              color: "black",
              fontFamily: FONTS.Hind,
              fontSize: normalize(12),
              marginLeft: normalize(10),
              marginTop: normalize(10)
            }}>151/20, R.B.C Road, Central Park, Dum Dum P.O., Kolkata - 700028</Text>
            
            </View>

            
            


           


               </View>


               <Text style={{
             color: "black",
             fontFamily: FONTS.Hind,
             fontSize: normalize(14),
             marginLeft: normalize(20),
             marginTop: normalize(20)
              
            }}>Payment</Text>

<View style={{
                height: normalize(160),
                width: '90%',
                alignSelf: 'center',
                backgroundColor: 'white',
                borderWidth: normalize(1),
                borderColor: '#69BE53',
                marginTop: normalize(10),
                borderRadius: normalize(5)
               }}>

                <View>
                <Text 
                numberOfLines={4}
                style={{
              color: "black",
              fontFamily: FONTS.Hind,
              fontSize: normalize(12),
              marginLeft: normalize(10),
              marginTop: normalize(10),
              fontWeight: '700',
            }}>Payment Methods</Text>

<Text 
                numberOfLines={4}
                style={{
              color: "black",
              fontFamily: FONTS.Hind,
              fontSize: normalize(12),
              marginLeft: normalize(10),
              marginTop: normalize(5),
             
            }}>BHIM UPI</Text>
            
            </View>

            <View style={{
                height: normalize(1),
                width: '95%',
                alignSelf: 'center',
                backgroundColor: 'black',
                marginTop: normalize(5)
            }}/>
            
            <Text 
                numberOfLines={4}
                style={{
              color: "black",
              fontFamily: FONTS.Hind,
              fontSize: normalize(12),
              marginLeft: normalize(10),
              marginTop: normalize(10),
              fontWeight: '700',
            }}>Billing Address</Text>

<Text 
                numberOfLines={4}
                style={{
              color: "black",
              fontFamily: FONTS.Hind,
              fontSize: normalize(12),
              marginLeft: normalize(10),
              marginTop: normalize(5),
             
            }}>151/20, R.B.C Road, Central Park, Dum Dum P.O., Kolkata - 700028</Text>
            

           


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
                                       Customer also bought</Text>

                                       <TouchableOpacity onPress={()=> props.navigation.navigate("Home")}>
<Text style={{
              color: "#69BE53",
              fontFamily: FONTS.Hind,
              fontSize: normalize(14),
              marginRight: normalize(20),
              marginTop: normalize(20)
            }}>See All</Text>
            
</TouchableOpacity>
</View>

<FlatList
                data={DATA2}
                renderItem={renderItem}
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