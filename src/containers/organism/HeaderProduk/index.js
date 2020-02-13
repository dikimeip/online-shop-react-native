import React from 'react';
import { View,Text } from 'react-native';

const HeaderProduk = (props) => {
    return (
        <View style={{ backgroundColor: 'white', height: 50, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{props.judul}</Text>
        </View>
    )
}

export default HeaderProduk