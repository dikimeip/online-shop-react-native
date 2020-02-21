import React, { Component } from 'react'
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native'
import SearchMenu from '../../organism/SerachMenu'
import ImageSlider from '../../organism/ImageSlider'
import MenuHome from '../../organism/MenuHome'
import ProdukSale from '../../organism/ProdukSale'
import HotProduk from '../../organism/HotProduk'
import NewProduk from '../../organism/NewProduk'
import Navbar from '../../organism/Navbar'
import {} from 'react-navigation'

class HomePage extends Component {
    render() {
        
        return (
            <View style={{ flex: 1 }}>
                <ScrollView>
                    {/* header  */}
                    <SearchMenu />
                    {/* menu  */}
                    <View style={{ flex: 1, backgroundColor: '#A8E3A0' }}>
                        {/* image slider  */}
                        <ImageSlider />
                        {/* menu bar  */}
                        <MenuHome />
                        {/* produk diskon  */}
                        <ProdukSale />
                        {/* new produk  */}
                        <NewProduk />
                        {/* hot produk  */}
                        <HotProduk />
                    </View>
                </ScrollView>
                {/* footer  */}
               <Navbar/>
            </View>
        )
    }
}

export default HomePage