import React, { Component } from 'react';
import { View } from 'react-native';
import HeaderProduk from '../../organism/HeaderProduk';
import Navbar from '../../organism/Navbar'
import AnakProduk from '../../organism/AnakProduk';

class AnakPage extends Component{
    render(){
        return(
            <View style={{flex:1,backgroundColor:'#A8E3A0'}}>
                <HeaderProduk judul="PRODUK ANAK" />
                <AnakProduk/>
                <Navbar/>
            </View>
        )
    }
}

export default AnakPage