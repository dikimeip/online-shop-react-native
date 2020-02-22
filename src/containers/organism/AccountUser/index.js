import React, { Component } from 'react';
import { View, ScrollView, Image, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import API from '../../../configs/axios';
import AsyncStorage from '@react-native-community/async-storage';
import Loading from 'react-native-whc-loading';


class AccountUser extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: "",
            username: "",
            email: "",
            no: "",
            alamat: ""
        }
    }

    getData = async () => {
        try {
            const myId = await AsyncStorage.getItem('user');
            if (myId !== null) {
                console.log("My Id " + myId)
                this.setState({
                    id: myId
                })
            } else {
                console.log('Id Kosong')
            }
        } catch (error) {
            console.log(error)
        }
    }

    componentDidMount = () => {
        this.getData()
        this.refs.loading.show()
        setTimeout(() => {
            API.GetUserId(this.state.id).then(res => {
                console.log(res.value)
                this.setState({
                    username: res.value[0].username,
                    email: res.value[0].email,
                    no: res.value[0].no_hp,
                    alamat: res.value[0].alamat
                })
                this.refs.loading.close()
            }).catch(er => {
                console.log(er)
            })
        }, 100);
    }


    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#A8E3A0' }}>
                <ScrollView>
                    <View style={{ height: 500, backgroundColor: 'white', margin: 10, justifyContent: 'center' }}>
                        <View style={{ height: 100, alignItems: 'center' }}>
                            <Image source={require('../../../assets/img/user.png')} style={{ width: '20%', height: '100%' }} />
                        </View>
                        <View style={{ marginTop: 20, marginHorizontal: 20 }}>
                            <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 10 }}>USERNAME</Text>
                            <Text style={{ fontSize: 20 }}>{this.state.username}</Text>
                            <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 10 }}>EMAIL</Text>
                            <Text style={{ fontSize: 20 }}>{this.state.email}</Text>
                            <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 10 }}>NO TELPON</Text>
                            <Text style={{ fontSize: 20 }}>{this.state.no}</Text>
                            <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 10 }}>ALAMAT</Text>
                            <Text style={{ fontSize: 20 }}>{this.state.alamat}</Text>
                            <TouchableOpacity style={{ padding: 10, backgroundColor: 'green', borderRadius: 15, marginTop: 20 }}>
                                <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white', textAlign: 'center' }}>EDIT ACOUNT</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
                <Loading ref="loading" />
            </View>
        )
    }
}

export default AccountUser