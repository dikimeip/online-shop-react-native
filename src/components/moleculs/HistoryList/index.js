import React from 'react'
import { View, Text } from 'react-native'


const HistoryList = (props) => {
    return (
        <View style={{ height: 100, backgroundColor: "white", paddingHorizontal: 20, marginVertical: 10, flexDirection: 'row' }}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 15 }}>{props.judul}</Text>
                <Text style={{ fontSize: 15 }}>Rp {props.harga}</Text>
                <Text style={{ fontSize: 15 }}>INVOICE {props.invoice}</Text>
            </View>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 15 }}>{props.ket}</Text>
            </View>
        </View>
    )
}

export default HistoryList