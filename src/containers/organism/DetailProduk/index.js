import React, { Component } from 'react'
import { View, Text, ScrollView, TextInput, TouchableOpacity, Image } from 'react-native'
import { withNavigation } from 'react-navigation'
import { connect } from 'react-redux'
class DetailProduk extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 1,
            id: '',
            nama: '',
            harga: '',
            deskripsi: '',
            stok: '',
            foto: '',
            url: "http://192.168.43.230/server_dc-shop/assets/img/",
        }
    }

    componentDidMount = () => {
        this.setState({
            id: this.props.navigation.state.params.id,
            nama: this.props.navigation.state.params.nama,
            harga: this.props.navigation.state.params.harga,
            deskripsi: this.props.navigation.state.params.deskripsi,
            stok: this.props.navigation.state.params.stok,
            foto: this.props.navigation.state.params.foto,
        })
    }

    plusCount = () => {
        console.log('ok')
        this.setState({
            count: this.state.count += 1
        })
    }

    minusCount = () => {
        if (this.state.count > 1) {
            this.setState({
                count: this.state.count -= 1
            })
        }
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <ScrollView>
                    <View style={{ height: 300, backgroundColor: 'red' }}>
                        <Image source={{uri:this.state.url + this.state.foto}} style={{width:'100%',height:'100%',resizeMode:'stretch'}} />
                    </View>
                    <View style={{ margin: 20, }}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{this.state.nama} </Text>
                        <Text style={{ fontSize: 20 }}>Rp.{this.state.harga}</Text>
                        <Text style={{ fontSize: 15, color: 'blue', marginVertical: 10,fontWeight:'bold' }}>STOK : {this.state.stok}</Text>
                    </View>
                    <View style={{ padding: 2, backgroundColor: 'grey' }} ></View>
                    <Text style={{ fontSize: 18, fontWeight: 'bold', margin: 20 }}>DESKRIPSI PRODUK</Text>
                    <Text style={{ marginHorizontal: 20, fontSize: 18, textAlign: 'left' }}>{this.state.deskripsi}</Text>
                    <View style={{ padding: 2, backgroundColor: 'grey', marginVertical: 20 }} ></View>
                    <View style={{ flexDirection: 'row', marginHorizontal: 20 }}>
                        <TouchableOpacity onPress={() => this.minusCount()} style={{ height: 40, backgroundColor: 'blue', width: '10%', marginRight: -10, justifyContent: 'center' }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'white', textAlign: 'center' }}>-</Text>
                        </TouchableOpacity>
                        <TextInput value={String(this.state.count)} style={{ backgroundColor: 'white', textAlign: 'center', marginHorizontal: 20, borderWidth: 1, width: '20%', height: 40 }} />
                        <TouchableOpacity onPress={() => this.plusCount()} style={{ height: 40, backgroundColor: 'blue', width: '10%', marginLeft: -10, justifyContent: 'center' }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'white', textAlign: 'center' }}>+</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>this.props.updateCart()} style={{ height: 40, backgroundColor: 'blue', width: '50%', marginLeft: 20, justifyContent: 'center' }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'white', textAlign: 'center' }}>PESAN SEKARANG</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        )
    }
}

const reduxState = (state) => ({
    cart : state.cart
})

const reduxDispatch = (dispatch) => ({
    updateCart : () => dispatch({type:'ADD_CART',value : this.state})
})

export default connect(reduxState,reduxDispatch)(withNavigation(DetailProduk))  