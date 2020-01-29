import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';

class HistoryPage extends Component {

    render() {
        return (
            <View style={{ flex: 1 }}>
                {/* header  */}
                <View style={{ height: 40, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 20 }}>HISTORY PAGE</Text>
                </View>
                {/* home  */}
                <View style={{ flex: 1, backgroundColor: '#A8E3A0' }}>
                    <View style={{ height: 30, backgroundColor: "white", paddingHorizontal: 20, marginVertical: 10, flexDirection: 'row' }}>
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 16 }}>PRODUK</Text>
                        </View>
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 16 }}>STATUS</Text>
                        </View>
                    </View>
                    <ScrollView>
                        <View style={{ height: 100, backgroundColor: "white", paddingHorizontal: 20, marginVertical: 10, flexDirection: 'row' }}>
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ fontSize: 15 }}>BAJU KOKOH MUSLIMAT NU</Text>
                                <Text style={{ fontSize: 15 }}>Rp 150.000</Text>
                                <Text style={{ fontSize: 15 }}>INVOICE RD12132133</Text>
                            </View>
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontSize: 15 }}>BELUM DIBAYAR</Text>
                            </View>
                        </View>
                        <View style={{ height: 100, backgroundColor: "white", paddingHorizontal: 20, marginVertical: 10, flexDirection: 'row' }}>
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ fontSize: 15 }}>BAJU KOKOH MUSLIMAT NU</Text>
                                <Text style={{ fontSize: 15 }}>Rp 150.000</Text>
                                <Text style={{ fontSize: 15 }}>INVOICE RD12132133</Text>
                            </View>
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontSize: 15 }}>BELUM DIBAYAR</Text>
                            </View>
                        </View>
                        <View style={{ height: 100, backgroundColor: "white", paddingHorizontal: 20, marginVertical: 10, flexDirection: 'row' }}>
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ fontSize: 15 }}>BAJU KOKOH MUSLIMAT NU</Text>
                                <Text style={{ fontSize: 15 }}>Rp 150.000</Text>
                                <Text style={{ fontSize: 15 }}>INVOICE RD12132133</Text>
                            </View>
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontSize: 15 }}>BELUM DIBAYAR</Text>
                            </View>
                        </View>
                        <View style={{ height: 100, backgroundColor: "white", paddingHorizontal: 20, marginVertical: 10, flexDirection: 'row' }}>
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ fontSize: 15 }}>BAJU KOKOH MUSLIMAT NU</Text>
                                <Text style={{ fontSize: 15 }}>Rp 150.000</Text>
                                <Text style={{ fontSize: 15 }}>INVOICE RD12132133</Text>
                            </View>
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontSize: 15 }}>BELUM DIBAYAR</Text>
                            </View>
                        </View>
                        <View style={{ height: 100, backgroundColor: "white", paddingHorizontal: 20, marginVertical: 10, flexDirection: 'row' }}>
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ fontSize: 15 }}>BAJU KOKOH MUSLIMAT NU</Text>
                                <Text style={{ fontSize: 15 }}>Rp 150.000</Text>
                                <Text style={{ fontSize: 15 }}>INVOICE RD12132133</Text>
                            </View>
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontSize: 15 }}>BELUM DIBAYAR</Text>
                            </View>
                        </View>
                    </ScrollView>
                </View>
                {/* navbaar  */}
                <View style={{ height: 65, backgroundColor: 'white', flexDirection: 'row' }}>
                    <TouchableOpacity style={{ flex: 1 }} onPress={() => this.props.navigation.navigate('HomePages')} >
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <View style={{ width: 30, height: 30 }}>
                                <Image source={require('../../../assets/icon/home.png')} style={{ width: '100%', height: '100%', marginTop: 4 }} />
                            </View>
                            <Text style={{ fontWeight: 'bold', marginTop: 5, }}>HOME</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flex: 1 }} onPress={() => this.props.navigation.navigate('CartPages')}>
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <View style={{ width: 30, height: 30 }}>
                                <Image source={require('../../../assets/icon/cart.png')} style={{ width: '100%', height: '100%', marginTop: 4 }} />
                            </View>
                            <Text style={{ fontWeight: 'bold', marginTop: 5, }}>CART</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flex: 1 }} onPress={() => this.props.navigation.navigate('HistoryPages')} >
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <View style={{ width: 30, height: 30 }}>
                                <Image source={require('../../../assets/icon/riwayat.png')} style={{ width: '100%', height: '100%', marginTop: 4 }} />
                            </View>
                            <Text style={{ fontWeight: 'bold', marginTop: 5, }}>HISTORY</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flex: 1 }} onPress={() => this.props.navigation.navigate('CartPages')} >
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <View style={{ width: 30, height: 30 }}>
                                <Image source={require('../../../assets/icon/account.png')} style={{ width: '100%', height: '100%', marginTop: 4 }} />
                            </View>
                            <Text style={{ fontWeight: 'bold', marginTop: 5, }}>ACCOUNT</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

export default HistoryPage