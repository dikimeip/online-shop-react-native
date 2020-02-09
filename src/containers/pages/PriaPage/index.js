import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'
import Navbar from '../../organism/Navbar'
import HeaderPria from '../../organism/HeaderPria';
import PriaProduk from '../../organism/PriaProduk'


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
                <HeaderPria/>
                {/* menubar */}
                <PriaProduk/>
                {/* navbar  */}
                <Navbar />
            </View>
        )
    }
}

export default PriaPage