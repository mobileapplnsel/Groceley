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
import {ViewPropTypes} from 'deprecated-react-native-prop-types'


var status = '';
export default function Recipe_list(props) {


  const [name, setName] = useState('');
  const [mobilenumber, setMobileNumber] = useState('');
  const [emailaddress, setEmailaddress] = useState('');
  const [choosepassword, setChoosepassword] = useState('');
  const [confirmpassword, setConfirmpassword] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [refreshing, setRefreshing] = useState(false);




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
    pic: ICONS.recipe2,
    description: "Chicken kosha",
    quantity: '400g',
    discounted_price: '90',
    real_price: '80',
    
  },

  {
    id: "1",
    pic: ICONS.noodles,
    description: "Noodles",
    quantity: '450g',
    discounted_price: '50',
    real_price: '40',
    discountrate: '0'
  },

  {
    id: "2",
    pic: ICONS.pasta,
    description: "Pasta",
    quantity: '400g',
    discounted_price: '70',
    real_price: '50',
    discountrate: '0'
  },

 


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


  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

 function selectItem(item){
  
props.navigation.navigate("Recipe")
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
      


     

      


    </TouchableOpacity>
  );

  const renderItem2 = ({ item, index }) => (
    <TouchableOpacity
      onPress={(item) => selectItem(item)}
      style={{

        height: normalize(155),
        width: normalize(140),
        backgroundColor: '#F0F0F0' ,
       
        marginLeft: normalize(7),
        borderRadius: normalize(15),
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: normalize(10)
      }}>
        
    
       
        <Image
                  source={item.pic}
                  style={{
                    height: normalize(90),
                    width: normalize(90),
                    marginTop: normalize(5),
                    borderRadius: normalize(5)
                  }}
                  resizeMode={'cover'}
                ></Image>


      <Text
        style={{
          color: 'black',
          fontSize: normalize(10),
          fontWeight: '500',
          marginTop: normalize(5),
          alignSelf: 'center'
        }}
      >{item.description}
      </Text>


     

   

    

     


    </TouchableOpacity>
  );

  return (


    <Fragment>

      <Layout  {...props}>
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>


          <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS == 'ios' ? 'padding' : "height"}>



            <ScrollView showsVerticalScrollIndicator={false} bounces={false} refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }>






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
Recipe list
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
<Text style={{
              color: "#515151",
              
              fontSize: normalize(10),
              
              
            }}>6 items</Text>

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
                                placeholder={'Search For Recipes'}
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
                                flexDirection: 'row',
                                flex: 1,
                                
                                justifyContent: 'center',
                                alignItems: 'center',
                               
                            }}>
                                <FlatList
                                    data={DATA2}
                                    renderItem={renderItem2}
                                    keyExtractor={item => item.id}
                                    showsHorizontalScrollIndicator={false}


                                    style={{


                                        marginLeft: normalize(10),
                                        marginTop: normalize(20),
                                        

                                        width: '50%'

                                    }}


                                />
                                <FlatList
                                    data={DATA2}
                                    renderItem={renderItem2}
                                    keyExtractor={item => item.id}
                                    showsHorizontalScrollIndicator={false}


                                    style={{


                                       // marginLeft: normalize(5),
                                        marginRight: normalize(8),
                                        marginTop: normalize(20),
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
{/* <Loader/>   */}
        </SafeAreaView>
      </Layout>

    </Fragment>


  );
}