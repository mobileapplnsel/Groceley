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
   
    StatusBar,
    Alert,
    TextInput,
    FlatList,
    Button,
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
import { FadeInFromBottomAndroidSpec } from '@react-navigation/stack/lib/typescript/src/TransitionConfigs/TransitionSpecs';
import { onPress } from 'deprecated-react-native-prop-types/DeprecatedTextPropTypes';

export default function Filters(props)
{

    const [name, setName] = useState('');
    const [mobilenumber, setMobileNumber] = useState('');
    const [emailaddress, setEmailaddress] = useState('');
    const [choosepassword, setChoosepassword] = useState('');
    const [confirmpassword, setConfirmpassword] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
    const [flagOrder, setFlagOrder] = useState(0);
    const [flagShipped, setFlagShipped] = useState(0);
    const [flagCancel, setFlagCancel] = useState(0);
    const [flagmonth, setFlagmonth] = useState("false");
    const [flagdays, setFlagdays] = useState("false");
    const [flagcurrentyear, setFlagCurrentyear] = useState("false");
    const [flagpreviousyear, setFlagpreviousyear] = useState("false");
    const [selected, setSelected] = useState("");
    const [isRender, setisRender] = useState(false);





    const DATA3 = [{
        id: "0",
        categories: "Bedcovers",
        pic: ICONS.bread,
        description: "Your order Hovis Farmhouse Wholemeal",
        realprice: "4999",
        discountedprice: "1690",
        date: "16-April-2023",
        status:"Pending",
        quantity:1 

    },

    {
        id: "1",
        categories: "Bedsheets",
        pic: ICONS.cornflakes,
        description: "Your order Kellogg's Corn Flakes Cereal",
        status:"Pending",
        realprice: "4999",
        discountedprice: "1690",
        date: "12-Mar-2023",
        quantity:1 


    },

    {
        id: "2",
        categories: 'Blankets',
        pic: ICONS.milk,
        description: "Your order Amul Moti Homogenized Toned Milk",
        realprice: "4999",
        status:"Pending",
        date: "18-May-2023",
        discountedprice: "1690",
        quantity:1 

    },

    {
        id: "3",
        categories: 'Blankets',
        pic: ICONS.cornflakes2,
        description: "Your order Kellogg's Corn Flakes Cereal",
        realprice: "4999",
        discountedprice: "1690",
        date:"24-April-2023",
        status:"Pending",
        quantity:1 

    },
    {
        id: "4",
        categories: 'Blankets',
        pic: ICONS.milk,
        description: "Your ordered Amul Moti Homogenized Toned Milk",
        realprice: "4999",
        discountedprice: "1690",
        date:"24-April-2023",
        status:"Pending",
        quantity:1 

    }




    ]


    //for cancellation.....................

    const DATA4 = [{
        id: "0",
        categories: "Bedcovers",
        pic: ICONS.bread,
        description: "Your order Hovis Farmhouse Wholemeal",
        realprice: "4999",
        discountedprice: "1690",
        status:"Cancelled",
        quantity:1 

    },

    {
        id: "1",
        categories: "Bedsheets",
        pic: ICONS.cornflakes,
        description: "Your order Kellogg's Corn Flakes Cereal",
        status:"Cancelled",
        realprice: "4999",
        discountedprice: "1690",
        quantity:1 


    },

    {
        id: "2",
        categories: 'Blankets',
        pic: ICONS.milk,
        description: "Your order Amul Moti Homogenized Toned Milk",
        realprice: "4999",
        discountedprice: "1690",
        status:"Cancelled",
        quantity:1 

    },

    {
        id: "3",
        categories: 'Blankets',
        pic: ICONS.cornflakes2,
        description: "Your order Kellogg's Corn Flakes Cereal",
        realprice: "4999",
        discountedprice: "1690",
        status:"Cancelled",
        quantity:1 

    },
    {
        id: "4",
        categories: 'Blankets',
        pic: ICONS.milk,
        description: "Your ordered Amul Moti Homogenized Toned Milk",
        realprice: "4999",
        discountedprice: "1690",
        status:"Cancelled",
        quantity:1 

    }
    ]



  

    const DATA2 = [{
        id: "0",
        categories: "Last 30 days",
    },

    {
        id: "1",
        categories: "Last 3 days",
    },

    {
        id: "2",
        categories: "2023",
    },
    {
        id: "3",
        categories: "2022",
    },
   

    ]



    const filterdate =(filter) =>{

        console.log(JSON.stringify(DATA2))
        console.log(filter)
        DATA2.map((item, index) => {
          // alert(JSON.stringify(index))
          console.log("index",index)
          if (item.id == filter) {
            
            setSelected(filter)
            console.log("yes")
          } 
          //topData[index].selected=true
          
        });
    
        setisRender(!isRender)

         console.log(selected);
              
    //     if(item == "Last 30 days")
    //     {

    //           setFlagmonth("true"),
    //         setFlagdays("false"),
    //         setFlagCurrentyear("false"),
    //         setFlagpreviousyear("false")
    //         console.log("log",item)
    //         console.log("log",flagmonth+""+flagpreviousyear+""+flagdays+""+flagcurrentyear)

    //     }else if(item == "Last 3 days")
    //     {
    //         setFlagmonth("false"),
    //         setFlagdays("true"),
    //         setFlagCurrentyear("false"),
    //         setFlagpreviousyear("false")
    //         console.log("log",item)
    //         console.log("log",flagmonth+""+flagpreviousyear+""+flagdays+""+flagcurrentyear)


    //     }else if(item == "2023")
    //     {
           
    //         setFlagmonth("false"),
    //         setFlagdays("false"),
    //         setFlagCurrentyear("true"),
    //         setFlagpreviousyear("false")
    //         console.log("log",item)
    //         console.log("log",flagmonth+""+flagpreviousyear+""+flagdays+""+flagcurrentyear)

    //     }
    //     else if(item == "2022")
      
    //     {
    //         setFlagmonth("false"),
    //         setFlagdays("false"),
    //         setFlagCurrentyear("false"),
    //         setFlagpreviousyear("true")
    //         console.log("log",item)
    //         console.log("log",flagmonth+""+flagpreviousyear+""+flagdays+""+flagcurrentyear)

    //     }
       
         
        
        
 
       console.log("Flag status === ", selected)
     }






    function filterOrder () {

              
       console.log("abc")
        
            setFlagOrder(1),
            setFlagCancel(0),
            setFlagShipped(0)
        
       
       

      console.log("Flag status === ", flagOrder)
    }


    
    function filterShipped () {

        
      {
          setFlagOrder(0),
          setFlagCancel(0),
          setFlagShipped(1)

      }

      console.log("Flag status === ", flagShipped)
  }
  




  function filterCancelled () {

  {
   
      setFlagOrder(0),
      setFlagCancel(1),
      setFlagShipped(0)
  }

console.log("Flag status === ", flagCancel)
}










    const regex =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


        //for Order Status..............................
    const renderItem1 = ({ item, index }) =>
     (
       <>
          
      

            <View style={{
                flexDirection: 'row',
                height: normalize(26),
                width: '93%',
                
                marginVertical: normalize(5),
                marginLeft: normalize(10),
                borderRadius: normalize(15)

            }}
            >

              {/* {this.state.show ? <Modal /> : null} */}
               
              
              <TouchableOpacity  style={{marginTop:7}} onPress ={()=> filterdate(item.id)}>
                      
              { selected== item.id ?<View style={{ alignSelf:'center',borderColor:'green',width:18,height:18,borderRadius:10,borderWidth:2,backgroundColor:'green'}}>
                        <View style={{ alignSelf:'center',borderRadius:10,padding:5,backgroundColor:'white',marginTop:normalize(1.2)}}></View>
                     </View> :
                      <View style={{ alignSelf:'center',borderColor:'gray',width:18,height:18,borderRadius:10,borderWidth:1}}></View> }
                  


              </TouchableOpacity>
                          
                
                   
              

             
                
                    <Text
                    
                        style={{
                            fontSize: normalize(12),
                            color: "black",
                           marginLeft:normalize(10),
                            fontWeight:'400',
                            alignSelf:'center'
                        }}
                    >{item.categories}</Text>

                

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


    //For shipped status......................................

    const renderItem2 = ({ item, index }) =>
    (
      <>
         
     
         <View style={{

height: normalize(80),
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
        height: normalize(80),
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
                height: normalize(120),
                width: normalize(60),
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

<Text
        numberOfLines={3}
            style={{
                fontSize: normalize(10),
                color: "green",
               
                fontWeight:'600'

            }}
        >Expected Date :{item.date}</Text>

<Text
        numberOfLines={3}
            style={{
                fontSize: normalize(10),
                color: "green",
                marginTop: normalize(2),
                fontWeight:'600'
            }}
        >{item.status}</Text>

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


   //for cancelled status.........................



   const renderItem3 = ({ item, index }) =>
     (
       <>
                


                <View style={{

height: normalize(80),
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
                height: normalize(120),
                width: normalize(60),
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

<Text
        numberOfLines={3}
            style={{
                fontSize: normalize(12),
                color: "red",
                marginTop: normalize(10),
                fontWeight:'600'
            }}
        >{item.status}</Text>
      


  

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




    return (


        <Fragment>

            <Layout Filters={true} {...props}>
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


<View>
              <Text style={{
                color: 'black',
                fontSize: normalize(14),
                fontWeight: '600'

              }}>
Filters
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


                 
                  <View style ={{backgroundColor:'gray',height:normalize(1),width:'95%',alignSelf:'center',marginTop:10}}></View>
                  <View style={{backgroundColor:'#ECECEC'}}>
                  <Text style={{color:'black', fontSize:normalize(9), marginLeft:normalize(10),marginTop:normalize(10),fontWeight:'700',marginBottom:7}}>FILTER BY ORDER TYPE</Text>
                  </View>
                  <View style ={{backgroundColor:'gray',height:1,width:'95%',alignSelf:'center'}}></View>
                    <View style={{width:'100%',height:normalize(110)}}>
                    <View style={{
                flexDirection: 'row',
                height: normalize(26),
                width: '93%',
                
                marginVertical: normalize(5),
                marginLeft: normalize(10),
                borderRadius: normalize(15)

            }}
            >

              {/* {this.state.show ? <Modal /> : null} */}
               
                          
                    <TouchableOpacity style={{marginTop:7}} onPress = {() => filterOrder()}>

                         {flagOrder==1?
                         <View style={{ alignSelf:'center',borderColor:'green',width:18,height:18,borderRadius:10,borderWidth:2,backgroundColor:'green'}}>
                            <View style={{ alignSelf:'center',borderRadius:10,padding:5,backgroundColor:'white',marginTop:normalize(1.2)}}></View>
                         </View> 
                          : <View style={{ alignSelf:'center',borderColor:'gray',width:18,height:18,borderRadius:10,borderWidth:1}}></View> 
                         }
                             
                   
               </TouchableOpacity>

             
                
                    <Text
                    
                        style={{
                            fontSize: normalize(12),
                            color: "black",
                           marginLeft:10,
                            fontWeight:'400',
                            alignSelf:'center'
                        }}
                    >Orders</Text>

                

            </View>
            



       

        <View
        style={{
            height: normalize(1),
            width: '95%',
            alignSelf:'center',
            backgroundColor: '#69BE53'
        }}
        />
                
                
            <View style={{
                flexDirection: 'row',
                height: normalize(26),
                width: '93%',
                
                marginVertical: normalize(5),
                marginLeft: normalize(10),
                borderRadius: normalize(15)

            }}
            >

              {/* {this.state.show ? <Modal /> : null} */}
               
                          
                    <TouchableOpacity style={{marginTop:7}} onPress ={()=> filterShipped()} >

                        {flagShipped == 1?
                         <View style={{ alignSelf:'center',borderColor:'green',width:18,height:18,borderRadius:10,borderWidth:2,backgroundColor:'green'}}>
                         <View style={{ alignSelf:'center',borderRadius:10,padding:5,backgroundColor:'white',marginTop:normalize(1.2)}}></View>
                      </View> 
                       : <View style={{ alignSelf:'center',borderColor:'gray',width:18,height:18,borderRadius:10,borderWidth:1}}></View> 
                        }
                    

                   
               </TouchableOpacity>

             
                
                    <Text
                    
                        style={{
                            fontSize: normalize(12),
                            color: "black",
                           marginLeft:10,
                            fontWeight:'400',
                            alignSelf:'center'
                        }}
                    >Not yet Delivered</Text>

                

            </View>



       

        <View
        style={{
            height: normalize(1),
            width: '95%',
            alignSelf:'center',
            backgroundColor: '#69BE53'
        }}
        />


                  
                  
            <View style={{
                flexDirection: 'row',
                height: normalize(26),
                width: '93%',
                
                marginVertical: normalize(5),
                marginLeft: normalize(10),
                borderRadius: normalize(15)

            }}
            >

              {/* {this.state.show ? <Modal /> : null} */}
               
                          
                    <TouchableOpacity style={{marginTop:7}} onPress ={()=> filterCancelled()}>

                       {flagCancel==1 ?
                        <View style={{ alignSelf:'center',borderColor:'green',width:18,height:18,borderRadius:10,borderWidth:2,backgroundColor:'green'}}>
                        <View style={{ alignSelf:'center',borderRadius:10,padding:5,backgroundColor:'white',marginTop:normalize(1.2)}}></View>
                     </View> 
                        : <View style={{ alignSelf:'center',borderColor:'gray',width:18,height:18,borderRadius:10,borderWidth:1}}></View> 
                       }
                        

                    

                   
               </TouchableOpacity>

             
                
                    <Text
                    
                        style={{
                            fontSize: normalize(12),
                            color: "black",
                           marginLeft:10,
                            fontWeight:'400',
                            alignSelf:'center'
                        }}
                    >Cancelled</Text>

                

            </View>

                                </View>
                                  <View style ={{backgroundColor:'gray',height:1,width:'95%',alignSelf:'center',marginTop:10}}></View>
                  <View style={{backgroundColor:'#ECECEC'}}>
                  <Text style={{color:'black', fontSize:normalize(9), marginLeft:normalize(10),marginTop:normalize(10),fontWeight:'700',marginBottom:normalize(7)}}>FILTER BY ORDER</Text>
                  </View>
                  <View style ={{backgroundColor:'gray',height:normalize(1),width:'95%',alignSelf:'center'}}></View>

                  
                      {flagOrder == 1 ?  <View style={{width:'100%'}}>


                  <FlatList
                  data={DATA2}
                  renderItem={renderItem1}
                  keyExtractor={item => item.id}
                  showsHorizontalScrollIndicator={false}
                  extraData={isRender}


                  style={{


                      marginLeft: normalize(10),

                      marginTop: normalize(10),
                     

                     

                  }}

              /> 
            </View>:
              null
            }
                 
                 {flagShipped == 1 ?  <View style={{width:'100%'}}>


<FlatList
                  data={DATA3}
                  renderItem={renderItem2}
                  keyExtractor={item => item.id}
                  showsHorizontalScrollIndicator={false}


                  style={{


                      marginLeft: normalize(10),

                      marginTop: normalize(10),
                     

                     

                  }}

              /> 
            </View>:
              null
            }



    
{flagCancel == 1 ?  <View style={{width:'100%'}}>


<FlatList
                  data={DATA4}
                  renderItem={renderItem3}
                  keyExtractor={item => item.id}
                  showsHorizontalScrollIndicator={false}


                  style={{


                      marginLeft: normalize(10),

                      marginTop: normalize(10),
                     

                     

                  }}

              /> 
            </View>:
              null
            }






                                <TouchableOpacity style={{width:'70%',backgroundColor:'#F36E35',
                                   marginTop:normalize(10),borderRadius:normalize(20),height:normalize(40),alignSelf:'center',marginTop:normalize(25),marginBottom:normalize(20)}}>
                                
                                 <Text style={{color:'white',alignSelf:'center',marginTop:10}}>Apply </Text>
                                </TouchableOpacity>

                       



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
                        </ScrollView>
                    </KeyboardAvoidingView>

                </SafeAreaView>
            </Layout>

        </Fragment>


    );



}