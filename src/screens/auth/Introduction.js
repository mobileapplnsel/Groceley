import React, { useEffect } from 'react';
import { ImageBackground, View, SafeAreaView, Text, Button, TouchableOpacity } from 'react-native';



import { ICONS, IMAGES, COLORS, FONTS } from '../../themes/Themes';
import normalize from '../../utils/helpers/normalize';

export default function Introduction(props) {
    // useEffect(() => {
    //   setTimeout(() => {
    //     props.navigation.navigate('Login');
    //   }, 2500);
    // }, []);

    return (
        <>
            <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>

                <View style={{
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <ImageBackground
                        source={ICONS.bed}
                        resizeMode="cover"
                        style={{

                            width: '100%',
                            height: '100%',



                        }}
                    >

                        <View style={{
                            marginLeft: normalize(20),
                            marginTop: normalize(20)
                        }}>
                            <Text style={{
                                color: 'white',
                                fontSize: normalize(35),
                                fontWeight: '900',
                                fontFamily: FONTS.PlayfairDisplayBlack,

                            }} >House</Text>
                            <Text
                                style={{
                                    color: 'white',
                                    fontSize: normalize(35),
                                    fontWeight: '900',
                                    fontFamily: FONTS.RubikBold,
                                }}

                            >Of Bed and </Text>
                            <Text
                                style={{
                                    color: 'white',
                                    fontSize: normalize(35),
                                    fontFamily: 'Rubik',
                                    fontWeight: '900',
                                }}

                            >Bath Linen</Text>

                            <View style={{
                                marginTop: normalize(15)
                            }}>

                                <Text
                                    style={{
                                        color: 'white',
                                        fontSize: normalize(15),
                                        fontFamily: FONTS.RubikBold,
                                        fontWeight: '300',
                                        width: '80%',


                                    }}

                                >


                                    Wholesaler and retailer of the </Text>


                                <Text style={{
                                    color: 'white',
                                    fontSize: normalize(15),
                                    fontFamily: FONTS.RubikBold,
                                    fontWeight: '300',
                                    width: '80%',
                                    marginTop: normalize(5)

                                }}>
                                    high-quality range of Cushion
                                </Text>


                                <Text style={{
                                    color: 'white',
                                    fontSize: normalize(15),
                                    fontFamily: FONTS.RubikBold,
                                    fontWeight: '300',
                                    width: '80%',
                                    marginTop: normalize(5)

                                }}>
                                    Cover, Designer Carpet, Bed
                                </Text>

                                <Text style={{
                                    color: 'white',
                                    fontSize: normalize(15),
                                    fontFamily: FONTS.RubikBold,
                                    fontWeight: '300',
                                    width: '80%',
                                    marginTop: normalize(5)

                                }}>
                                    Sheet, Bed Covers etc.
                                </Text>



                            </View>



                        </View>


                        <TouchableOpacity


                            
                            style={{

                                height: normalize(40),
                                width: normalize(130),
                                backgroundColor: 'white',
                                marginTop: normalize(300),
                                marginBottom: normalize(10),
                                alignSelf: 'center',
                                borderRadius: normalize(25),

                                justifyContent: 'center',

                            }}>
                            <Text
                                style={{
                                    alignSelf: 'center',
                                    color: 'black'
                                }}
                            >GET STARTED</Text>
                        </TouchableOpacity>



                    </ImageBackground>
                </View>

            </SafeAreaView>
        </>
    );
}