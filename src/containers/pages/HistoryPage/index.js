import React, { Component } from 'react';
import { View, Text,TouchableOpacity,Image } from 'react-native';

class HistoryPage extends Component {

    render() {
        return (
            <View style={{ flex: 1 }}>
                {/* header  */}
                <View style={{ height: 70, backgroundColor: 'blue' }}></View>
                {/* home  */}
                <View style={{ flex: 1, backgroundColor: 'red' }}></View>
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