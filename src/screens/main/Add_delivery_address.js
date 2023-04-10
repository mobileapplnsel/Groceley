import React, { Fragment, useEffect, useState } from 'react';
import {
  View,
  SafeAreaView,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Image,
  ImageBackground,
  StatusBar,
  Alert,
  TextInput,
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
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import Geolocation from 'react-native-geolocation-service';
import Geocoder from 'react-native-geocoding';



var status = '';
export default function Add_delivery_address(props) {


  const [name, setName] = useState('');
  const [mobilenumber, setMobileNumber] = useState('');
  const [house, setHouse] = useState('');
  const [street, setStreet] = useState('');
  const [landmark, setLandmark] = useState('');
  const [town, setTown] = useState('');
  const [states, setStates] = useState('');
  const [country, setCountry] = useState('');
  const [pincode, setPincode] = useState('');
  const [currentlocation_clicked, setCurrentlocation_clicked] = useState(false);
  const [address, setAddress] = useState('');
  const [location, setLocation] = useState(false);
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [dropdownpressed, setDropdownpressed] = useState(0);
  const isFocused = useIsFocused();



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





  function currentlocation(){
    setCurrentlocation_clicked(!currentlocation_clicked)
    getLocation();
   }

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


  const regex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;



  return (


    <Fragment>


      <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>


        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS == 'ios' ? 'padding' : "height"}>



          <ScrollView showsVerticalScrollIndicator={false} bounces={false} >



         


    <View style={{
        
        flex: 1,
        marginBottom: normalize(20)
    }}>




<View style={{
  flexDirection: 'row'
}}>
          

<TouchableOpacity 
             onPress={()=> props.navigation.goBack()}
             >

          
<Image
                  source={ICONS.previous}
                  style={{
                   height: normalize(20),
                    width: normalize(20),
                    marginTop: normalize(20),
                    marginLeft: normalize(20),
                    
                  }}
                  resizeMode={'contain'}
                 
                ></ Image>
</TouchableOpacity>




             
              <Text
                style={{
                  fontSize: normalize(14),
                  letterSpacing: 1,
                  fontWeight: '700',
                  textAlign: 'left',
                  fontFamily: FONTS.Hind,
                  marginTop: normalize(20),
                  color: 'black',
                  marginLeft: normalize(20)

                }}>
             Add Delivery Address
              </Text>

              </View>


              <View
            style={{
                height: normalize(1),
                width: '90%',
                backgroundColor: '#69BE53',
                alignSelf: 'center',
                marginTop: normalize(10)
            }}
            />


              <View style={{
    height: normalize(70),
    width: '90%',
    
    alignSelf: 'center',
    borderRadius: normalize(10)
}}>
         <View style={{
            flexDirection: 'row',
            marginTop: normalize(20),
         }}>

            <View>
<View
style={{
    height: normalize(15),
    width: normalize(15),
    borderRadius: normalize(7.5),
    borderWidth: normalize(1),
    borderColor: 'black',
    marginRight: normalize(5),
    marginLeft: normalize(28),
    backgroundColor: '#69BE53'
}}
/>
</View>
<View
style={{
    height: normalize(1),
    width: '30%',
    alignSelf: 'center',
    backgroundColor: '#A9A9A9'
}}
/>

<View
style={{
    height: normalize(15),
    width: normalize(15),
    borderRadius: normalize(7.5),
    borderWidth: normalize(1),
    borderColor: 'black',
    marginLeft: normalize(5),
    
    backgroundColor: 'white'
}}
/>

<View
style={{
    height: normalize(1),
    width: '30%',
    alignSelf: 'center',
    backgroundColor: '#A9A9A9',
    marginLeft: normalize(5)
}}
/>

<View
style={{
    height: normalize(15),
    width: normalize(15),
    borderRadius: normalize(7.5),
    borderWidth: normalize(1),
    borderColor: 'black',
    marginLeft: normalize(5),
    
    backgroundColor: 'white'
}}
/>
         </View>

         <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: normalize(2)
         }}>
            <Text
            style={{
                fontSize: normalize(12),
                
                fontWeight: '600',
                textAlign: 'center',
                fontFamily: FONTS.Hind,
                marginLeft: normalize(10),
                color: 'black',
                

              }}
            >Address</Text>
            <Text
             style={{
                fontSize: normalize(12),
                
                fontWeight: '600',
                textAlign: 'center',
                fontFamily: FONTS.Hind,
               
                color: 'black',
                

              }}
            >Payment</Text>
            <Text
             style={{
                fontSize: normalize(12),
                
                fontWeight: '600',
                textAlign: 'center',
                fontFamily: FONTS.Hind,
                marginRight: normalize(10),
                color: 'black',
                

              }}
            >Order</Text>
         </View>

         </View>
         <View
            style={{
                height: normalize(1),
                width: '90%',
                backgroundColor: '#69BE53',
                alignSelf: 'center',
                
            }}
            />

         {currentlocation_clicked == 0 ? (   <TouchableOpacity onPress={()=> currentlocation()}
            style={{
                height: normalize(40),
                width: '90%',
                backgroundColor: '#69BE53',
                alignSelf: 'center',
                marginTop: normalize(20),
                borderRadius: normalize(15)
            }}
            
            >
                <Text style={{
                     fontSize: normalize(12),
                     
                    
                     textAlign: 'center',
                     fontFamily: FONTS.Hind,
                     marginTop: normalize(10),
                     color: 'white',
                }}>
                       Use Current Location
                </Text>

                

            </TouchableOpacity> ) : (<TouchableOpacity onPress={()=> currentlocation()}
            style={{
                height: normalize(40),
                width: '90%',
                backgroundColor: '#69BE53',
                alignSelf: 'center',
                marginTop: normalize(20),
                borderRadius: normalize(15)
            }}
            
            >
                <Text style={{
                     fontSize: normalize(12),
                     
                    
                     textAlign: 'center',
                     fontFamily: FONTS.Hind,
                     marginTop: normalize(10),
                     color: 'white',
                }}>
                       Use Manual Location
                </Text>

                

            </TouchableOpacity>)}




            {currentlocation_clicked == 1 ? (     <View
style={{
  flexDirection: 'row',
  marginTop: normalize(10)
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
                    height: normalize(12),
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
          console.log("kabfkwba",details)
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

</View> 
        
  ) : (null)}


{currentlocation_clicked == 0? (<View>
            <Text style={{
                     fontSize: normalize(12),
                     
                    
                     textAlign: 'center',
                     fontFamily: FONTS.Hind,
                     marginTop: normalize(10),
                     color: 'black',
                }}>
                       OR
                </Text>

           

<View style={{
    alignSelf: 'center'
}}>
              <TextInputItem
                value={name}
                onChangeText={_ => setName(_)}
                marginTop={normalize(10)}
                keyboardType={'email-address'}
                fontSize={normalize(14)}
                width={'90%'}
                placeholder={'Full Name'}
                secureTextEntry={false}
                borderRadius={normalize(10)}
                backgroundColor={'#E8E8E8'}

              />

              <TextInputItem
                value={mobilenumber}
                onChangeText={_ => setMobileNumber(_)}
                marginTop={normalize(10)}
                keyboardType={'numeric'}
                fontSize={normalize(14)}
                width={'90%'}
                placeholder={'Mobile Number'}
                borderRadius={normalize(10)}
                backgroundColor={'#E8E8E8'}
                secureTextEntry={false}

              />
              <TextInputItem
                value={house}
                onChangeText={_ => setHouse(_)}
                marginTop={normalize(10)}
               
                fontSize={normalize(14)}
                width={'90%'}
                placeholder={'Flat, House no.,Apartment'}
                borderRadius={normalize(10)}
                backgroundColor={'#E8E8E8'}
                secureTextEntry={false}
              />
               <TextInputItem
                value={street}
                onChangeText={_ => setStreet(_)}
                marginTop={normalize(10)}

                fontSize={normalize(14)}
                width={'90%'}
                placeholder={'Street'}
                borderRadius={normalize(10)}
                backgroundColor={'#E8E8E8'}
                secureTextEntry={false}
              />

<TextInputItem
                value={landmark}
                onChangeText={_ => setStreet(_)}
                marginTop={normalize(10)}

                fontSize={normalize(14)}
                width={'90%'}
                placeholder={'Landmark'}
                borderRadius={normalize(10)}
                backgroundColor={'#E8E8E8'}
                secureTextEntry={false}
              />
              

              <TextInputItem
                value={town}
                onChangeText={_ => setTown(_)}
                marginTop={normalize(10)}

                fontSize={normalize(14)}
                width={'90%'}
                placeholder={'Town/City'}
                borderRadius={normalize(10)}
                backgroundColor={'#E8E8E8'}
                secureTextEntry={false}
              />
              <TextInputItem
                value={states}
                onChangeText={_ => setStates(_)}
                marginTop={normalize(10)}

                fontSize={normalize(14)}
                width={'90%'}
                placeholder={'State'}
                borderRadius={normalize(10)}
                backgroundColor={'#E8E8E8'}
                secureTextEntry={false}
              />
              <TextInputItem
                value={country}
                onChangeText={_ => setCountry(_)}
                marginTop={normalize(10)}

                fontSize={normalize(14)}
                width={'90%'}
                placeholder={'Country'}
                borderRadius={normalize(10)}
                backgroundColor={'#E8E8E8'}
                secureTextEntry={false}
              />
               <TextInputItem
                value={pincode}
                onChangeText={_ => setPincode(_)}
                marginTop={normalize(10)}

                fontSize={normalize(14)}
                width={'90%'}
                placeholder={'Pincode'}
                borderRadius={normalize(10)}
                backgroundColor={'#E8E8E8'}
                secureTextEntry={false}
              />




            <View
            style={{
                height: normalize(30),
                width: '90%',
                backgroundColor: 'green'
            }}
            />
           
           
</View>

              <View
              style={{
                height: normalize(1),
                width: '90%',
                backgroundColor: '#69BE53',
                alignSelf: 'center',
                marginTop: normalize(-10)
              }}
              />

</View>) : (
  null
)}

<TouchableOpacity onPress={()=> props.navigation.navigate("Add_delivery_instructions")}
          style={{
            height: normalize(40),
            width: '90%',
            marginTop: normalize(10),
            alignSelf: 'center',
            borderWidth: normalize(1),
            borderRadius: normalize(15),
            backgroundColor: 'white',
            borderColor: '#D3D3D3'
          }}
          
        > 
        
        <Text style={{
        fontSize: normalize(12),           
        textAlign: 'center',
        fontFamily: FONTS.Hind,
        marginTop: normalize(10),
        color: 'black'
    }}
        >
            Add Delivery Instructions(optional)
            </Text>
            
            </TouchableOpacity>

            <TouchableOpacity onPress={()=> props.navigation.navigate("Select_delivery_address")}
          style={{
            height: normalize(40),
            width: '90%',
            marginTop: normalize(10),
            alignSelf: 'center',
            borderWidth: normalize(1),
            borderRadius: normalize(15),
            backgroundColor: '#F36E35',
            borderColor: '#D3D3D3'
          }}
          
        > 
        
        <Text style={{
        fontSize: normalize(12),           
        textAlign: 'center',
        fontFamily: FONTS.Hind,
        marginTop: normalize(10),
        color: 'white'
    }}
        >
           Use this address
            </Text>
            
            </TouchableOpacity>

            <TouchableOpacity onPress={()=> props.navigation.navigate("Cart")}
          style={{
            height: normalize(40),
            width: '90%',
            marginTop: normalize(10),
            alignSelf: 'center',
            borderWidth: normalize(1),
            borderRadius: normalize(15),
            backgroundColor: '#69BE53',
            borderColor: '#D3D3D3'
          }}
          
        > 
        
        <Text style={{
        fontSize: normalize(12),           
        textAlign: 'center',
        fontFamily: FONTS.Hind,
        marginTop: normalize(10),
        color: 'white'
    }}
        >
           Back to Cart
            </Text>
            
            </TouchableOpacity>
</View>


         

            

            


            

            






          </ScrollView>
        </KeyboardAvoidingView>
      {/* <Loader/>   */}
      </SafeAreaView>


    </Fragment>


  );
}