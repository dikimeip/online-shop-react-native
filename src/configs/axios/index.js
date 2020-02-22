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
    const promise = new Promise((resolve,reject) => {
        Axios.get(RootPath+path).then(res => {
            resolve(res.data)
        }).catch(err => {
            reject(err)
        })
    })
    return promise
}

const GET_ID_VAL = (path,data) => {
    const promise = new Promise((resolve,reject) => {
        Axios.get(RootPath+path+data).then(res => {
            resolve(res.data)
        }).catch(er => {
            reject(er)
        })
    })
    return promise
}

const PostLogin = (data) => POST('LoginController',data)
const PostPemesanan = (data) => POST('PemesananController',data)
const PostRegister = (data) => POST('UserController',data)
const GetHotProduk = () => GET_ID('ProdukAll?id=HOTPRODUK')
const GetAllProduk = () => GET_ID('ProdukAll?id=NEWPRODUK')
const GetProdukPria = () => GET_ID('ProdukAll?id=pria')
const GetProdukWanita = () => GET_ID('ProdukAll?id=wanita')
const GetProdukAnak = () => GET_ID('ProdukAll?id=anak')
const GetProdukMuslimah = () => GET_ID('ProdukAll?id=muslimah')
const GetProdukTas = () => GET_ID('ProdukAll?id=tas')
const GetProdukJaket = () => GET_ID('ProdukAll?id=jaket')
const GetProdukSepatu = () => GET_ID('ProdukAll?id=sepatu')
const GetProdukAksesoris = () => GET_ID('ProdukAll?id=aksesoris')
const GetProduknew = () => GET_ID('ProdukAll?id=NEWPRODUKALL')
const GetProdukhot = () => GET_ID('ProdukAll?id=HOTPRODUKALL')
const GetPemesananId = (data) => GET_ID_VAL('PemesananController?id='+data)
const GetUserId = (data) => GET_ID_VAL('UserController?id='+data)
const cariProduk = (data) => GET_ID_VAL('LoginController?id='+data)


const API = {
    PostLogin,
    GetHotProduk,
    GetAllProduk,
    GetProdukPria,
    GetProdukWanita,
    GetProdukAnak,
    GetProdukMuslimah,
    GetProdukTas,
    GetProdukJaket,
    GetProdukSepatu,
    GetProdukAksesoris,
    GetProduknew,
    GetProdukhot,
    PostPemesanan,
    GetPemesananId,
    GetUserId,
    PostRegister, 
    cariProduk
}

export default API