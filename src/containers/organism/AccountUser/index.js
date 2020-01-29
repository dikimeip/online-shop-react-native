import React from 'react'
import { View,ScrollView,Image,Text } from 'react-native'

const AccountUser = () => {
    return (
        <View style={{ flex: 1, backgroundColor: '#A8E3A0' }}>
            <ScrollView>
                <View style={{ height: 400, backgroundColor: 'white', margin: 10, justifyContent: 'center' }}>
                    <View style={{ height: 100, alignItems: 'center' }}>
                        <Image source={require('../../../assets/img/user.png')} style={{ width: '20%', height: '100%' }} />
                    </View>
                    <View style={{ marginTop: 20, marginHorizontal: 20 }}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 10 }}>USERNAME</Text>
                        <Text style={{ fontSize: 20 }}>CAP CAPUNG</Text>
                        <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 10 }}>EMAIL</Text>
                        <Text style={{ fontSize: 20 }}>CAP CAPUNG</Text>
                        <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 10 }}>NO TELPON</Text>
                        <Text style={{ fontSize: 20 }}>CAP CAPUNG</Text>
                        <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 10 }}>ALAMAT</Text>
                        <Text style={{ fontSize: 20 }}>CAP CAPUNG</Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default AccountUser