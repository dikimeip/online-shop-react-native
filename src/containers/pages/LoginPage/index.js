import React from 'react'
import { View,TextInput, Text ,TouchableOpacity} from 'react-native'

const LoginPage = () => {
    return(
        <View style={{flex:1,backgroundColor:'#A8E3A0',}}>
            <View style={{height:200,backgroundColor: 'blue',}}>
                {/* image  */}
            </View>
            <View style={{flex:1,marginTop:20,marginHorizontal: 20,justifyContent:'center'}}>
                <Text style={{fontWeight:'bold',fontSize:15,marginBottom: 10,}}>Masukan Username</Text>
                <TextInput placeholder="Masukan Username" style={{borderColor:'grey',borderRadius:10,borderWidth:1,width:'100%'}} />
                <Text style={{fontWeight:'bold',fontSize:15,marginBottom: 10,}}>Masukan Password</Text>
                <TextInput placeholder="Masukan Password" style={{borderColor:'grey',borderRadius:10,borderWidth:1,width:'100%'}} />
                <TouchableOpacity style={{padding: 20,backgroundColor:'blue',borderRadius: 15,marginTop: 20,}}>
                    <Text style={{color:'white',fontWeight: 'bold',fontSize:20,textAlign:'center'}}>LOGIN</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{padding: 20,backgroundColor:'green',borderRadius: 15,marginTop: 20,}}>
                    <Text style={{color:'white',fontWeight: 'bold',fontSize:20,textAlign:'center'}}>REGISTER</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default LoginPage