import React, { Component } from 'react';
import { View, ScrollView, TouchableOpacity, Text } from 'react-native';
import CartList from '../../../components/moleculs/CartList';
import { connect } from 'react-redux'

class CartProduk extends Component {
    constructor(props) {
        super(props)
        this.state = {
            url: "http://192.168.43.230/server_dc-shop/assets/img/"
        }
    }

    deleteHanler = (id) => {
        console.log(id)
        this.props.removeHandler(id)
    }

    render() {
        //console.log('Produk Saya ',this.props.produk[])
        return (
            <ScrollView>
                {
                    this.props.produk.map(p => {
                        const total = p.count * p.harga
                        return (
                            <CartList key={Math.random()} hapusData={() => this.deleteHanler(p.id)} foto={{ uri: this.state.url + p.foto }} judul={p.nama} jumlah={p.count} harga={p.harga} total={total} />
                        )
                    })
                }
                <View style={{ height: 60, backgroundColor: 'white', flexDirection: 'row', marginVertical: 10, }}>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 15 }}>TOTAL</Text>
                    </View>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 15 }}>RP 120.000</Text>
                    </View>
                    <View style={{ width: 130, justifyContent: 'center', alignItems: 'center' }}>
                        <TouchableOpacity style={{ padding: 10, backgroundColor: 'green', borderRadius: 10 }}>
                            <Text style={{ textAlign: 'center', color: 'white', fontWeight: 'bold' }}>CHECKOUT</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        )
    }
}

const reduxDispatch = (dispatch) => ({
    removeHandler: (id) => dispatch({ type: "REMOVE_CART", value: id })
})

const reduxState = (state) => ({
    produk: state.produk
})

export default connect(reduxState, reduxDispatch)(CartProduk) 