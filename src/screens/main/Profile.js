import React, { Fragment, useEffect, useState } from 'react';
import {
  View,
  SafeAreaView,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Dimensions,

  Image,
  ImageBackground,
  StatusBar,
  Alert,
  TextInput
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
import ImagePicker from 'react-native-image-crop-picker';
import OTPInputView from '@twotalltotems/react-native-otp-input'
import Modal from 'react-native-modal';

const { width, height } = Dimensions.get('screen');



var status = '';
export default function Profile(props) {


  const [name, setName] = useState('');
  const [mobilenumber, setMobileNumber] = useState('');
  const [emailaddress, setEmailaddress] = useState('');
  const [address, setAddress] = useState('');
  const [pickerVisial, setPickerVisial] = useState(false);
  const [flag, setFlag] = useState(0);
  const [isVisible, setVisible] = useState(false);
  const [filePath, setFilePath] = useState('');
  const isFocused = useIsFocused();
 




  const requestCameraPermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.CAMERA,
          {
            title: 'Camera Permission',
            message:
              'Cool Photo App needs access to your camera ' +
              'so you can take awesome pictures.',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          },
        );

        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          console.log('You can use the camera');
        } else {
          console.log('Camera permission denied');
          setPickerVisial(false);
        }
      } catch (err) {
        console.warn(err);
      }
    }
  };
  const requestExternalWritePermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          {
            title: 'External Storage Write Permission',
            message: 'App needs write permission',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          },
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          console.log('You can use the camera');
        } else {
          console.log('Camera permission denied');
          setPickerVisial(false);
        }
      } catch (err) {
        console.warn(err);
      }
    }
  };

  async function openPickerModal() {
    setPickerVisial(true);
    // setCoverPic(false)
    let isCameraPermitted = await requestCameraPermission();
    let isStoragePermitted = await requestExternalWritePermission();
  }


  function openGallery() {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      let imageObj = image;
      imageObj = {
        name: 'ProfilePic',
        type: image.mime,
        uri: image.path,
      };
      console.log('SidyImage', imageObj.uri);
        setFilePath(imageObj.uri);
        setPickerVisial(false);
    //   if (!coverPic) {
    //     setFilePath(imageObj.uri);
    //     setPickerVisial(false);
    //     updateDataBio(imageObj);
    //   }
    //   else {
    //     // let arr = []
    //     // arr.push(imageObj)
    //     // setImageData(arr)
    //     if (imageData.length == 0) {
    //       addDataImages(imageObj)
    //     }
    //     else {
    //       updateDataImages(imageObj)
    //     }

    //     setPickerVisial(false);
    //   }

    });
  }


  function openCamera() {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      let imageObj = image;
      imageObj = {
        name: 'ProfilePic',
        type: image.mime,
        uri: image.path,
      };
      setFilePath(imageObj.uri);
      setPickerVisial(false);
    //   if (!coverPic) {
    //     setFilePath(imageObj.uri);
    //     setPickerVisial(false);
    //     updateDataBio(imageObj);
    //   }
    //   else {
    //     if (imageData.length == 0) {
    //       addDataImages(imageObj)
    //     }
    //     else {
    //       updateDataImages(imageObj)
    //     }
    //     setPickerVisial(false);
    //   }
    });
  }

  function verifyAlert() {
    Alert.alert('Verification', 'Please verify your email address', [
      {
        text: 'Cancel',
        onPress: () => {console.log('Cancel Pressed') , setFlag(0)},
        style: 'cancel',
      },
      {text: 'OK', onPress: () => {console.log('OK Pressed') , setFlag(0)}},
    ]);
}


function otpVarification()
{
  return(

    <View>
     
    </View>
  )
}



  
function verifyEmail(){
  console.log("fgdt"+emailaddress)
  if(emailaddress == '')
  {
    verifyAlert()
  }
  else{
          setVisible(true)
  }
}






  const regex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;



  return (


    <Fragment>


      <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>


        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS == 'ios' ? 'padding' : "height"}>



          <ScrollView showsVerticalScrollIndicator={false} bounces={false} >

          <Modal
          isVisible={pickerVisial}
          style={{
            width: width,
            height: height,
          }}>
          <View
            style={{
              height: normalize(140),
              width: '90%',
              backgroundColor: '#F9F9F9',
              borderRadius: normalize(10),
            }}>
            
            <TouchableOpacity onPress={openCamera}>
              <Text
                style={{
                  fontFamily: FONTS.PlayfairDisplayBlack,
                  color: 'black',
                  fontSize: normalize(14),
                  marginTop: normalize(20),
                  marginLeft: normalize(15),
                }}>
                Take photo...
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={openGallery}>
              <Text
                style={{
                    fontFamily: FONTS.PlayfairDisplayBlack,
                    color: 'black',
                  fontSize: normalize(14),
                  marginTop: normalize(20),
                  marginLeft: normalize(15),
                }}>
                Choose from Library
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setPickerVisial(false)}>
              <Text
                style={{
                    fontFamily: FONTS.PlayfairDisplayBlack,
                    color: 'black',
                  fontSize: normalize(14),
                  marginTop: normalize(20),
                  marginLeft: normalize(15),
                }}>
                Cancel
              </Text>
            </TouchableOpacity>
          </View>
        </Modal>

          <Image
                source={ICONS.ellipse}
                style={{
                  height: normalize(80),
                  width: normalize(80),
                  marginRight: normalize(-15),
                  marginTop: normalize(-5),
                  
                  alignSelf: 'flex-end',
                  position: 'relative'
                }}
                resizeMode={'contain'}
            />

<Image
                source={ICONS.ellipse2}
                style={{
                  height: normalize(50),
                  width: normalize(50),
                  alignSelf: 'flex-end',
                  marginRight: normalize(-10),
                  alignSelf: 'flex-end',
                  position: 'relative',
                  top: -6
                }}
                resizeMode={'contain'}
            />







            <View
              style={{

                marginTop: normalize(-40),
                alignSelf: 'center'
              }}>


<TouchableOpacity onPress = {openPickerModal}
                style={{
                  width: normalize(90),
                  height: normalize(90),
                  borderRadius: normalize(45),
                  backgroundColor: '#F36E35',
                  alignSelf: 'center',
                 
                }}

              >
                <Image
                  source={ICONS.user}
                  style={{
                    height: normalize(40),
                    width: normalize(40),
                    marginTop: normalize(20),
                    alignSelf: 'center'
                  }}
                  resizeMode={'contain'}
                  tintColor= {'white'}
                ></Image>

                <TouchableOpacity onPress={openPickerModal}
                
               style={{position: 'absolute',
               bottom: 15,
               right: 22}} 
                >

<Image
                  source={ICONS.camera}
                  style={{
                    height: normalize(17),
                    width: normalize(17),
                    marginTop: normalize(20),
                    alignSelf: 'center',
                    
                  }}
                  resizeMode={'contain'}
                  tintColor= {'white'}
                ></Image>

</TouchableOpacity>



              </TouchableOpacity>



              <Text
                style={{
                  fontSize: normalize(14),
                  letterSpacing: 3,
                  fontWeight: '700',
                  textAlign: 'center',
                  marginTop: normalize(10),
                  color: 'black',

                }}>
                EDIT PROFILE
              </Text>
            
<View style={{
    marginVertical: normalize(20)
}}>
                  <View style={{flexDirection:'row'}}>
              <TextInput
                maxLength={30}
                value={name}
               
                onChangeText={_ => setName(_)}
                style={{
                  
                 
                  paddingLeft: normalize(15),
                  paddingRight: normalize(8),
                  marginTop: normalize(10),
                  color:'black'
                }}
                marginTop={normalize(10)}
                keyboardType={'email-address'}
                fontSize={normalize(14)}
                width={normalize(270)}
                placeholder={'Lee and Nee Software Exports'}
                placeholderTextColor={'gray'}
                borderRadius={normalize(10)}
                backgroundColor={'#D3D3D3'}

              />
              <Text style={{color:'red'}}>*</Text>
              </View> 

              <TextInput
                value={mobilenumber}
                
                onChangeText={_ => setMobileNumber(_)}
                style={{
                  
                 
                  paddingLeft: normalize(15),
                  paddingRight: normalize(8),
                  marginTop: normalize(10),
                  color:'black'
                }}
                marginTop={normalize(10)}
                keyboardType={'numeric'}
                fontSize={normalize(14)}
                width={normalize(270)}
                placeholder={'8913247247742'}
                borderRadius={normalize(10)}
                placeholderTextColor={'gray'}
                backgroundColor={'#D3D3D3'}
                
              />
              <View style={{flexDirection:'row',marginTop:normalize(3)}}>
              <TextInput
                value={emailaddress}
                
                onChangeText={_ => setEmailaddress(_)}
                style={{
                  
                 
                  paddingLeft: normalize(15),
                  paddingRight:normalize(8),
                  marginTop:normalize(10),
                  color:'black'
                }}
                marginTop={normalize(10)}
                keyboardType={'email-address'}
                fontSize={normalize(14)}
                width={normalize(200)}
                placeholder={'abc@yopmail.com'}
                placeholderTextColor={'gray'}
                borderRadius={normalize(10)}
                backgroundColor={'#D3D3D3'}

              />
              <Text style={{color:'red'}}>*</Text>
              <TouchableOpacity style={{backgroundColor: flag==0?'#F36E35':'#69BE53', 
              width:normalize(60),
              height:normalize(40),
              alignSelf:'center',
              marginLeft:normalize(5),
              marginTop:normalize(10),
              justifyContent:'center',
              alignItems: 'center',
              borderRadius:normalize(10)}} onPress={()=> verifyEmail()
              }>



{flag==0?  (     <Text style={{
              fontFamily: FONTS.Hind,
              fontSize: normalize(12),
              color: 'white'
              }}>Verify</Text>
) : (
<Image
                                     source={ICONS.tick}
                                     style={{
                                         height: normalize(20),
                                         width: normalize(20),
                                         
                                         
                                     }}
                                     resizeMode={'contain'}
                                     tintColor={'white'}
                                 ></Image>
)}


              </TouchableOpacity>
              </View>




</View>
            

              <TouchableOpacity

                style={{
                  height: normalize(35),
                  width: normalize(100),
                  marginTop: normalize(20),
                  backgroundColor: '#69BE53',
                  alignSelf: 'center',
                  borderRadius: normalize(20)
                }}
              >
                <Text
                  style={{
                    color: 'white',
                    textAlign: 'center',
                    marginTop: normalize(9),
                    fontSize: normalize(10),
                    fontWeight: '800'
                  }}
                >SUBMIT</Text>


              </TouchableOpacity>




            </View>


            <View style={{
              flexDirection: 'row',

            }}>

              

             

            


            </View>

           


            <View style={{
              marginTop: normalize(5),
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: normalize(20),
            }}>


            

             



            </View>

            

          
            <Modal isVisible={isVisible}
         
         style={{
             justifyContent: 'center',
             alignItems: 'center'
         }}
          animationType={"slide"}
   
       onBackdropPress = { () => setVisible(false)}
          >
          <View style={{
 
 height: normalize(380),
 width: '95%',
 backgroundColor: 'white',
 
 borderRadius: normalize(10),
 
 }}>
 
 <TouchableOpacity
                                 style={{
                                     width: '12%',
                                     height: '10%',
                                     backgroundColor: '#F36E35',
                                     borderRadius: normalize(5),
                                     alignSelf: 'flex-end',
                                     justifyContent: 'center',
                                    
                                 }}
 
                                 onPress={() => {
                                     console.log("kshbfhwb")
                                     setVisible(false)
                                     setFlag(0)
 
                                 }}>
                                 <Image
                                     source={ICONS.cross}
                                     style={{
                                         height: normalize(11),
                                         width: normalize(10),
                                         
                                         alignSelf: 'center'
                                     }}
                                     resizeMode={'contain'}
                                     tintColor={'white'}
                                 ></Image>
                             </TouchableOpacity>
 
 
 
 
 
 
 <Text
                            style={{
                                fontSize: normalize(14),
                                letterSpacing: 3,
                                fontWeight: '700',
                                textAlign: 'center',
                                marginTop: normalize(10),
                                color: 'black',

                            }}>
                            ENTER OTP
                        </Text>

                       
                        

<OTPInputView
    style={{width: '80%', height: 200}}
   pinCount={4}
    // code={this.state.code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
   // onCodeChanged = {setValue}
    autoFocusOnLoad
    codeInputFieldStyle={{ 
      color: '#69BE53',
      borderColor: 'black',
      borderRadius: normalize(5),
      marginLeft: normalize(25),
     marginTop: normalize(10)
    }}
    codeInputHighlightStyle={{
      color: '#69BE53',
      borderColor: '#69BE53',
    }}
    // onCodeFilled = {(value) => {
    //    props.navigation.navigate("Login")
    // }}
/>




                        <TouchableOpacity onPress={()=> {setVisible(false), setFlag(1)}}

                            style={{
                                height: normalize(35),
                                width: normalize(100),
                                marginTop: normalize(20),
                                backgroundColor: '#69BE53',
                                alignSelf: 'center',
                                borderRadius: normalize(20)
                            }}
                        >
                            <Text
                                style={{
                                    color: 'white',
                                    textAlign: 'center',
                                    marginTop: normalize(9),
                                    fontSize: normalize(10),
                                    fontWeight: '800'
                                }}
                            >SUBMIT</Text>


                        </TouchableOpacity>



 </View>
        </Modal>


          </ScrollView>


          
         


        </KeyboardAvoidingView>
{/* <Loader/>   */}
      </SafeAreaView>


    </Fragment>


  );
}