import React, { Component } from 'react';
import { View, TextInput, Image, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux'

class SearchMenu extends Component {
    pindahHalaman = () => {
        this.props.navigation.navigate("CartPages")
    } 
    render() {
        console.log(this.props.produk.length)
        return (
            <View style={{ height: 55, flexDirection: 'row', backgroundColor: 'white' }}>
                <View style={{ width: '85%', marginVertical: 5, marginLeft: 15 }}>
                    <TextInput placeholder="Apa Yang Anda Pikirkan.?" style={{ borderColor: 'grey', borderWidth: 1, borderRadius: 20, position: 'absolute', width: '100%', height: 40 }} />
                    <Image source={require('../../../assets/icon/cari.png')} style={{ position: 'relative', width: 20, height: 20, left: 370, top: 8 }} />
                </View>

                <View style={{ width: '14%', marginLeft: 10, }}>
                        <Image source={require('../../../assets/icon/cart.png')} style={{ width: 30, height: 30, marginTop: 8, position: 'absolute' }} />
                        <Text style={{ fontWeight: 'bold', color: 'yellow', position: 'relative', top: 8, left: 13 }}>{this.props.produk.length}</Text>
                </View>


            </View>
        )
    }
}

const reduxState = (state) => ({
    produk : state.produk
})

export default connect(reduxState)(SearchMenu)