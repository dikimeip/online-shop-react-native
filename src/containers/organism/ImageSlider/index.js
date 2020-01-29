import React, { Component } from 'react';
import { View,Image } from 'react-native';

class ImageSlider extends Component {
    render() {
        return (
            <View style={{ height: 200 }}>
                <Image source={require('../../../assets/img/pu2.png')} style={{ width: '100%', height: '100%', resizeMode: 'stretch' }} />
            </View>
        )
    }
}


export default ImageSlider