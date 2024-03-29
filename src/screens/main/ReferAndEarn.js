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

export default function ReferAndEarn(props)
{
    const [name, setName] = useState('');
    const [mobilenumber, setMobileNumber] = useState('');
    const [emailaddress, setEmailaddress] = useState('');
    const [choosepassword, setChoosepassword] = useState('');
    const [confirmpassword, setConfirmpassword] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
    const [referalCode, setReferCode] = useState(false);
    const [refreshing, setRefreshing] = useState(false);

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
    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        setTimeout(() => {
          setRefreshing(false);
        }, 2000);
      }, []);


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


    function createTwoButtonAlert() {
    Alert.alert('Successfully Copied', 'You can paste this link.', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);
}



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

                        <ScrollView showsVerticalScrollIndicator={false} bounces={false} 
                         refreshControl={
                            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                          }
                        >




                        <View style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: normalize(15),
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
                    
                    marginLeft: normalize(10)
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
             Refer And Earn
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

                       
                   
        <ImageBackground
          resizeMode={'stretch'} // or cover
          style={{
            height:normalize(186),
            alignSelf:'center',
            width:'100%',
            
           
        
        }} // must be passed from the parent, the number may vary depending upon your screen size
          source={ICONS.orangebg}
        >
            
             <View  style={{flexDirection:'row'}}>
            <Image
                source={ICONS.referlogo}
                style={{
                  height: normalize(160),
                  width: normalize(280),
                 marginTop:normalize(25),
                 alignSelf:'center'
                }}
                resizeMode={'contain'}
               
              ></Image>
              <TouchableOpacity onPress={()=>ShareExample()}>
             <View style={{width:normalize(30),borderRadius:normalize(10),height:normalize(30),backgroundColor:'white', marginTop:normalize(20),marginRight:normalize(30)}}>
              <Image
                source={ICONS.share}
                style={{
                  height: normalize(15),
                  width: normalize(15),
                 alignSelf:'center',
                 marginTop:8
                          }}
                resizeMode={'contain'}
               
              ></Image>
              </View>
              </TouchableOpacity>
              
              </View>

              
          
        </ImageBackground>

        <View style={{ width:'95%',
            marginLeft: normalize(20),}}>
        <Text style={{fontSize:normalize(14),color:'black',fontWeight:'500',marginTop:10}}>Refer Someone &</Text>
           <View style={{flexDirection:'row',
           marginTop:10,
        }}>
            <Text style={{fontSize:normalize(14),fontWeight:'700',color:'black'}}>Earn</Text>
            <Image
                source={ICONS.wallet_coin}
                style={{
                  height: normalize(15),
                  width: normalize(15),
                 marginLeft:normalize(3),
                 alignSelf:'center',
                 
                }}
                resizeMode={'contain'}
               
              ></Image>
               <Text style={{
                 color:'black',
                 fontWeight:'700',
                 marginLeft:normalize(4),
                 fontSize:normalize(14),}}>50.00</Text>
            </View>
           <View
          style={{
            height: normalize(120),
            width: '90%',
            marginTop: normalize(10),
            borderWidth: normalize(1),
            borderRadius: normalize(10),
            backgroundColor: '#69BE53',
            borderColor: '#D3D3D3'
          }}      
        > 

<TouchableOpacity onPress={()=> createTwoButtonAlert()}>
          <Image
                source={ICONS.copy}
                style={{
                  height: normalize(20),
                  width: normalize(30),
                 marginLeft:normalize(3),
                 marginTop:normalize(4),
                 alignSelf:'flex-end',
                 
                }}
                resizeMode={'contain'}
               
              ></Image>
              </TouchableOpacity>
        
        <Text style={{
        fontSize: normalize(14),           
        textAlign: 'center',
        fontFamily: FONTS.Hind,
       
        color: 'white'
    }}
        >
           REFERRAL CODE
            </Text>
           

            <TouchableOpacity 
          style={{
            height: normalize(40),
            width: '60%',
            marginTop: normalize(10),
             alignSelf:'center',
            borderWidth: normalize(1),
            borderRadius: normalize(20),
            backgroundColor: 'white',
            borderColor: '#D3D3D3'
          }}      
        > 
        
        <TextInput
        value={referalCode}
                  onChangeText={_ => setReferCode(_)}
        
         style={{paddingLeft:normalize(10)}}
          multiline={true}
          fontSize={normalize(12)}
          width={'100%'}
           height={'100%'}

         placeholder={'Please Enter refer code'}
          color={'black'}

         placeholderTextColor={'gray'}
          secureTextEntry={false}
             />
                  
            
            </TouchableOpacity>
            </View>


            
          
           
                {/* leaderboard screen........... */}
           
          
               <TouchableOpacity onPress={()=>props.navigation.navigate("Leaderboard")}
               style={{
                width:'90%',
                height:'7%',
                marginTop:normalize(10),
                backgroundColor: '#F36E35',
                borderColor: '#F36E35',
                borderRadius:normalize(20),
                alignItems:'center'

               }} >
           
                <Text style={{fontSize:normalize(14),color:'white',fontWeight:'700',marginTop:normalize(10)}}>Leaderboard</Text>
                 
                </TouchableOpacity>
            <Text style={{fontSize:normalize(14),color:'black',fontWeight:'700',marginTop:20}}>How Does It Work?</Text>
           
          
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
    marginRight: normalize(7),
    
    backgroundColor: '#F36E35'
}}/>
<Text style={{color:'black',fontWeight:'500',fontSize:normalize(10), marginLeft: -normalize(2)}}>
    Sharing Link
</Text>
</View>

<View style ={{flexDirection:'row'}}>
<View
style={{
    height: normalize(30),
    width: '0.4%',
    marginLeft: normalize(7),
    backgroundColor: '#F36E35'
}}
/>
<Text style={{color:'gray',fontWeight:'400',fontSize:normalize(10),marginLeft:normalize(10),marginRight:normalize(20)}}>
Existing customers can refer friends and family by sharing a unique referral code or link.
</Text>
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
    Recieve Reward
</Text>
</View>

<View style ={{flexDirection:'row'}}>
<View
style={{
    height: normalize(40),
    width: '0.4%',
   
    backgroundColor: '#F36E35',
    marginLeft: normalize(7)
}}
/>
<Text style={{color:'gray',fontWeight:'400',fontSize:normalize(10),marginLeft:normalize(10),marginRight:normalize(20)}}>
When a new customer uses the referral code or link to sign up for the grocery app, both the referrer and the referred will receive a reward.
</Text>
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
    Monthly Discount
</Text>

</View>

<View style ={{flexDirection:'row'}}>    
<View
style={{
    height: normalize(30),
    width: '0.4%',
   
    backgroundColor: '#F36E35',
    marginLeft: normalize(7)
}}
/>


<Text style={{color:'gray',fontWeight:'400',fontSize:normalize(10),marginLeft:normalize(10),marginRight:normalize(20)}}>
The reward for the referrer could be a discount on their next purchase, or a certain.
</Text>
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
    Memebership Discount
</Text>
</View>
<Text style={{color:'gray',fontWeight:'400',fontSize:normalize(10),marginLeft:normalize(20),marginRight:normalize(50)}}>
The reward for the referred could be an extra 2% discount on their first purchase, and Rs 100 as coins on the account of the referrer that can be redeemed on their next purchase.
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
{/* <Loader/>   */}
                </SafeAreaView>
            </Layout>

        </Fragment>


    );



}