import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';


const ProdukItem = (props) => {
    return (
        <TouchableOpacity onPress={props.tekan} style={{ width: `${93 / 3}%` }}>
            <View style={{ height: 250, borderWidth: 1, borderColor: 'grey', marginLeft: 10, marginVertical: 10 }}>
                <Image source={props.image} style={{ width: '100%', marginTop: 3, height: '65%', resizeMode: 'stretch' }} />
                <Text style={{ fontWeight: 'bold', textAlign: 'center', marginTop: 15, }}>{props.nama}</Text>
                <Text style={{ fontWeight: 'bold', textAlign: 'center', }}> {props.harga} </Text>
            </View>
        </TouchableOpacity>
    )
}

export default ProdukItem