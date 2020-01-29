import React, { Component } from 'react';
import { View, Text } from 'react-native';


class AccountPage extends Component{
    render(){
        return(
            <View style={{flex:1}}>
               <View style={{height:40,backgroundColor:'black'}}></View>
               <View style={{flex:1,backgroundColor:'blue'}}></View>
               <View style={{height:65,backgroundColor:'red'}}></View>
            </View>
        )
    }
}

export default AccountPage