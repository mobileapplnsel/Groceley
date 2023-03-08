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


var status = '';
export default function Home(props) {


  const [name, setName] = useState('');
  const [mobilenumber, setMobileNumber] = useState('');
  const [emailaddress, setEmailaddress] = useState('');
  const [choosepassword, setChoosepassword] = useState('');
  const [confirmpassword, setConfirmpassword] = useState('');
  const [modalVisible, setModalVisible] = useState(false);





//   const DATA = [{
//     id: "0",
//     categories: "Bedcovers",
//     pic: ICONS.bedcover
//   },

//   {
//     id: "1",
//     categories: "Bedsheets",
//     pic: ICONS.bedsheet


//   },

//   {
//     id: "2",
//     categories: 'Blankets',
//     pic: ICONS.blanket

//   }



//   ]



 function selectItem(item){
  
props.navigation.navigate("Productlisting")
 }







  const regex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const renderItem1 = ({ item, index }) => (
    <TouchableOpacity
      onPress={(item) => selectItem(item)}
      style={{

        height: normalize(145),
        width: normalize(130),
        backgroundColor: item.id % 2 == '0' ? '#F6F6F6' : '#FFF3F4',

        marginLeft: normalize(10),
        borderRadius: normalize(15)
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



            <ScrollView showsVerticalScrollIndicator={false} bounces={false} >






            <View style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: normalize(10),
              marginRight: normalize(10),
              height: normalize(50)
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
                    height: normalize(15),
                    width: normalize(15),
                    marginTop: normalize(15),
                    marginLeft: normalize(20)
                  }}
                  resizeMode={'contain'}
                ></Image>
              </TouchableOpacity>


              <TouchableOpacity onPress = {() => props.navigation.navigate("Profile")}
                style={{
                  width: normalize(30),
                  height: normalize(30),
                  borderRadius: normalize(15),
                  backgroundColor: '#F36E35'
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



            


            <Text style={{
              color: "#767676",
              fontFamily: FONTS.RubikBold,
              fontSize: normalize(12),
              marginLeft: normalize(30),
              marginTop: normalize(-20)
            }}>Explore</Text>

            <Text style={{
              color: "#767676",
              fontFamily: FONTS.RubikBold,
              fontSize: normalize(13),
              fontWeight: '700',
              marginLeft: normalize(30)
            }}>Product Categories</Text>

            <View>
              {/* <FlatList
                data={DATA}
                renderItem={renderItem1}
                keyExtractor={item => item.id}
                showsHorizontalScrollIndicator={false}

                horizontal={true}
                style={{


                  marginLeft: normalize(25),

                  marginTop: normalize(20),



                }}


              /> */}

            </View>

            <Text style={{
              color: "#767676",
              fontFamily: FONTS.RubikBold,
              fontSize: normalize(12),
              marginLeft: normalize(30),
              marginTop: normalize(20)
            }}>Make Your</Text>

            <Text style={{
              color: "#767676",
              fontFamily: FONTS.RubikBold,
              fontSize: normalize(13),
              fontWeight: '700',
              marginLeft: normalize(30)
            }}>Room Stylish</Text>


            <View>
              <ImageBackground

                source={ICONS.bed}
                style={{
                  height: normalize(80),
                  width: '92%',
                  marginTop: normalize(15),
                  marginLeft: normalize(30),
                  marginBottom: normalize(20)
                }}
                imageStyle={{ borderRadius: normalize(10) }}
                resizeMode={'cover'}

              >

                <Text style={{
                  color: 'white',
                  fontWeight: '700',
                  textAlign: 'center',
                  marginTop: normalize(30),
                  marginLeft: normalize(-20)
                }}>THE
                  ULTIMATE PLEASURE
                  OF SLEEPING</Text>




              </ImageBackground>

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

    </Fragment>


  );
}