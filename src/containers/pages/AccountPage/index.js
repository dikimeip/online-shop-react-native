import React, { Component } from 'react';
import { View, Text,TouchableOpacity,Image } from 'react-native';


class AccountPage extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ height: 40, backgroundColor: 'white',justifyContent:'center',alignItems:'center' }}>
                <Text style={{ fontWeight: 'bold', fontSize: 20 }}>ACCOUNT PAGE</Text>
                </View>
                <View style={{ flex: 1, backgroundColor: '#A8E3A0' }}></View>
                <View style={{ height: 65, backgroundColor: 'red' }}>
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
                        <TouchableOpacity style={{ flex: 1 }} onPress={() => this.props.navigation.navigate('AccountPages')} >
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                <View style={{ width: 30, height: 30 }}>
                                    <Image source={require('../../../assets/icon/account.png')} style={{ width: '100%', height: '100%', marginTop: 4 }} />
                                </View>
                                <Text style={{ fontWeight: 'bold', marginTop: 5, }}>ACCOUNT</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}

export default AccountPage