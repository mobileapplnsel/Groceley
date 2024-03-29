import React, { Fragment, useState, useEffect, useId } from 'react';
import {
  FlatList,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  Platform,
  ScrollView,
} from 'react-native';
import Modal from 'react-native-modal';
import { COLORS, FONTS, ICONS } from '../themes/Themes';
import normalize from '../utils/helpers/normalize';
import PropTypes from 'prop-types';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation, useIsFocused } from '@react-navigation/native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import constants from '../utils/helpers/constants';

import Toast from '../utils/helpers/Toast';
import isInternetConnected from '../utils/helpers/NetInfo';


import Loader from '../utils/helpers/Loader';



var status = '';

export default function DrawerMenuAdminexpanded(props) {

  const [modalVisible, setModalVisible] = useState(props.modalVisible);
  const [show1, setShow1] = useState(false);
  const [userId, setUserId] = useState('');
  const [name, setName] = useState('');
  const [dateofjoining, setDateofjoining] = useState('');
  const isFocused = useIsFocused();

  const DATA = [
    {
      id: "0",
      menu: "My Details",

    },
    {
      id: "1",
      menu: "Calendar",

    },
    {
      id: "2",
      menu: "Query & Doubts",

    },



  ];

  const navigation = useNavigation();



  function selectitem(item) {
    setShow1(false)
    if (item.id == "0") {
      onPress();
      onBackdropPress()
      //navigation.navigate("MyDetails")

    } else if (item.id == "1") {
      onPress();
      onBackdropPress()
      // navigation.navigate("Calendarscreen", {
      //  user_id: userId
      // })
    } else if (item.id == "2") {
      onPress();
      onBackdropPress()
      // navigation.navigate("Queryanddoubts")
    }
  }

  const renderItem1 = ({ item, index }) => (
    <TouchableOpacity style={{

      justifyContent: 'center',
      marginBottom: normalize(15),
      marginTop: normalize(-5),

      height: normalize(30),
      width: '100%',

    }}

      onPress={() => {
        selectitem(item)

      }}>




      <Text style={{
        fontSize: normalize(12),

        color: 'white',
        marginLeft: normalize(50),


      }}>

        {item.menu}
      </Text>


    </TouchableOpacity>

  );


  function onPressCancel() {
    if (props.onPressCancel) {
      props.onPressCancel();
    }
    <Image
      source={ICONS.cross}
      resizeMode="contain"
      style={{
        marginTop: Platform.OS == 'ios' ? normalize(40) : normalize(30),
        marginRight: normalize(10),
        height: normalize(25),
        width: normalize(25),
        alignSelf: 'flex-end',
        backgroundColor: 'white',
      }}
    />;
  }

  function onPressOK() {
    if (props.onPressOK) {
      props.onPressOK();
    }
  }

  function onitemPress() {
    if (props.onitemPress) {
      props.onitemPress();
    }
  }

  function onBackdropPress() {
    if (props.onBackdropPress) {
      props.onBackdropPress();
    }
  }

  function onPress() {
    if (props.onPress) {
      props.onPress();
    }
  }

  function onPressLeft() {
    if (props.onPressLeft) {
      props.onPressLeft();
    }
  }
  function myaccount() {
    //navigation.navigate('MyAccount');
    setModalVisible(false);
  }
  

  return (
    <Modal
      animationIn={'slideInLeft'}
      animationOut={'slideOutLeft'}
      backdropTransitionOutTiming={0}
      hideModalContentWhileAnimating={true}
      backdropOpacity={0.5}
      isVisible={props.modalVisible}
      style={{ margin: 0 }}
      onBackdropPress={() => onBackdropPress()}
    >
      <Fragment>

        <SafeAreaView
          style={{
            flex: 1,
          backgroundColor: 'white',
            height: '80%',
            width: '70%',
            alignSelf: 'flex-start',
            //marginTop: normalize(-10),
            borderRadius: normalize(5)
          }}>
          <ScrollView showsVerticalScrollIndicator={false}>

            <View
              style={{
                height: (Platform.OS == 'android') ? normalize(100) : normalize(120),
            backgroundColor: '#69BE53',
        
           
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                borderBottomRightRadius: normalize(40)
              }}>


             

{/* <View
                style={{
                  width: normalize(30),
                  height: normalize(30),
                  borderRadius: normalize(15),
                  backgroundColor: 'white',
                  marginLeft: normalize(10)

                }}

              >
                <Image
                  source={ICONS.user}
                  style={{
                    height: normalize(15),
                    width: normalize(15),
                    marginTop: normalize(7),
                    alignSelf: 'center',
                    tintColor: 'black'
                  }}
                  resizeMode={'contain'}
                  tintColor= {'black'}
                ></Image>


              </View> */}

              {/* <View>


                <Text style={{
                  color: 'white',
                  fontSize: normalize(14),
                  alignSelf: 'center',
                  marginRight: normalize(40)

                }}>Welcome, User Name</Text>
                
              
              </View> */}



              

             


             
              





            </View>
            {/* <Text 
            numberOfLines={1}
            
            style={{
                  color: 'white',
                  fontSize: normalize(12),
                  alignSelf: 'center',
                  marginRight: normalize(40),
                  marginTop: normalize(-30),
                  //marginLeft: normalize(-20)
                  
                }}>USERNAME: userv12345@#</Text> */}
                

            
            <View
              style={{
                marginRight: normalize(20),
                marginLeft: normalize(10),
                marginTop: normalize(25),

              }}>



              <TouchableOpacity onPress={() => {
                onPress();
                onBackdropPress()
                navigation.navigate("Home")
              }
              }
                style={{
                  flexDirection: 'row',
                 marginTop: normalize(10)
                }}>
                <Image
                  source={ICONS.home}
                  resizeMode="contain"
                  style={{
                    height: normalize(18),
                    width: normalize(18),
                    tintColor: '#F36E35'
                  }}
                  tintColor='#F36E35'
                />
                <Text
                  style={{
                    fontSize: normalize(13),
                    marginLeft: normalize(10),

            color: '#767676',
            
                  }}>
                  Home
                </Text>
              </TouchableOpacity>



              <TouchableOpacity
                onPress={() => {

                  // selfservice()
                  setShow1(!show1);

                  // Keyboard.dismiss()


                  //  onPress();

                  //navigation.navigate("ESS")
                }}>



             
              </TouchableOpacity>

              {show1 == true ? (<FlatList
                data={DATA}
                renderItem={renderItem1}
                keyExtractor={item => item.id}
                scrollEnabled={true}
                style={{


                  width: normalize(217),
                  marginTop: normalize(2),

                  marginLeft: normalize(-5),
                  backgroundColor: '#004F98'

                }}
              // ListHeaderComponent={() => {
              //   return (
              //     <Text style={{
              //       marginLeft: normalize(10),
              //       fontSize: normalize(14),
              //       fontFamily: FONTS.OpenSansRegular,
              //       color: '#7D7D7D',
              //       marginVertical: normalize(10),
              //     }}>COURSES</Text>
              //   )
              // }}

              />) : null}

<TouchableOpacity
                onPress={() => {

                  onPress();
                  onBackdropPress()
                  navigation.navigate('Login');
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    marginTop: normalize(20),
                  }}>
                  <Image
                    source={ICONS.login}
                    resizeMode="contain"
                    style={{
                      height: normalize(18),
                      width: normalize(18),
                      tintColor: '#F36E35'
                    }}
                    tintColor='#F36E35'
                  />

                  <Text
                    style={{
                      color: '#767676',
                      fontSize: normalize(13),

                      marginLeft: normalize(10),
                    }}>
                    Login
                  </Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {

                  onPress();
                  onBackdropPress()
                  navigation.navigate('Orderlist');
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    marginTop: normalize(20),
                  }}>
                  <Image
                    source={ICONS.order}
                    resizeMode="contain"
                    style={{
                      height: normalize(18),
                      width: normalize(18),
                      tintColor: '#F36E35'
                    }}
                    tintColor='#F36E35'
                  />

                  <Text
                    style={{
                      color: '#767676',
                      fontSize: normalize(13),

                      marginLeft: normalize(10),
                    }}>
                    Order List
                  </Text>
                </View>
              </TouchableOpacity>


              <TouchableOpacity
                onPress={() => {
                  onPress();
                  onBackdropPress()
                  navigation.navigate('ChangePassword');
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    marginTop: normalize(20),
                  }}>
                  <Image
                    source={ICONS.change_password}
                    resizeMode="contain"
                    style={{
                      height: normalize(18),
                      width: normalize(18),
                      tintColor: '#F36E35'
                     
                    }}
                      tintColor= '#F36E35'
                  
                  />
                  <Text
                    style={{
                      fontSize: normalize(13),
                      color: '#767676',
                    

                      marginLeft: normalize(10),
                    }}>
                    Change Password
                  </Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  onPress();
                  onBackdropPress()
                  navigation.navigate('Membership');
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    marginTop: normalize(20),
                  }}>
                  <Image
                    source={ICONS.multiuser}
                    resizeMode="contain"
                    style={{
                      height: normalize(18),
                      width: normalize(18),
                      tintColor: '#F36E35'
                     
                    }}
                      tintColor= '#F36E35'
                  
                  />
                  <Text
                    style={{
                      fontSize: normalize(13),
                      color: '#767676',
                    

                      marginLeft: normalize(10),
                    }}>
                    Membership
                  </Text>
                </View>
              </TouchableOpacity>
             

              <TouchableOpacity
                onPress={() => {
                  onPress();
                  onBackdropPress()
                  navigation.navigate('Notification');
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    marginTop: normalize(20),
                  }}>
                  <Image
                    source={ICONS.notifications}
                    resizeMode="contain"
                    style={{
                      height: normalize(18),
                      width: normalize(18),
                      tintColor: '#F36E35'
                    
                    }}
                    tintColor='#F36E35'
                  />
                  <Text
                    style={{
                      fontSize: normalize(13),
                      color: '#767676',

                      marginLeft: normalize(10),
                    }}>
                    Notifications
                  </Text>
                </View>
              </TouchableOpacity>


              <TouchableOpacity
                onPress={() => {
                  onPress();
                  onBackdropPress()
                  navigation.navigate('Recipe_list');
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    marginTop: normalize(20),
                  }}>
                  <Image
                    source={ICONS.recipe}
                    resizeMode="contain"
                    style={{
                      height: normalize(18),
                      width: normalize(18),
                      tintColor: '#F36E35'
                    
                    }}
                    tintColor='#F36E35'
                  />
                  <Text
                    style={{
                      fontSize: normalize(13),
                      color: '#767676',

                      marginLeft: normalize(10),
                    }}>
                    Recipe
                  </Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  onPress();
                  onBackdropPress()
                  navigation.navigate('Select_delivery_address');
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    marginTop: normalize(20),
                  }}>
                  <Image
                    source={ICONS.address_book}
                    resizeMode="contain"
                    style={{
                      height: normalize(18),
                      width: normalize(18),
                      tintColor: '#F36E35'
                   
                    }}
                    tintColor='#F36E35'
                  />
                  <Text
                    style={{
                      fontSize: normalize(13),
                      color: '#767676',

                      marginLeft: normalize(10),
                    }}>
                    Address Book
                  </Text>
                </View>
              </TouchableOpacity>


              <TouchableOpacity
                onPress={() => {
                  onPress();
                  onBackdropPress()
                 navigation.navigate('ReferAndEarn');
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    marginTop: normalize(20),
                  }}>
                  <Image
                    source={ICONS.referandearn}
                    resizeMode="contain"
                    style={{
                      height: normalize(18),
                      width: normalize(18),
                      tintColor: '#F36E35'
                   
                    }}
                    tintColor='#F36E35'
                  />
                  <Text
                    style={{
                      fontSize: normalize(13),
                      color: '#767676',

                      marginLeft: normalize(10),
                    }}>
                    Refer & Earn
                  </Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {

                  onPress();
                  onBackdropPress()
                  navigation.navigate('Helpandsupport')
                }}
                  >
                <View
                  style={{
                    flexDirection: 'row',
                    marginTop: normalize(20),
                  }}>
                  <Image
                    source={ICONS.help}
                    resizeMode="contain"
                    style={{
                      height: normalize(18),
                      width: normalize(18),
                      tintColor: '#F36E35'
                    }}
                    tintColor= '#F36E35'
                  />
                  <Text
                    style={{
                      fontSize: normalize(13),
                      marginLeft: normalize(10),

                      color: '#767676',
                    }}>
                   Help & Support
                  </Text>
                </View>
              </TouchableOpacity>

              
              <TouchableOpacity
                onPress={() => {
                  onPress();
                  onBackdropPress()
                 // logout()
                  navigation.navigate('Login');
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    marginTop: normalize(20),
                  }}>
                  <Image
                    source={ICONS.rightarrow}
                    resizeMode="contain"
                    style={{
                      height: normalize(20),
                      width: normalize(20),
                      tintColor: '#F36E35',
                    }}
                    tintColor='#F36E35'
                  />
                  <Text
                    style={{
                      fontSize: normalize(13),
                      color: '#767676',

                      marginLeft: normalize(10),
                    }}>
                    Sign Out
                  </Text>
                </View>
                


              </TouchableOpacity>
              <View
              style={{
                height: normalize(1),
            backgroundColor: '#69BE53',
            marginTop: normalize(20)
            
               
                
              }}></View>

<Image
                            source={ICONS.logo}
                            style={{
                                height: normalize(95),
                                width: normalize(95),
                                alignSelf: 'center',
                                
                            }}
                            resizeMode={'contain'}
                        ></Image>


            </View>

           
            {/* <Loader visible={AuthReducer?.status == 'Auth/logoutRequest'} /> */}
          </ScrollView>
        </SafeAreaView>

      </Fragment>
    </Modal>
  );
}

DrawerMenuAdminexpanded.propTypes = {
  modalVisible: PropTypes.bool,
  title: PropTypes.string,
  data: PropTypes.array,
  renderItem: PropTypes.func,
  onBackdropPress: PropTypes.func,
  onPressCross: PropTypes.func,
  onpress: PropTypes.func,
  onbackPress: PropTypes.func,
  onPressLeft: PropTypes.func,
  onitemPress: PropTypes.func,
};

DrawerMenuAdminexpanded.defaultProps = {
  modalVisible: false,
  title: '',
  data: [],
  renderItem: () => { },
  onBackdropPress: () => { },
  onPressCross: () => { },
  onpress: () => { },
  onbackPress: () => { },
  onitemPress: () => { },
};