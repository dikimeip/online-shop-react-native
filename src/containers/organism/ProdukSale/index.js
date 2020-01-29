import React, { Component } from 'react';
import { View,Text,Image,ScrollView } from 'react-native';
import SaleItem from '../../../components/moleculs/SaleItem';

class ProdukSale extends Component {
    render() {
        return (
            <View style={{ height: 300, backgroundColor: 'white', paddingHorizontal: 15, }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10, }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 15 }}>DISKON PRODUK</Text>
                    <Text style={{ fontWeight: 'bold', fontSize: 15, color: 'green' }}>LIHAT SEMUA</Text>
                </View>
                <View style={{ height: '85%', marginTop: 10, flexDirection: 'row' }}>
                    <ScrollView horizontal>
                       <SaleItem foto={require('../../../assets/img/p1.jpg')} judul="BAJU SABLON KUALITAS BISA DIUJI" diskon="Rp 150.000" harga="Rp 100.000" /> 
                       <SaleItem foto={require('../../../assets/img/p1.jpg')} judul="BAJU SABLON KUALITAS BISA DIUJI" diskon="Rp 150.000" harga="Rp 100.000" /> 
                       <SaleItem foto={require('../../../assets/img/p1.jpg')} judul="BAJU SABLON KUALITAS BISA DIUJI" diskon="Rp 150.000" harga="Rp 100.000" /> 
                       <SaleItem foto={require('../../../assets/img/p1.jpg')} judul="BAJU SABLON KUALITAS BISA DIUJI" diskon="Rp 150.000" harga="Rp 100.000" /> 
                       <SaleItem foto={require('../../../assets/img/p1.jpg')} judul="BAJU SABLON KUALITAS BISA DIUJI" diskon="Rp 150.000" harga="Rp 100.000" /> 
                    </ScrollView>
                </View>
            </View>
        )
    }
}

export default ProdukSale