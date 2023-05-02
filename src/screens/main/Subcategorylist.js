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
  FlatList
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
import {ViewPropTypes} from 'deprecated-react-native-prop-types'
import { useDispatch, useSelector } from 'react-redux';
import { productRequest, addcartRequest} from '../../redux/reducer/ProfileReducer'

var status = '';
export default function Subcategorylist(props) {

  const [subcategory, setSubcategory] = useState(props?.route?.params?.subcategoryid);
  const [name, setName] = useState('');
  const [mobilenumber, setMobileNumber] = useState('');
  const [emailaddress, setEmailaddress] = useState('');
  const [choosepassword, setChoosepassword] = useState('');
  const [confirmpassword, setConfirmpassword] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [data2, setData2] = useState(false);
  const [num, setNum] = useState(0);
  const [subcategoryid, setSubcategoryid] = useState(props?.route?.params?.subcategoryid);

  const dispatch = useDispatch();
  const ProfileReducer = useSelector(state => state.ProfileReducer);

  useEffect(() => {

        
console.log("Sub category id === ", props?.route?.params?.subcategoryid)
console.log("Name === ", props?.route?.params?.name)
    
subcategory_listing()

    



}, []);

const incNum = () => {
  setNum(num + 1)
}

const decNum = () => {
  setNum(num - 1)
}


  const DATA = [{
    id: "0",
    discountrate: "25%",
   
  },

  {
    id: "1",
    discountrate: "50%",
   

  },

  {
    id: "2",
    discountrate: '75%',
    

  },

  {
    id: "3",
    discountrate: '80%',
   

  }


  ]


  const DATA2 = [{
    id: "0",
    pic: ICONS.bread,
    description: "Hovis Farmhouse Wholemeal",
    quantity: '400g',
    discounted_price: '90',
    real_price: '80',
    discountrate: '20%'
  },

  {
    id: "1",
    pic: ICONS.moreishbread,
    description: "Rye Bread Slicemeal",
    quantity: '450g',
    discounted_price: '50',
    real_price: '40',
    discountrate: '0'
  },

  {
    id: "2",
    pic: ICONS.organicbread,
    description: "Biona Organic Bread",
    quantity: '400g',
    discounted_price: '70',
    real_price: '50',
    discountrate: '0'
  },

  {
    id: "3",
    
    pic: ICONS.streetbread,
    description: "Braker and wheat Bread",
    quantity: '400g',
    discounted_price: '90',
    real_price: '80',
    discountrate: '0'
  }


  ]

  const DATA3 = [{
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


  function addtocart1(item){
  console.log("Product ID ======", item.id)
  
   let obj={
    cart_id: 35,
    product_variant_id: item.id,
    quantity: 1
   }

    isInternetConnected()
    .then(() => {
        dispatch(addcartRequest(obj));
    })
    .catch(err => {
        console.log(err);
        Platform.OS == 'android' ? Toast('Please connect to internet') : Alert.alert("Please connect to internet");
    });

  
  }


  function subcategory_listing(){

    let obj = {
      sub_category_id: subcategoryid,
    }
    isInternetConnected()
        .then(() => {
            dispatch(productRequest(obj));
        })
        .catch(err => {
            console.log(err);
            Platform.OS == 'android' ? Toast('Please connect to internet') : Alert.alert("Please connect to internet");
        });

  }




 function selectItem(item){
console.log("Price === ", item.discount_amount)
console.log("Front image === ", item.image)
console.log("Back image === ", item.back_image)
console.log("Side image === ", item.side_image)
console.log("Description === ", item.description)
console.log("Expiry date=== ", item.expiry_date)
console.log("Expiry date=== ", item.name)

props.navigation.navigate("Productdetails", {
  price: item.discount_amount,
  Front_image: item.image,
  Back_image: item.back_image,
  Side_image: item.side_image,
  Manufactured_by: item.manufacture_by,
  Expiry_date: item.expiry_date,
  Name: item.name,
  Description: item.description,
  Product_id: item.id
})
 }



 if (status == '' || ProfileReducer.status != status) {
  switch (ProfileReducer.status) {
      
      
          


        
            case 'Profile/addcartRequest':
              status = ProfileReducer.status;
              break;
    
          case 'Profile/addcartSuccess':
              status = ProfileReducer.status;
            //  console.log("Add cart response === ", ProfileReducer?.addcartResponse)
              props.navigation.navigate("Cart")
             
             
              break;
    
          case 'Profile/addcartFailure':
    
              status = ProfileReducer.status;
              break;
      

       
  }
}



  const regex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const renderItem1 = ({ item, index }) => (
    <TouchableOpacity
      onPress={(item) => selectItem(item)}
      style={{

        height: normalize(90),
        width: normalize(80),
        backgroundColor: item.id % 2 == '0' ? '#F36E35' : '#69BE53',

        marginLeft: normalize(7),
        borderRadius: normalize(15),
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Text
        style={{
          color: 'white',
          fontSize: normalize(10),
          fontWeight: '600',
          
          alignSelf: 'center'
        }}
      >MIN
      </Text>
      


      <Text
        style={{
          color: 'white',
          fontSize: normalize(15),
          fontWeight: '700',
          marginTop: normalize(5),
          alignSelf: 'center'
        }}
      >{item.discountrate}
      </Text>


      <Text
        style={{
          color: 'white',
          fontSize: normalize(10),
          fontWeight: '600',
          marginTop: normalize(5),
          alignSelf: 'center'
        }}
      >OFF
      </Text>


    </TouchableOpacity>
  );

  const renderItem2 = ({ item, index }) => (
    <TouchableOpacity
      onPress={() => selectItem(item)}
      style={{

        height: normalize(220),
        width: normalize(140),
        backgroundColor: '#F0F0F0' ,
       
        marginLeft: normalize(7),
        borderRadius: normalize(15),
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: normalize(10)
      }}>
        
       {/* {item.discountrate !== '0' ? (  */}
       
       <View style={{
            height: normalize(20),
            width: normalize(50),
            backgroundColor: '#F36E35',
            alignSelf: 'flex-start',
            marginLeft: normalize(10),
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: normalize(5)
        }}>
            <Text
            style={{
                color: 'white',
                fontSize: normalize(10)

            }}>{item.discount}% OFF</Text>
        </View>
       {/* ) : (null)} */}
       
        <Image
                 source={{
                  uri: item.image


              }}
                  style={{
                    height: normalize(80),
                    width: normalize(80),
                    marginTop: normalize(5),
                    
                  }}
                  resizeMode={'contain'}
                ></Image>


      <Text
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



<TouchableOpacity 
  //()=> props.navigation.navigate("Cart")
   onPress={()=> addtocart1(item)
                
}

style={{
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

     


    </TouchableOpacity>
  );


  if (status == '' || ProfileReducer.status != status) {
    switch (ProfileReducer.status) {
        case 'Profile/productRequest':
            status = ProfileReducer.status;
            break;
  
        case 'Profile/productSuccess':
            status = ProfileReducer.status;
            console.log("Subcategory response === ", ProfileReducer?.productResponse)
            
           
           setData2(ProfileReducer?.productResponse?.respData)
            break;
  
        case 'Profile/productFailure':
  
            status = ProfileReducer.status;
            break;
  
            case 'Profile/addcartRequest':
            status = ProfileReducer.status;
            break;
  
        case 'Profile/addcartSuccess':
            status = ProfileReducer.status;
            console.log("Subcategory response === ", ProfileReducer?.addcartResponse)
            
           
           setData2(ProfileReducer?.addcartResponse?.respData)
            break;
  
        case 'Profile/addcartFailure':
  
            status = ProfileReducer.status;
            break;
        
            
  
     
            
  
  
  
          
  
      
  
  
  
  
          
  
  
  
         
    }
  }
  

  return (


    <Fragment>

      <Layout  {...props}>
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>


          <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS == 'ios' ? 'padding' : "height"}>



            <ScrollView showsVerticalScrollIndicator={false} bounces={false} >






            <View style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
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

                  setModalVisible(!modalVisible)

                }}>
                <Image
                  source={ICONS.menu}
                  style={{
                    height: normalize(20),
                    width: normalize(20),
                    
                    marginLeft: normalize(20)
                  }}
                  resizeMode={'contain'}
                ></Image>
              </TouchableOpacity>


<View style={{
    alignSelf: 'flex-start',
    marginRight: normalize(97),
    //backgroundColor: 'red',
    width: '40%',
    
}}>
              <Text style={{
                color: 'black',
                fontSize: normalize(14),
                fontWeight: '600',
               

              }}>
{props?.route?.params?.name}
              </Text>





              </View>





              <TouchableOpacity onPress = {() => props.navigation.navigate("Profile")}
                style={{
                  width: normalize(30),
                  height: normalize(30),
                  borderRadius: normalize(15),
                  backgroundColor: '#F36E35',
                  marginTop: normalize(-5)
                }}

              >
                <Image
                  source={ICONS.user}
                  style={{
                    height: normalize(15),
                    width: normalize(15),
                    marginTop: normalize(7),
                    alignSelf: 'center'
                  }}
                  resizeMode={'contain'}
                  tintColor= {'white'}
                ></Image>
              </TouchableOpacity>




           
            </View>

           

<View style={{
    alignSelf: 'flex-start',
    marginLeft: normalize(60),
   // backgroundColor: 'red',
    width: '40%',
    marginTop: normalize(-15)
}}>
{/* <Text style={{
              color: "#515151",
              
              fontSize: normalize(10),
              
              
            }}>530 Products</Text> */}

</View>



<TouchableOpacity style={{
  flexDirection: 'row',
  justifyContent: 'center'
}}>

            <TextInput
                                value={name}
                                onChangeText={_ => setName(_)}
                                marginTop={normalize(15)}
                                alignSelf={'center'}
                                keyboardType={'email-address'}
                                fontSize={normalize(14)}
                                width={normalize(290)}
                                placeholder={'Search For Products'}
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
                    marginTop: normalize(7),
                    position: 'absolute',
                    right: 35,
                    bottom: 18
                  }}
                  resizeMode={'contain'}
                  tintColor= {'black'}
                ></Image>

</TouchableOpacity>

          

           <View style={{
            justifyContent: 'center',
           
           }}>

            {/* <CarouselCards /> */}

            </View>
              

          




<View style={{
                                flexDirection: 'row',
                                flex: 1,
                                
                                justifyContent: 'center',
                                alignItems: 'center',
                               
                            }}>
                                <FlatList
                                    data={data2}
                                    renderItem={renderItem2}
                                    keyExtractor={item => item.id}
                                    showsHorizontalScrollIndicator={false}


                                    style={{


                                        marginLeft: normalize(10),

                                        

                                        width: '50%'

                                    }}


                                />
                                <FlatList
                                    data={data2}
                                    renderItem={renderItem2}
                                    keyExtractor={item => item.id}
                                    showsHorizontalScrollIndicator={false}


                                    style={{


                                       // marginLeft: normalize(5),
                                        marginRight: normalize(8),
                                        
                                        width: '50%'



                                    }}


                                />
                            </View>



            </ScrollView>

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
      <Loader visible={ProfileReducer?.status == 'Profile/productRequest'}/> 
      <Loader visible={ProfileReducer?.status == 'Profile/addcartRequest'}/>
    </Fragment>


  );
}