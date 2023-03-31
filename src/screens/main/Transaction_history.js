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
    FlatList
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
import { height } from 'deprecated-react-native-prop-types/DeprecatedImagePropType';




var status = '';
export default function Transaction_history(props) {


    const [name, setName] = useState('');
    const [mobilenumber, setMobileNumber] = useState('');
    const [house, setHouse] = useState('');
    const [street, setStreet] = useState('');
    const [landmark, setLandmark] = useState('');
    const [town, setTown] = useState('');
    const [states, setStates] = useState('');
    const [country, setCountry] = useState('');
    const [pincode, setPincode] = useState('');
    const [all, setAll] = useState(1);
    const [credit, setCredit] = useState(0);
    const [debit, setDebit] = useState(0);
    const isFocused = useIsFocused();

    const regex =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


    const DATA = [{
        id: "0",
        categories: "Bedcovers",
        pic: ICONS.bread,
        coins: "-10 Coins",
        coinstype: "Buy & Earn Coins",
        description: "Hovis Farmhouse Wholemeal",
        realprice: "4999",
        discountedprice: "1690",
        quantity: 1

    },

    {
        id: "1",
        categories: "Bedsheets",
        pic: ICONS.cornflakes,
        description: "Kellogg's Corn Flakes Cereal",
        coins: "+10 Coins",
        coinstype: "Deposit Coins",
        realprice: "4999",
        discountedprice: "1690",
        quantity: 1


    },

    {
        id: "2",
        categories: 'Blankets',
        pic: ICONS.milk,
        description: "Amul Moti Homogenized Toned Milk",
        realprice: "4999",
        discountedprice: "1690",
        coins: "+20 Coins",
        coinstype: "Refer Coins",
        quantity: 1

    },

    {
        id: "3",
        categories: 'Blankets',
        pic: ICONS.cornflakes2,
        coins: "-10 Coins",
        coinstype: "Buy & Earn Coins",
        description: "Kellogg's Corn Flakes Cereal",
        realprice: "4999",
        discountedprice: "1690",
        quantity: 1

    },
    {
        id: "4",
        categories: 'Blankets',
        pic: ICONS.milk,
        description: "Amul Moti Homogenized Toned Milk",
        realprice: "4999",
        discountedprice: "1690",
        coins: "+10 Coins",
        coinstype: "Deposit Coins",
        quantity: 1

    }
    ]

    //-----------------------------------------------------------


    const DATA1 = [{
        id: "0",
        categories: "Bedcovers",
        pic: ICONS.bread,
        coins: "+10 Coins",
        coinstype: "Deposit Coins",
        description: "Hovis Farmhouse Wholemeal",
        realprice: "4999",
        discountedprice: "1690",
        quantity: 1

    },

    {
        id: "1",
        categories: "Bedsheets",
        pic: ICONS.cornflakes,
        description: "Kellogg's Corn Flakes Cereal",
        coins: "+10 Coins",
        coinstype: "Deposit Coins",
        realprice: "4999",
        discountedprice: "1690",
        quantity: 1


    },

    {
        id: "2",
        categories: 'Blankets',
        pic: ICONS.milk,
        description: "Amul Moti Homogenized Toned Milk",
        realprice: "4999",
        discountedprice: "1690",
        coins: "+20 Coins",
        coinstype: "Refer Coins",
        quantity: 1

    },

    {
        id: "3",
        categories: 'Blankets',
        pic: ICONS.cornflakes2,
        coins: "+10 Coins",
        coinstype: "Deposit Coins",
        description: "Kellogg's Corn Flakes Cereal",
        realprice: "4999",
        discountedprice: "1690",
        quantity: 1

    },
    {
        id: "4",
        categories: 'Blankets',
        pic: ICONS.milk,
        description: "Amul Moti Homogenized Toned Milk",
        realprice: "4999",
        discountedprice: "1690",
        coins: "+10 Coins",
        coinstype: "Refer Coins",
        quantity: 1

    }




    ]//--------------------------------------------------




    const DATA2 = [{
        id: "0",
        categories: "Bedcovers",
        pic: ICONS.bread,
        coins: "-10 Coins",
        coinstype: "Buy & Earn Coins",
        description: "Hovis Farmhouse Wholemeal",
        realprice: "4999",
        discountedprice: "1690",
        quantity: 1

    },

    {
        id: "1",
        categories: "Bedsheets",
        pic: ICONS.cornflakes,
        description: "Kellogg's Corn Flakes Cereal",
        coins: "-30 Coins",
        coinstype: "Buy & Earn Coins",
        realprice: "4999",
        discountedprice: "1690",
        quantity: 1


    },

    {
        id: "2",
        categories: 'Blankets',
        pic: ICONS.milk,
        description: "Amul Moti Homogenized Toned Milk",
        realprice: "4999",
        discountedprice: "1690",
        coins: "-20 Coins",
        coinstype: "Buy & Earn Coins",
        quantity: 1

    },

    {
        id: "3",
        categories: 'Blankets',
        pic: ICONS.cornflakes2,
        coins: "-10 Coins",
        coinstype: "Buy & Earn Coins",
        description: "Kellogg's Corn Flakes Cereal",
        realprice: "4999",
        discountedprice: "1690",
        quantity: 1

    },
    {
        id: "4",
        categories: 'Blankets',
        pic: ICONS.milk,
        description: "Amul Moti Homogenized Toned Milk",
        realprice: "4999",
        discountedprice: "1690",
        coins: "-10 Coins",
        coinstype: "Buy & Earn Coins",
        quantity: 1

    }




    ]




    const renderItem1 = ({ item, index }) => (
        <>
            <View style={{

                height: normalize(55),
                width: '95%',

               

                borderRadius: normalize(15)
            }}>

                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
                >


                    <View style={{
                        width: '65%',
                        marginLeft: normalize(10)
                    }}>
                        <Text
                            numberOfLines={3}
                            style={{
                                fontSize: normalize(12),
                                color: "black",
                                marginTop: normalize(10),
                                fontWeight: '600'
                            }}
                        >{item.description}</Text>

                    </View>

                    {item.coinstype == "Buy & Earn Coins" ?

                        <View style={{
                            justifyContent: 'flex-end',
                           
                            
                            marginTop: normalize(15)
                        }}>

                            <Text style={{
                                color: '#F36E35',
                                fontWeight: '700',
                                alignSelf: 'flex-end',
                                textAlign: 'right',

                            }}>{item.coins}</Text>
                            <View style={{ flexDirection: 'row' }}>



                                <Image
                                    source={ICONS.buyandearn}
                                    style={{
                                        height: normalize(15),
                                        width: normalize(15),

                                    }}
                                    resizeMode={'contain'}
                                    tintColor={'#F36E35'}
                                ></Image>



                                <Text style={{               //All section
                                    color: '#F36E35',
                                    alignSelf: 'flex-end',
                                    fontSize: normalize(10)
                                }}>{item.coinstype}</Text>
                            </View>

                        </View> : item.coinstype == "Refer Coins" ? <View style={{ 
                            justifyContent: 'flex-end', marginLeft:normalize(20), marginTop: normalize(15) }}>

                            <Text style={{ color: '#69BE53', fontWeight: '700', alignSelf: 'flex-end', textAlign: 'right' }}>{item.coins}</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                                <Image
                                    source={ICONS.referandearn}
                                    style={{
                                        height: normalize(15),
                                        width: normalize(15),

                                    }}
                                    resizeMode={'contain'}
                                    tintColor={'#69BE53'}
                                ></Image>
                                <Text style={{ color: '#69BE53', alignSelf: 'flex-end', textAlign: 'right', fontSize: normalize(11) }}>{item.coinstype}</Text>
                            </View>
                        </View> : item.coinstype == "Deposit Coins" ? <View style=
                            {{
                                justifyContent: 'flex-end',
                                marginLeft: normalize(15),
                                marginTop: normalize(15)
                            }}>

                            <Text style={{ color: '#69BE53', fontWeight: '700', alignSelf: 'flex-end', textAlign: 'right' }}>{item.coins}</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <Image
                                    source={ICONS.deposit}
                                    style={{
                                        height: normalize(15),
                                        width: normalize(15),
                                        alignSelf: 'center'
                                    }}
                                    resizeMode={'contain'}
                                    tintColor={'#69BE53'}
                                ></Image>
                                <Text style={{ color: '#69BE53', alignSelf: 'flex-end', textAlign: 'right', fontSize: normalize(11) }}>{item.coinstype}</Text>
                            </View>

                        </View> : null}

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

    ///...................................................

    const renderItem2 = ({ item, index }) => (
        <>
            <View style={{

                height: normalize(55),
                width: '95%',
                alignSelf: 'center',
               

                borderRadius: normalize(15)
            }}>

                <View style={{
                    flexDirection: 'row',

                }}
                >


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
                                fontWeight: '600'
                            }}
                        >{item.description}</Text>

                    </View>

                    {item.coinstype == "Buy & Earn Coins" ?
                        <View style={{ justifyContent: 'flex-end' }}>

                            <Text style={{ color: '#F36E35', marginLeft: 10, fontWeight: '700', alignSelf: 'flex-end', textAlign: 'right' }}>{item.coins}</Text>
                            <View style={{ flexDirection: 'row', alignSelf: 'flex-end', marginRight: normalize(10) }}>
                                <Image
                                    source={ICONS.buyandearn}
                                    style={{
                                        height: normalize(15),
                                        width: normalize(15),
                                        alignSelf: 'center'
                                    }}
                                    resizeMode={'contain'}
                                    tintColor={'#F36E35'}
                                ></Image>
                                <Text style={{ color: '#F36E35', marginRight: 10 }}>{item.coinstype}</Text>
                            </View>

                        </View> : item.coinstype == "Refer Coins" ?
                            <View style={{
                                height: normalize(40),
                            width: '40%',
                            
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginTop: normalize(5),
                            
                                
                            }}>

                                <Text style={{ color: '#69BE53', 
                                fontWeight: '700',  
                                marginRight: normalize(20),
                                textAlign: 'right' }}>{item.coins}</Text>
                                <View style={{ flexDirection: 'row', alignItems: 'flex-end',marginRight: normalize(35) }}>
                                    <Image
                                        source={ICONS.referandearn}
                                        style={{
                                            height: normalize(15),
                                            width: normalize(15),
                                            alignSelf: 'center'
                                        }}
                                        resizeMode={'contain'}
                                        tintColor={'#69BE53'}
                                    ></Image>
                                    <Text style={{ color: '#69BE53', fontSize: normalize(10), }}>{item.coinstype}</Text>
                                </View>
                            </View> : item.coinstype == "Deposit Coins" ? 
                            
                            
                           ( <View style={{
                            height: normalize(40),
                            width: '40%',
                            
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginTop: normalize(5),
                            
                           }}>
                            <Text style={{ 
                                color: '#69BE53', 
                            fontWeight: '700',  
                            textAlign: 'right', 
                            marginRight: normalize(20)
                             }}>{item.coins}</Text>


                              <View style={{ flexDirection: 'row', alignItems: 'flex-end' ,}}>
                                     <Image
                                        source={ICONS.deposit}
                                         style={{
                                             height: normalize(15),
                                             width: normalize(15),
                                            
                                         }}
                                        resizeMode={'contain'}
                                        tintColor={'#69BE53'}
                                    ></Image>
                                     <Text style={{ color: '#69BE53', fontSize: normalize(10), textAlign: 'right', marginRight: normalize(45) }}>{item.coinstype}</Text>
                                 </View>
                                </View>
                           )
                            
                            // <View style={{ alignItems: 'flex-end' }}>

                            //     <Text style={{ color: '#69BE53', marginRight: normalize(5), fontWeight: '700',  textAlign: 'right' }}>{item.coins}</Text>
                            //     <View style={{ flexDirection: 'row', alignItems: 'flex-end' , marginRight: -normalize(10)}}>
                            //         <Image
                            //             source={ICONS.deposit}
                            //             style={{
                            //                 height: normalize(15),
                            //                 width: normalize(15),
                            //                // marginRight: -normalize(10)
                            //             }}
                            //             resizeMode={'contain'}
                            //             tintColor={'#69BE53'}
                            //         ></Image>
                            //         <Text style={{ color: '#69BE53', fontSize: normalize(10), alignSelf: 'flex-end' }}>{item.coinstype}</Text>
                            //     </View>

                            // </View>
                            
                            
                            
                            : null}

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
    ///-------------------------------------------------


    const renderItem3 = ({ item, index }) => (
        <>
            <View style={{

                height: normalize(55),
                width: '85%',

                marginVertical: normalize(5),

                borderRadius: normalize(15)
            }}>

                <View style={{
                    flexDirection: 'row',

                }}
                >


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
                                fontWeight: '600'
                            }}
                        >{item.description}</Text>

                    </View>

                    {item.coinstype == "Buy & Earn Coins" ?
                        <View style={{ 
                            height: normalize(40),
                            width: '40%',
                            
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginTop: normalize(10)
                        }}>

                            <Text style={{ color: '#F36E35', fontWeight: '700', alignSelf: 'flex-end', textAlign: 'right' }}>{item.coins}</Text>
                            <View style={{ flexDirection: 'row' , marginLeft: normalize(10)}}>
                                <Image
                                    source={ICONS.buyandearn}
                                    style={{
                                        height: normalize(15),
                                        width: normalize(15),
                                       
                                    }}
                                    resizeMode={'contain'}
                                    tintColor={'#F36E35'}
                                ></Image>
                                <Text style={{ color: '#F36E35', fontSize: normalize(10) }}>{item.coinstype}</Text>
                            </View>

                        </View> : item.coinstype == "Refer Coins" ? <View style={{ justifyContent: 'flex-end' }}>

                            <Text style={{ color: '#69BE53', marginLeft: 10, fontWeight: '700' }}>{item.coins}</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <Image
                                    source={ICONS.referandearn}
                                    style={{
                                        height: normalize(15),
                                        width: normalize(15),
                                        alignSelf: 'center'
                                    }}
                                    resizeMode={'contain'}
                                    tintColor={'#69BE53'}
                                ></Image>
                                <Text style={{ color: '#69BE53', marginRight: 10 }}>{item.coinstype}</Text>
                            </View>
                        </View> : item.coinstype == "Deposit Coins" ? <View style={{ justifyContent: 'flex-end' }}>

                            <Text style={{ color: '#69BE53', marginLeft: 10, fontWeight: '700' }}>{item.coins}</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <Image
                                    source={ICONS.deposit}
                                    style={{
                                        height: normalize(15),
                                        width: normalize(15),
                                        alignSelf: 'center'
                                    }}
                                    resizeMode={'contain'}
                                    tintColor={'#69BE53'}
                                ></Image>
                                <Text style={{ color: '#69BE53', marginRight: 10 }}>{item.coinstype}</Text>
                            </View>

                        </View> : null}

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
    //----------------------------------------------------




    function allTab() {

        {

            setAll(1),
                setCredit(0),
                setDebit(0)
        }

        console.log("Flag status === ", all)
    }

    //----------------------------------------

    function allCredit() {

        {

            setAll(0),
                setCredit(1),
                setDebit(0)
        }

        console.log("Flag status === ", credit)
    }

    //----------------------------------------

    function allDebit() {

        {

            setAll(0),
                setCredit(0),
                setDebit(1)
        }

        console.log("Flag status === ", debit)
    }







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
                                Transaction History
                            </Text>




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
                                marginLeft: 20,
                                marginRight: 20,

                                flexDirection: 'row',
                                justifyContent: 'space-between',



                                marginTop: normalize(20)
                            }}>
                                <TouchableOpacity onPress={() => allTab()}>
                                    <Text
                                        style={{
                                            fontSize: normalize(12),

                                            fontWeight: '700',
                                            textAlign: 'center',
                                            fontFamily: FONTS.Hind,
                                            marginLeft: normalize(15),
                                            color: 'black',


                                        }}
                                    >All</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => allCredit()}>
                                    <Text
                                        style={{
                                            fontSize: normalize(12),

                                            fontWeight: '700',
                                            textAlign: 'center',
                                            fontFamily: FONTS.Hind,

                                            color: 'black',


                                        }}

                                    >Credit</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => allDebit()}>
                                    <Text
                                        style={{
                                            fontSize: normalize(12),

                                            fontWeight: '700',
                                            textAlign: 'center',
                                            fontFamily: FONTS.Hind,
                                            marginRight: normalize(10),
                                            color: 'black',


                                        }}
                                    >Debit</Text>
                                </TouchableOpacity>
                            </View>






                            {all == 1 ?
                                <View style={{
                                    marginLeft: 10,
                                    marginRight: 20,

                                    flexDirection: 'row',
                                    justifyContent: 'space-between',




                                }}>

                                    <View
                                        style={{

                                            marginLeft: normalize(1),
                                            backgroundColor: '#F36E35',
                                            width: normalize(60),
                                            height: normalize(2)

                                        }}
                                    ></View>
                                    <View
                                        style={{

                                            marginLeft: normalize(1),

                                            width: normalize(60),
                                            height: normalize(2)

                                        }}
                                    ></View>
                                    <View
                                        style={{

                                            marginLeft: normalize(1),

                                            width: normalize(65),
                                            height: normalize(2)

                                        }}
                                    ></View>

                                </View> : credit == 1 ?
                                    <View style={{
                                        marginLeft: 10,
                                        marginRight: 20,

                                        flexDirection: 'row',
                                        justifyContent: 'space-between',




                                    }}>

                                        <View
                                            style={{

                                                marginLeft: normalize(1),

                                                width: normalize(60),
                                                height: normalize(2)

                                            }}
                                        ></View>
                                        <View
                                            style={{

                                                marginLeft: normalize(1),
                                                backgroundColor: '#F36E35',
                                                width: normalize(60),
                                                height: normalize(2)

                                            }}
                                        ></View>
                                        <View
                                            style={{

                                                marginLeft: normalize(1),

                                                width: normalize(65),
                                                height: normalize(2)

                                            }}
                                        ></View>

                                    </View> : debit == 1 ?
                                        <View style={{
                                            marginLeft: 10,
                                            marginRight: 20,

                                            flexDirection: 'row',
                                            justifyContent: 'space-between',




                                        }}>

                                            <View
                                                style={{

                                                    marginLeft: normalize(1),

                                                    width: normalize(60),
                                                    height: normalize(2)

                                                }}
                                            ></View>
                                            <View
                                                style={{

                                                    marginLeft: normalize(1),

                                                    width: normalize(60),
                                                    height: normalize(2)

                                                }}
                                            ></View>
                                            <View
                                                style={{

                                                    marginLeft: normalize(1),

                                                    width: normalize(65),
                                                    height: normalize(2),
                                                    backgroundColor: '#F36E35',

                                                }}
                                            ></View>

                                        </View> : null}












                            {all == 1 ?
                                <FlatList
                                    data={DATA}
                                    renderItem={renderItem1}
                                    keyExtractor={item => item.id}
                                    showsHorizontalScrollIndicator={false}


                                    style={{




                                        marginTop: normalize(10),

                                        width: '100%'

                                    }}


                                /> : credit == 1 ? <FlatList
                                    data={DATA1}
                                    renderItem={renderItem2}
                                    keyExtractor={item => item.id}
                                    showsHorizontalScrollIndicator={false}


                                    style={{




                                        marginTop: normalize(10),

                                        width: '100%'

                                    }}


                                /> : debit == 1 ? <FlatList
                                    data={DATA2}
                                    renderItem={renderItem3}
                                    keyExtractor={item => item.id}
                                    showsHorizontalScrollIndicator={false}


                                    style={{




                                        marginTop: normalize(10),

                                        width: '100%'

                                    }}


                                /> : null}


                        </View>






















                    </ScrollView>
                </KeyboardAvoidingView>

            </SafeAreaView>


        </Fragment>


    );
}