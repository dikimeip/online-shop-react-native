import React from 'react'
import { View,Image,Text } from 'react-native'

const SaleItem = (props) => {
    return (
        <View style={{ width: 150, height: '100%', borderWidth: 1, borderColor: 'grey', marginLeft: 10 }}>
            <Image source={props.foto} style={{ width: '100%', marginTop: 3, height: '60%', resizeMode: 'stretch' }} />
            <Text style={{ fontWeight: 'bold', textAlign: 'center', marginTop: 5, }}>{props.judul}</Text>
            <Text style={{ fontWeight: 'bold', textAlign: 'center', color: 'red', textDecorationLine: 'line-through' }}>{props.diskon}</Text>
            <Text style={{ fontWeight: 'bold', textAlign: 'center', }}>{props.harga}</Text>
        </View>
    )
}


export default SaleItem