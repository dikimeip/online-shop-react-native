import React, { Component } from 'react';
import { View } from 'react-native';
import HeaderProduk from '../../organism/HeaderProduk';
import Navbar from '../../organism/Navbar'

class JaketPage extends Component {
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#A8E3A0' }}>
                <HeaderProduk judul="PRODUK JAKET" />
                <View style={{flex:1}}></View>
                <Navbar />
            </View>
        )
    }
}

export default JaketPage