import React, { Component } from 'react';
import { View } from 'react-native';
import HeaderProduk from '../../organism/HeaderProduk';
import Navbar from '../../organism/Navbar'
import GetNewProduk from '../../organism/GetNewProduk';

class NewProduks extends Component {
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#A8E3A0' }}>
                <HeaderProduk judul="NEW PRODUK" />
                <GetNewProduk/>
                <Navbar />
            </View>
        )
    }
}

export default NewProduks