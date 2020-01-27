import React, { Component } from 'react'
import { View, Text, Image, ScrollView } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'

class HomePage extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <ScrollView>
                    {/* header  */}
                    <View style={{ height: 55, flexDirection: 'row', backgroundColor: 'white' }}>
                        <View style={{ width: '85%', marginVertical: 5, marginLeft: 15 }}>
                            <TextInput placeholder="Apa Yang Anda Pikirkan.?" style={{ borderColor: 'grey', borderWidth: 1, borderRadius: 20, position: 'absolute', width: '100%', height: 40 }} />
                            <Image source={require('../../../assets/icon/cari.png')} style={{ position: 'relative', width: 20, height: 20, left: 345, top: 8 }} />
                        </View>
                        <View style={{ width: '15%', marginLeft: 5, }}>
                            <Image source={require('../../../assets/icon/alert.png')} style={{ width: 35, height: 35, marginTop: 7, position: 'absolute' }} />
                            <Text style={{ fontWeight: 'bold', color: 'red', position: 'relative', top: 15, left: 13 }}>6</Text>
                        </View>
                    </View>
                    {/* menu  */}
                    <View style={{ flex: 1, backgroundColor: '#A8E3A0' }}>
                        {/* image slider  */}
                        <View style={{ height: 200, backgroundColor: 'red' }}>
                            <Image source={require('../../../assets/img/pu2.png')} style={{ width: '100%', height: '100%', resizeMode: 'stretch' }} />
                        </View>
                        {/* menu bar  */}
                        <View style={{ height: 170, flexDirection: 'row', flexWrap: 'wrap', marginVertical: 10, backgroundColor: 'white' }}>
                            <View style={{ width: `${100 / 4}%`, height: 80, justifyContent: 'center', alignItems: 'center' }}>
                                <View style={{ width: 40, height: 40 }}>
                                    <Image source={require('../../../assets/icon/pria.png')} style={{ width: '100%', height: '100%', resizeMode: 'stretch' }} />
                                </View>
                                <Text style={{ marginTop: 5, fontWeight: 'bold' }}>PRIA</Text>
                            </View>
                            <View style={{ width: `${100 / 4}%`, height: 80, justifyContent: 'center', alignItems: 'center' }}>
                                <View style={{ width: 40, height: 40 }}>
                                    <Image source={require('../../../assets/icon/wanita.png')} style={{ width: '100%', height: '100%', resizeMode: 'stretch' }} />
                                </View>
                                <Text style={{ marginTop: 5, fontWeight: 'bold' }}>WANITA</Text>
                            </View>
                            <View style={{ width: `${100 / 4}%`, height: 80, justifyContent: 'center', alignItems: 'center' }}>
                                <View style={{ width: 40, height: 40 }}>
                                    <Image source={require('../../../assets/icon/muslimah.png')} style={{ width: '100%', height: '100%', resizeMode: 'stretch' }} />
                                </View>
                                <Text style={{ marginTop: 5, fontWeight: 'bold' }}>MUSLIMAH</Text>
                            </View>
                            <View style={{ width: `${100 / 4}%`, height: 80, justifyContent: 'center', alignItems: 'center' }}>
                                <View style={{ width: 40, height: 40 }}>
                                    <Image source={require('../../../assets/icon/anak.png')} style={{ width: '100%', height: '100%', resizeMode: 'stretch' }} />
                                </View>
                                <Text style={{ marginTop: 5, fontWeight: 'bold' }}>ANAK</Text>
                            </View>
                            <View style={{ width: `${100 / 4}%`, height: 80, justifyContent: 'center', alignItems: 'center' }}>
                                <View style={{ width: 40, height: 40 }}>
                                    <Image source={require('../../../assets/icon/jaket.png')} style={{ width: '100%', height: '100%', resizeMode: 'stretch' }} />
                                </View>
                                <Text style={{ marginTop: 5, fontWeight: 'bold' }}>JAKET</Text>
                            </View>
                            <View style={{ width: `${100 / 4}%`, height: 80, justifyContent: 'center', alignItems: 'center' }}>
                                <View style={{ width: 40, height: 40 }}>
                                    <Image source={require('../../../assets/icon/sepatu.png')} style={{ width: '100%', height: '100%', resizeMode: 'stretch' }} />
                                </View>
                                <Text style={{ marginTop: 5, fontWeight: 'bold' }}>SEPATU</Text>
                            </View>
                            <View style={{ width: `${100 / 4}%`, height: 80, justifyContent: 'center', alignItems: 'center' }}>
                                <View style={{ width: 40, height: 40 }}>
                                    <Image source={require('../../../assets/icon/tas.png')} style={{ width: '100%', height: '100%', resizeMode: 'stretch' }} />
                                </View>
                                <Text style={{ marginTop: 5, fontWeight: 'bold' }}>TAS</Text>
                            </View>
                            <View style={{ width: `${100 / 4}%`, height: 80, justifyContent: 'center', alignItems: 'center' }}>
                                <View style={{ width: 40, height: 40 }}>
                                    <Image source={require('../../../assets/icon/aksesoris.png')} style={{ width: '100%', height: '100%', resizeMode: 'stretch' }} />
                                </View>
                                <Text style={{ marginTop: 5, fontWeight: 'bold' }}>AKSESORIS</Text>
                            </View>
                        </View>
                        {/* produk diskon  */}
                        <View style={{ height: 200, backgroundColor: 'blue', paddingHorizontal: 15, }}>
                            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                                <Text style={{ fontWeight: 'bold', fontSize: 15 }}>DISKON PRODUK</Text>
                                <Text style={{ fontWeight: 'bold', fontSize: 15, color: 'green' }}>LIHAT SEMUA</Text>
                            </View>
                            <View style={{width:50,height:200,backgroundColor:'yellow',marginTop: 10,}}></View>
                        </View>
                    </View>
                </ScrollView>
                {/* footer  */}
                <View style={{ height: 65, backgroundColor: 'white', flexDirection: 'row' }}>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <View style={{ width: 30, height: 30 }}>
                            <Image source={require('../../../assets/icon/home.png')} style={{ width: '100%', height: '100%', marginTop: 4 }} />
                        </View>
                        <Text style={{ fontWeight: 'bold', marginTop: 5, }}>HOME</Text>
                    </View>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <View style={{ width: 30, height: 30 }}>
                            <Image source={require('../../../assets/icon/cart.png')} style={{ width: '100%', height: '100%', marginTop: 4 }} />
                        </View>
                        <Text style={{ fontWeight: 'bold', marginTop: 5, }}>CART</Text>
                    </View>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <View style={{ width: 30, height: 30 }}>
                            <Image source={require('../../../assets/icon/riwayat.png')} style={{ width: '100%', height: '100%', marginTop: 4 }} />
                        </View>
                        <Text style={{ fontWeight: 'bold', marginTop: 5, }}>HISTORY</Text>
                    </View>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <View style={{ width: 30, height: 30 }}>
                            <Image source={require('../../../assets/icon/account.png')} style={{ width: '100%', height: '100%', marginTop: 4 }} />
                        </View>
                        <Text style={{ fontWeight: 'bold', marginTop: 5, }}>ACCOUNT</Text>
                    </View>
                </View>
            </View>
        )
    }
}

export default HomePage