import React, { Component } from 'react'
import { View } from 'react-native'
import Navbar from '../../organism/Navbar'
import PriaProduk from '../../organism/PriaProduk'
import HeaderProduk from '../../organism/HeaderProduk'


class PriaPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            produk: []
        }
    }

   

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#A8E3A0' }}>
                {/* headingbar */}
                <HeaderProduk judul="PRODUK PRIA" />
                {/* menubar */}
                <PriaProduk/>
                {/* navbar  */}
                <Navbar />
            </View>
        )
    }
}

export default PriaPage