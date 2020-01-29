import React, { Component } from 'react';
import { View, TextInput, Image, Text } from 'react-native';

class SearchMenu extends Component {
    render() {
        return (
            <View style={{ height: 55, flexDirection: 'row', backgroundColor: 'white' }}>
                <View style={{ width: '85%', marginVertical: 5, marginLeft: 15 }}>
                    <TextInput placeholder="Apa Yang Anda Pikirkan.?" style={{ borderColor: 'grey', borderWidth: 1, borderRadius: 20, position: 'absolute', width: '100%', height: 40 }} />
                    <Image source={require('../../../assets/icon/cari.png')} style={{ position: 'relative', width: 20, height: 20, left: 345, top: 8 }} />
                </View>
                <View style={{ width: '15%', marginLeft: 5, }}>
                    <Image source={require('../../../assets/icon/alert.png')} style={{ width: 35, height: 35, marginTop: 7, position: 'absolute' }} />
                    <Text style={{ fontWeight: 'bold', color: 'red', position: 'relative', top: 15, left: 13 }}>6</Text>
                </View>
            </View>
        )
    }
}

export default SearchMenu