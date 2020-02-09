import React, { Component } from 'react';
import { View, ScrollView, Image, Text, FlatList } from 'react-native';
import API from '../../../configs/axios'


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
            console.log(res.value)
            this.setState({
                produk: res.value
            })
        }).catch(er => console.log(er))
    }



    render() {
        console.log(this.state.produk)
        const produk = this.state.produk.map(pro => (
            <View key={pro.id_produk} style={{ width: `${93 / 3}%`, height: 250, borderWidth: 1, borderColor: 'grey', marginLeft: 10, marginVertical: 10 }}>
                <Image source={{ uri: this.state.url + pro.image_produk }} style={{ width: '100%', marginTop: 3, height: '65%', resizeMode: 'stretch' }} />
                <Text style={{ fontWeight: 'bold', textAlign: 'center', marginTop: 15, }}>{pro.nama_produk}</Text>
                <Text style={{ fontWeight: 'bold', textAlign: 'center', }}> {pro.harga} </Text>
            </View>
        ))
        return (
            <View style={{ flex: 1, paddingHorizontal: 20, flexDirection: 'row', flexWrap: 'wrap' }}>
                {produk}
            </View>
        )
    }
}

export default PriaProduk