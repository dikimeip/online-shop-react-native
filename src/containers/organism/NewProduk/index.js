import React, { Component } from 'react';
import ProdukList from '../../../components/moleculs/ProdukList';
import { View,Text,ScrollView } from 'react-native';

class NewProduk extends Component {
    render() {
        return (
            <View style={{ height: 300, backgroundColor: 'white', paddingHorizontal: 15, marginVertical: 10, }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10, }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 15 }}>NEW PRODUK</Text>
                    <Text style={{ fontWeight: 'bold', fontSize: 15, color: 'green' }}>LIHAT SEMUA</Text>
                </View>
                <View style={{ height: '85%', marginTop: 10, flexDirection: 'row' }}>
                    <ScrollView horizontal>
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

export default NewProduk