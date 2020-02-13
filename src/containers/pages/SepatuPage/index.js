import React, { Component } from 'react';
import { View } from 'react-native';
import Navbar from '../../organism/Navbar'
import HeaderProduk from '../../organism/HeaderProduk';
import SepatuProduk from '../../organism/SepatuProduk';

class SepatuPage extends Component {
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#A8E3A0' }}>
                <HeaderProduk judul="PRODUK SEPATU" />
                <SepatuProduk/>
                <Navbar />
            </View>
        )
    }
}

export default SepatuPage