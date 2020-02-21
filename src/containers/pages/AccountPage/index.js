import React, { Component } from 'react';
import { View, } from 'react-native';
import HeaderAccount from '../../organism/HeaderAccount';
import Navbar from '../../organism/Navbar'
import AccountUser from '../../organism/AccountUser';
import AsyncStorage from '@react-native-community/async-storage';
import API from '../../../configs/axios';


class AccountPage extends Component {
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
        setTimeout(() => {
            API.GetUserId(this.state.id).then(res => {
                console.log(res.value[0].username)
                this.setState({
                    username: res.value[0].username,
                    email: res.value[0].email,
                    no: res.value[0].no_hp,
                    alamat: res.value[0].alamat
                })
            }).catch(er => {
                console.log(er)
            })
        }, 0);

    }
    render() {
        console.log(this.state)
        return (
            <View style={{ flex: 1 }}>
                {/* header  */}
                <HeaderAccount uname={this.state.username} />
                {/* konten  */}
                <AccountUser />
                {/* navbar  */}
                <Navbar />
            </View>
        )
    }
}

export default AccountPage