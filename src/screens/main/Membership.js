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
import RazorpayCheckout from 'react-native-razorpay';
import { useDispatch, useSelector } from 'react-redux';
import {addmembershipRequest, membershipdetailsRequest, renewmembershipRequest} from '../../redux/reducer/ProfileReducer'


var status = '';
export default function Membership(props)
{
    const [name, setName] = useState('');
    const [mobilenumber, setMobileNumber] = useState('');
    const [emailaddress, setEmailaddress] = useState('');
    const [choosepassword, setChoosepassword] = useState('');
    const [confirmpassword, setConfirmpassword] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
    const [refreshing, setRefreshing] = useState(false);
    const [add_member, setAdd_memeber] = useState(0);
    const [renew_member, setRenew_memeber] = useState(0);

    const dispatch = useDispatch();
  const ProfileReducer = useSelector(state => state.ProfileReducer);

  useEffect(() => {

        
    
        
    membershipdetails()
    
        
    
    
    
    }, []);

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


    // function renewmembership(){
    //     let obj = {
    //         user_id: 11,
            
    //       }
    //       isInternetConnected()
    //           .then(() => {
    //               dispatch(membershipdetailsRequest(obj));
    //           })
    //           .catch(err => {
    //               console.log(err);
    //               Platform.OS == 'android' ? Toast('Please connect to internet') : Alert.alert("Please connect to internet");
    //           });
    // }

    function membershipdetails(){
        let obj = {
            user_id: 14,
            
          }
          isInternetConnected()
              .then(() => {
                  dispatch(membershipdetailsRequest(obj));
              })
              .catch(err => {
                  console.log(err);
                  Platform.OS == 'android' ? Toast('Please connect to internet') : Alert.alert("Please connect to internet");
              });
    }

    function addmember1(){
        let obj = {
            user_id: 14,
            charges: 999
          }
          isInternetConnected()
              .then(() => {
                  dispatch(addmembershipRequest(obj));
              })
              .catch(err => {
                  console.log(err);
                  Platform.OS == 'android' ? Toast('Please connect to internet') : Alert.alert("Please connect to internet");
              });
      
    }


    function payment(){
        let options = {
            description: 'Credits towards consultation',
            //image: 'https://i.imgur.com/3g7nmJC.jpg',
            currency: 'INR',
            key: 'rzp_test_0s2czqBDNUnnff',
            amount: '99900',
            name: 'Grocley',
            
          //  order_id: 'order_LbCgLUBUpL8ulJ',//Replace this with an order_id created using Orders API.
            prefill: {
              email: 'gaurav.kumar@example.com',
              contact: '9191919191',
              name: 'Gaurav Kumar',
              
            },
            
            theme: {color: '#69BE53'}
          }
          RazorpayCheckout.open(options).then((data) => {
           renewmember()
            // handle success
            alert(`Success: ${data.razorpay_payment_id}`);
            
          }).catch((error) => {
            // handle failure
           // alert(`Error: ${error.code} | ${error.description}`);
           alert(`Payment gateway closed`);
          });

        //   if(add_member == 1){
        //     addmember1()
        //     } else if (renew_member == 1) {
        //     renewmember()
        //     }
        
    }


    function payment1(){
        let options = {
            description: 'Credits towards consultation',
            //image: 'https://i.imgur.com/3g7nmJC.jpg',
            currency: 'INR',
            key: 'rzp_test_0s2czqBDNUnnff',
            amount: '99900',
            name: 'Grocley',
            
          //  order_id: 'order_LbCgLUBUpL8ulJ',//Replace this with an order_id created using Orders API.
            prefill: {
              email: 'gaurav.kumar@example.com',
              contact: '9191919191',
              name: 'Gaurav Kumar',
              
            },
            
            theme: {color: '#69BE53'}
          }
          RazorpayCheckout.open(options).then((data) => {
           addmember1()
            // handle success
            alert(`Success: ${data.razorpay_payment_id}`);
            
          }).catch((error) => {
            // handle failure
           // alert(`Error: ${error.code} | ${error.description}`);
           alert(`Payment gateway closed`);
          });

        //   if(add_member == 1){
        //     addmember1()
        //     } else if (renew_member == 1) {
        //     renewmember()
        //     }
        
    }

    function renewmember(){
        let obj = {
            user_id: 14,
            
          }
          isInternetConnected()
              .then(() => {
                  dispatch(renewmembershipRequest(obj));
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


      if (status == '' || ProfileReducer.status != status) {
        switch (ProfileReducer.status) {
            case 'Profile/addmembershipRequest':
                status = ProfileReducer.status;
                break;
      
            case 'Profile/addmembershipSuccess':
                status = ProfileReducer.status;
                console.log("Add membership response === ", ProfileReducer?.addmembershipResponse)
            
                Platform.OS == 'android' ? Toast('Membership added') : Alert.alert("'Membership added");
                membershipdetails()
                break;
      
            case 'Profile/addmembershipFailure':
      
                status = ProfileReducer.status;
                break;
    
    
      
                case 'Profile/membershipdetailsRequest':
                status = ProfileReducer.status;
                break;
      
            case 'Profile/membershipdetailsSuccess':
                status = ProfileReducer.status;
                console.log("Membership details response === ", ProfileReducer?.membershipdetailsResponse)
                console.log("Status === ", ProfileReducer?.membershipdetailsResponse?.respData?.[0]?.card_number)
               
             
                break;
      
            case 'Profile/membershipdetailsFailure':
      
                status = ProfileReducer.status;
                break;
    
                
                case 'Profile/renewmembershipRequest':
                    status = ProfileReducer.status;
                    break;
          
                case 'Profile/renewmembershipSuccess':
                    status = ProfileReducer.status;
                    console.log("Renew Membership response === ", ProfileReducer?.renewmembershipResponse)
                    console.log("Status === ", ProfileReducer?.renewmembershipResponse?.respData?.[0]?.card_number)
                    Platform.OS == 'android' ? Toast('Membership renewed') : Alert.alert("'Membership renewed");
                    membershipdetails()
                    break;
          
                case 'Profile/renewmembershipFailure':
          
                    status = ProfileReducer.status;
                    break;
    
               
          
                   
            
      
             
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

                        <ScrollView showsVerticalScrollIndicator={false} bounces={false}  refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }>
                   
    { ProfileReducer?.membershipdetailsResponse?.respData?.length == 0? (
     <Text style={{fontSize:normalize(14),
        color:'grey',
        fontWeight:'400', 
        marginTop: normalize(10),
        alignSelf: 'center',

        }}>No card found</Text>   
    ):   <ImageBackground
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
           
          <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:normalize(55),marginLeft:normalize(32),marginRight: normalize(50)}}>
            <Text style={{fontSize:normalize(14),color:'white',fontWeight:'700'}}>{(ProfileReducer?.membershipdetailsResponse?.respData?.[0]?.card_number)?.toString()?.substring(0, 4)}</Text>
            <Text style={{fontSize:normalize(14),color:'white',fontWeight:'700'}}>{(ProfileReducer?.membershipdetailsResponse?.respData?.[0]?.card_number)?.toString()?.substring(4, 8)}</Text>
            <Text style={{fontSize:normalize(14),color:'white',fontWeight:'700'}}>{(ProfileReducer?.membershipdetailsResponse?.respData?.[0]?.card_number)?.toString()?.substring(8, 12)}</Text>
            <Text style={{fontSize:normalize(14),color:'white',fontWeight:'700'}}>{(ProfileReducer?.membershipdetailsResponse?.respData?.[0]?.card_number)?.toString()?.substring(12, 16)}</Text>
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
               <Text style={{fontSize:normalize(9),color:'white',fontWeight:'500',alignSelf:'center'}}>{(ProfileReducer?.membershipdetailsResponse?.respData?.[0]?.start_time)?.toString()?.split("-")?.reverse()?.join("-")}</Text>
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
               <Text style={{fontSize:normalize(9),color:'white',fontWeight:'500',alignSelf:'center'}}>{(ProfileReducer?.membershipdetailsResponse?.respData?.[0]?.end_time)?.toString()?.split("-")?.reverse()?.join("-")}</Text>
            </View>
            </View>
             
          </View>
        
          {/* <Text style={{fontSize:normalize(12),color:'white',fontWeight:'700',marginLeft:normalize(28),marginTop:normalize(7)}}>Nick Thomas</Text> */}
        </ImageBackground>}

        <View style={{ width:'95%',
            marginLeft: normalize(20),}}>
        <Text style={{fontSize:normalize(14),color:'black',fontWeight:'700',marginTop: normalize(10)}}>Membership Details</Text>
            <Text style={{fontSize:normalize(10),
                color:'gray',
                marginTop: normalize(2),
                fontWeight:'400'}}>Last Recharge on {(ProfileReducer?.membershipdetailsResponse?.respData?.[0]?.last_recharge_date)?.toString()?.split("-")?.reverse()?.join("-")}
                     </Text>


 {/* {ProfileReducer?.membershipdetailsResponse?.respData?.[0]?.status == '2' ? (           <Text style={{fontSize:normalize(10),
                color:'red',
                fontWeight:'400', 
                marginTop: normalize(2)
                }}>Expired on {ProfileReducer?.membershipdetailsResponse?.respData?.[0]?.end_time?.toString()?.split("-")?.reverse()?.join("-")}</Text>

 ): (null)}

 { ProfileReducer?.membershipdetailsResponse?.respData?.[0]?.status == '1' ?  (      
    
   null
 ):( <TouchableOpacity onPress={()=> addmember1()}
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
  ADD MEMBERSHIP
   </Text>
   
   </TouchableOpacity>
   
   )} */}




{ProfileReducer?.membershipdetailsResponse?.respData?.[0]?.status == '2' ? (<TouchableOpacity onPress={
    ()=> {
     setRenew_memeber(1)
     setAdd_memeber(0)
     payment()
    }}
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
   
   </TouchableOpacity>)
: ProfileReducer?.membershipdetailsResponse?.respData?.length == 0? (
    <TouchableOpacity onPress={()=> {
        setRenew_memeber(0)
        setAdd_memeber(1)
        payment1()
    }
    }
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
  ADD MEMBERSHIP
   </Text>
   
   </TouchableOpacity>
)
: (null)}






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
    height: normalize(40),
    width: '0.4%',
    marginLeft: normalize(7),
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
    height: normalize(40),
    width: '0.4%',
   
    backgroundColor: '#F36E35',
     marginLeft: normalize(7)
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
    height: normalize(40),
    width: '0.4%',
   
    backgroundColor: '#F36E35',
    marginLeft: normalize(7)
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
{'\u20B9'} 150 in three instalments through in-built wallet  
</Text>
</View>
<Text style={{color:'gray',fontWeight:'400',fontSize:normalize(10),marginLeft:normalize(20),marginRight:normalize(10)}}>
{'\u20B9'} 150 each in three instalments through wallet as coins which would be credited on 1st of second month on the registered mobile number or registered card. 
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
                    <Loader visible={ProfileReducer?.status == 'Profile/addmembershipRequest'}/> 
                     <Loader visible={ProfileReducer?.status == 'Profile/membershipdetailsRequest'}/> 
                     <Loader visible={ProfileReducer?.status == 'Profile/renewmembershipRequest'}/> 
                </SafeAreaView>
            </Layout>

        </Fragment>


    );



}