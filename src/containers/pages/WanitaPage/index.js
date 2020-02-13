import React, { Component } from 'react'
import { View, Text } from 'react-native'
import Navbar from '../../organism/Navbar'
import HeaderProduk from '../../organism/HeaderProduk'

class WanitaPage extends Component{
    render(){
        return(
            <View style={{flex: 1, backgroundColor: '#A8E3A0'}}>
               {/* header  */}
                <HeaderProduk judul="PRODUK WANITA" />
               {/* konten  */}
               <View style={{flex: 1}}>
                   
               </View>
               {/* navbar  */}
               <Navbar/>
            </View>
        )
    }
}

export default WanitaPage