import React from 'react';
import { View,Image,Text } from 'react-native';

const ProdukRow = (props) => {
    return (
        <View style={{ backgroundColor: 'white', height: 150, paddingHorizontal: 10, marginVertical: 5, flexDirection: 'row' }}>
            <View style={{ width: 200 }}>
                <Image source={props.image} style={{ width: '100%', height: '100%', resizeMode: 'stretch' }} />
            </View>
            <View style={{ flex: 1, justifyContent: 'center' }}>
                <Text style={{ fontWeight: 'bold', fontSize: 15, textAlign: 'center' }}>{props.nama}</Text>
                <Text style={{ fontWeight: 'bold', fontSize: 15, textAlign: 'center', marginTop: 10, }}>{props.stok}</Text>
                <Text style={{ fontWeight: 'bold', fontSize: 15, textAlign: 'center', }}>{props.harga}</Text>
            </View>
        </View>
    )
}

export default ProdukRow