import React, { Component } from 'react';
import ProdukList from '../../../components/moleculs/ProdukList';
import { View,Text,ScrollView } from 'react-native';
import API from '../../../configs/axios';

class NewProduk extends Component {
    constructor(props){
        super(props)
        this.state = {
            produk : [],
            url : "http://192.168.43.230/server_dc-shop/assets/img/"
        }
    }

    componentDidMount=() => {
        API.GetAllProduk().then(res => {
            console.log(res)
        }).catch(err => {
            console.log(err)
        })
    }

    render() {
        return (
            <View style={{ height: 300, backgroundColor: 'white', paddingHorizontal: 15, marginVertical: 10, }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10, }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 15 }}>NEW PRODUK</Text>
                    <Text style={{ fontWeight: 'bold', fontSize: 15, color: 'green' }}>LIHAT SEMUA</Text>
                </View>
                <View style={{ height: '85%', marginTop: 10, flexDirection: 'row' }}>
                   
                </View>
            </View>
        )
    }
}

export default NewProduk