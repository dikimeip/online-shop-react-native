import React, { Component } from 'react';
import ProdukItem from '../../../components/moleculs/ProdukItem';
import { View } from 'react-native';
import API from '../../../configs/axios';
import { withNavigation } from 'react-navigation';

class TasProduk extends Component{
    constructor(props) {
        super(props)
        this.state = {
            produk: [],
            url: "http://192.168.43.230/server_dc-shop/assets/img/"
        }
    }

    componentDidMount = () => {
        API.GetProdukTas().then(res => {
            this.setState({
                produk : res.value
            })
        }).catch(err => {
            console.log(err)
        })
    }

    pindahDetail = (id, nama, harga, deskripsi, stok, foto) => {
        this.props.navigation.navigate('detailPages', {
            id: id,
            nama: nama,
            harga: harga,
            deskripsi: deskripsi,
            stok: stok,
            foto: foto
        })
    }

    render() {
        const produk = this.state.produk.map(pro => (
            <ProdukItem key={pro.id_produk} image={{uri : this.state.url + pro.image_produk}} nama={pro.nama_produk} harga={pro.harga}
            tekan={() => this.pindahDetail(pro.id_produk, pro.nama_produk, pro.harga, pro.deskripsi, pro.stok, pro.image_produk)}
            />
        ))
        return (
            <View style={{ flex: 1, paddingHorizontal: 20, flexDirection: 'row', flexWrap: 'wrap' }}>
                {produk}
            </View>
        )
    }
}

export default withNavigation(TasProduk) 