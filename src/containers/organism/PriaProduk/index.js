import React, { Component } from 'react';
import { View, ScrollView, Image, Text, FlatList } from 'react-native';
import API from '../../../configs/axios'
import ProdukItem from '../../../components/moleculs/ProdukItem';


class PriaProduk extends Component {
    constructor(props) {
        super(props)
        this.state = {
            produk: [],
            url: "http://192.168.43.230/server_dc-shop/assets/img/"

        }
    }

    componentDidMount = () => {
        API.GetProdukPria().then(res => {
            this.setState({
                produk: res.value
            })
        }).catch(er => console.log(er))
    }



    render() {
        const produk = this.state.produk.map(pro => (
            // <View key={pro.id_produk} style={{ width: `${93 / 3}%`, height: 250, borderWidth: 1, borderColor: 'grey', marginLeft: 10, marginVertical: 10 }}>
            //     <Image source={{ uri: this.state.url + pro.image_produk }} style={{ width: '100%', marginTop: 3, height: '65%', resizeMode: 'stretch' }} />
            //     <Text style={{ fontWeight: 'bold', textAlign: 'center', marginTop: 15, }}>{pro.nama_produk}</Text>
            //     <Text style={{ fontWeight: 'bold', textAlign: 'center', }}> {pro.harga} </Text>
            // </View>
            <ProdukItem key={pro.id_produk} image={{uri : this.state.url + pro.image_produk}} nama={pro.nama_produk} harga={pro.harga} />
        ))
        return (
            <View style={{ flex: 1, paddingHorizontal: 20, flexDirection: 'row', flexWrap: 'wrap' }}>
                {produk}
            </View>
        )
    }
}

export default PriaProduk