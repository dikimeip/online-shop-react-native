import React, { Component } from 'react';
import { View, Text, Image,ScrollView } from 'react-native';
import Navbar from '../../organism/Navbar';

class ProdukPage extends Component {
    render() {
        return (
            <View style={{ flex: 1, }}>
                {/* header  */}
                <View style={{ height: 40, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 20 }}>PRODUK PAGE</Text>
                </View>
                {/* konten  */}
                <View style={{ flex: 1, backgroundColor: '#A8E3A0' }}>
                    <ScrollView>
                        <View style={{ backgroundColor: 'white', height: 150, paddingHorizontal: 10, marginVertical: 5, flexDirection: 'row' }}>
                            <View style={{ width: 200 }}>
                                <Image source={require('../../../assets/img/p1.jpg')} style={{ width: '100%', height: '100%', resizeMode: 'stretch' }} />
                            </View>
                            <View style={{ flex: 1, justifyContent: 'center' }}>
                                <Text style={{ fontWeight: 'bold', fontSize: 15, textAlign: 'center' }}>BAJU MURAH MERIAH OBRAS LOSS SALE</Text>
                                <Text style={{ fontWeight: 'bold', fontSize: 15, textAlign: 'center', marginTop: 10, }}>STOK 21</Text>
                                <Text style={{ fontWeight: 'bold', fontSize: 15, textAlign: 'center', }}>RP 100.000</Text>
                            </View>
                        </View>
                        <View style={{ backgroundColor: 'white', height: 150, paddingHorizontal: 10, marginVertical: 5, flexDirection: 'row' }}>
                            <View style={{ width: 200 }}>
                                <Image source={require('../../../assets/img/p1.jpg')} style={{ width: '100%', height: '100%', resizeMode: 'stretch' }} />
                            </View>
                            <View style={{ flex: 1, justifyContent: 'center' }}>
                                <Text style={{ fontWeight: 'bold', fontSize: 15, textAlign: 'center' }}>BAJU MURAH MERIAH OBRAS LOSS SALE</Text>
                                <Text style={{ fontWeight: 'bold', fontSize: 15, textAlign: 'center', marginTop: 10, }}>STOK 21</Text>
                                <Text style={{ fontWeight: 'bold', fontSize: 15, textAlign: 'center', }}>RP 100.000</Text>
                            </View>
                        </View>
                        <View style={{ backgroundColor: 'white', height: 150, paddingHorizontal: 10, marginVertical: 5, flexDirection: 'row' }}>
                            <View style={{ width: 200 }}>
                                <Image source={require('../../../assets/img/p1.jpg')} style={{ width: '100%', height: '100%', resizeMode: 'stretch' }} />
                            </View>
                            <View style={{ flex: 1, justifyContent: 'center' }}>
                                <Text style={{ fontWeight: 'bold', fontSize: 15, textAlign: 'center' }}>BAJU MURAH MERIAH OBRAS LOSS SALE</Text>
                                <Text style={{ fontWeight: 'bold', fontSize: 15, textAlign: 'center', marginTop: 10, }}>STOK 21</Text>
                                <Text style={{ fontWeight: 'bold', fontSize: 15, textAlign: 'center', }}>RP 100.000</Text>
                            </View>
                        </View>
                        <View style={{ backgroundColor: 'white', height: 150, paddingHorizontal: 10, marginVertical: 5, flexDirection: 'row' }}>
                            <View style={{ width: 200 }}>
                                <Image source={require('../../../assets/img/p1.jpg')} style={{ width: '100%', height: '100%', resizeMode: 'stretch' }} />
                            </View>
                            <View style={{ flex: 1, justifyContent: 'center' }}>
                                <Text style={{ fontWeight: 'bold', fontSize: 15, textAlign: 'center' }}>BAJU MURAH MERIAH OBRAS LOSS SALE</Text>
                                <Text style={{ fontWeight: 'bold', fontSize: 15, textAlign: 'center', marginTop: 10, }}>STOK 21</Text>
                                <Text style={{ fontWeight: 'bold', fontSize: 15, textAlign: 'center', }}>RP 100.000</Text>
                            </View>
                        </View>
                    </ScrollView>

                </View>
                {/* navbar  */}
                <Navbar />
            </View>

        )
    }
}

export default ProdukPage