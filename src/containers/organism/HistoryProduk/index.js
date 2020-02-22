import React, { Component } from 'react';
import HistoryList from '../../../components/moleculs/HistoryList';
import { ScrollView, View, Text, TouchableOpacity } from 'react-native';
import API from '../../../configs/axios';
import AsyncStorage from '@react-native-community/async-storage';
import Loading from 'react-native-whc-loading';
import { withNavigation } from 'react-navigation';


class HistoryProduk extends Component {
    constructor(props) {
        super(props)
        this.state = {
            produk: [],
            id: ""
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
        this.refs.loading.show()
        setTimeout(() => {
            if (this.state.id !== "") {
                API.GetPemesananId(this.state.id).then(res => {
                    this.setState({
                        produk: res.value
                    })
                    console.log(res)
                    this.refs.loading.close()
                }).then(err => {
                    console.log(err)
                    this.refs.loading.close()
                })
            } else {
                this.props.navigation.navigate('LoginPages')

            }
        }, 100);


    }

    render() {
        const Produks = this.state.produk.map(p => {
            return (
                <HistoryList key={p.invoice} judul={p.nama_produk} harga="100.000" invoice={p.invoice} ket={p.status_kirim} />
            )
        })
        return (
            <ScrollView>
                {Produks}
                <Loading ref="loading" />

            </ScrollView>
        )
    }
}

export default withNavigation(HistoryProduk) 