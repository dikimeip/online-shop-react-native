import React, { Component } from 'react';
import { View, ScrollView, TouchableOpacity, Text } from 'react-native';
import CartList from '../../../components/moleculs/CartList';

class CartProduk extends Component {
    render() {
        return (
            <ScrollView>
                <CartList foto={require('../../../assets/img/p1.jpg')} judul="BAJU SABLON KUALITAS BISA DIUJI" jumlah="4" harga="100.000" />
                <CartList foto={require('../../../assets/img/p1.jpg')} judul="BAJU KOKOH SEPERTI SEMEN" jumlah="4" harga="100.000" />
                <CartList foto={require('../../../assets/img/p1.jpg')} judul="BAJU SABLON KUALITAS BISA DIUJI" jumlah="4" harga="100.000" />
                <View style={{ height: 60, backgroundColor: 'white', flexDirection: 'row', marginVertical: 10, }}>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 15 }}>TOTAL</Text>
                    </View>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 15 }}>RP 120.000</Text>
                    </View>
                    <View style={{ width: 130, justifyContent: 'center', alignItems: 'center' }}>
                        <TouchableOpacity style={{ padding: 10, backgroundColor: 'green', borderRadius: 10 }}>
                            <Text style={{ textAlign: 'center', color: 'white', fontWeight: 'bold' }}>CHECKOUT</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        )
    }
}

export default CartProduk