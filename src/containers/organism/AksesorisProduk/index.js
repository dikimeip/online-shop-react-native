import React, { Component } from 'react';
import ProdukItem from '../../../components/moleculs/ProdukItem';
import { View } from 'react-native';
import API from '../../../configs/axios';

class AksesorisProduk extends Component{
    constructor(props) {
        super(props)
        this.state = {
            produk: [],
            url: "http://192.168.43.230/server_dc-shop/assets/img/"
        }
    }

    componentDidMount = () => {
        API.GetProdukAksesoris().then(res => {
            this.setState({
                produk : res.value
            })
        }).catch(err => {
            console.log(err)
        })
    }

    render() {
        const produk = this.state.produk.map(pro => (
            <ProdukItem key={pro.id_produk} image={{uri : this.state.url + pro.image_produk}} nama={pro.nama_produk} harga={pro.harga} />
        ))
        return (
            <View style={{ flex: 1, paddingHorizontal: 20, flexDirection: 'row', flexWrap: 'wrap' }}>
                {produk}
            </View>
        )
    }
}

export default AksesorisProduk