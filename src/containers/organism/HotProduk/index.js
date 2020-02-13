import React, { Component } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import ProdukList from '../../../components/moleculs/ProdukList';
import API from '../../../configs/axios';
import { withNavigation } from 'react-navigation';

class HotProduk extends Component {
    constructor(props) {
        super(props)
        this.state = {
            produk: [],
            url: "http://192.168.43.230/server_dc-shop/assets/img/"
        }
    }

    componentDidMount = () => {
        API.GetHotProduk().then(res => {
            this.setState({
                produk: res.value
            })
        }).then(er => {
            console.log(er)
        })
    }

    keyExtractor = (item, index) => index.toString()
    renderItem = ({ item }) => (
        <ProdukList foto={{ uri: this.state.url + item.image_produk }} judul={item.nama_produk} harga={item.harga} />
    )

    render() {
        return (
            <View style={{ height: 300, backgroundColor: 'white', paddingHorizontal: 15, marginBottom: 10, }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10, }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 15 }}>HOT PRODUK</Text>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('hotprodukpage')}>
                        <Text style={{ fontWeight: 'bold', fontSize: 15, color: 'green' }}>LIHAT SEMUA</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ height: '85%', marginTop: 10, flexDirection: 'row' }}>
                    <FlatList
                        data={this.state.produk}
                        horizontal={true}
                        keyExtractor={this.keyExtractor}
                        renderItem={this.renderItem}
                    />
                </View>
            </View>
        )
    }
}

export default withNavigation(HotProduk) 