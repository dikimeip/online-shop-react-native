import React from 'react';
import { View, Image, Text,TouchableOpacity } from 'react-native';

const MenuItem = (props) => {
    return (
        
        <View style={{ width: `${100 / 4}%`, height: 80, justifyContent: 'center', alignItems: 'center' }}>
            <TouchableOpacity style={{justifyContent: 'center', alignItems: 'center'}} onPress={props.tekan} >
                <View style={{ width: 40, height: 40 }}>
                    <Image source={props.foto} style={{ width: '100%', height: '100%', resizeMode: 'stretch' }} />
                </View>
                <Text style={{ marginTop: 5, fontWeight: 'bold' }}>{props.judul}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default MenuItem