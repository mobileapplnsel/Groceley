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
import CarouselCards from '../../components/CarouselCards'
import { needsOffscreenAlphaCompositing, tintColor } from 'deprecated-react-native-prop-types/DeprecatedImagePropType';
import { useDispatch, useSelector } from 'react-redux';
import { productRequest, addfavouritesRequest, deletefavouritesRequest} from '../../redux/reducer/ProfileReducer'

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
    const [refreshing, setRefreshing] = useState(false);
    const [num, setNum] = useState(0);
    const [totalprice, setTotalprice] = useState(0);
    const [data2, setData2] = useState(false);

    const dispatch = useDispatch();
  const ProfileReducer = useSelector(state => state.ProfileReducer);

   console.log("Discounted price === ", props?.route?.params?.price)
   console.log("Front page 2 === ", props?.route?.params?.Front_image)
   console.log("Back page 2 === ", props?.route?.params?.Back_image)
   console.log("Side page 2 === ", props?.route?.params?.Side_image)
   console.log("Expiry date 2 === ", props?.route?.params?.Expiry_date)
   console.log("Manufactured by 2 === ", props?.route?.params?.Manufactured_by)
   console.log("Name 2 === ", props?.route?.params?.Name)
   console.log("Description 2 === ", props?.route?.params?.Description)

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

   
   
      useEffect(() => {

        
        console.log("Sub category id === ", props?.route?.params?.subcategoryid)
            
        top_products_listing()
        
            
        
        
        
        }, []);

        function top_products_listing(){

         
          isInternetConnected()
              .then(() => {
                  dispatch(productRequest());
              })
              .catch(err => {
                  console.log(err);
                  Platform.OS == 'android' ? Toast('Please connect to internet') : Alert.alert("Please connect to internet");
              });
      
        }
      
      const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        setTimeout(() => {
          setRefreshing(false);
        }, 2000);
      }, []);

function favourite(){
    setItemselected(1)
}

function favourite1(){
    setItemselected(0)
}
      

const incNum = () => {
  setNum(num + 1)
 
}


const decNum = () => {
  if(num > 0) {
  setNum(num - 1)
  
  } else {
    setNum(0)
  }
}        

console.log("Number === ", num )
  



 function selectItem(item){
    props.navigation.navigate("Home")
 }


 if (status == '' || ProfileReducer.status != status) {
  switch (ProfileReducer.status) {
      case 'Profile/productRequest':
          status = ProfileReducer.status;
          break;

      case 'Profile/productSuccess':
          status = ProfileReducer.status;
          console.log("Top product list response === ", ProfileReducer?.productResponse?.respData)
          
         // setCarouseldata(ProfileReducer?.homeResponse?.respData?.banner)
         setData2(ProfileReducer?.productResponse?.respData)
          break;

      case 'Profile/productFailure':

          status = ProfileReducer.status;
          break;

      
          case 'Profile/addfavouritesRequest':
          status = ProfileReducer.status;
          break;


          

      case 'Profile/addfavouritesSuccess':
          status = ProfileReducer.status;
          console.log("Add Favourites response === ", ProfileReducer?.addfavouritesResponse)
          
        
          break;

      case 'Profile/addfavouritesFailure':

          status = ProfileReducer.status;
          break;



          case 'Profile/deletefavouritesRequest':
            status = ProfileReducer.status;
            break;
  
  
            
  
        case 'Profile/deletefavouritesSuccess':
            status = ProfileReducer.status;
            console.log("Delete Favourites response === ", ProfileReducer?.deletefavouritesResponse)
            
           
            break;
  
        case 'Profile/deletefavouritesFailure':
  
            status = ProfileReducer.status;
            break;

   
      

       
  }
}



    const regex =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const renderItem = ({ item, index }) => (

        <TouchableOpacity 
         
        
        style={{
           
           height: normalize(130),
            width: normalize(120),
        }}>





<Image
                                        source={item.pic}
                                        style={{
                                            height: normalize(130),
                                           
                                            alignSelf: 'center',
                                            
                                           
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
                       source={{
                        uri: item.image
      
      
                    }}
                      style={{
                        height: normalize(60),
                        width: normalize(60),
                        alignSelf: 'center',
                        marginTop: normalize(5),
                        
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
          >{item.name}
          </Text>
    
    
          <Text
            style={{
              color: 'black',
              fontSize: normalize(10),
              marginLeft: normalize(10),
              marginTop: normalize(5),
              alignSelf: 'flex-start'
                    }}
          >{item.qty} packet
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
          >{'\u20B9'} {item.price}
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
          >{'\u20B9'} {item.discount_amount}
          </Text>
          </View>
    
    
    
    <TouchableOpacity onPress={()=> props.navigation.navigate("Cart")}
    
    style={{
      height: normalize(30),
      width: normalize(50),
      backgroundColor: 'white',
      borderWidth: normalize(2),
      borderColor: '#69BE53',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: normalize(5),
      marginLeft: normalize(10),
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

            <Layout  {...props}>
                <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>


                    <KeyboardAvoidingView
                        style={{ flex: 1 }}
                        behavior={Platform.OS == 'ios' ? 'padding' : "height"}>



                        {/* <ScrollView showsVerticalScrollIndicator={false} bounces={false} > */}






                        





                        <ScrollView showsVerticalScrollIndicator={false} bounces={false}
                        
                        refreshControl={
                            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                          }
                        >



                            
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
      <TouchableOpacity onPress={()=>props.navigation.navigate("Home")}
                                    style={{
                                        height: normalize(30),
                                        width: normalize(30),
                                       
                                        
                                        alignSelf: 'flex-start',
                                       
                                        marginTop: normalize(5),
                                        marginLeft: normalize(10)
                                    }}
                                    
                                    />
   
   <Image
                                        source={ICONS.previous}
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


                                    
                                    
                                    <View>
              {/* <FlatList
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


              /> */}




<ScrollView horizontal={true} showsHorizontalScrollIndicator={false} 
style={{
  marginTop: normalize(10)

}}>

<Image
                  source={{
                    uri: props?.route?.params?.Front_image
                  }}
                  style={{
                    height: normalize(140),
                    width: normalize(150),
                    marginLeft: normalize(10),
                    borderRadius: normalize(15)
                  }}
                  resizeMode={'cover'}
                  
                ></Image>


<Image
                  source={{
                    uri: props?.route?.params?.Back_image
                  }}
                  style={{
                    height: normalize(140),
                    width: normalize(150),
                    marginLeft: normalize(10),
                    borderRadius: normalize(15)
                  }}
                  resizeMode={'cover'}
                  
                ></Image>


<Image
                  source={{
                    uri: props?.route?.params?.Side_image
                  }}
                  style={{
                    height: normalize(140),
                    width: normalize(150),
                    borderRadius: normalize(15),
                    marginLeft: normalize(10)
                  }}
                  resizeMode={'cover'}
                  
                ></Image>


</ScrollView>




       



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
                                        alignSelf: 'flex-end',
                                        right: 10

                                    }}>
                                      <TouchableOpacity onPress={()=> decNum()}
                                      style={{
                                        height: normalize(20),
                                        width: '25%',
                                        
                                        alignSelf: 'center'
                                      }}
                                      >
 <Text 
                                        style={{
                                            fontSize: normalize(12),
                                            textAlign: 'center',
                                            color: 'white',
                                            marginTop: normalize(1)
                                        }}
                                        >
                                            -
                                        </Text>
                                        </TouchableOpacity>

                                        <Text
                                        style={{
                                            fontSize: normalize(12),
                                            
                                            color: 'white'
                                        }}
                                        >
                                          {num}
                                        </Text>


                                        <TouchableOpacity onPress={()=> incNum()}
                                      style={{
                                        height: normalize(20),
                                        width: '25%',
                                        
                                        alignSelf: 'center'
                                      }}
                                      >

                                        <Text
                                        style={{
                                            fontSize: normalize(12),
                                            textAlign: 'center',
                                            color: 'white'
                                        }}
                                        >
                                            +
                                        </Text>
                                        </TouchableOpacity>
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
                                >{props?.route?.params?.Name}
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

>{props?.route?.params?.Description}</Text>
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
}}>{props?.route?.params?.Manufactured_by}</Text>

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
}}>{(props?.route?.params?.Expiry_date)?.split("-")?.reverse()?.join("-")}</Text>

</View>           


                        <Text style={{
                            fontFamily: FONTS.Hind,
                            color: '#646464',
                            fontSize: normalize(10),
                            marginLeft: normalize(20),
                            marginTop: normalize(10)
                        }}> PRICE PER ITEM</Text>
     <Text style={{
                            fontFamily: FONTS.Hind,
                            color: 'black',
                            fontSize: normalize(14),
                            marginLeft: normalize(25),
                            fontWeight: '700',
                            marginTop: normalize(5)
                        }}>{'\u20B9'}{props?.route?.params?.price}</Text>



                      
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
                data={data2}
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
                    {/* <Loader visible={ProfileReducer?.status == 'Profile/productRequest'}/> */}
                </SafeAreaView>
            </Layout>
            <Loader visible={ProfileReducer?.status == 'Profile/productRequest'}/>
        </Fragment>


    );
}