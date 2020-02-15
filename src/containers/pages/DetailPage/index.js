import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Navbar from '../../organism/Navbar'
import DetailProduk from '../../organism/DetailProduk';
import HeaderProduk from '../../organism/HeaderProduk';
class DetailPage extends Component {
    render() {
        return (
            <View style={{ flex: 1,backgroundColor:"#A8E3A0" }}>
                <HeaderProduk judul="DETAIL PRODUK" />
                <DetailProduk />
                <Navbar />
            </View>
        )
    }
}

export default DetailPage