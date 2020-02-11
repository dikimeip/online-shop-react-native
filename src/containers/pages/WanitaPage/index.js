import React, { Component } from 'react'
import { View, Text } from 'react-native'
import Navbar from '../../organism/Navbar'

class WanitaPage extends Component{
    render(){
        return(
            <View style={{flex: 1, backgroundColor: '#A8E3A0'}}>
               {/* header  */}
               <View style={{height:50,backgroundColor:'white',justifyContent:'center',alignItems:'center'}}>
                <Text style={{fontWeight:'bold',fontSize:20}}>PRODUK WANITA</Text>
               </View>
               {/* konten  */}
               <View style={{flex: 1}}>
                   
               </View>
               {/* navbar  */}
               <Navbar/>
            </View>
        )
    }
}

export default WanitaPage