import React, { Component } from 'react';
import ProdukList from '../../../components/moleculs/ProdukList';
import { View, Text, FlatList,TouchableOpacity } from 'react-native';
import API from '../../../configs/axios';
import { withNavigation } from 'react-navigation';

class NewProduk extends Component {
    constructor(props) {
        super(props)
        this.state = {
            produk: [],
            url: "http://192.168.43.230/server_dc-shop/assets/img/"
        }
    }

    componentDidMount = () => {
        API.GetAllProduk().then(res => {
            this.setState({
                produk: res.value
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

    keyExtractor = (item, index) => index.toString()
    renderItem = ({ item }) => (
        <ProdukList foto={{ uri: this.state.url + item.image_produk }} judul={item.nama_produk} harga={item.harga}
        tekan={() => this.pindahDetail(item.id_produk, item.nama_produk, item.harga, item.deskripsi, item.stok, item.image_produk)}
        />
    )

    render() {
        return (
            <View style={{ height: 300, backgroundColor: 'white', paddingHorizontal: 15, marginVertical: 10, }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10, }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 15 }}>NEW PRODUK</Text>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('NewProduksPages')}>
                        <Text style={{ fontWeight: 'bold', fontSize: 15, color: 'green' }}>LIHAT SEMUA</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ height: '85%', marginTop: 10, flexDirection: 'row' }}>
                    <FlatList
                        horizontal={true}
                        data={this.state.produk}
                        keyExtractor={this.keyExtractor}
                        renderItem={this.renderItem}
                    />
                </View>
            </View>
        )
    }
}

export default withNavigation(NewProduk) 