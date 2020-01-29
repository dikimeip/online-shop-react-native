import React, { Component } from 'react';
import { View } from 'react-native';
import HeaderCart from '../../organism/HeaderCart';
import CartProduk from '../../organism/CartProduk';
import Navbar from '../../organism/Navbar'

class CartPage extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                {/* konten  */}
                <View style={{ flex: 1, backgroundColor: '#A8E3A0' }}>
                    {/* header  */}
                    <HeaderCart/>
                    {/* cart list  */}
                    <CartProduk/>
                </View>
                {/* navbar  */}
                <Navbar/>
            </View>
        )
    }
}

export default CartPage