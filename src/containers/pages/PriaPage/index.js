import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Navbar from '../../organism/Navbar'


class PriaPage extends Component {
    render(){
        return(
           <View style={{flex:1}}>
               {/* headingbar */}
               <View style={{backgroundColor:'yellow',height:50}}>

               </View>
               {/* konten bar  */}
               <View style={{backgroundColor:'blue',flex:1}}></View>
            {/* navbar  */}
            <Navbar/>
           </View>
        )
    }
}

export default PriaPage