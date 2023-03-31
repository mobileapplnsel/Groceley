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

export default function Membership(props)
{
    const [name, setName] = useState('');
    const [mobilenumber, setMobileNumber] = useState('');
    const [emailaddress, setEmailaddress] = useState('');
    const [choosepassword, setChoosepassword] = useState('');
    const [confirmpassword, setConfirmpassword] = useState('');
    const [modalVisible, setModalVisible] = useState(false);


    const DATA = [{
        id: "0",
        categories: "Bedcovers",
        pic: ICONS.bread,
        description: "Your order Hovis Farmhouse Wholemeal has been dispatched",
        realprice: "4999",
        discountedprice: "1690",
        quantity:1 

    },

    {
        id: "1",
        categories: "Bedsheets",
        pic: ICONS.cornflakes,
        description: "Your order Kellogg's Corn Flakes Cereal is shipped",

        realprice: "4999",
        discountedprice: "1690",
        quantity:1 


    },

    {
        id: "2",
        categories: 'Blankets',
        pic: ICONS.milk,
        description: "Your order Amul Moti Homogenized Toned Milk is in-Transit",
        realprice: "4999",
        discountedprice: "1690",
        quantity:1 

    },

    {
        id: "3",
        categories: 'Blankets',
        pic: ICONS.cornflakes2,
        description: "Your order Kellogg's Corn Flakes Cereal will be delivered today",
        realprice: "4999",
        discountedprice: "1690",
        quantity:1 

    },
    {
        id: "4",
        categories: 'Blankets',
        pic: ICONS.milk,
        description: "Your ordered Amul Moti Homogenized Toned Milk on 14/12/2023",
        realprice: "4999",
        discountedprice: "1690",
        quantity:1 

    }




    ]

    const DATA2 = [{
        id: "0",
        categories: "Bedcovers",
        pic: ICONS.bedsheet,
        description: "King Size Bed Sheet (with pillow cover)",
        realprice: "4999",
        discountedprice: "2150"


    },

    {
        id: "1",
        categories: "Bedsheets",
        pic: ICONS.bedsheet,
        description: "King Size Bed Sheet (with pillow cover)",
        realprice: "4999",
        discountedprice: "2150"


    },

    {
        id: "2",
        categories: 'Blankets',
        pic: ICONS.bedsheet,
        description: "King Size Bed Sheet (with pillow cover)",
        realprice: "4999",
        discountedprice: "2150"
    }



    ]











    const regex =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const renderItem1 = ({ item, index }) => (
        <>
        <View style={{

            height: normalize(60),
            width: '93%',
            
            marginVertical: normalize(5),
            marginLeft: normalize(10),
            borderRadius: normalize(15)
        }}>




           









            <View style={{
                flexDirection: 'row',

            }}
            >


                <View style={{
                    height: normalize(60),
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
                    marginLeft: normalize(10)
                }}>
                    <Text
                    numberOfLines={3}
                        style={{
                            fontSize: normalize(12),
                            color: "black",
                            marginTop: normalize(10),
                            fontWeight:'600'
                        }}
                    >{item.description}</Text>

                  


              

                </View>



            </View>


                        







        </View>

        <View
        style={{
            height: normalize(1),
            width: '95%',
            backgroundColor: '#69BE53'
        }}
        />
        </>
    );

    const renderItem2 = ({ item, index }) => (
        <View style={{

            height: normalize(200),

            backgroundColor: item.id % 2 == '0' ? '#F6F6F6' : '#FFF3F4',
            marginVertical: normalize(5),

            borderRadius: normalize(15)
        }}>





            <Image
                source={item.pic}
                style={{
                    height: normalize(100),
                    width: normalize(80),
                    alignSelf: 'center',
                    marginTop: normalize(-18),
                    marginRight: normalize(5),
                    borderRadius: normalize(25)
                }}
                resizeMode={'contain'}
            ></Image>





            <Text
                numberOfLines={2}
                style={{
                    color: 'black',
                    fontSize: normalize(10),
                    fontWeight: '600',
                    marginTop: normalize(5),
                    alignSelf: 'center',
                    width: '60%'
                }}
            >{item.description}
            </Text>


            <View style={{
                flexDirection: 'row',
            }}>

                <Image
                    source={ICONS.rupee}
                    style={{
                        height: normalize(10),
                        width: normalize(10),
                        marginTop: normalize(8),
                        marginLeft: normalize(20),
                        tintColor: "#9E9E9E"
                    }}
                    resizeMode={'contain'}
                    tintColor={"#9E9E9E"}

                ></Image>
                <Text
                    style={{
                        color: '#9E9E9E',
                        fontSize: normalize(10),
                        fontWeight: '600',
                        marginTop: normalize(5),
                        alignSelf: 'center'
                    }}
                >{item.realprice}
                </Text>

                <View style={{
                    flexDirection: 'row',
                    marginLeft: normalize(2)
                }}>

                    <Image
                        source={ICONS.rupee}
                        style={{
                            height: normalize(13),
                            width: normalize(15),
                            marginTop: normalize(8),
                            // marginLeft: normalize(20),

                        }}
                        resizeMode={'contain'}

                    />

                    <Text style={{
                        color: '#222222',
                        fontSize: normalize(13),
                        fontWeight: '600',
                        marginTop: normalize(5),
                        alignSelf: 'center',
                        fontWeight: '700'
                    }}>{item.discountedprice}
                    </Text>
                </View>

                <View
                    style={{
                        height: normalize(1),
                        width: normalize(40),
                        backgroundColor: "#9E9E9E",
                        position: 'absolute',
                        top: 15,
                        left: 20

                    }}
                />

            </View>


        </View>
    );


    return (


        <Fragment>

            <Layout Notification={false} {...props}>
                <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>


                    <KeyboardAvoidingView
                        style={{ flex: 1 }}
                        behavior={Platform.OS == 'ios' ? 'padding' : "height"}>



                        {/* <ScrollView showsVerticalScrollIndicator={false} bounces={false} > */}






                        <View style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: normalize(20),
              marginRight: normalize(10),
              height: normalize(40)
            }}>
            <View style={{flexDirection:'row'}}>
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


<View>
              <Text style={{
                color: 'black',
                fontSize: normalize(14),
                fontWeight: '600',
                marginLeft:18,

              }}>
   My Membership
              </Text>


              <Text style={{
                color: 'gray',
                fontSize: normalize(10),
                fontWeight: '600',
                marginLeft:18,

              }}>
       Expired On 30 March, 2023
              </Text>

              </View>
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

                        <ScrollView showsVerticalScrollIndicator={false} bounces={false} >
                   
        <ImageBackground
          resizeMode={'contain'} // or cover
          style={{
            height:normalize(186),
            alignSelf:'center',
            width:'95%',
            marginLeft: normalize(15),
            marginTop: normalize(10)
        
        }} // must be passed from the parent, the number may vary depending upon your screen size
          source={ICONS.member_card}
        >
            <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:normalize(20)}}>
           
           
           
            <Text style={{fontSize:normalize(12),color:'white',fontWeight:'700',marginLeft:normalize(29)}}>MEMBERSHIP CARD</Text>
            <Image
                source={ICONS.logo}
                style={{
                  height: normalize(18),
                  width: normalize(160),
                 
                 
                }}
                resizeMode={'contain'}
                tintColor= {'white'}
              ></Image>
          </View>
           
          <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:55,marginLeft:32,marginRight:50}}>
            <Text style={{fontSize:normalize(14),color:'white',fontWeight:'700'}}>1234</Text>
            <Text style={{fontSize:normalize(14),color:'white',fontWeight:'700'}}>5678</Text>
            <Text style={{fontSize:normalize(14),color:'white',fontWeight:'700'}}>9101</Text>
            <Text style={{fontSize:normalize(14),color:'white',fontWeight:'700'}}>5684</Text>
          </View>

          <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:10,marginLeft:35,marginRight:50}}>
            <View style={{flexDirection:'row'}}>
            <Text style={{fontSize:normalize(9),color:'white',fontWeight:'500',width:normalize(28)}}>VALID FROM</Text>
            <Image
                source={ICONS.arrow}
                style={{
                  height: normalize(8),
                  width: normalize(8),
                 marginTop:normalize(2),
                 alignSelf:'center'
                }}
                resizeMode={'contain'}
                tintColor= {'white'}
              ></Image>
               <Text style={{fontSize:normalize(9),color:'white',fontWeight:'500',alignSelf:'center'}}>06/22</Text>
            </View>
            <View>
            <View style={{flexDirection:'row',marginLeft:normalize(20)}}>
            <Text style={{fontSize:normalize(9),color:'white',fontWeight:'500',width:normalize(28)}}>VALID THRU</Text>
            <Image
                source={ICONS.arrow}
                style={{
                  height: normalize(8),
                  width: normalize(8),
                 marginTop:normalize(2),
                 alignSelf:'center'
                }}
                resizeMode={'contain'}
                tintColor= {'white'}
              ></Image>
               <Text style={{fontSize:normalize(9),color:'white',fontWeight:'500',alignSelf:'center'}}>06/23</Text>
            </View>
            </View>
             
          </View>
        
          <Text style={{fontSize:normalize(12),color:'white',fontWeight:'700',marginLeft:normalize(33),marginTop:normalize(7)}}>Nick Thomas</Text>
        </ImageBackground>

        <View style={{ width:'95%',
            marginLeft: normalize(20),}}>
        <Text style={{fontSize:normalize(14),color:'black',fontWeight:'700',marginTop: normalize(10)}}>Membership Details</Text>
            <Text style={{fontSize:normalize(10),
                color:'gray',
                marginTop: normalize(2),
                fontWeight:'400'}}>Last Recharge on 30 March, 2022
                     </Text>
            <Text style={{fontSize:normalize(10),color:'red',fontWeight:'400', marginTop: normalize(2)}}>Expired on 30 March, 2023</Text>



           <TouchableOpacity onPress={()=> props.navigation.navigate("Cart")}
          style={{
            height: normalize(35),
            width: '80%',
            marginTop: normalize(15),
           
            borderWidth: normalize(1),
            borderRadius: normalize(20),
            backgroundColor: '#3F3F3F',
            borderColor: '#D3D3D3',
            justifyContent: 'center',
            alignItems: 'center',
            marginLeft: normalize(20)
          }}
          
        > 
        
        <Text style={{
        fontSize: normalize(12),           
        textAlign: 'center',
        fontFamily: FONTS.Hind,
       
        color: 'white'
    }}
        >
           RENEW MEMBERSHIP
            </Text>
            
            </TouchableOpacity>


            <Text style={{fontSize:normalize(14),color:'black',fontWeight:'700',marginTop:normalize(15)}}>How Does It Work?</Text>
           
          
            <View style={{
            flexDirection: 'column',
            marginTop: normalize(20),
            marginBottom:normalize(20),
         }}>

<View style ={{flexDirection:'row'}}>
<View
style={{
    height: normalize(15),
    width: normalize(15),
    borderRadius: normalize(7.5),
    borderWidth: normalize(1),
    borderColor: '#F36E35',
    marginRight: normalize(5),
    
    backgroundColor: '#F36E35'
}}/>
<Text style={{color:'black',fontWeight:'500',fontSize:normalize(10)}}>
{'\u20B9'} 200 discount coins
</Text>
</View>

<View style ={{flexDirection:'row'}}>
<View
style={{
    height: normalize(30),
    width: '0.4%',
    marginLeft: normalize(5),
    backgroundColor: '#F36E35'
}}
/>
<Text style={{color:'gray',fontWeight:'400',fontSize:normalize(10),marginLeft:normalize(10),marginRight:normalize(10)}}>
All customer will get {'\u20B9'} 200 instant discount through coins which can be reimbursed from the app purchases</Text>
</View>

<View style ={{flexDirection:'row'}}>
<View
style={{
    height: normalize(15),
    width: normalize(15),
    borderRadius: normalize(7.5),
    borderWidth: normalize(1),
    borderColor: '#F36E35',
  
    backgroundColor: '#F36E35',
}}
/>
<Text style={{color:'black',fontWeight:'500',fontSize:normalize(10),marginLeft:normalize(5),}}>
{'\u20B9'} 300 cashback for all Club Members
</Text>
</View>

<View style ={{flexDirection:'row'}}>
<View
style={{
    height: normalize(30),
    width: '0.4%',
   
    backgroundColor: '#F36E35',
    marginLeft: normalize(5)
}}
/>
<Text style={{color:'gray',fontWeight:'400',fontSize:normalize(10),marginLeft:normalize(10),marginRight:normalize(10)}}>
{'\u20B9'} 300 cashback will be given to all Club Members through in-built Wallet as coins which can be used on next visit.</Text>
</View>

<View style ={{flexDirection:'row'}}>
<View
style={{
    height: normalize(15),
    width: normalize(15),
    borderRadius: normalize(7.5),
    borderWidth: normalize(1),
    borderColor: '#F36E35',
    backgroundColor: '#F36E35',
}}
/>
<Text style={{color:'black',fontWeight:'500',fontSize:normalize(10),marginLeft:normalize(5)}}>
7% discount for members
</Text>

</View>

<View style ={{flexDirection:'row'}}>    
<View
style={{
    height: normalize(30),
    width: '0.4%',
   
    backgroundColor: '#F36E35',
    marginLeft: normalize(5)
}}
/>


<Text style={{color:'gray',fontWeight:'400',fontSize:normalize(10),marginLeft:normalize(10),marginRight:normalize(10)}}>
For members, we have extra 2% discount on MRP and 5% discount for new customers, making it a total of 7% </Text>
</View>

<View style ={{flexDirection:'row'}}>
<View
style={{
    height: normalize(15),
    width: normalize(15),
    borderRadius: normalize(7.5),
    borderWidth: normalize(1),
    borderColor: '#F36E35',
  
    backgroundColor: '#F36E35',
}}
/>
<Text style={{color:'black',fontWeight:'500',fontSize:normalize(10),marginLeft:normalize(5)}}>
Rs.150 in three instalments through in-built wallet  
</Text>
</View>
<Text style={{color:'gray',fontWeight:'400',fontSize:normalize(10),marginLeft:normalize(20),marginRight:normalize(10)}}>
Rs.150 each in three instalments through in-built wallet as coins wallet which would be credited on 1st of second month on the registered mobile number or registered card. For Instance if someone buys the membership on 1st January the first 150 Rs coins would be credited on the app on 1st February the second 150 Rs coins would be credited on 1st March and third 150rs coins would be credited on 1st April 2023.
</Text>

         </View>

       
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