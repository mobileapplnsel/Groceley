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
import CarouselCards3 from '../../components/CarouselCards3'
import { needsOffscreenAlphaCompositing, tintColor } from 'deprecated-react-native-prop-types/DeprecatedImagePropType';
import {addcartRequest, cartlistingRequest, deletecartRequest, createcartRequest} from '../../redux/reducer/ProfileReducer';
import { useDispatch, useSelector } from 'react-redux';
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
    const [refreshing, setRefreshing] = useState(false);
    const [data2, setData2] = useState(ProfileReducer?.cartlistingResponse?.respData?.cart_details);
    const dispatch = useDispatch();
    const ProfileReducer = useSelector(state => state.ProfileReducer);

    useEffect(() => {

        
    create_cart()
    
        
    
    
    
    }, []);
    
    
    const [data,setData] = useState([{



    


        id: "1",
        categories: "Bedsheets",
        pic: ICONS.milk,
        description: "Amul Moti Homogenized Toned Milk",
        realprice: "40",
        share: ICONS.community_share,
        quantity: 1,
        info: ICONS.info2

    },

    {
        id: "2",
        categories: 'Blankets',
        pic: ICONS.cornflakes,
        description: "Kellogg's Corn Flakes Cereal",
        realprice: "50",
        share: ICONS.community_share,
        quantity: 1,
        info: ICONS.info2

    },

    {
        id: "3",
        categories: 'Blankets',
        pic: ICONS.cornflakes2,
        description: "Kellogg's Muesli Cereal Crunchy Nut, cereals & fruits",
        realprice: "80",
        share: ICONS.community_share,
        quantity: 1,
        info: ICONS.info2
    
   




}])

   
function create_cart(){
    let obj ={
        user_id : 1,
        status: "Active"
    }
    isInternetConnected()
        .then(() => {
            dispatch(createcartRequest(obj));
        })
        .catch(err => {
            console.log(err);
            Platform.OS == 'android' ? Toast('Please connect to internet') : Alert.alert("Please connect to internet");
        });
}

function cart_list(){
    let obj ={
        user_id : 1,
        status: "Active",

    }
    isInternetConnected()
        .then(() => {
            dispatch(cartlistingRequest(obj));
        })
        .catch(err => {
            console.log(err);
            Platform.OS == 'android' ? Toast('Please connect to internet') : Alert.alert("Please connect to internet");
        });
}
      

function favourite(){
    setItemselected(1)
}


      

function toggleModal(){
    setModalFilterVisible(!isModalFilterVisible);
}

        
        
function clickshare(){
   
    setModalFilterVisible(false)
    ShareExample()
    }



 function selectItem(item){
    props.navigation.navigate("Productdetails")
 }

const ShareExample = async () => {
        try {
          const result = await Share.share({
              message: 'https://play.google.com/store/apps/details?id=nic.goi.aarogyasetu&hl=en',
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

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);


  if (status == '' || ProfileReducer.status != status) {
    switch (ProfileReducer.status) {
        case 'Profile/addcartRequest':
            status = ProfileReducer.status;
            break;
  
        case 'Profile/addcartSuccess':
            status = ProfileReducer.status;
            console.log("Subcategory response === ", ProfileReducer?.addcartResponse)
            
           
           //setData2(ProfileReducer?.addcartResponse?.respData)
            break;
  
        case 'Profile/addcartFailure':
  
            status = ProfileReducer.status;
            break;


  
            case 'Profile/cartlistingRequest':
            status = ProfileReducer.status;
            break;
  
        case 'Profile/cartlistingSuccess':
            status = ProfileReducer.status;
           // console.log("Cartlisting response === ", ProfileReducer?.cartlistingResponse?respData?.cart_details);
        console.log("Cartlisting response === ",ProfileReducer?.cartlistingResponse?.respData?.cart_details)
           
        setData2(ProfileReducer?.cartlistingResponse?.respData?.cart_details)

            break;
  
        case 'Profile/cartlistingFailure':
  
            status = ProfileReducer.status;
            break;

            


            case 'Profile/deletecartRequest':
                status = ProfileReducer.status;
                break;
      
            case 'Profile/deletecartSuccess':
                status = ProfileReducer.status;
                console.log("Subcategory response === ", ProfileReducer?.cartlistingResponse)
                
               
              // setData2(ProfileReducer?.cartlistingResponse?.respData)
                break;
      
            case 'Profile/deletecartFailure':
      
                status = ProfileReducer.status;
                break;
        
                case 'Profile/createcartRequest':
                    status = ProfileReducer.status;
                    break;
          
                case 'Profile/createcartSuccess':
                    status = ProfileReducer.status;
                    console.log("Cart response === ", ProfileReducer?.createcartResponse)
                    
                    cart_list()
                
                    break;
          
                case 'Profile/createcartFailure':
          
                    status = ProfileReducer.status;
                    break;
         
    }
  }


    const regex =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


        const handleQuantityIncrease = (index) => {
            const newItems = [...data];

            newItems[index].quantity++;
        
            setData(newItems);

            console.log("Data ======= ", newItems)
            console.log("Data2 ======= ", newItems[index].quantity)
            console.log("Data3 ======= ", index)
            console.log("Data4 ======= ", newItems[index].description)
     };

        const handleQuantityDecrease = (index) => {
            const newItems = [...data];

            if (newItems[index].quantity > 1) {
        
            newItems[index].quantity--;

        
            setData(newItems);

            } 

            console.log("Data5 ======= ", newItems)
            console.log("Data6 ======= ", newItems[index].quantity)
            console.log("Data7 ======= ", newItems)
            console.log("Data8 ======= ", newItems[index].quantity)
            console.log("Data9 ======= ", index)
            console.log("Data10 ======= ", newItems[index].description)
            
        };


     

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
                        >{item.product_name}</Text>
    <Text
                        
                            style={{
                                fontSize: normalize(11),
                                color: "black",
                                //marginTop: normalize(10),
                                fontWeight: '700'
                            }}
                        >{'\u20B9'}{item.price} x {item.quantity}</Text>


                        <View style={{
                            flexDirection: 'row'
                        }}>
    
    <TouchableOpacity onPress={()=>toggleModal()}
    
    style={{
        flexDirection: 'row',
      
        alignItems: 'center',
        marginTop: normalize(5)
    }}>
    <Image
                  source={ICONS.share}
                  style={{
                    height: normalize(15),
                    width: normalize(15),
                    
                  }}
                  resizeMode={'contain'}
                ></Image>
     <Text style={{
                        color: 'black',
                        fontSize: normalize(12),
                        fontWeight: '700',
                        fontFamily: FONTS.Hind,
                        marginLeft: normalize(5)
                    }}
                    >Buy Together</Text>
    <Image
                  source={ICONS.info2}
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

<TouchableOpacity>
    <Image
                  source={ICONS.delete}
                  style={{
                    height: normalize(10),
                    width: normalize(10),
                    tintColor: '#F36E35',
                    marginTop: normalize(6),
                    marginLeft: normalize(10)
                  }}
                  resizeMode={'contain'}
                  tintColor={'black'}
                ></Image> 
    </TouchableOpacity>
                    </View>

                    </View>
                    <View style={{
                        marginTop: normalize(8),
                        marginLeft: normalize(-5)
                    }}>

                    <TouchableOpacity onPress = {()=>{
             handleQuantityIncrease(index)
            }}
                    
                    
                    style={{
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
                    <TouchableOpacity 
                    onPress = {()=>{
                      handleQuantityDecrease(index)
                    }}
                    
                    style={{
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
                        }} 
                        
                        refreshControl={
                            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                          }
                        >



                            
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
      
      <TouchableOpacity 
             onPress={()=> props.navigation.goBack()}
             >

          
<Image
                  source={ICONS.previous}
                  style={{
                   height: normalize(15),
                    width: normalize(20),
                    marginTop: normalize(20),
                    marginLeft: normalize(20),
                    
                  }}
                  resizeMode={'contain'}
                 
                ></ Image>
</TouchableOpacity>


                                    
   
               
                
                <TouchableOpacity onPress={()=>favourite()}
                                    style={{
                                        height: normalize(30),
                                        width: normalize(30),
                                       
                                        
                                        
                                        marginRight: normalize(10),
                                        marginTop: normalize(5)

                                    }}
                                    
                                    >


                
                
            
                                    
                                    </TouchableOpacity>
                                   

                                                    



                                   


</View>

<Text
                                        style={{
                                            fontSize: normalize(14),
                                            fontFamily: FONTS.Hind,
                                            marginLeft: normalize(20),
                                            color: 'black',
                                            marginTop: normalize(10)
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
                data={data2}
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
                                        <TouchableOpacity onPress={()=>clickshare()}
                
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
                                        <Image
                            source={ICONS.community_share}
                            style={{
                                height: normalize(15),
                                width: normalize(15),
                                alignSelf: 'center',
                               tintColor: 'white'
                                
                                
                            }}
                            resizeMode={'contain'}
                            tintColor={'white'}
                        ></Image>  

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

                                       
                                    <TouchableOpacity onPress={()=>setModalFilterVisible(false)}
                
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
 {/* <Loader/>   */}
                </SafeAreaView>
                {/* <CarouselCards3/> */}
            </Layout>

        </Fragment>


    );
}