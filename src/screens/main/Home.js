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
import CarouselCards from '../../components/CarouselCards'
import {ViewPropTypes} from 'deprecated-react-native-prop-types'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import Geolocation from 'react-native-geolocation-service';
import Geocoder from 'react-native-geocoding';

var status = '';
export default function Home(props) {


  const [name, setName] = useState('');
  const [mobilenumber, setMobileNumber] = useState('');
  const [emailaddress, setEmailaddress] = useState('');
  const [choosepassword, setChoosepassword] = useState('');
  const [confirmpassword, setConfirmpassword] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [location, setLocation] = useState(false);
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [address, setAddress] = useState('');
  const [dropdownpressed, setDropdownpressed] = useState(0);

  useEffect(() => {

        

    


    
    //getLocation();
   
    


    



}, []);


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

  const getLocation = () => {
    const result = requestLocationPermission();
    result.then(res => {
      console.log('res is:', res);
      if (res) {
        Geolocation.getCurrentPosition(
          position => {
            console.log("Latitude === ", position?.coords?.latitude);
            console.log("Longitude === ", position?.coords?.longitude);
            setLatitude(position?.coords?.latitude);
            setLongitude(position?.coords?.longitude);
            geocoding(position)
            
          },
          error => {
            // See error code charts below.
            console.log(error.code, error.message);
            setLocation(false);
          },
          {enableHighAccuracy: false, timeout: 15000},
        );
      }
    });
    console.log(location);
   
  };

  function geocoding(position){
    console.log("Geocoding latitude===", position?.coords?.latitude)
    console.log("Geocoding longitude===", position?.coords?.longitude)
    var lat =  position?.coords?.latitude
    var long = position?.coords?.longitude

    Geocoder.init("AIzaSyCTNEZO6ODA9x9z0MDb9fPGSgtYI0mqvUo");
    Geocoder.from(lat, long)

.then(json => {
        var addressComponent = json.results[0].formatted_address;
  console.log("Address===",addressComponent);
  setAddress(addressComponent)
})
.catch(error => console.warn(error));
console.log("adkhbhkad")
  }


  
    
   
  

  const requestLocationPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Geolocation Permission',
          message: 'Can we access your location?',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      console.log('granted', granted);
      if (granted === 'granted') {
        console.log('You can use Geolocation');
        return true;
      } else {
        console.log('You cannot use Geolocation');
        return false;
      }
    } catch (err) {
      return false;
    }
  };

 function selectItem(item){
  
props.navigation.navigate("Productdetails" , {
  img: item.pic
})
 }

 function selectItem2(item){

  
  props.navigation.navigate("Discountpage",{
    discount_rate: item.discountrate
  })
   }

 




  const regex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const renderItem1 = ({ item, index }) => (
    <TouchableOpacity
      onPress={(item) => selectItem2(item)}
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
      


      <Text
        style={{
          color: 'white',
          fontSize: normalize(15),
          fontWeight: '700',
          marginTop: normalize(5),
          alignSelf: 'center'
        }}
      >{item.discountrate}
      </Text>


      <Text
        style={{
          color: 'white',
          fontSize: normalize(10),
          fontWeight: '600',
          marginTop: normalize(5),
          alignSelf: 'center'
        }}
      >OFF
      </Text>


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

     


    </TouchableOpacity>
  );
  const renderItem3 = ({ item, index }) => (
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

     


    </TouchableOpacity>
  );
  return (


    <Fragment>

      <Layout Home={true} {...props}>
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>


          <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS == 'ios' ? 'padding' : "height"}>



            <ScrollView showsVerticalScrollIndicator={false} bounces={false} keyboardShouldPersistTaps="handled" >






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
  
  width: normalize(200),
  
  marginLeft: normalize(-30)
}}>
              <Text style={{
                color: 'black',
                fontSize: normalize(14),
                fontWeight: '600',
               // marginLeft: normalize(-60)
               marginTop: normalize(-5)
              }}>
Delivery In 10 minutes
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

          <TouchableOpacity
style={{
  flexDirection: 'row',
  marginTop: normalize(-20)
}}

>
  <View style={{
    marginTop: normalize(3),
    marginLeft: normalize(50),
    height: normalize(30),
    width: normalize(20),
   
  justifyContent: 'center',
  alignItems: 'center'
  }}>
<Image
                  source={ICONS.location}
                  style={{
                    height: normalize(10),
                    width: normalize(15),
                    
                    
                  }}
                  resizeMode={'contain'}
                  
                ></Image>

</View>



                <GooglePlacesAutocomplete
                
        placeholder={address}
        //minLength={4}
        enablePoweredByContainer={false}
        autoFocus={true}
            listViewDisplayed="auto"
            returnKeyType={'search'}
      
        currentLocation={true} 
        currentLocationLabel="Current location"
        nearbyPlacesAPI="GoogleReverseGeocoding"
        renderDescription={row => row.description || row.formatted_address || row.name}
        renderRow={(rowData) => {
          const title = rowData.structured_formatting.main_text;
          const address = rowData.structured_formatting.secondary_text;
          return (
           <View style={{
            width: '100%'
           }}>
            <Text style={{ fontSize: 14, color: 'green' }}>{title}</Text>
            <Text style={{ fontSize: 14 }}>{address}</Text>
           </View>
           );
          }}
        fetchDetails={true}
        textInputProps={{
          placeholderTextColor: '#515151',
         
            
       
        }}
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          console.log("Data====",data);
          setAddress(data.description)
          setDropdownpressed(!dropdownpressed)
          console.log("kabfkwba",dropdownpressed)
        }}
       
        query={{
          key: 'AIzaSyCTNEZO6ODA9x9z0MDb9fPGSgtYI0mqvUo',
          language: 'en',
        }}
        onFail={error => console.log(error)}
        onNotFound={() => console.log('no results')}
        
      />
  <View style={{
   
    marginRight: normalize(50),
    height: normalize(30),
    width: normalize(20),

  justifyContent: 'center',
  alignItems: 'center'
  }}>

<Image
                  source={ICONS.downward_arrow}
                  style={{
                    height: normalize(10),
                    width: normalize(7),
                   
                    marginTop: normalize(9),
                   
                  }}
                  resizeMode={'contain'}
                  
                ></Image>
                </View>

</TouchableOpacity> 



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
                                placeholder={'Search For Products'}
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
            justifyContent: 'center',
           
           }}>

            <CarouselCards />

            </View>
              <FlatList
                data={DATA}
                renderItem={renderItem1}
                keyExtractor={item => item.id}
                showsHorizontalScrollIndicator={false}

                horizontal={true}
                style={{


                  marginLeft: normalize(12),

                  



                }}


              />

          
<View style={{
  flexDirection: 'row',
  justifyContent: 'space-between',
  marginRight: normalize(10)
}}>
            <Text style={{
              color: "#3F3F3F",
              fontFamily: FONTS.RubikBold,
              fontSize: normalize(14),
              marginLeft: normalize(30),
              marginTop: normalize(20)
            }}>Breakfast & Bakery</Text>


<TouchableOpacity onPress={()=> props.navigation.navigate("Productlist")}>
<Text style={{
              color: "#69BE53",
              fontFamily: FONTS.RubikBold,
              fontSize: normalize(14),
              marginLeft: normalize(30),
              marginTop: normalize(20)
            }}>See All</Text>
</TouchableOpacity>

</View>
           


<FlatList
                data={DATA2}
                renderItem={renderItem2}
                keyExtractor={item => item.id}
                showsHorizontalScrollIndicator={false}

                horizontal={true}
                style={{


                  marginLeft: normalize(12),
                  marginTop: normalize(15)
                  



                }}


              />
<View style={{
  flexDirection: 'row',
  justifyContent: 'space-between',
  marginRight: normalize(10)
}}>
            <Text style={{
              color: "#3F3F3F",
              fontFamily: FONTS.RubikBold,
              fontSize: normalize(14),
              marginLeft: normalize(30),
              marginTop: normalize(20)
            }}>Dairy & Frozen Foods</Text>

<TouchableOpacity onPress={()=>props.navigation.navigate("Productlist")}>
<Text style={{
              color: "#69BE53",
              fontFamily: FONTS.RubikBold,
              fontSize: normalize(14),
              marginLeft: normalize(30),
              marginTop: normalize(20)
            }}>See All</Text>
            </TouchableOpacity>
</View>

<FlatList
                data={DATA3}
                renderItem={renderItem3}
                keyExtractor={item => item.id}
                showsHorizontalScrollIndicator={false}

                horizontal={true}
                style={{


                  marginLeft: normalize(12),
                  marginTop: normalize(15),
                  marginBottom: normalize(20)



                }}


              />



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