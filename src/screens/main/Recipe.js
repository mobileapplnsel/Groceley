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
   TextInput ,
    FlatList,
    Share
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
import { tintColor } from 'deprecated-react-native-prop-types/DeprecatedImagePropType';

var status = '';
export default function Recipe(props) {


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






    const DATA = [{
        id: "0",
        pic: ICONS.recipe_item1,
        description: "Sunrise shahi garam mashala",
        quantity: '50g',
        discounted_price: '50',
        real_price: '20',
        discountrate: '20%'
      },
    
      {
        id: "1",
        pic: ICONS.recipe_item3,
        description: "Dabur Home made Ginger Garlic Paste",
        quantity: '200g',
        discounted_price: '60',
        real_price: '50',
        discountrate: '0'
      },
    
      
    
     
    
    
      ]

    const DATA2 = [{
        id: "0",
        pic: ICONS.recipe_item,
        description: "Hearty Meals Chicken Kosha ",
        quantity: '400g',
        discounted_price: '90',
        real_price: '80',
        discountrate: '20%'
      },
    
      {
        id: "1",
        pic: ICONS.recipe_item2,
        description: "Fortune Pure Mustard oil",
        quantity: '1Ltr',
        discounted_price: '250',
        real_price: '220',
        discountrate: '0'
      },
    
      
    
      
    
      ]


      const DATA3 = [{
        id: "0",
        
        description: "Sugar",
        quantity: '1tbsp',
        
      },
    
      {
        id: "1",
        
        description: "Fortune Pure Mustard oil",
        quantity: '200 ml',
        
      },

      {
        id: "2",
        
        description: "Chicken",
        quantity: '1 Kg',
        
      },
      {
        id: "3",
        
        description: "Salt",
        quantity: '1 tbsp',
        
      },
      
      {
        id: "4",
        
        description: "Spices",
        quantity: '2 tbsp',
        
      },
      
    
      ]

      

function favourite(){
    setItemselected(1)
}

function favourite1(){
    setItemselected(0)
}
      




        
        
        
  



 function selectItem(item){
    props.navigation.navigate("Productdetails")
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

    const renderItem1 = ({ item, index }) => (
        <>
    




           









    <View style={{
                                flexDirection: 'row',
                                
                                marginLeft: normalize(20),
                                justifyContent: 'flex-start',
                                alignItems: 'center'

                            }}>
<Image
                source={ICONS.dot}
                style={{
                    height: normalize(15),
                    width:  normalize(15),
                    
                    tintColor: 'black'
                    
                   
                }}
                resizeMode={'contain'}
                tintColor= {'black'}
            ></Image>
<Text style={{
              
              fontFamily: FONTS.Hind,
              fontSize: normalize(12),
             
            }}>{item.description} -  </Text>
            <Text style={{
              
              fontFamily: FONTS.Hind,
              fontSize: normalize(12),
             
            }}>{item.quantity}</Text>


</View>


                        







       

      
        </>
    );


     const renderItem2 = ({ item, index }) => (
    <TouchableOpacity
      onPress={(item) => selectItem(item)}
      style={{

        height: normalize(195),
        width: normalize(140),
        backgroundColor: '#F0F0F0' ,
       
        marginLeft: normalize(7),
        borderRadius: normalize(15),
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: normalize(10)
      }}>
        
       {item.discountrate !== '0' ? ( <View style={{
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

            }}>{item.discountrate} OFF</Text>
        </View>
       ) : (null)}
       
        <Image
                  source={item.pic}
                  style={{
                    height: normalize(60),
                    width: normalize(60),
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
      >{item.description}
      </Text>


      <Text
        style={{
          color: 'black',
          fontSize: normalize(10),
          marginLeft: normalize(10),
          marginTop: normalize(5),
          alignSelf: 'flex-start'
                }}
      >{item.quantity}
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
      >{'\u20B9'} {item.discounted_price}
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
  marginLeft: normalize(-10),
}}>
  <View>
      <Text
        style={{
          
          fontSize: normalize(10),
          color: 'black',
          fontWeight: '600'
          
                }}
      >{'\u20B9'} {item.real_price}
      </Text>
      </View>



<TouchableOpacity onPress={()=>props.navigation.navigate("Cart")}
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

   
    


    return (


        <Fragment>

            <Layout {...props}>
                <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>


                    <KeyboardAvoidingView
                        style={{ flex: 1 }}
                        behavior={Platform.OS == 'ios' ? 'padding' : "height"}>



                        






                        





                        <ScrollView showsVerticalScrollIndicator={false} bounces={false} >



                            


<Image
                source={ICONS.recipe2}
                style={{
                    height: normalize(210),
                    width: '100%',
                    alignSelf: 'center',
                    marginTop: -normalize(25)
                    
                   
                }}
                resizeMode={'contain'}
            ></Image>


                                    
                                    
                           

                                    



                                 
                               


                            


                            <View style={{
                                marginLeft: normalize(20),
                                
                            }}>
                                <Text
                                    style={{
                                        color: '#030F01',
                                        fontSize: normalize(16),
                                        fontWeight: '600',
                                        fontStyle: FONTS.Hind,
                                        textAlign: 'left',

                                    }}
                                >Recipe: chicken kosha
                                </Text>


                               
<Text
style={{
    color: '#646464',
                                            fontSize: normalize(12),
                                            width: '90%',
                                           fontWeight: '300',
                                            marginTop: normalize(10),
                                            alignSelf: 'flex-start',
                                           fontStyle: FONTS.Hind
}}

>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in turpis dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in turpis dolor.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in turpis dolor.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in turpis dolor.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in turpis dolor.</Text>
                            </View>

                            
                            <Text style={{
              color: "#3F3F3F",
              fontFamily: FONTS.Hind,
              fontSize: normalize(14),
              marginLeft: normalize(20),
              marginTop: normalize(10)
            }}>Ingredients: </Text>







<FlatList
                data={DATA3}
                renderItem={renderItem1}
                keyExtractor={item => item.id}
                showsHorizontalScrollIndicator={false}

                
                style={{


                 

                  marginTop: normalize(10),
                 


                }}


              />
                            <View style={{
                                flexDirection: 'row',
                                
                                
                                justifyContent: 'space-between',
                                alignItems: 'center'

                            }}>




                            
<Text style={{
              color: "#3F3F3F",
              fontFamily: FONTS.Hind,
              fontSize: normalize(14),
              marginLeft: normalize(20),
              marginTop: normalize(10)
            }}>Buy Ingredients</Text>





</View>           



         


   



                      
            

                                   

<View>
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
                                    data={DATA}
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