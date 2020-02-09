import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'
import Navbar from '../../organism/Navbar'
import { ScrollView } from 'react-native-gesture-handler'


class PriaPage extends Component {
    render() {
        return (
            <View style={{ flex: 1,backgroundColor: '#A8E3A0' }}>
                {/* headingbar */}
                <View style={{ backgroundColor: 'white', height: 50, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>PAKAIAN PRIA</Text>
                </View>
                <ScrollView>
                    {/* konten bar  */}
                    <View style={{flex: 1, paddingHorizontal: 20, flexDirection: 'row', flexWrap: 'wrap' }}>
                        <View style={{ width: `${93 / 3}%`, height: 250, borderWidth: 1, borderColor: 'grey', marginLeft: 10, backgroundColor: 'white', marginVertical: 10, }}>
                            <Image source={require('../../../assets/img/p1.jpg')} style={{ width: '100%', marginTop: 3, height: '65%', resizeMode: 'stretch' }} />
                            <Text style={{ fontWeight: 'bold', textAlign: 'center', marginTop: 15, }}>BAJU PERSELA LAMONGAN HOME</Text>
                            <Text style={{ fontWeight: 'bold', textAlign: 'center', }}>Rp 100.000</Text>
                        </View>
                        <View style={{ width: `${93 / 3}%`, height: 250, borderWidth: 1, borderColor: 'grey', marginLeft: 10, backgroundColor: 'white', marginVertical: 10, }}>
                            <Image source={require('../../../assets/img/p1.jpg')} style={{ width: '100%', marginTop: 3, height: '65%', resizeMode: 'stretch' }} />
                            <Text style={{ fontWeight: 'bold', textAlign: 'center', marginTop: 15, }}>BAJU PERSELA LAMONGAN HOME</Text>
                            <Text style={{ fontWeight: 'bold', textAlign: 'center', }}>Rp 100.000</Text>
                        </View>
                        <View style={{ width: `${93 / 3}%`, height: 250, borderWidth: 1, borderColor: 'grey', marginLeft: 10, backgroundColor: 'white', marginVertical: 10, }}>
                            <Image source={require('../../../assets/img/p1.jpg')} style={{ width: '100%', marginTop: 3, height: '65%', resizeMode: 'stretch' }} />
                            <Text style={{ fontWeight: 'bold', textAlign: 'center', marginTop: 15, }}>BAJU PERSELA LAMONGAN HOME</Text>
                            <Text style={{ fontWeight: 'bold', textAlign: 'center', }}>Rp 100.000</Text>
                        </View>
                        <View style={{ width: `${93 / 3}%`, height: 250, borderWidth: 1, borderColor: 'grey', marginLeft: 10, backgroundColor: 'white', marginVertical: 10, }}>
                            <Image source={require('../../../assets/img/p1.jpg')} style={{ width: '100%', marginTop: 3, height: '65%', resizeMode: 'stretch' }} />
                            <Text style={{ fontWeight: 'bold', textAlign: 'center', marginTop: 15, }}>BAJU PERSELA LAMONGAN HOME</Text>
                            <Text style={{ fontWeight: 'bold', textAlign: 'center', }}>Rp 100.000</Text>
                        </View>
                    </View>
                </ScrollView>
                {/* navbar  */}
                <Navbar />
            </View>
        )
    }
}

export default PriaPage