import React, { Component } from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import Loading from 'react-native-whc-loading'
import API from '../../../configs/axios'
import { withNavigation } from 'react-navigation'

class RegisterPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            password: "",
            email: "",
            no: "",
            alamat: ""
        }
    }

    register = () => {
        this.refs.loading.show()
        if (this.state.username === "" || this.state.password === "" || this.state.email === "" || this.state.no === "" || this.state.alamat === "") {
            this.refs.loading.close()
            alert('Invalid Input')
        } else {
            API.PostRegister(this.state).then(res => {
                if (res.status === 1) {
                    this.props.navigation.navigate('LoginPages')
                    this.refs.loading.close()
                } else {
                    this.refs.loading.close()
                    alert('Register Failed')
                }
            }).catch(er => {
                console.log(er)
                this.refs.loading.close()
            })
        }
    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#A8E3A0' }}>
                <View style={{ height: 100, backgroundColor: 'blue', }}>
                    <Text style={{ fontSize: 40, fontWeight: 'bold', textAlign: 'center', marginTop: 20, color: 'white' }}>REGISTER PAGE</Text>
                </View>
                <View style={{ flex: 1, marginTop: 20, marginHorizontal: 20, justifyContent: 'center' }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 15, marginBottom: 10, }}>Masukan Username</Text>
                    <TextInput onChangeText={e => this.setState({ username: e })} placeholder="Masukan Username" style={{ borderColor: 'grey', borderRadius: 10, borderWidth: 1, width: '100%' }} />
                    <Text style={{ fontWeight: 'bold', fontSize: 15, marginBottom: 10, }}>Masukan Password</Text>
                    <TextInput onChangeText={e => this.setState({ password: e })} placeholder="Masukan Password" style={{ borderColor: 'grey', borderRadius: 10, borderWidth: 1, width: '100%' }} />
                    <Text style={{ fontWeight: 'bold', fontSize: 15, marginBottom: 10, }}>Masukan Email</Text>
                    <TextInput keyboardType="email-address" onChangeText={e => this.setState({ email: e })} placeholder="Masukan email" style={{ borderColor: 'grey', borderRadius: 10, borderWidth: 1, width: '100%' }} />
                    <Text style={{ fontWeight: 'bold', fontSize: 15, marginBottom: 10, }}>Masukan Nomer Hp</Text>
                    <TextInput keyboardType="number-pad" onChangeText={e => this.setState({ no: e })} placeholder="Masukan nomer" style={{ borderColor: 'grey', borderRadius: 10, borderWidth: 1, width: '100%' }} />
                    <Text style={{ fontWeight: 'bold', fontSize: 15, marginBottom: 10, }}>Masukan Alamat</Text>
                    <TextInput onChangeText={e => this.setState({ alamat: e })} placeholder="Masukan alamat" style={{ borderColor: 'grey', borderRadius: 10, borderWidth: 1, width: '100%', height: 100 }} />
                    <TouchableOpacity onPress={this.register} style={{ padding: 20, backgroundColor: 'blue', borderRadius: 15, marginTop: 20, }}>
                        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 20, textAlign: 'center' }}>REGISTER</Text>
                    </TouchableOpacity>
                </View>
                <Loading ref="loading" />
            </View>
        )
    }
}

export default withNavigation(RegisterPage) 