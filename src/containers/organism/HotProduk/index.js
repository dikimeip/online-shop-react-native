import React, { Component } from 'react';
import { View,Text,ScrollView,Image } from 'react-native';
import ProdukList from '../../../components/moleculs/ProdukList';

class HotProduk extends Component {

    render() {
        return (
            <View style={{ height: 300, backgroundColor: 'white', paddingHorizontal: 15, marginBottom: 10, }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10, }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 15 }}>HOT PRODUK</Text>
                    <Text style={{ fontWeight: 'bold', fontSize: 15, color: 'green' }}>LIHAT SEMUA</Text>
                </View>
                <View style={{ height: '85%', marginTop: 10, flexDirection: 'row' }}>
                    <ScrollView horizontal>
                        <ProdukList foto={require('../../../assets/img/p1.jpg')} judul="Baju Sablon Dengan kualitas terbaru" harga="Rp 100.000" />
                        <ProdukList foto={require('../../../assets/img/p1.jpg')} judul="Baju Sablon Dengan kualitas terbaru" harga="Rp 100.000" />
                        <ProdukList foto={require('../../../assets/img/p1.jpg')} judul="Baju Sablon Dengan kualitas terbaru" harga="Rp 100.000" />
                        <ProdukList foto={require('../../../assets/img/p1.jpg')} judul="Baju Sablon Dengan kualitas terbaru" harga="Rp 100.000" />
                        <ProdukList foto={require('../../../assets/img/p1.jpg')} judul="Baju Sablon Dengan kualitas terbaru" harga="Rp 100.000" />
                    </ScrollView>
                </View>
            </View>
        )
    }
}

export default HotProduk