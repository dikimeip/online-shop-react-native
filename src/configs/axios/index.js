import Axios from "axios";

const RootPath = "http:/192.168.43.230/server_dc-shop/api/";
const POST = (path,data) => {
    const promise = new Promise((resolve, reject) => {
        Axios.post(RootPath+path,data).then(res => {
            resolve(res.data)
        }).catch(err => {
            reject(err)
        })
    })
    return promise
}

const GET_ID = (path) => {
    const promise = new Promise((reject,resolve) => {
        Axios.get(RootPath+path).then(res => {
            resolve(res.data)
        }).catch(err => {
            reject(err)
        })
    })
    return promise
}

const PostLogin = (data) => POST('LoginController',data)
const GetHotProduk = () => GET_ID('ProdukAll?id=HOTPRODUK')

const API = {
    PostLogin,
    GetHotProduk,
}

export default API