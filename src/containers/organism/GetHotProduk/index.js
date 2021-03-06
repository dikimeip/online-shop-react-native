import React, { Component } from 'react';
import { View,Image,Text, ScrollView } from 'react-native';
import API from '../../../configs/axios';
import ProdukRow from '../../../components/moleculs/ProdukRow'
import { withNavigation } from 'react-navigation';

class GetHotProduk extends Component {
    constructor(props) {
        super(props)
        this.state = {
            produk: [],
            url: "http://192.168.43.230/server_dc-shop/assets/img/"
        }
    }

    componentDidMount = () => {
        API.GetProdukhot().then(res => {
            this.setState({
                produk:res.value
            })
         }).catch(er => {
             console.log(er)
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
        console.log(this.state.produk)
        const produk = this.state.produk.map(pro => (
             <ProdukRow key={pro.id_produk} image={{uri : this.state.url + pro.image_produk}} nama={pro.nama_produk} stok={pro.stok} harga={pro.harga}
             tekan={() => this.pindahDetail(pro.id_produk, pro.nama_produk, pro.harga, pro.deskripsi, pro.stok, pro.image_produk)}
             />
        ))
        return (
            <View style={{ flex: 1, backgroundColor: '#A8E3A0' }}>
                <ScrollView>
                    {produk}
                </ScrollView>
               
            </View>

        )
    }
}

export default withNavigation(GetHotProduk) 