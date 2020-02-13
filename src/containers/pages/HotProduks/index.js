import React, { Component } from 'react';
import { View } from 'react-native';
import HeaderProduk from '../../organism/HeaderProduk';
import Navbar from '../../organism/Navbar'
import GetHotProduk from '../../organism/GetHotProduk';

class HotProduks extends Component {
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#A8E3A0' }}>
                <HeaderProduk judul="HOT PRODUK" />
                <GetHotProduk/>
                <Navbar />
            </View>
        )
    }
}

export default HotProduks