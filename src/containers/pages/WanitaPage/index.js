import React, { Component } from 'react'
import { View, Text } from 'react-native'
import Navbar from '../../organism/Navbar'
import HeaderProduk from '../../organism/HeaderProduk'
import WanitaProduk from '../../organism/WanitaProduk'

class WanitaPage extends Component {
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#A8E3A0' }}>
                {/* header  */}
                <HeaderProduk judul="PRODUK WANITA" />
                {/* konten  */}
                <View style={{ flex: 1 }}>
                    <WanitaProduk />
                </View>
                {/* navbar  */}
                <Navbar />
            </View>
        )
    }
}

export default WanitaPage