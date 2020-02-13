import React, { Component } from 'react';
import { View } from 'react-native';
import Navbar from '../../organism/Navbar'
import HeaderProduk from '../../organism/HeaderProduk';

class TasPage extends Component {
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#A8E3A0' }}>
                <HeaderProduk judul="PRODUK TAS" />
                <View style={{flex: 1,}}></View>
                <Navbar />
            </View>
        )
    }
}

export default TasPage