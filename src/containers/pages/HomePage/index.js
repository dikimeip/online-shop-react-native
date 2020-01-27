import React, { Component } from 'react'
import { View, Text, Image } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'

class HomePage extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                {/* header  */}
                <View style={{ height: 55, flexDirection: 'row',backgroundColor:'white' }}>
                    <View style={{ width: '85%', marginVertical: 5, marginLeft: 15 }}>
                        <TextInput placeholder="Apa Yang Anda Pikirkan.?" style={{ borderColor: 'grey', borderWidth: 1, borderRadius: 20, position: 'absolute', width: '100%', height: 40 }} />
                        <Image source={require('../../../assets/icon/cari.png')} style={{ position: 'relative', width: 20, height: 20, left: 345, top: 8 }} />
                    </View>
                    <View style={{ width: '15%', marginLeft: 5, }}>
                        <Image source={require('../../../assets/icon/alert.png')} style={{ width: 35, height: 35, marginTop: 7, position: 'absolute' }} />
                        <Text style={{ fontWeight: 'bold', color: 'red', position: 'relative', top: 15, left: 13 }}>6</Text>
                    </View>
                </View>
                {/* menu  */}
                <View style={{ flex: 1,backgroundColor:'#A8E3A0'  }}>
                    {/* image slider  */}
                    <View style={{height:200,backgroundColor:'red'}}>
                        <Image source={require('../../../assets/img/pu2.png')} style={{width:'100%',height:'100%',resizeMode:'stretch'}} />
                    </View>
                    {/* menu bar  */}
                    <View style={{height:170,flexDirection:'row',flexWrap:'wrap',marginVertical:10,}}>
                        <View style={{width:`${100/4}%`,height:80,backgroundColor:'red'}}></View>
                        <View style={{width:`${100/4}%`,height:80,backgroundColor:'blue'}}></View>
                        <View style={{width:`${100/4}%`,height:80,backgroundColor:'green'}}></View>
                        <View style={{width:`${100/4}%`,height:80,backgroundColor:'yellow'}}></View>
                        <View style={{width:`${100/4}%`,height:80,backgroundColor:'yellow'}}></View>
                        <View style={{width:`${100/4}%`,height:80,backgroundColor:'white'}}></View>
                        <View style={{width:`${100/4}%`,height:80,backgroundColor:'black'}}></View>
                        <View style={{width:`${100/4}%`,height:80,backgroundColor:'red'}}></View>
                    </View>
                </View>
                {/* footer  */}
                <View style={{ height: 65, backgroundColor: 'white', flexDirection: 'row' }}>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <View style={{ width: 30, height: 30 }}>
                            <Image source={require('../../../assets/icon/home.png')} style={{ width: '100%', height: '100%',marginTop:4 }} />
                        </View>
                        <Text style={{ fontWeight: 'bold', marginTop: 5, }}>HOME</Text>
                    </View>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <View style={{ width: 30, height: 30 }}>
                            <Image source={require('../../../assets/icon/cart.png')} style={{ width: '100%', height: '100%',marginTop:4 }} />
                        </View>
                        <Text style={{ fontWeight: 'bold', marginTop: 5, }}>CART</Text>
                    </View>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <View style={{ width: 30, height: 30 }}>
                            <Image source={require('../../../assets/icon/riwayat.png')} style={{ width: '100%', height: '100%',marginTop:4 }} />
                        </View>
                        <Text style={{ fontWeight: 'bold', marginTop: 5, }}>HISTORY</Text>
                    </View>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <View style={{ width: 30, height: 30 }}>
                            <Image source={require('../../../assets/icon/account.png')} style={{ width: '100%', height: '100%',marginTop:4 }} />
                        </View>
                        <Text style={{ fontWeight: 'bold', marginTop: 5, }}>ACCOUNT</Text>
                    </View>
                </View>
            </View>
        )
    }
}

export default HomePage