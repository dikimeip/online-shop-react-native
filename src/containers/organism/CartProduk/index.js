import React, { Component, Fragment } from 'react';
import { View, ScrollView, TouchableOpacity, Text } from 'react-native';
import CartList from '../../../components/moleculs/CartList';
import { connect } from 'react-redux'
import AsyncStorage from '@react-native-community/async-storage';
import API from '../../../configs/axios';
import Loading from 'react-native-whc-loading';

class CartProduk extends Component {
    constructor(props) {
        super(props)
        this.state = {
            url: "http://192.168.43.230/server_dc-shop/assets/img/",
            id_user: ""
        }
    }

    deleteHanler = (id) => {
        console.log(id)
        this.props.removeHandler(id)
    }

    getData = async () => {
        try {
            const id_user = await AsyncStorage.getItem('user')
            if (id_user !== null) {
                //console.log(id_user)
                this.setState({
                    id_user: id_user
                })
            } else {
                console.log('Id User Null')
            }
        } catch (er) {
            console.log(er)
        }
    }

    simpanPemesanan = () => {
        if (this.props.produk.length === 0) {
            alert("Keranjang Kosong,Silahkan Berbelanja .")
        } else {
            this.refs.loading.show()
            this.props.produk.map(m => {
                const data = {
                    id_produk: m.id,
                    id_user: this.state.id_user,
                    jumlah: m.count,
                    total: m.harga,
                    invoice: "PS" +m.id+Math.random()
                }
                setTimeout(() => {
                    API.PostPemesanan(data).then(res => {
                        this.props.removeAll()
                        alert('Silahkan Menunggu Konfirmasi Pembayaran Dari Admin')
                        this.refs.loading.close()
                    }).catch(er => {
                        console.log(er)
                        this.refs.loading.close()
                    })
                }, 0);

            })
        }
    }

    componentDidMount = () => {
        this.getData()
    }

    render() {

        return (
            <ScrollView>
                {
                    this.props.produk.length > 0 ? (
                        <Fragment>
                            {
                                this.props.produk.map(p => {
                                    const total = p.count * p.harga
                                    return (
                                        <CartList key={Math.random()} hapusData={() => this.deleteHanler(p.id)} foto={{ uri: this.state.url + p.foto }} judul={p.nama} jumlah={p.count} harga={p.harga} total={total} />
                                    )
                                })
                            }
                        </Fragment>
                    ) : null
                }
                <View style={{ height: 60, backgroundColor: 'white', flexDirection: 'row', marginVertical: 10, }}>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 15 }}>TOTAL</Text>
                    </View>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 15 }}></Text>
                    </View>
                    <View style={{ width: 130, justifyContent: 'center', alignItems: 'center' }}>
                        <TouchableOpacity onPress={this.simpanPemesanan} style={{ padding: 10, backgroundColor: 'green', borderRadius: 10 }}>
                            <Text style={{ textAlign: 'center', color: 'white', fontWeight: 'bold' }}>CHECKOUT</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <Loading ref="loading" />
            </ScrollView>
        )
    }
}

const reduxDispatch = (dispatch) => ({
    removeHandler: (id) => dispatch({ type: "REMOVE_CART", value: id }),
    removeAll: () => dispatch({ type: "REMOVE_ALL" })
})

const reduxState = (state) => ({
    produk: state.produk
})

export default connect(reduxState, reduxDispatch)(CartProduk) 