import React, { Component } from 'react';
import { View } from 'react-native';
import Navbar from '../../organism/Navbar'
import HeaderProduk from '../../organism/HeaderProduk';
import AksesorisProduk from '../../organism/AksesorisProduk';

class AksesorisPage extends Component {
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#A8E3A0' }}>
                <HeaderProduk judul="PRODUK AKSESORIS" />
                <AksesorisProduk/>
                <Navbar />
            </View>
        )
    }
}

export default AksesorisPage