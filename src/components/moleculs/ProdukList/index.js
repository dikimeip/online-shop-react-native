import React from 'react'
import { View, Image, Text, TouchableOpacity } from 'react-native'
import { withNavigation } from 'react-navigation'

const ProdukList = (props) => {
    return (
        <TouchableOpacity onPress={props.tekan}>
            <View style={{ width: 150, height: '100%', borderWidth: 1, borderColor: 'grey', marginLeft: 10 }}>
                <Image source={props.foto} style={{ width: '100%', marginTop: 3, height: '65%', resizeMode: 'stretch' }} />
                <Text style={{ fontWeight: 'bold', textAlign: 'center', marginTop: 15, }}>{props.judul}</Text>
                <Text style={{ fontWeight: 'bold', textAlign: 'center', }}>{props.harga}</Text>
            </View>
        </TouchableOpacity>

    )
}


export default withNavigation(ProdukList) 