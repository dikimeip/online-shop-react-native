import React from 'react'
import { View,Text, } from 'react-native'


const HeaderJudul = () => {
    return (
        <View style={{ height: 30, backgroundColor: "white", paddingHorizontal: 20, marginVertical: 10, flexDirection: 'row' }}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontWeight: 'bold', fontSize: 16 }}>PRODUK</Text>
            </View>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontWeight: 'bold', fontSize: 16 }}>STATUS</Text>
            </View>
        </View>
    )
}

export default HeaderJudul