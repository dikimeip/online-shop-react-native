import React, { Component } from 'react';
import { View } from 'react-native';
import HeaderProduk from '../../organism/HeaderProduk';
import Navbar from '../../organism/Navbar'

class MuslimahPage extends Component {
    render(){
        return(
            <View style={{flex:1,backgroundColor:'#A8E3A0'}}>
                <HeaderProduk judul="PRODUK MUSLIMAH" />
                <View style={{flex: 1,}}></View>
                <Navbar/>
            </View>
        )
    }
}

export default MuslimahPage