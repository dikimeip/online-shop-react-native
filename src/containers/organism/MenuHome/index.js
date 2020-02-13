import React, { Component } from 'react';
import { View,Image,Text, } from 'react-native';
import MenuItem from '../../../components/moleculs/MenuItem';
import { withNavigation } from 'react-navigation';

class MenuHome extends Component {
    render() {
        return (
            <View style={{ height: 170, flexDirection: 'row', flexWrap: 'wrap', marginVertical: 10, backgroundColor: 'white' }}>
               <MenuItem foto={require('../../../assets/icon/pria.png')} judul ="PRIA" tekan={() => this.props.navigation.navigate('PriaPages') } /> 
               <MenuItem foto={require('../../../assets/icon/wanita.png')} judul ="WANITA" tekan={() => this.props.navigation.navigate('WanitaPages')} /> 
               <MenuItem foto={require('../../../assets/icon/anak.png')} judul ="ANAK" tekan={() => this.props.navigation.navigate('AnakPages')} /> 
               <MenuItem foto={require('../../../assets/icon/muslimah.png')} judul ="MUSLIMAH" tekan={() => this.props.navigation.navigate('MuslimahPages')} /> 
               <MenuItem foto={require('../../../assets/icon/tas.png')} judul ="TAS" /> 
               <MenuItem foto={require('../../../assets/icon/jaket.png')} judul ="JAKET" /> 
               <MenuItem foto={require('../../../assets/icon/sepatu.png')} judul ="SEPATU" /> 
               <MenuItem foto={require('../../../assets/icon/aksesoris.png')} judul ="AKSESORIS" /> 
            </View>
        )
    }
}


export default withNavigation(MenuHome) 