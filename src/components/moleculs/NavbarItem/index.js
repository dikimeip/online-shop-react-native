import React from 'react';
import { View,TouchableOpacity,Image,Text } from 'react-native';

const NavbarItem = (props) => {
    return (
        <TouchableOpacity style={{ flex: 1 }} onPress={() => props.tekan } >
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <View style={{ width: 30, height: 30 }}>
                    <Image source={props.foto} style={{ width: '100%', height: '100%', marginTop: 4 }} />
                </View>
                <Text style={{ fontWeight: 'bold', marginTop: 5, }}>{props.judul}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default NavbarItem