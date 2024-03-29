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
    PermissionsAndroid
    
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
import RNFetchBlob from 'react-native-fetch-blob'
import CarouselCards from '../../components/CarouselCards'
import { tintColor } from 'deprecated-react-native-prop-types/DeprecatedImagePropType';

var status = '';
export default function Orderdetails(props) {

    
    const [modalVisible, setModalVisible] = useState(false);
    const [itemselected, setItemselected] = useState(0);






    const DATA = [{
        id: "0",
        
        pic: ICONS.cornflakes2,
        

    },

    {
        id: "1",
        
        pic: ICONS.cornflakes_backside,
        


    },
{
    id: "2",
        
        pic: ICONS.cornflakes2,
        

    },


    ]

    const DATA2 = [{
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

function favourite1(){
    setItemselected(0)
}
      

    function submit1(){

       
       setProductselect1(1);
       setProductselect2(0);
       setProductselect3(0);

       } 

    function submit2(){
            setProductselect1(0);
            setProductselect2(1);
            setProductselect3(0);

        } 
        
        
        
    function submit3(){
        setProductselect1(0);
        setProductselect2(0);
        setProductselect3(1);
        
    }



 function selectItem(item){
    props.navigation.navigate("Productdetails")
 }






    const regex =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        const renderItem = ({ item, index }) => (



            <TouchableOpacity onPress={()=>props.navigation.navigate("Productdetails")}
            
            style={{
                flexDirection: 'row',
            height: normalize(100),
            width: normalize(200),
            borderRadius: normalize(10),
            backgroundColor: '#F0F0F0',
            marginHorizontal: normalize(5)
            }}
            >
                 <Image
                          source={item.pic}
                          style={{
                            height: normalize(60),
                            width: normalize(60),
                            alignSelf: 'center',
                            marginTop: normalize(5),
                            //marginLeft: normalize(20)
                          }}
                          resizeMode={'contain'}
                        ></Image>
        
        <View style={{
           
            width: '65%'
        }}>
        <Text
              numberOfLines={2}
                style={{
                  color: 'black',
                  fontSize: normalize(10),
                  marginLeft: normalize(10),
                  marginTop: normalize(10),
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
        
        
        
        <TouchableOpacity style={{
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
          marginTop: normalize(-20)
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
             </View>
        
        
        
            </TouchableOpacity>
          );
    const renderItem2 = ({ item, index }) => (
        <TouchableOpacity
          onPress={(item) => selectItem(item)}
          style={{
    
            height: normalize(180),
            width: normalize(120),
            backgroundColor: '#F0F0F0' ,
    
            marginLeft: normalize(7),
            borderRadius: normalize(15),
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            
            <View >
            <Image
                      source={item.pic}
                      style={{
                        height: normalize(60),
                        width: normalize(60),
                        alignSelf: 'center',
                        marginTop: normalize(5),
                        //marginLeft: normalize(20)
                      }}
                      resizeMode={'contain'}
                    ></Image>
                    </View>
    
    <>
          <Text
          numberOfLines={2}
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
      marginLeft: normalize(10),
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
    
    
    
    <TouchableOpacity style={{
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
    
         </>
    
    
        </TouchableOpacity>
      );



      //---------------------------------------------------------------------
   
        
//define Url....................
const fileUrl = 'https://cdn.graciousquotes.com/wp-content/uploads/2021/02/100-Inspirational-Quotes-About-Life.pdf';


        // Pdf download.................

const checkPermission = async () => {
    
  // Function to check the platform
  // If Platform is Android then check for permissions.
  console.log('hello');
  if (Platform.OS === 'ios') {
    downloadFile();
  } else {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        {
          title: 'Storage Permission Required',
          message:
            'Application needs access to your storage to download File',
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        // Start downloading
        downloadFile();
        console.log('Storage Permission Granted.');
      } else {
        // If permission denied then show alert
        Alert.alert('Error','Storage Permission Not Granted');
      }
    } catch (err) {
      // To handle permission related exception
      console.log("++++"+err);
    }
  }
};

const downloadFile = () => {
 
  // Get today's date to add the time suffix in filename
  console.log('gru')
  let date = new Date();
  // File URL which we want to download
  let FILE_URL = fileUrl;    
  // Function to get extention of the file url
  let file_ext = getFileExtention(FILE_URL);
 
  file_ext = '.' + file_ext[0];
 
  // config: To get response by passing the downloading related options
  // fs: Root directory path to download
  const { config, fs } = RNFetchBlob;
  let RootDir = fs.dirs.PictureDir;
  let options = {
    fileCache: true,
    addAndroidDownloads: {
      path:
        RootDir+
        '/file_' + 
        Math.floor(date.getTime() + date.getSeconds() / 2) +
        file_ext,
      description: 'downloading file...',
      notification: true,
      // useDownloadManager works with Android only
      useDownloadManager: true,   
    },
  };
  config(options)
    .fetch('GET', FILE_URL)
    .then(res => {
      // Alert after successful downloading
      console.log('res -> ', JSON.stringify(res));
      alert('File Downloaded Successfully.');
    });
};

const getFileExtention = fileUrl => {
  // To get the file extension
  return /[.]/.exec(fileUrl) ?
           /[^.]+$/.exec(fileUrl) : undefined;
};


//-------------------------------------------------------
 



//-------------------------------------------------------
 

    return (


        <Fragment>

            <Layout {...props}>
                <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>


                    <KeyboardAvoidingView
                        style={{ flex: 1 }}
                        behavior={Platform.OS == 'ios' ? 'padding' : "height"}>



                        {/* <ScrollView showsVerticalScrollIndicator={false} bounces={false} > */}




                        <ScrollView showsVerticalScrollIndicator={false} bounces={false} >



                            
                                <View style={{
                                    height: normalize(200),
                                    width: '100%',
                                    backgroundColor: '#FFF2F0',
                                    marginRight: normalize(10),
                                   borderBottomLeftRadius: normalize(20),
                                   borderBottomRightRadius: normalize(20)
                                }}>


<View style={{
    flexDirection: 'row',
    justifyContent: 'space-between'
}}>
      <TouchableOpacity onPress={()=>props.navigation.goBack()}
                                    style={{
                                        height: normalize(30),
                                        width: normalize(30),
                                       
                                        
                                        alignSelf: 'flex-start',
                                       
                                        marginTop: normalize(5),
                                        marginLeft: normalize(10)
                                    }}
                                    
                                    />
   
   {/* <Image
                                        source={ICONS.left_arrow}
                                        style={{
                                            height: normalize(15),
                                            width: normalize(15),
                                            alignSelf: 'center',
                                            
                                            position: 'absolute',
                                            top:15,
                                            left:20,
                                            tintColor: 'black'
                                        }}
                                        resizeMode={'contain'}
                                        tintColor= {'black'}
                                    ></Image> */}


                                    
   
               
                
                <TouchableOpacity onPress={()=>ShareExample()}
                                    style={{
                                        height: normalize(30),
                                        width: normalize(30),
                                       
                                        backgroundColor: 'white',
                                        shadowColor: '#171717',
                                        shadowOffset: {width: -2, height: 4},
                                        shadowOpacity: 0.2,
                                        borderRadius: normalize(5),
                                        
                                       
                                        marginRight: normalize(10),
                                        marginTop: normalize(5)

                                    }}
                                    
                                    >
                
                
                <Image
                                        source={ICONS.share}
                                        style={{
                                            height: normalize(15),
                                            width: normalize(15),
                                            alignSelf: 'center',
                                            
                                            position: 'absolute',
                                            top:10,
                                           
                                            tintColor: '#515151',
                                           
                                            
                                        }}
                                        resizeMode={'contain'}
                                        tintColor= {'black'}
                                    ></Image> 



                                    
                                    </TouchableOpacity>
                                   

</View>                                  
                              
                                    <View>

 
 <Image
                                         source={ICONS.cornflakes2}
                                         style={{
                                            height: normalize(130),
                                            width: normalize(130),
                                            alignSelf: 'center',
                                             
                                            
                                         }}
                                         resizeMode={'contain'}
                                     ></Image>
 
 
 
 
 
 
        

            </View>

                                    



                                    
                                </View>


                            {/* </View> */}


                            <View style={{
                                marginLeft: normalize(20),
                                marginTop: normalize(30)
                            }}>
                                <Text
                                    style={{
                                        color: 'black',
                                        fontSize: normalize(16),
                                        fontWeight: '600',
                                        fontStyle: FONTS.Hind,
                                        textAlign: 'left',

                                    }}
                                >Kellogg's Muesli Cereal Crunchy Nut, cereals & fruits
                                </Text>


                               

                            </View>

               



           




                      
                <TouchableOpacity onPress={()=> props.navigation.navigate("Cart")} 
                
                style={{
                    
                    marginLeft: normalize(20),
                    marginTop: normalize(20)
                }}
                >

                <View style={{
                                        height: normalize(30),
                                        width: normalize(120),
                                        backgroundColor: '#69BE53',
                                        borderRadius: normalize(20),
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        flexDirection: 'row',

                                       

                                    }}>
                                         
                                        <Text
                                        style={{
                                            fontSize: normalize(12),
                                            
                                            color: 'white'
                                        }}
                                        >
                                         Buy It Again
                                        </Text>

                                    </View>

                

                                    </TouchableOpacity>

                                    <Text style={{
              color: "black",
              fontFamily: FONTS.RubikBold,
              fontSize: normalize(14),
              marginLeft: normalize(20),
              marginTop: normalize(20)
            }}>Order Info</Text>





            <TouchableOpacity style={{
    height: normalize(40),
    marginTop: normalize(10),
    flexDirection: 'row',
    width: '90%',
    backgroundColor: '#F0F0F0',
    alignSelf: 'center',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: normalize(20)
}} onPress ={()=> checkPermission()}>
             <Text style={{
              color: "black",
              fontFamily: FONTS.Hind,
              fontSize: normalize(12),
              marginLeft: normalize(20),
             
              
            }}>Download Invoice</Text>

<Image
                  source={ICONS.right_arrow}
                  style={{
                    height: normalize(10),
                    width: normalize(10),
                    tintColor: '#515151',
                    
                    alignSelf: 'center',
                    marginRight: normalize(10)
                    
                  }}
                  resizeMode={'contain'}
                  tintColor= {'#515151'}
                ></Image>

            </TouchableOpacity>

            <Text style={{
              color: "black",
              fontFamily: FONTS.Hind,
              fontSize: normalize(12),
              marginLeft: normalize(30),
              marginTop: normalize(10)
              
            }}>Return window closed on 1 January 2023</Text>

<Text style={{
              color: "black",
              fontFamily: FONTS.Hind,
              fontSize: normalize(12),
              marginLeft: normalize(30),
              marginTop: normalize(10)
              
            }}>
                Ordered on 21 December 2022</Text>

                <View style={{
    flexDirection: 'row',
    justifyContent: 'space-between',

}}>
<Text
                                        style={{
                                            fontSize: normalize(14),
                                            fontFamily: FONTS.Hind,
                                            marginLeft: normalize(20),
                                            color: 'black',
                                            fontWeight: '700',
                                            marginTop: normalize(20)
                                            
                                        }}
                                        >
                                       Customer also bought</Text>

                                       <TouchableOpacity onPress={()=> props.navigation.navigate("Home")}>
<Text style={{
              color: "#69BE53",
              fontFamily: FONTS.Hind,
              fontSize: normalize(14),
              marginRight: normalize(20),
              marginTop: normalize(20)
            }}>See All</Text>
            
</TouchableOpacity>
</View>

<FlatList
                data={DATA2}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                showsHorizontalScrollIndicator={false}

                horizontal={true}
                style={{

                  width: '100%',
                  marginLeft: normalize(12),
                  marginTop: normalize(15),
                  marginBottom: normalize(20)




                }}


              />
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