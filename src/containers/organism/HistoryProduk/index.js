import React, { Component } from 'react';
import HistoryList from '../../../components/moleculs/HistoryList';
import { ScrollView } from 'react-native';


class HistoryProduk extends Component {
    render() {
        return (
            <ScrollView>
                <HistoryList judul="Baju perang tentara indonesia" harga="100.000" invoice="rp212133" ket="BELUM DIBAYAR" />
                <HistoryList judul="Baju NATO" harga="100.000" invoice="we3222" ket="BELUM DIBAYAR" />
            </ScrollView>
        )
    }
}

export default HistoryProduk