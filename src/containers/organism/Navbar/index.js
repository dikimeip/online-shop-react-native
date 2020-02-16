import React from 'react';
import { View } from 'react-native';
import NavbarItem from '../../../components/moleculs/NavbarItem';
import { withNavigation } from 'react-navigation';

const Navbar = (props) => {
    return (
        <View style={{ height: 65, backgroundColor: '#D4FFD4', flexDirection: 'row' }}>
            <NavbarItem  foto={require('../../../assets/icon/home.png')} judul="HOME" tekan={() => props.navigation.navigate('HomePages')} />
            <NavbarItem  foto={require('../../../assets/icon/alert.png')} judul="INVOICE"   />
            <NavbarItem  foto={require('../../../assets/icon/riwayat.png')} judul="HISTORY" tekan={ () => props.navigation.navigate('HistoryPages')} />
            <NavbarItem  foto={require('../../../assets/icon/account.png')} judul="ACCOUNT" tekan={()=> props.navigation.navigate('produkPages')} />
        </View>
    ) 
}

export default withNavigation(Navbar)