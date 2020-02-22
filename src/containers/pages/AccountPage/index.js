import React, { Component } from 'react';
import { View, } from 'react-native';
import HeaderAccount from '../../organism/HeaderAccount';
import Navbar from '../../organism/Navbar'
import AccountUser from '../../organism/AccountUser';

class AccountPage extends Component {
    render() {
        console.log(this.state)
        return (
            <View style={{ flex: 1 }}>
                {/* header  */}
                <HeaderAccount/>
                {/* konten  */}
                <AccountUser />
                {/* navbar  */}
                <Navbar />
            </View>
        )
    }
}

export default AccountPage