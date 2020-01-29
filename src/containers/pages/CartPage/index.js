import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';

class CartPage extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                {/* konten  */}
                <View style={{ flex: 1, backgroundColor: '#A8E3A0' }}>
                    <View style={{ height: 50, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 20 }}>KERANJANG PAGE</Text>
                    </View>
                    <ScrollView>
                        <View style={{ height: 150, backgroundColor: 'white', marginVertical: 5, flexDirection: 'row', }}>
                            <View style={{ width: 150 }}>
                                <Image source={require('../../../assets/img/p1.jpg')} style={{ width: '100%', height: '100%', resizeMode: 'stretch' }} />
                            </View>
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ fontWeight: 'bold', textAlign: 'center', fontSize: 15 }}>BAJU SABLON KUALITAS BISA DIUJI</Text>
                                <Text style={{ fontWeight: 'bold', textAlign: 'center', marginTop: 10, }}>JUMLAH PEMBELIAN 5 </Text>
                                <Text style={{ fontWeight: 'bold', textAlign: 'center' }}>TOTAL RP 150.000</Text>
                            </View>
                            <View style={{ width: 100, justifyContent: 'center', alignItems: 'center' }}>
                                <TouchableOpacity style={{ padding: 10, backgroundColor: 'red', borderRadius: 10 }}>
                                    <Text style={{ textAlign: 'center', color: 'white', fontWeight: 'bold' }}>HAPUS</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={{ height: 150, backgroundColor: 'white', marginVertical: 5, flexDirection: 'row', }}>
                            <View style={{ width: 150 }}>
                                <Image source={require('../../../assets/img/p1.jpg')} style={{ width: '100%', height: '100%', resizeMode: 'stretch' }} />
                            </View>
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ fontWeight: 'bold', textAlign: 'center', fontSize: 15 }}>BAJU SABLON KUALITAS BISA DIUJI</Text>
                                <Text style={{ fontWeight: 'bold', textAlign: 'center', marginTop: 10, }}>JUMLAH PEMBELIAN 5 </Text>
                                <Text style={{ fontWeight: 'bold', textAlign: 'center' }}>TOTAL RP 150.000</Text>
                            </View>
                            <View style={{ width: 100, justifyContent: 'center', alignItems: 'center' }}>
                                <TouchableOpacity style={{ padding: 10, backgroundColor: 'red', borderRadius: 10 }}>
                                    <Text style={{ textAlign: 'center', color: 'white', fontWeight: 'bold' }}>HAPUS</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={{ height: 150, backgroundColor: 'white', marginVertical: 5, flexDirection: 'row', }}>
                            <View style={{ width: 150 }}>
                                <Image source={require('../../../assets/img/p1.jpg')} style={{ width: '100%', height: '100%', resizeMode: 'stretch' }} />
                            </View>
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ fontWeight: 'bold', textAlign: 'center', fontSize: 15 }}>BAJU SABLON KUALITAS BISA DIUJI</Text>
                                <Text style={{ fontWeight: 'bold', textAlign: 'center', marginTop: 10, }}>JUMLAH PEMBELIAN 5 </Text>
                                <Text style={{ fontWeight: 'bold', textAlign: 'center' }}>TOTAL RP 150.000</Text>
                            </View>
                            <View style={{ width: 100, justifyContent: 'center', alignItems: 'center' }}>
                                <TouchableOpacity style={{ padding: 10, backgroundColor: 'red', borderRadius: 10 }}>
                                    <Text style={{ textAlign: 'center', color: 'white', fontWeight: 'bold' }}>HAPUS</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={{ height: 150, backgroundColor: 'white', marginVertical: 5, flexDirection: 'row', }}>
                            <View style={{ width: 150 }}>
                                <Image source={require('../../../assets/img/p1.jpg')} style={{ width: '100%', height: '100%', resizeMode: 'stretch' }} />
                            </View>
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ fontWeight: 'bold', textAlign: 'center', fontSize: 15 }}>BAJU SABLON KUALITAS BISA DIUJI</Text>
                                <Text style={{ fontWeight: 'bold', textAlign: 'center', marginTop: 10, }}>JUMLAH PEMBELIAN 5 </Text>
                                <Text style={{ fontWeight: 'bold', textAlign: 'center' }}>TOTAL RP 150.000</Text>
                            </View>
                            <View style={{ width: 100, justifyContent: 'center', alignItems: 'center' }}>
                                <TouchableOpacity style={{ padding: 10, backgroundColor: 'red', borderRadius: 10 }}>
                                    <Text style={{ textAlign: 'center', color: 'white', fontWeight: 'bold' }}>HAPUS</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={{ height: 60, backgroundColor: 'white', flexDirection: 'row', marginVertical: 10, }}>
                            <View style={{ flex: 1,justifyContent:'center',alignItems:'center' }}>
                                <Text style={{fontWeight:'bold',fontSize:15}}>TOTAL</Text>
                            </View>
                            <View style={{ flex: 1, justifyContent:'center',alignItems:'center' }}>
                            <Text style={{fontWeight:'bold',fontSize:15}}>RP 120.000</Text>
                            </View>
                            <View style={{ width: 130, justifyContent: 'center', alignItems: 'center' }}>
                                <TouchableOpacity style={{ padding: 10, backgroundColor: 'green', borderRadius: 10 }}>
                                    <Text style={{ textAlign: 'center', color: 'white', fontWeight: 'bold' }}>CHECKOUT</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </ScrollView>
                </View>
                {/* navbar  */}
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
                    <TouchableOpacity style={{ flex: 1 }}  onPress={() => this.props.navigation.navigate('HistoryPages')} >
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <View style={{ width: 30, height: 30 }}>
                                <Image source={require('../../../assets/icon/riwayat.png')} style={{ width: '100%', height: '100%', marginTop: 4 }} />
                            </View>
                            <Text style={{ fontWeight: 'bold', marginTop: 5, }}>HISTORY</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flex: 1 }}  onPress={() => this.props.navigation.navigate('AccountPages')} >
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

export default CartPage