import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import HeaderHistory from '../../organism/HeaderHistory';
import HistoryProduk from '../../organism/HistoryProduk';
import Navbar from '../../organism/Navbar'
import HeaderJudul from '../../organism/HeaderJudul';

class HistoryPage extends Component {

    render() {
        return (
            <View style={{ flex: 1 }}>
                {/* header  */}
                <HeaderHistory/>
                {/* home  */}
                <View style={{ flex: 1, backgroundColor: '#A8E3A0' }}>
                   <HeaderJudul/>
                   {/* history list  */}
                   <HistoryProduk/>
                </View>
                {/* navbaar  */}
                    <Navbar/>
            </View>
        )
    }
}

export default HistoryPage