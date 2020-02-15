import React, { Component } from 'react'
import { View, Text, ScrollView, TextInput, TouchableOpacity } from 'react-native'
class DetailProduk extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 1
        }
    }

    plusCount = () => {
        console.log('ok')
        this.setState({
            count: this.state.count += 1
        })
    }

    minusCount = () => {
        if (this.state.count > 0) {
            this.setState({
                count: this.state.count -= 1
            })
        }
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <ScrollView>
                    <View style={{ height: 200, backgroundColor: 'red' }}></View>
                    <View style={{ margin: 20, }}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>NAMA PRODUK TERKAIT</Text>
                        <Text style={{ fontSize: 20 }}>HARGA PRODUK</Text>
                        <Text style={{ fontSize: 15, color: 'blue', marginVertical: 10 }}>STOK PRODUK</Text>
                    </View>
                    <View style={{ padding: 2, backgroundColor: 'grey' }} ></View>
                    <Text style={{ fontSize: 18, fontWeight: 'bold', margin: 20 }}>DESKRIPSI PRODUK</Text>
                    <Text style={{ marginHorizontal: 20, fontSize: 18, textAlign: 'left' }}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </Text>
                    <View style={{ padding: 2, backgroundColor: 'grey', marginVertical: 20 }} ></View>
                    <View style={{ flexDirection: 'row', marginHorizontal: 20 }}>
                        <TouchableOpacity onPress={() => this.minusCount()} style={{ height: 40, backgroundColor: 'blue', width: '10%', marginRight: -10, justifyContent: 'center' }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'white', textAlign: 'center' }}>-</Text>
                        </TouchableOpacity>
                        <TextInput value={String(this.state.count)} style={{ backgroundColor: 'white', textAlign: 'center', marginHorizontal: 20, borderWidth: 1, width: '20%', height: 40 }} />
                        <TouchableOpacity onPress={() => this.plusCount()} style={{ height: 40, backgroundColor: 'blue', width: '10%', marginLeft: -10, justifyContent: 'center' }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'white', textAlign: 'center' }}>+</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ height: 40, backgroundColor: 'blue', width: '50%', marginLeft: 20, justifyContent: 'center' }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'white', textAlign: 'center' }}>PESAN SEKARANG</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        )
    }
}

export default DetailProduk