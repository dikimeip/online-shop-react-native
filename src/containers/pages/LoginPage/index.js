import React, { Component } from 'react'
import { View, TextInput, Text, TouchableOpacity } from 'react-native'
import API from '../../../configs/axios'
import Loading from 'react-native-whc-loading'
import AsyncStorage from '@react-native-community/async-storage';


class LoginPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: "",
            username: "",
            password: ""
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
            if (this.state.id !== "") {
                this.refs.loading.close()
                this.props.navigation.navigate('HomePages')
            }
        }, 100);
    }

    storageData = async (id) => {
        try {
            await AsyncStorage.setItem('user', id)
        } catch (er) {
            console.log(er)
        }
    }

    login = () => {
        this.refs.loading.show();
        setTimeout(() => {
            API.PostLogin(this.state).then(res => {
                if (res.status === 1) {
                    this.storageData(res.value.id_user)
                    this.refs.loading.close();
                    this.props.navigation.navigate('HomePages')
                } else {
                    this.refs.loading.close();
                    alert('Username Password Error')
                }
            }).catch(err => {
                this.refs.loading.close();
                alert(err)
            })
        });
    }


    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#A8E3A0', }}>
                <View style={{ height: 200, backgroundColor: 'blue', }}>
                    {/* image  */}
                </View>
                <View style={{ flex: 1, marginTop: 20, marginHorizontal: 20, justifyContent: 'center' }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 15, marginBottom: 10, }}>Masukan Username</Text>
                    <TextInput onChangeText={e => this.setState({ username: e })} placeholder="Masukan Username" style={{ borderColor: 'grey', borderRadius: 10, borderWidth: 1, width: '100%' }} />
                    <Text style={{ fontWeight: 'bold', fontSize: 15, marginBottom: 10, }}>Masukan Password</Text>
                    <TextInput onChangeText={e => this.setState({ password: e })} placeholder="Masukan Password" style={{ borderColor: 'grey', borderRadius: 10, borderWidth: 1, width: '100%' }} />
                    <TouchableOpacity onPress={this.login} style={{ padding: 20, backgroundColor: 'blue', borderRadius: 15, marginTop: 20, }}>
                        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 20, textAlign: 'center' }}>LOGIN</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ padding: 20, backgroundColor: 'green', borderRadius: 15, marginTop: 20, }}>
                        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 20, textAlign: 'center' }}>REGISTER</Text>
                    </TouchableOpacity>
                </View>
                <Loading ref='loading' />
            </View>
        )
    }
}

export default LoginPage