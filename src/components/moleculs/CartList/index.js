import React from 'react'
import { View,Image,Text,TouchableOpacity } from 'react-native'

const CartList = (props) => {
    return (
        <View style={{ height: 150, backgroundColor: 'white', marginVertical: 10, flexDirection: 'row', }}>
            <View style={{ width: 150 }}>
                <Image source={props.foto} style={{ width: '100%', height: '100%', resizeMode: 'stretch' }} />
            </View>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontWeight: 'bold', textAlign: 'center', fontSize: 15 }}> {props.judul} </Text>
                <Text style={{ fontWeight: 'bold', textAlign: 'center', marginTop: 10, }}>JUMLAH PEMBELIAN {props.jumlah} </Text>
                <Text style={{ fontWeight: 'bold', textAlign: 'center' }}>HARGA PRODUK RP {props.harga}</Text>
                <Text style={{ fontWeight: 'bold', textAlign: 'center' }}>HARGA TOTAL RP {props.total}</Text>
            </View>
            <View style={{ width: 100, justifyContent: 'center', alignItems: 'center' }}>
                <TouchableOpacity onPress={props.hapusData} style={{ padding: 10, backgroundColor: 'red', borderRadius: 10 }}>
                    <Text style={{ textAlign: 'center', color: 'white', fontWeight: 'bold' }}>HAPUS</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default CartList